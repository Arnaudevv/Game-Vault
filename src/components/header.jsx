import logo from '../assets/logo.png'
import './header.css'

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Logo" className="logo" />
                <nav className="header-nav">
                    <a href="#">Home</a>
                    <a href="#">Games</a>
                    <a href="#">Top Rated</a>
                    <a href="#">News</a>
                </nav>
            </div>

            <div className="header-right">
                <input
                    className="header-search"
                    type="text"
                    placeholder="Search games (not functional) ..."
                />
                <button className="header-button">Sign in</button>
            </div>
        </header>
    )
}

export default Header