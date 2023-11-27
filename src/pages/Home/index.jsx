import { Link } from "react-router-dom";
import './home.css'

export default function Home() {
  return (
    <div id="section__Home">
      <div className="container-fluid bg-home">

        <div className="home__Content">
          <h1 className="text-center">
            <p>
              CLOUDPOT
            </p>
            <span>
              LẨU HẤP THỦY NHIỆT
            </span>
            <h3 className="text-dark">GRAND OPENING</h3>
            <hr className="w-25 m-auto" style={{ border: "1px solid grey" }} />
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
            <Link to="/memo-page" className="nav-link home-link">
              <li >
                Memo
              </li>
            </Link>

          </div>
        </div>

        <div className="cloud">
          <img src="/images/cloud/cloud1.png" style={{ "--i": 1 }} />
          <img src="/images/cloud/cloud2.png" style={{ "--i": 2 }} />
          <img src="/images/cloud/cloud3.png" style={{ "--i": 3 }} />
          <img src="/images/cloud/cloud4.png" style={{ "--i": 4 }} />
          <img src="/images/cloud/cloud5.png" style={{ "--i": 5 }} />
        </div>
        <div className="cloud2">
          <img src="/images/cloud/cloud1.png" style={{ "--i": 1 }} />
        </div>
      </div>
    </div>
  )
}
