import './Footer.css';
import FooterImg from '../../assets/svg/footer_img.svg';

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer_box">
                        <div className="footer_wrap">
                            <h2 className='footer_title'>Logo</h2>
                            <ul className="footer_list">
                                <li>
                                    <a href="#" className="footer_link">About</a>
                                </li>
                                <li>
                                    <a href="#" className="footer_link">Features</a>
                                </li>
                                <li>
                                    <a href="#" className="footer_link">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" className="footer_link">Contact</a>
                                </li>
                                <li>
                                    <a href="#" className="footer_link">Help</a>
                                </li>
                            </ul>
                        </div>
                        <img src={FooterImg} alt="svg" width={192} height={48} />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer