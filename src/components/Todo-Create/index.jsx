import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/helper/supabaseClient";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Todo = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: "", content: "" });
  const { title, content } = post;

  const handleQuillChange = (value) => {
    setPost({ ...post, content: value });
  };

  // fetch data
  async function fetchPosts() {
    const { data, error } = await supabase.from("foody").select();
    if (error) {
      console.log("Error fetching posts");
    } else {
      console.log(data);
      setPosts(data);
    }
  }

  // create post
  async function createPost() {
    await supabase.from("foody").insert([{ title, content }]).single();
    setPost({ title: "", content: "" });
    fetchPosts();
  }

  // delete post
  // async function handleDelete(postId) {
  //   console.log("Received postId:", postId);
  //   try {
  //     await supabase.from("foody").delete().eq("id", postId);
  //     fetchPosts();
  //   } catch (error) {
  //     console.error("Error deleting post:", error.message);
  //   }
  // }

async function handleDelete(id) {
  console.log(id)
  try {
    const { data, error } = await supabase
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
          value={post.content}
          onChange={handleQuillChange}
          className="quils"
          style={{ border: "2px solid #000", borderRadius: "10px" }}
        />

        <button onClick={createPost} className="create_btn">
          Create Post
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
            {/* <button className="create_add">Add</button> */}
            <button  onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
