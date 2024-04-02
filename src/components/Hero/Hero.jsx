import './Hero.css';
import HeroImg from '../../assets/svg/hero_img.svg';

function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero_box">
                    <h1 className="hero_title">Lorem ipsum dolor sit amet</h1>
                    <p className="hero_text">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet</p>
                    <a href="#" className='hero_link1'>Install on chorem</a>
                    <a href="#" className='hero_link2'>Install on firefox</a>
                </div>
                <img src={HeroImg} alt="hero_img" width={318} height={318} />
            </div>
        </>
    )
}

export default Hero