import { Link } from "react-router-dom";
import './home.css'

export default function Home() {
  return (
    <section className="section__Home">
      <div className="container-fluid bg-home">
        <h1 className="py-5 d-md-block d-none section__Title text-center">
          LẨU HẤP THỦY NHIỆT
          <h3 className="text-dark">GRAND OPENING</h3>
          <hr className="w-25 m-auto" style={{border: "1px solid grey"}} />
          - 20% SET MENU
        </h1>
        <div className="home-list-link">
          <Link to="/menu-page" className="nav-link home-link">
            <li className="">
              menu cloudpot
            </li>
          </Link>
          <Link to="/services-page" className="nav-link home-link">
            <li >
              5 bước phục vụ
            </li>
          </Link>
        </div>
      </div>
    </section>
  )
}
