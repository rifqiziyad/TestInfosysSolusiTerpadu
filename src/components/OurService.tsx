import Container from "@mui/material/Container";
import "../styles/OurService.css";
import imgSEO from "../assets/images/our-service/icon_seo.png";
import imgSMO from "../assets/images/our-service/icon_instagram.png";
import imgUX from "../assets/images/our-service/icon_ux.png";
import imgCM from "../assets/images/our-service/icon_content_management.png";
import imgAds from "../assets/images/our-service/icon_ads.png";

const ServiceList = [
  {
    src: imgSEO,
    title: "Search Engine Optimization",
  },
  {
    src: imgSMO,
    title: "Social Media Optimization",
  },
  {
    src: imgUX,
    title: "UX Writer",
  },
  {
    src: imgCM,
    title: "Content Management",
  },
  {
    src: imgAds,
    title: "Ads Optimization",
  },
];

const OurService = () => {
  return (
    <>
      <Container
        maxWidth="md"
        style={{ padding: "100px 0 0" }}
        className="our-service"
      >
        <div className="title">
          <h1>Our Service</h1>
          <h5>
            Increase your linkability, make tagging and bookmarking easy. <br />{" "}
            Reward inbound links{" "}
          </h5>
        </div>
        <div className="list-item">
          {ServiceList.map((data, index) => {
            return (
              <div key={index} className="item">
                <img src={data.src} alt={data.title} />
                <h5>{data.title}</h5>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default OurService;
