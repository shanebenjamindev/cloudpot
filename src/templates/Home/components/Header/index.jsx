import { Link } from "react-router-dom";
import './header.css'
import useLocalStorageUser from "../../../../assets/hooks";

export default function Header() {
    const { user, clearUser } = useLocalStorageUser()

    const handleLogout = () => {
        clearUser()
    }

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
                <span className="text-white">-</span>
            </button>

            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ml-auto text-center">

                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="menu-page" className="nav-link">Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="services-page" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/memo-page" className="nav-link">Memo</Link>
                    </li>
                    {(user) ? <>
                        <li className="nav-item">
                            <Link to="/tables-page" className="nav-link">Danh sách bàn</Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={handleLogout} className="nav-link"><button className="">Logout</button></button>
                        </li>
                    </> : <li className="nav-item">
                        <Link to="/login-page" className="nav-link"><button className="">Login</button></Link>
                    </li>
                    }
                </ul>
            </div>
        </nav>
    )
}
