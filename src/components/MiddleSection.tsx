import Container from "@mui/material/Container";
import "../styles/MiddleSection.css";

const MiddleSection = () => {
  return (
    <>
      <Container maxWidth="md" style={{ padding: 0 }}>
        <div className="middle-section">
          <div className="background-image"></div>
          <div className="desc">
            <h5>Search Engine Optimization</h5>
            <h1>Improve Performance and Growth your Website</h1>
            <h5>
              It's a theory of psychology that prioritizes the most fundamental
              human needs (​like air, water, and physical safety) over more
              advanced needs.
            </h5>
            <a href="/">
              {" "}
              <h4>Explore Our SEO’s Strategies &gt;</h4>
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MiddleSection;
