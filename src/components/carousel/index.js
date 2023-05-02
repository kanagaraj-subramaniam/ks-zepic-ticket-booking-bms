import { Carousel, Container } from "react-bootstrap";
import GVP from "../../assets/images/gvp.png";
import REW from "../../assets/images/rew.png";
import SUNB from "../../assets/images/sunb.png";

function CarouselSlide() {
  return (
    <section className="Carousel">
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={GVP}
              alt="GVP"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={REW}
              alt="REW"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={SUNB}
              alt="SUNB"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}

export default CarouselSlide;