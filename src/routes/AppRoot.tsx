import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export function AppRoot() {
    return (
        <div>
            <div className="site-background">
                <span className="site-background-cover"></span>
            </div>

            <Outlet />

            <div className="bottom-nav">
                <Link to="/" className="nav-button">
                    Home
                </Link>
                <Link to="/works" className="nav-button">
                    Works
                </Link>
                <Link to="/knowledge" className="nav-button">
                    Knowledge
                </Link>
                <Link to="/contact" className="nav-button">
                    Contact
                </Link>
            </div>
        </div>
    );
}
