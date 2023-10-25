import './Docs.css';
import '../../../App.css';
import base64Images from '../../../assets/base64-images.config.json';
import docsConfig from './docs.config';
import MikeHarvey from '../../../assets/docs/MikeHarvey.png';
import OliverBrown from '../../../assets/docs/OliverBrown.png';
import GregCampbell from '../../../assets/docs/GregCampbell.png';
import KyannHolman from '../../../assets/docs/KyannHolman.png';
import MattRay from '../../../assets/docs/MattRay.png';
import FordBarsi from '../../../assets/docs/FordBarsi.png';
import PatrickOHara from '../../../assets/docs/PatrickOHara.png';
import LuisEsteves from '../../../assets/docs/LuisEsteves.png';
import IsmaelCoreas from '../../../assets/docs/IsmaelCoreas.png';
import MikeRafter from '../../../assets/docs/MikeRafter.png';
import AmberCouch from '../../../assets/docs/AmberCouch.png';
import CarlosDavila from '../../../assets/docs/CarlosDavila.png';
import PatrickRobertson from '../../../assets/docs/PatrickRobertson.png';
import ZacNewdick from '../../../assets/docs/ZacNewdick.png';
import ChrisRamirez from '../../../assets/docs/ChrisRamirez.png';
import KalebKuschel from '../../../assets/docs/KalebKuschel.png';
import AlexCampos from '../../../assets/docs/AlexCampos.png';
import fTJSpencer from '../../../assets/docs/TJSpencer.png';
import AselT from '../../../assets/docs/AselT.png';
import ChristianM from '../../../assets/docs/ChristianM.png';
import EricM from '../../../assets/docs/EricM.png';
import GarrettW from '../../../assets/docs/GarrettW.png';
import JasonB from '../../../assets/docs/JasonB.png';
import JoelH from '../../../assets/docs/JoelH.png';
import JohnC from '../../../assets/docs/JohnC.png';
import JustinW from '../../../assets/docs/JustinW.png';
import LucaF from '../../../assets/docs/LucaF.png';
import MikeT from '../../../assets/docs/MikeT.png';
import ReeseS from '../../../assets/docs/ReeseS.png';
import RyanV from '../../../assets/docs/RyanV.png';
import { useState } from 'react';

const Docs = () => {
    const [popup, showPopup] = useState(false);
    const [popupInfo, setPopupInfo] = useState({});

    const imageMap = base64Images;
    const docsMessage = docsConfig;
    const docList = [
        {img: MikeHarvey, name: 'MICHAEL HARVEY', txt: docsMessage.michaelHarvey},
        {img: OliverBrown, name: 'OLIVER BROWN', txt: docsMessage.oliverBrown},
        {img: GregCampbell, name: 'GREG C', txt: docsMessage.gregC},
        {img: KyannHolman, name: 'KYANN H', txt: docsMessage.kyannH},
        {img: MattRay, name: 'MATT R', txt: docsMessage.mattR},
        {img: FordBarsi, name: 'FORD B', txt: docsMessage.fordB},
        {img: PatrickRobertson, name: 'PATRICK R', txt: docsMessage.patrickR},
        {img: LuisEsteves, name: 'LUIS E', txt: docsMessage.luisE},
        {img: IsmaelCoreas, name: 'ISMAEL C', txt: docsMessage.ismaelC},
        {img: MikeRafter, name: 'MIKE R', txt: docsMessage.mikeR},
        {img: AmberCouch, name: 'AMBER C', txt: docsMessage.amberC},
        {img: CarlosDavila, name: 'CARLOS D', txt: docsMessage.carlosD},
        {img: PatrickOHara, name: 'PATRICK O', txt: docsMessage.patrickO},
        {img: ZacNewdick, name: 'ZAC N', txt: docsMessage.zacN},
        {img: ChrisRamirez, name: 'CHRIS R', txt: docsMessage.chrisR},
        {img: KalebKuschel, name: 'KALEB K', txt: docsMessage.kalebK},
        {img: AlexCampos, name: 'ALEX C', txt: docsMessage.alexC},
        {img: fTJSpencer, name: 'TJ S', txt: docsMessage.tjS},
        {img: AselT, name: 'ASEL T', txt: docsMessage.aselT},
        {img: ChristianM, name: 'CHRISTIAN M', txt: docsMessage.christianM},
        {img: EricM, name: 'ERIC M', txt: docsMessage.ericM},
        {img: GarrettW, name: 'GARRETT W', txt: docsMessage.garrettW},
        {img: JasonB, name: 'JASON B', txt: docsMessage.jasonB},
        {img: JoelH, name: 'JOEL H', txt: docsMessage.joelH},
        {img: JohnC, name: 'JOHN C', txt: docsMessage.johnC},
        {img: JustinW, name: 'JUSTIN W', txt: docsMessage.justinW},
        {img: LucaF, name: 'LUCA F', txt: docsMessage.lucaF},
        {img: MikeT, name: 'MIKE T', txt: docsMessage.mikeT},
        {img: ReeseS, name: 'REESE S', txt: docsMessage.reeseS},
        {img: RyanV, name: 'RYAN V', txt: docsMessage.ryanV}
    ];

    function getDocs() {
        const ret = [];
        for (const doc of docList) {
            ret.push(
                <div class="doc-container">
                    <div class="doc-image-container">
                        <img src={doc.img} alt={doc.name} />
                    </div>
                    <div class="doc-icon-container">
                        <img class="doc-expand-icon" src={imageMap.expand} alt="Doc Bio" onClick={() => {showPopup(true); setPopupInfo(doc)}} />
                    </div>
                    <p class="doc-name">{doc.name}</p>
                </div>
            );
        }

        return ret;
    }

    return <>
        <div className='meet-the-docs-container'>
            <div class="docs-banner">
                <div class="docs-banner-text-container">
                    <p class="banner-text-small"> INTEGRITY </p>
                    <p class="banner-text-large"> Honesty First. And Second. And Third... </p>
                </div>
                <img class="banner-icon" src={imageMap.pointUp} alt="Banner Icon" />
            </div>
            <p class="docs-oath"> Our Hippocratic Oath: to hold a fiduciary responsibility to each and every one of our customers through a commitment to our core values of integrity, quality, and simplicity </p>
            <div class="docs-list-container">
                {getDocs()}
            </div>
            <div className={"modalContainer " + (!popup ? 'hiddenModal' : '')} onClick={() => {showPopup(false)}}>
                <div class="view-doc-modal-content">
                    <div class="doc-container-modal">
                        <div class="doc-image-container-modal">
                            <img src={popupInfo.img} alt={popupInfo.name} />
                        </div>
                        <div class="doc-icon-container-modal">
                            <img class="doc-expand-icon" src={imageMap.collapse} alt="Collapse Bio" />
                        </div>
                        <p class="doc-name">{popupInfo.name}</p>
                        <div class="doc-bio-modal-content">
                            <p>{popupInfo.txt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Docs;