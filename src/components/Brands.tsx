import brand1 from "../assets/images/brand/BURBERRY 巴宝莉.png";
import brand2 from "../assets/images/brand/Brand1.png";
import brand3 from "../assets/images/brand/CHANEL 香奈儿.png";
import brand4 from "../assets/images/brand/ESPRIT.png";
import Container from "@mui/material/Container";
import "../styles/Brand.css";

const BrandsList = [
  { src: brand2 },
  { src: brand4 },
  { src: brand1 },
  { src: brand3 },
];

const Brands = () => {
  return (
    <div className="brands-section">
      <Container maxWidth="md" style={{ padding: 0 }} className="wrapper">
        {BrandsList.map((data, index) => {
          return <img src={data.src} alt={`${index}`} key={index} />;
        })}
      </Container>
    </div>
  );
};

export default Brands;
