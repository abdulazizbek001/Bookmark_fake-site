import './Info.css';
import InfoStrelka from '../../assets/svg/info-strelka.svg';

function Info() {
    return (
        <>
            <div className="info">
                <h2 className="info_title">Lorem ipsum dolor sit amet</h2>
                <p className="info_text">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                    ultricies non ligula. Suspendisse imperdiet</p>
                <ul className="info_list">
                    <li>
                        <h4 className="info_list-title">This is an of Example FAQ Questions?</h4>
                        <img src={InfoStrelka} alt="svg" width={16} height={8} />
                    </li>
                    <li>
                        <h4 className="info_list-title">This is an of Example FAQ Questions?</h4>
                        <img className='info-strelka' src={InfoStrelka} alt="svg" width={16} height={8} />
                        <p className='info_list-text'>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, <br />   
                            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis <br /> ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie <br /> tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non <br /> ligula. Suspendisse imperdiet.</p>
                    </li>
                    <li>
                        <h4 className="info_list-title">This is an of Example FAQ Questions?</h4>
                        <img src={InfoStrelka} alt="svg" width={16} height={8} />
                    </li>
                    <li>
                        <h4 className="info_list-title">This is an of Example FAQ Questions?</h4>
                        <img src={InfoStrelka} alt="svg" width={16} height={8} />
                    </li>
                </ul>
                <button className='info_btn'>Cta buttons</button>
            </div>
        </>
    )
}

export default Info