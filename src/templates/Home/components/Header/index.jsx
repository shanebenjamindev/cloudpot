import { Link } from "react-router-dom";
import './header.css'
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [openNav, setOpenNav] = useState(window.innerWidth >= 768);
    let navRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!navRef.current.contains(e.target)) {
                setOpenNav(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-md navbar-cus p-2">
            <Link to="/" className="navbar-brand d-flex align-items-center">
                <img src="/images/logo.png" className="px-2 mx-2 bg-white" width={"100px"} alt="Logo" />
                <span>Training Site</span>
            </Link>
            <button onClick={() => setOpenNav(!openNav)} className="navbar-toggler d-md-none sm-d-block" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <div className={`collapse navbar-collapse` && window.innerWidth < 768 && !openNav ? 'd-none' : ''} ref={navRef} id="navbarNav">
                <Navbar />
            </div>
        </nav>
    );
}

export function Navbar() {
    return (
        <ul className="navbar-nav nav-List">
            <Link to="/" className="nav-link">
                <li className="nav-item">
                    Home
                </li>
            </Link>
            <Link to="/menu-page" className="nav-link">
                <li className="nav-item">
                    Menu
                </li>
            </Link>
            <Link to="/services-page" className="nav-link">
                <li className="nav-item">
                    Services
                </li>
            </Link>
            <Link to="/memo-page" className="nav-link">
                <li className="nav-item">
                    Memos
                </li>
            </Link>
        </ul>
    );
}
