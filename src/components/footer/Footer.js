function Footer() {
    return (
        <div className="row footer">
            <div className="col-4">
                <img src={process.env.PUBLIC_URL + "logo192.png"} alt="footer-brand" title="Cloud Resources" width="300" />
                <p className="fh5co-social-icons">
                    <a href="https://twitter.com/CloudRes0urces"><i className="icon-twitter2"></i></a>
                    <a href="https://www.facebook.com/CloudRes0urces/"><i className="icon-facebook2"></i></a>
                </p>
                <p className="copytxt">Copyright © 2017 Cloud Resources LLC.<br /> All Rights Reserved.</p>
            </div>
            <div className="col-4">
            <h3>Services</h3>
            <ul>
                <li><a href="app-development-management.php">Application Development and Management</a></li>
                <li><a href="cloudservices.php">Enterprise Cloud Services &amp; Solutions</a></li>
                <li><a href="security.php">Security</a></li>
                <li><a href="bigdata-analytics.php">Big Data Analytics</a></li>
                <li><a href="enterprise-architecture.php">Enterprise Architecture</a></li>
                <li><a href="technology-consulting.php">Technology Consulting</a></li> 
            </ul>
            </div>
            <div className="col-4">
                <h3>Contact Us</h3>
                104 Decker Dr Ste 110,<br />
                Irving, TX 75062<br/><br/>
                <b>Phone:</b> (469) 458-7222 x101<br/>
                <b>Fax:</b> (469) 458 7228 (Fax)<br/>
                <b>E-mail:</b> <a href="mailto:info@cloudresources.net">info@cloudresources.net</a><br/>
            </div>
        </div>
    );
}

export default Footer;