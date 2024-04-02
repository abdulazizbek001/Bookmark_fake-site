import './Features.css';
import FreaturesImg from '../../assets/svg/hero_img.svg';


function Features() {
    return (
        <>
            <div className="features">
                <h2 className="features_title">Lorem ipsum dolor sit amet</h2>
                <p className="features_text">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                    ultricies non ligula. Suspendisse imperdiet</p>
                <ul className='features_list'>
                    <li className='features_item'>
                        <p className="features_list-text">Option 001</p>
                    </li>
                    <li>
                        <p className="features_list-text">Option 002</p>
                    </li>
                    <li>
                        <p className="features_list-text">Option 003</p>
                    </li>
                </ul>
                < hr className='features_line' />
                <div className='features_box'>
                    <img src={FreaturesImg} alt="freatures-img" width={318} height={318} />
                    <div className='features_box-wrap'>
                        <h2 className="features-wrap_title">Lorem ipsum dolor sit amet</h2>
                        <p className="features-wrap_text">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet</p>
                        <button className="featured-wrap_btn">Cta buttons</button>
                 </div>
                </div>
            </div>
        </>
    )
}

export default Features