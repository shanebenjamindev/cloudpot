import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import cover1 from "/images/cloudpot-menu-HCM/cover/cover1.jpg";
import cover3 from "/images/cloudpot-menu-HCM/cover/cover3.jpg";
import covertime from "/images/cloudpot-menu-HCM/cover/cover-time.jpg";
import "./style.css";
import { Link } from "react-router-dom";

export default function NavigatorComponent() {
  return (
    <div className="d-md-flex card-list container p-2">
      <Card className="col-md-4 my-2 mx-md-2 custom-card" data-aos="fade-left">
        <Link to="/services-page" className="">
          <div className="custom-overlay"></div>
          <Image src={cover3} fluid />
          <Card.Body className="custom-body">
            <p>SERVICES</p>
          </Card.Body>
        </Link>
      </Card>

      <div
        className="col-md-4 my-2 mx-md-2 custom-card"
        data-aos="fade-left"
        data-aos-delay={200}
      >
        <Link to="/memos-page">
          <img src={covertime} />
          <div className="custom-overlay"></div>
          <Card.Body className="custom-body">
            <p>MEMO</p>
          </Card.Body>
        </Link>
      </div>

      <div
        className="col-md-4 my-2 mx-md-2 custom-card"
        data-aos="fade-left"
        data-aos-delay={500}
      >
        <Link to="/menu-page">
          <div className="custom-overlay"></div>
          <Image src={cover1} fluid />
          <Card.Body className="custom-body">
            <p>MENU</p>
          </Card.Body>
        </Link>
      </div>
    </div>
  );
}
