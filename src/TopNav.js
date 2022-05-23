import { Link } from "react-router-dom";

function TopNav() {
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <button type="button" className="navbar-brand">
                    <img src={process.env.PUBLIC_URL + "/CCS_Logo_Final_PNG-03.png"} alt="brand logo" width={200} height={"auto"}/>
                </button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item px-3">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item  px-3 dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to={"/applicationdevmanagement"} className="dropdown-item">Application Development and Management</Link>
                            <Link to={"/enterpriseServicesSolutions"} className="dropdown-item">Enterprise Cloud Services and Solutions</Link>
                            <Link to={"/security"} className="dropdown-item">Security</Link>
                            <li><a className="dropdown-item" href="#">Big Data Analytics</a></li>
                            <li><a className="dropdown-item" href="#">Enterprise Architecture</a></li>
                            <li><a className="dropdown-item" href="#">Technology Consulting</a></li>
                    </ul>
                    </li>
                    <li className="nav-item  px-3">
                        <Link to="/">About us</Link>
                    </li>
                    <li className="nav-item  px-3">
                        <Link to="/">Careers</Link>
                    </li>
                    <li className="nav-item  px-3">
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
    </nav>
    )
}
export default TopNav;