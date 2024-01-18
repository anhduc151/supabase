import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/helper/supabaseClient";
import product from "../../assets/product.png";

const ProductShow = () => {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const { data, error } = await supabase.from("foody").select();
    if (error) {
      console.log("Error fetching posts");
    } else {
      console.log(data);
      setPosts(data);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="create_show">
      {posts.map((product) => (
        <div key={product.id} className="create_result">
          <img src={product} alt="" className="" />
          <h3 className="create_result_h3">{product.title}</h3>
          <p
            dangerouslySetInnerHTML={{ __html: product.content }}
            className="create_result_p"
          />
          <button className="create_add">Add</button>
        </div>
      ))}
    </div>
  );
};

export default ProductShow;
