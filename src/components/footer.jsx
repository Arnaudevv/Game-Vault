import './footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column footer-brand">
                    <h3 className="footer-logo">GameVault</h3>
                    <p className="footer-text">
                        Discover, rate and explore the best video games of all time.
                    </p>
                </div>

                <div className="footer-column">
                    <h4 className="footer-title">Explore</h4>
                    <ul className="footer-list">
                        <li><a href="#">New Releases</a></li>
                        <li><a href="#">Top Rated</a></li>
                        <li><a href="#">RPG Games</a></li>
                        <li><a href="#">Coming Soon</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="footer-title">Company</h4>
                    <ul className="footer-list">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="footer-title">Follow us</h4>
                    <ul className="footer-list">
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">YouTube</a></li>
                        <li><a href="#">Discord</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 GameVault. All rights reserved.</p>
                <p>Thanks for visiting!</p>
            </div>
        </footer>
    )
}

export default Footer