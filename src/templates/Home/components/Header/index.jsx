import { Link } from "react-router-dom";
import './header.css'

export default function Header() {

    return (
        <nav className="navbar navbar-expand-lg text-white d-flex justify-content-between">
            <Link className="navbar-brand d-flex align-items-center" to="/">
                <img src="/images/logo.png" className="px-2 mx-2 bg-white" width={"100px"} />
                <span>Training Site
                    <hr className="m-0" style={{ border: "1px solid white" }} />
                </span>
            </Link>

            <button
                className="navbar-toggler "
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <div>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </div>
            </button>

            <div className="collapse navbar-collapse " id="navbarNav">
                <Navbar />
            </div>
        </nav>
    )
}

export function Navbar() {
    return (
        <ul className="navbar-nav ml-auto text-center">
            <div className="d-md-flex nav-items">

                <Link to="/" className="nav-link">
                    <li className="nav-item">
                        Home
                    </li>
                </Link>
                <Link to="menu-page" className="nav-link">
                    <li className="nav-item">
                        Menu
                    </li>
                </Link>
                <Link to="services-page" className="nav-link">
                    <li className="nav-item">
                        Services
                    </li>
                </Link>
                <Link to="/memo-page" className="nav-link">
                    <li className="nav-item">
                        Memo
                    </li>
                </Link>
            </div>
        </ul>
    )
}