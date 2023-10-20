import './Gallery.css';
import '../../../App.css';
import base64Images from '../../../assets/base64-images.config.json';
import { useEffect, useState } from 'react';
import img1 from '../../../assets/gallery/img1.jpg';
import img2 from '../../../assets/gallery/img2.jpg';
import img3 from '../../../assets/gallery/img3.jpg';
import img4 from '../../../assets/gallery/img4.jpeg';
import img5 from '../../../assets/gallery/img5.jpeg';
import img6 from '../../../assets/gallery/img6.jpg';
import img7 from '../../../assets/gallery/img7.jpeg';
import img8 from '../../../assets/gallery/img8.jpeg';
import img9 from '../../../assets/gallery/img9.jpg';
import img10 from '../../../assets/gallery/img10.jpeg';
import img11 from '../../../assets/gallery/img11.jpeg';
import img12 from '../../../assets/gallery/img12.jpeg';
import img13 from '../../../assets/gallery/img13.jpeg';
import img14 from '../../../assets/gallery/img14.jpg';
import img15 from '../../../assets/gallery/img15.jpg';
import img16 from '../../../assets/gallery/img16.jpg';
import img17 from '../../../assets/gallery/img17.jpg';
import img18 from '../../../assets/gallery/img18.jpg';
import img19 from '../../../assets/gallery/img19.jpg';
import img20 from '../../../assets/gallery/img20.jpg';
import img21 from '../../../assets/gallery/img21.jpg';
import img22 from '../../../assets/gallery/img22.jpg';
import img23 from '../../../assets/gallery/img23.jpg';
import img24 from '../../../assets/gallery/img24.jpg';
import img25 from '../../../assets/gallery/img25.jpg';
import img26 from '../../../assets/gallery/img26.jpg';
import img27 from '../../../assets/gallery/img27.jpg';

const Gallery = () => {
    const imageMap = base64Images;
    const galleryShort = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
    const galleryLong = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13,
        img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27];

    const [shown, setShown] = useState(galleryShort);
    const [shownHtml, setShownHtml] = useState([]);
    const [shownInfo, setShownInfo] = useState({popup: false, image: null});
    const [popup, setPopup] = useState(<></>);

    useEffect(() => {
        const ret = [];
        for (const image of shown) {
            ret.push(<div class="work-display-image-container" onClick={() => { setShownInfo({image, popup: true}) }}>
                <img src={image} alt="Property" />
            </div>);
        }
        setShownHtml(ret);
    }, [shown]);

    useEffect(() => {
        if (shownInfo.popup) {
            setPopup(<div class="modalContainer" onClick={() => { setShownInfo({...shownInfo, popup: false}) }}>
                <div class="view-work-modal-content">
                    <div class="view-work-image-container">
                        <img src={shownInfo.image} alt="Roofing" />
                    </div>
                    <div class="view-work-icon-container">
                        <img class="doc-expand-icon" src={imageMap.minimize} alt="Collapse Icon" />
                    </div>
                </div>
            </div>);
        } else {
            setPopup(<></>);
        }
    }, [shownInfo, imageMap.minimize]);

    function toggleShown() {
        if (shown.length === 12) {
            setShown(galleryLong);
        } else {
            setShown(galleryShort);
        }
    }

    return <>
        <div class="our-work-container">
            <div class="work-banner">
                <div class="work-banner-text-container">
                    <p class="banner-text-small"> QUALITY </p>
                    <p class="banner-text-large"> Shortcuts Aren't In Our Vocabulary </p>
                </div>
                <img class="banner-icon" src={imageMap.pointUp} alt="Banner Up" />
            </div>
            <div class="gallery-container">
                <p class="main-text"> Our Gallery </p>
                <p class="small-text"> Click the images below to view the full image </p>
                <div class="gallery-images-container">
                    {shownHtml}
                </div>
                <button class="gallery-show-photos-button" onClick={() => { toggleShown() }}> {shown.length === 12 ? 'Show All' : 'Hide'} </button>
            </div>
            {popup}
        </div>
    </>
};

export default Gallery;