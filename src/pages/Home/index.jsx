import React from "react";
import "./home.css";
import homebg from "../../assets/home_bg.png";

const Home = () => {
  return (
    <>
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

      <div className="home_why">
        <h2 className="home_why_h2">Why Fast Food ?</h2>
        <div className="home_why_box">
          <div className="home_why_box1">
            <i className="bx bx-bowl-rice home_why_icons color"></i>
            <h4 className="home_why_box1_h4">Easy</h4>
            <p className="home_why_box1_p">
              Only with your smartphone you can get a food
            </p>
          </div>

          <div className="home_why_box1">
            <i className="bx bx-baguette home_why_icons"></i>
            <h4 className="home_why_box1_h4">Easy</h4>
            <p className="home_why_box1_p">
              Only with your smartphone you can get a food
            </p>
          </div>

          <div className="home_why_box1">
            <i className="bx bx-bowl-hot home_why_icons color2"></i>
            <h4 className="home_why_box1_h4">Easy</h4>
            <p className="home_why_box1_p">
              Only with your smartphone you can get a food
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
