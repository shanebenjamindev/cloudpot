import { Link } from "react-router-dom";
import './home.css'

export default function Home() {
  return (
    <div className="w-50">
      <ul>
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
      </ul>
    </div>
  )
}
