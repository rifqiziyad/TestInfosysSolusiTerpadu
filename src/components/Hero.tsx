import { Button } from "@material-ui/core";
import img1 from "../assets/images/jumbrotron/Ellipse 4.png";
import img2 from "../assets/images/jumbrotron/Ellipse 4 (1).png";
import img3 from "../assets/images/jumbrotron/Ellipse 4 (2).png";
import img4 from "../assets/images/jumbrotron/Ellipse 4 (3).png";
import iconArrow from "../assets/images/jumbrotron/Arrow 1.png";
import "../styles/Hero.css";

const card = [
  { src: img1, title: "Social Media Organize" },
  { src: img2, title: "UI & UX Design" },
  { src: img3, title: "Search Engine Optimization" },
  { src: img4, title: "Google Ads Optimization" },
];

const Hero = () => {
  return (
    <div className="hero">
      <div className="section-first">
        <span>
          <div className="vertical-line"></div>
          <h3>YT</h3>
          <h3>IG</h3>
          <h3 className="selected">TW</h3>
          <h3>FB</h3>
          <div className="vertical-line"></div>
        </span>
      </div>
      <div className="section-mid">
        <div>
          <h3>PT. Digital Media Nusantara</h3>
          <h1>Digital Marketing Agency</h1>
          <h5>
            We examine the top of funnel to figure out how to make people to a
            subscribe newsletter then turn prospects into leads.
          </h5>
          <div className="button">
            <Button>Contact Us</Button>
            <Button>
              Our pricing{" "}
              <img
                style={{ marginLeft: 10 }}
                src={iconArrow}
                alt="arrow-icon"
              />{" "}
            </Button>
          </div>
        </div>
      </div>
      <div className="background-image">
        <div className="wrapper">
          {card.map((data, index) => {
            return (
              <div key={index} className="card">
                <img src={data.src} alt={data.title} />
                <h5>{data.title}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
