import './Cards.css';
import CardsImg from '../../assets/svg/hero_img.svg';


function Cards() {
    return (
        <>
            <div className="cards">
                <h2 className="cards_title">Lorem ipsum dolor sit amet</h2>
                <p className="cards_text">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                    ultricies non ligula. Suspendisse imperdiet</p>
                <ul className="cards_list">
                    <li>
                        <img src={CardsImg} alt="cards-img" width={106} height={106} />
                        <h5 className="cards-list_title">Lorem ipsum dolor</h5>
                        <p className="cards-list_text">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet</p>
                    </li>
                    <li>
                        <img src={CardsImg} alt="cards-img" width={106} height={106} />
                        <h5 className="cards-list_title">Lorem ipsum dolor</h5>
                        <p className="cards-list_text">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Cards