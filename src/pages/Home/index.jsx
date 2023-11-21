import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <ul>
        <li className="nav-link">
          <Link to="/menu-page">menu cloudpot</Link>
        </li>

        <li className="nav-link">
          <Link to="/services-page">5 bước phục vụ</Link>
        </li>
      </ul>
    </div>
  )
}
