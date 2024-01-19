import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/helper/supabaseClient";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Todo = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ id: null, title: "", content: "" });
  const { title, content } = post;
  const [isEditing, setIsEditing] = useState(false);

  const handleQuillChange = (value) => {
    setPost({ ...post, content: value });
  };

  // fetch data
  async function fetchPosts() {
    try {
      const { data, error } = await supabase.from("foody").select();
      if (error) {
        console.error("Error fetching posts:", error.message);
      } else {
        setPosts(data);
      }
    } catch (error) {
      console.error("Error fetching posts:", error.message);
    }
  }

  // create or update post
  async function createOrUpdatePost() {
    try {
      if (isEditing) {
        await supabase
          .from("foody")
          .update({ title, content })
          .eq("id", post.id);
      } else {
        await supabase.from("foody").insert([{ title, content }]);
      }

      resetForm();
      fetchPosts();
    } catch (error) {
      console.error("Error creating/updating post:", error.message);
    }
  }

  // edit post
  const handleEdit = (id) => {
    const postToEdit = posts.find((p) => p.id === id);
    setPost({ id, title: postToEdit.title, content: postToEdit.content });
    setIsEditing(true);
  };

  // reset form
  const resetForm = () => {
    setPost({ id: null, title: "", content: "" });
    setIsEditing(false);
  };

  // update post
  async function handleUpdate(id) {
    try {
      const { error } = await supabase
        .from("foody")
        .update({ title, content })
        .eq("id", id)
        // .select();

      if (error) {
        console.error("Error updating post:", error.message);
      } else {
        console.log("Post updated successfully");
        fetchPosts();
      }
    } catch (error) {
      console.error("Error updating post:", error.message);
    }
  }

  // delete post
  async function handleDelete(id) {
    console.log(id);
    try {
      const { error } = await supabase
        .from("foody")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Error deleting post:", error.message);
      } else {
        console.log("Post deleted successfully");
        fetchPosts();
      }
    } catch (error) {
      console.error("Error deleting post:", error.message);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="create">
      <div className="create_event">
        <p className="create_event_p">
          <i className="bx bx-stats title_icons"></i> Title
        </p>
        <input
          placeholder="Title ..."
          value={title}
          className="create_title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />

        <p className="create_event_p">
          <i className="bx bx-stats title_icons"></i> Description
        </p>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleQuillChange}
          className="quils"
          style={{ border: "2px solid #000", borderRadius: "10px" }}
        />

        <button onClick={createOrUpdatePost} className="create_btn">
          {isEditing ? "Update Post" : "Create Post"}
        </button>
      </div>

      <div className="create_show">
        {posts.map((product) => (
          <div key={product.id} className="create_result">
            <h3 className="create_result_h3">{product.title}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: product.content }}
              className="create_result_p"
            />
            <div className="create_group">
              <button
                onClick={() => {
                  if (isEditing) {
                    handleUpdate(product.id);
                  } else {
                    handleEdit(product.id);
                  }
                }}
                className="create_edit"
              >
                {isEditing ? "Update" : "Edit"}
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="create_delete"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
