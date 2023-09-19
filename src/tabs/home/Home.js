import './Home.css';
import '../../App.css';
import rooferIntro from '../../assets/roofer-intro.mp4';
import roofingJpg from '../../assets/roofing.jpg';
import sidingJpg from '../../assets/siding.jpg';
import guttersJpg from '../../assets/gutters.jpg';
import base64Images from '../../assets/base64-images.config.json';

const Home = () => {
    const imageMap = base64Images;

    function getWhatWeDo() {
        const config = [
            { 
                mainIcon: {icon: roofingJpg, alt: 'Roofing'},
                sideIcon: {icon: imageMap.roofing, alt: 'Roofing Icon'},
                title: 'Roofing',
                text: 'Our roofers are fully trained and certified to remedy any roofing issue your home may face. We are The Roof Docs for a reason.',
                url: '/the-roofing-docs/#/services/roofreplacement'
            },
            { 
                mainIcon: {icon: sidingJpg, alt: 'Siding'},
                sideIcon: {icon: imageMap.siding, alt: 'Siding Icon'},
                title: 'Siding',
                text: `While not in the name, our siding team treats your home like you'd expect to be treated during surgery - with great care and precision.`,
                url: '/the-roofing-docs/#/services/sidingreplacement'
            },
            { 
                mainIcon: {icon: guttersJpg, alt: 'Gutters'},
                sideIcon: {icon: imageMap.gutters, alt: 'Gutters Icon'},
                title: 'Gutters',
                text: `Your gutters mean a great deal to the health of your home. That's why our team ensures each install follows local best practices.`,
                url: '/the-roofing-docs/#/services/gutters'
            }
        ]

        const ret = [];
        for (const item of config) {
            ret.push(<>
                <div className='single-service-image'>
                    <img src={item.mainIcon.icon} alt={item.mainIcon.alt} />
                    <img className='side-icon' src={item.sideIcon.icon} alt={item.sideIcon.alt} />
                    <p class="service-header" id="roofing"> {item.title} </p>
                    <p class="service-description">{item.text}</p>
                    <a href={item.url}>
                        <p class="learn-more-link"> Learn More &gt; </p>
                    </a>
                </div>
            </>);
        }
        return ret;
    }

    return <>
        <div className='video-container'>
            <video src={rooferIntro} type='video/mp4' className='fullscreen-video' autoPlay loop muted></video>
            <div className='video-overlay'>
                <p class="intro-header"> The Roof-ER Difference </p>
                <p class="intro-description"> A FREE, HONEST roof inspection. Every time. </p>
                <a href="/the-roof-docs/#/inspection">
                    <div class="free-inspection-button-container">
                        <p class="home-inspection-label"> Sign Up For A Free Inspection </p>
                        <img class="home-inspection-img" src={imageMap.arrow} alt="Arrow" />
                    </div>
                </a>
            </div>
        </div>
        <div className='what-we-do'>
            <div className='small-text'>
                Roof<span className='logo-text'>er</span> Services
            </div>
            <p class="largeText"> What we do. </p>
            <div className='services-container'>
                {getWhatWeDo()}
            </div>
        </div>
    </>
};
  
export default Home;