import './Dowland.css';
import DowlandImg from '../../assets/svg/hero_img.svg';


function Dowland() {
    return (
        <>
            <div className="dowland">
                <h2 className="dowland_title">Lorem ipsum dolor sit amet</h2>
                <p className="dowland_text">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                    ultricies non ligula. Suspendisse imperdiet</p>
                <ul className="dowland_list">
                    <li>
                        <img src={DowlandImg} alt="dowland-img" width={180} height={180} />
                        <h5 className="dowland-list_title">Lorem ipsum dolor</h5>
                        <p className="dowland-list_text">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet</p>
                        </li>
                    <li>
                        <img src={DowlandImg} alt="dowland-img" width={180} height={180} />
                        <h5 className="dowland-list_title">Lorem ipsum dolor</h5>
                        <p className="dowland-list_text">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet</p>
                        </li>
                    <li>
                        <img src={DowlandImg} alt="dowland-img" width={180} height={180} />
                        <h5 className="dowland-list_title">Lorem ipsum dolor</h5>
                        <p className="dowland-list_text">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet</p>
                        </li>
                </ul>
            </div>
        </>
    )
}

export default Dowland