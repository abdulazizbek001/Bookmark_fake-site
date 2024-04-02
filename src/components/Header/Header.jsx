import './Header.css';
import Logo from '../../assets/svg/LOGO.svg';

function Header() {
    return(
        <>
            <header className="header">
                <div className="container">
                    <div className="header_box">
                        <img src={Logo} alt="logo" width={116} height={48} />
                        <ul  className="header_list">
                            <li className="header_item">
                                <a href="#" className="header_link">About</a>
                            </li>
                            <li className="header_item">
                                <a href="#" className="header_link">Features</a>
                            </li>
                            <li className="header_item">
                                <a href="#" className="header_link">Pricing</a>
                            </li>
                            <li className="header_item">
                                <a href="#" className="header_link">Contact</a>
                            </li>
                            <li className="header_item">
                                <a href="#" className="header_link">Help</a>
                            </li>
                            <li className="header_item">
                                <a href="#" className="header_link1">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header