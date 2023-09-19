import './Home.css';
import '../../App.css';
import rooferIntro from '../../assets/roofer-intro.mp4';
import roofingJpg from '../../assets/roofing.jpg';
import sidingJpg from '../../assets/siding.jpg';
import guttersJpg from '../../assets/gutters.jpg';
import diagnose from '../../assets/home-diagnose.png';
import inspect from '../../assets/home-inspect.png';
import operate from '../../assets/home-operate.png';
import prescribe from '../../assets/home-prescribe.png';
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
                text: <>ROOF<span class="logo-text">ER</span> will perform a FREE inspection of your roof, siding, and gutters to find evidence of wind, hail, or other damage.</>,
                processFooter: <>
                    <img src={imageMap.oneRed} alt="Slide Icon" />
                    <img src={imageMap.twoWhite} alt="Slide Icon" />
                    <img src={imageMap.threeWhite} alt="Slide Icon" />
                    <img src={imageMap.fourWhite} alt="Slide Icon" />
                </>
            },
            {
                img: diagnose, header: '2. Diagnose',
                text: <>ROOF<span class="logo-text">ER</span> and your Roof Doc will properly assess all findings to determine whether your exterior systems are storm-damaged, old, or perfectly fine.</>,
                processFooter: <>
                    <img src={imageMap.oneWhite} alt="Slide Icon" />
                    <img src={imageMap.twoRed} alt="Slide Icon" />
                    <img src={imageMap.threeWhite} alt="Slide Icon" />
                    <img src={imageMap.fourWhite} alt="Slide Icon" />
                </>
            },
            {
                img: prescribe, header: '3. Prescribe',
                text: <>Your Roof Doc will provide you with an honest recommendation based on their findings. If damage is found, ROOF<span class="logo-text">ER</span> may suggest filing an insurance claim.</>,
                processFooter: <>
                    <img src={imageMap.oneWhite} alt="Slide Icon" />
                    <img src={imageMap.twoWhite} alt="Slide Icon" />
                    <img src={imageMap.threeRed} alt="Slide Icon" />
                    <img src={imageMap.fourWhite} alt="Slide Icon" />
                </>
            },
            {
                img: operate, header: '4. Operate',
                text: <>If your roof, siding, or gutters are found to have an ailment, the last step is to review project details with your Roof Doc and let ROOF<span class="logo-text">ER</span>'s install team take care of the rest.</>,
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
            <div class='process-image-container'>
                <img src={item.img} alt='Process Icon' />
            </div>
            <div class="process-info-container">
                <p class="process-header">
                    The Roof<span class="logo-text">er</span> Process
                </p>
                <p class="process-step-name"> {item.header} </p>
                <p class="process-description">
                    {item.text}
                </p>
                <div class="process-slides-container">
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
                    <p class='service-header' id='roofing'> {item.title} </p>
                    <p class='service-description'>{item.text}</p>
                    <a href={item.url}>
                        <p class='learn-more-link'> Learn More &gt; </p>
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
                <p class='intro-header'> The Roof-ER Difference </p>
                <p class='intro-description'> A FREE, HONEST roof inspection. Every time. </p>
                <a href='/the-roof-docs/#/inspection'>
                    <div class='free-inspection-button-container'>
                        <p class='home-inspection-label'> Sign Up For A Free Inspection </p>
                        <img class='home-inspection-img' src={imageMap.arrowSmallRight} alt='Arrow' />
                    </div>
                </a>
            </div>
        </div>
        <div className='what-we-do'>
            <div className='small-text'>
                Roof<span className='logo-text'>er</span> Services
            </div>
            <p class='largeText'> What we do. </p>
            <div className='services-container'>
                {getWhatWeDo()}
            </div>
        </div>
        <div className='home-process'>
            <div class='process-arrow-container left'>
                <img id='left' src={imageMap.arrowLargeLeft} alt='Previous' onClick={() => {processLeft()}} />
            </div>
            {process}
            <div class='process-arrow-container right'>
                <img id='right' src={imageMap.arrowLargeRight} alt='Next' onClick={() => {processRight()}} />
            </div>
        </div>
    </>
};
  
export default Home;