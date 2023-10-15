import './Home.css';
import '../../App.css';
import rooferIntro from '../../assets/home/roofer-intro.mp4';
import roofingJpg from '../../assets/home/roofing.jpg';
import sidingJpg from '../../assets/home/siding.jpg';
import guttersJpg from '../../assets/home/gutters.jpg';
import diagnose from '../../assets/home/diagnose.png';
import inspect from '../../assets/home/inspect.png';
import operate from '../../assets/home/operate.png';
import prescribe from '../../assets/home/prescribe.png';
import mission from '../../assets/home/mission.png';
import integrity from '../../assets/home/integrity.png';
import plyIcon from '../../assets/home/plyIcon.png';
import sentryIcon from '../../assets/home/plyIcon.png';
import googleLogo from '../../assets/googleLogo.png';
import base64Images from '../../assets/base64-images.config.json';
import { useState, useEffect } from "react";

const Home = () => {
    const imageMap = base64Images;
    const [process, setProcess] = useState(<></>);
    const [processIdx, setProcessIdx] = useState(0);

    useEffect(() => {
        const config = [
            {
                img: inspect, header: '1. Inspect',
                text: <>ROOF<span className="logo-text">ER</span> will perform a FREE inspection of your roof, siding, and gutters to find evidence of wind, hail, or other damage.</>,
                processFooter: <>
                    <img src={imageMap.oneRed} alt="Slide Icon" />
                    <img src={imageMap.twoWhite} alt="Slide Icon" />
                    <img src={imageMap.threeWhite} alt="Slide Icon" />
                    <img src={imageMap.fourWhite} alt="Slide Icon" />
                </>
            },
            {
                img: diagnose, header: '2. Diagnose',
                text: <>ROOF<span className="logo-text">ER</span> and your Roof Doc will properly assess all findings to determine whether your exterior systems are storm-damaged, old, or perfectly fine.</>,
                processFooter: <>
                    <img src={imageMap.oneWhite} alt="Slide Icon" />
                    <img src={imageMap.twoRed} alt="Slide Icon" />
                    <img src={imageMap.threeWhite} alt="Slide Icon" />
                    <img src={imageMap.fourWhite} alt="Slide Icon" />
                </>
            },
            {
                img: prescribe, header: '3. Prescribe',
                text: <>Your Roof Doc will provide you with an honest recommendation based on their findings. If damage is found, ROOF<span className="logo-text">ER</span> may suggest filing an insurance claim.</>,
                processFooter: <>
                    <img src={imageMap.oneWhite} alt="Slide Icon" />
                    <img src={imageMap.twoWhite} alt="Slide Icon" />
                    <img src={imageMap.threeRed} alt="Slide Icon" />
                    <img src={imageMap.fourWhite} alt="Slide Icon" />
                </>
            },
            {
                img: operate, header: '4. Operate',
                text: <>If your roof, siding, or gutters are found to have an ailment, the last step is to review project details with your Roof Doc and let ROOF<span className="logo-text">ER</span>'s install team take care of the rest.</>,
                processFooter: <>
                    <img src={imageMap.oneWhite} alt="Slide Icon" />
                    <img src={imageMap.twoWhite} alt="Slide Icon" />
                    <img src={imageMap.threeWhite} alt="Slide Icon" />
                    <img src={imageMap.fourRed} alt="Slide Icon" />
                </>
            }
        ]
        const item = config[processIdx];
        setProcess(<>
            <div className='process-image-container'>
                <img src={item.img} alt='Process Icon' />
            </div>
            <div className="process-info-container">
                <p className="process-header">
                    The Roof<span className="logo-text">er</span> Process
                </p>
                <p className="process-step-name"> {item.header} </p>
                <p className="process-description">
                    {item.text}
                </p>
                <div className="process-slides-container">
                    {item.processFooter}
                </div>
            </div>
        </>)
    }, [processIdx, imageMap]);

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
                    <p className='service-header' id='roofing'> {item.title} </p>
                    <p className='service-description'>{item.text}</p>
                    <a href={item.url}>
                        <p className='learn-more-link'> Learn More &gt; </p>
                    </a>
                </div>
            </>);
        }
        return ret;
    }

    function processLeft() {
        if (processIdx === 0) {
            setProcessIdx(4);
            return;
        }
        setProcessIdx(processIdx - 1);
    }

    function processRight() {
        if (processIdx === 3) {
            setProcessIdx(0);
            return;
        }
        setProcessIdx(processIdx + 1);
    }

    return <>
        <div className='video-container'>
            <video src={rooferIntro} type='video/mp4' className='fullscreen-video' autoPlay loop muted></video>
            <div className='video-overlay'>
                <p className='intro-header'> The Roof-ER Difference </p>
                <p className='intro-description'> A FREE, HONEST roof inspection. Every time. </p>
                <a href='/the-roof-docs/#/inspection'>
                    <div className='arrow-button-container'>
                        <p> Sign Up For A Free Inspection </p>
                        <img src={imageMap.arrowBoxRight} alt='Arrow' />
                    </div>
                </a>
            </div>
        </div>
        <div className='what-we-do'>
            <div className='small-text'>
                Roof<span className='logo-text'>er</span> Services
            </div>
            <p className='largeText'> What we do. </p>
            <div className='services-container'>
                {getWhatWeDo()}
            </div>
        </div>
        <div className='home-process'>
            <div className='process-arrow-container left'>
                <img id='left' src={imageMap.arrowLargeLeft} alt='Previous' onClick={() => {processLeft()}} />
            </div>
            {process}
            <div className='process-arrow-container right'>
                <img id='right' src={imageMap.arrowLargeRight} alt='Next' onClick={() => {processRight()}} />
            </div>
        </div>
        <div className='work-banner-container'>
            <div className='work-banner-section'>
                <img src={mission} alt="Who We Are" />
                <div className="work-info-container">
                    <p className="small-header"> Who We Are </p>
                    <p className="large-header"> Our Mission </p>
                    <p className="work-banner-description"> We are setting the new standard for roofing contractors. Our team is trained and held accountable to prioritize your best interest. </p>
                    <a href="/the-roof-docs/#/docs">
                        <div className="arrow-button-container">
                            <p> Meet the Docs </p>
                            <img src={imageMap.arrowBoxRight} alt="Arrow" />
                        </div>
                    </a>
                </div>
            </div>
            <div className='work-banner-section'>
                <img src={integrity} alt="How We Do It" />
                <div className="work-info-container">
                    <p className="small-header"> How We Do It </p>
                    <p className="large-header">Integrity. Quality. Simplicity. </p>
                    <p className="work-banner-description"> By staying committed to our core values, we offer a service to our customers that they can't wait to tell their friends and family about. </p>
                    <a href="/the-roof-docs/#/gallery">
                        <div className="arrow-button-container">
                            <p className="arrow-button-label"> View Our Work </p>
                            <img className="arrow-button-img" src={imageMap.arrowBoxRight} alt="Arrow" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className='products-background'>
            <div className="products-container">
                <img src={imageMap.gafIcon} alt="Product Icon" />
                <img src={imageMap.ikoIcon} alt="Product Icon" />
                <img src={imageMap.certIcon} alt="Product Icon" />
                <img src={imageMap.hardieIcon} alt="Product Icon" />
                <img src={plyIcon} alt="Product Icon" />
                <img src={sentryIcon} alt="Product Icon" />
            </div>
        </div>
        <div className="google-reviews-background">
            <div className="reviews-content">
                <p className="success-text"> Why we do it </p>
                <p className=" success-subheader"> Our customers are our reason. Read our Roof-ER reviews.</p>
                <div className="reviews-holder">
                    <div className="reviews-arrow-container left">
                        <img id="left" src={imageMap.arrowLargeLeft} alt="Previous" />
                    </div>
                    <div className="google-reviews-list">
                        <div className="review">
                            <div className="review-user-info">
                                <div className="review-photo-container">
                                    <img src="https://lh6.googleusercontent.com/-_Oylj-5wij8/AAAAAAAAAAI/AAAAAAAAAAA/hAAX9s-Hbec/c-rp-mo-br100/photo.jpg" alt="Profile" />
                                </div>
                                <div className="review-name-rating-container">
                                    <p className="review-name"> Koorosh Mehr </p>
                                    <div className="star-rating-container">

                                    </div>
                                </div>
                            </div>
                            <div className="review-comment-container">
                                <div className="LinesEllipsis">Professional, reliable, prompt, no hidden cost and or corner cutting<wbr/></div>
                            </div>
                        </div>
                        <div className="review" id="review2">
                            <div className="review-user-info">
                                <div className="review-photo-container">
                                    <img src="https://lh6.googleusercontent.com/-wjCvjVvm3Ew/AAAAAAAAAAI/AAAAAAAAAAA/T6S2zh9FAo4/c-rp-mo-br100/photo.jpg" alt="Profile" />
                                </div>
                                <div className="review-name-rating-container">
                                    <p className="review-name"> Robert Lamond Jr </p>
                                    <div className="star-rating-container">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="review-comment-container">
                                <div className="LinesEllipsis">We had a shingle blow off our roof in a recent windstorm. I flagged down Mike who was leaving a job up the street at a neighbors house to see if they could replace the shingle (I had the missing shingle). Mike sent a crew by two days later and took care of it in less than 10 minutes! Thanks!<wbr/></div>
                            </div>
                        </div>
                    </div>
                    <div className="reviews-arrow-container right">
                        <img id="right" src={imageMap.arrowLargeRight} alt="Next" />
                    </div>
                </div>
                <a className="social-review-icons" href='https://www.google.com/search?q=theroofdocs#lrd=0x89b64b2fcb5573a1:0xe08c3a8b88ee6d4d,1,,,,' rel="noopener noreferrer" target="_blank">
                    <img src={googleLogo} alt="Google" />
                </a>
            </div>
        </div>
    </>
};
  
export default Home;