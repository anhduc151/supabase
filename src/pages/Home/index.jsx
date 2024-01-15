import React from "react";
import "./home.css";
import homebg from "../../assets/home_bg.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home_left">
        <h1 className="home_left_h1">
          Ultimate <br />
          Fiery Sensation
        </h1>
        <p className="home_left_p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <button className="home_left_btn">View Menu</button>
      </div>

      <div className="home_right">
        <img src={homebg} alt="" className="home_right_bg" />
      </div>
    </div>
  );
};

export default Home;
