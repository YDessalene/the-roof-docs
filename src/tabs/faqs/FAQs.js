import './FAQs.css';
import '../../App.css';
import base64Images from '../../assets/base64-images.config.json';
import { useState } from 'react';

const FAQs = () => {
    const imageMap = base64Images;
    const [expanded, setExpanded] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false
    });

    function toggleGroup(num) {
        const obj = {...expanded};
        obj[num] = !obj[num];
        setExpanded(obj);
    }

    return <>
        <div class="faq-container">
            <div class="faq-banner">
                <div class="faq-banner-text-container"
                ><p class="banner-text-small"> Get the Basics, Then give us a call </p>
                    <p class="banner-text-large"> Frequently Asked Questions </p>
                </div>
                <img class="banner-icon" src={imageMap.pointUp} alt="Banner Icon Up" />
            </div>
            <div class="faq-questions-content">
                <div class="question-container">
                    <div class="question-text-container">
                        <p class="question-text"> Why should I work with <span class="logo-text">ROOF</span><span class="black-text">ER</span>? </p>
                        <img alt="Expand" class="faq-action-icon-image" src={expanded[1] ? imageMap.collapse : imageMap.expand} onClick={() => {toggleGroup(1)}} />
                    </div>
                    <div class={"question-answer-container " + (expanded[1] ? 'expanded' : '')}>
                        <p class="question-answer-text"> When a storm affects your neighborhood, you should seek help from an experienced, honest, fair, and local contractor who will assess your damages and assist you through the storm restoration process. At ROOF<span class="logo-text">ER</span>, we have experience handling hundreds of storm restoration projects each year and maintain an <a href="/the-roof-docs/#/mission">uncompromising commitment</a> to serving every customer with integrity, quality, and simplicity. </p>
                    </div>
                </div>
                <div class="question-container">
                    <div class="question-text-container">
                        <p class="question-text"> Does it really hail in Virginia and Maryland? </p>
                        <img alt="Expand" class="faq-action-icon-image" src={expanded[2] ? imageMap.collapse : imageMap.expand} onClick={() => {toggleGroup(2)}} />
                    </div>
                    <div class={"question-answer-container " + (expanded[2] ? 'expanded' : '')}>
                        <p class="question-answer-text"> The map below shows the swath of hail storms over the last three years. All of <a href="/the-roof-docs/#/areas/fairfax">Northern Virginia</a> and <a href="/the-roof-docs/#/areas/gaithersburg">Maryland</a> has been affected by at least one storm over that span. This does not guarantee that your home has storm damage; however, it does indicate the possibility that your property has been affected. </p>
                        <img src="/static/media/FAQMap.9c2591e9.JPG" alt="" />
                    </div>
                </div>
                <div class="question-container">
                    <div class="question-text-container">
                        <p class="question-text"> I haven't had any issues, why should I worry about it now? </p>
                        <img alt="Expand" class="faq-action-icon-image" src={expanded[3] ? imageMap.collapse : imageMap.expand} onClick={() => {toggleGroup(3)}} />
                    </div>
                    <div class={"question-answer-container " + (expanded[3] ? 'expanded' : '')}>
                        <p class="question-answer-text"> Potential leaks due to roof damage can remain latent for quite some time. If left unattended, the exposed layer of asphalt will begin deteriorating due to UV exposure and thermal shock. Eventually, the asphalt layer will crack, allowing water to find a way into the home and leading to more costly repairs. </p>
                    </div>
                </div>
                <div class="question-container">
                    <div class="question-text-container">
                        <p class="question-text"> Why would insurance pay for my roof and/or siding? </p>
                        <img alt="Expand" class="faq-action-icon-image" src={expanded[4] ? imageMap.collapse : imageMap.expand} onClick={() => {toggleGroup(4)}} />
                    </div>
                    <div class={"question-answer-container " + (expanded[4] ? 'expanded' : '')}>
                        <p class="question-answer-text"> Insurance companies include coverage for hail and wind damage because they are events out of your control, also known as Acts of God. Property damage resulting from a storm is not an act of negligence or directly attributable to someone that can be held accountable. If homeowner's insurance didn't cover these events, why have it at all? 2. When your roof is damaged by a hail or wind event, it is in the best interest of the insurance company to pay to replace it before more significant issues arise such as water-saturated insulation and/or drywall repairs </p>
                    </div>
                </div>
                <div class="question-container">
                    <div class="question-text-container">
                        <p class="question-text"> Will my premium go up for an insurance claim? </p>
                        <img alt="Expand" class="faq-action-icon-image" src={expanded[5] ? imageMap.collapse : imageMap.expand} onClick={() => {toggleGroup(5)}} />
                    </div>
                    <div class={"question-answer-container " + (expanded[5] ? 'expanded' : '')}>
                        <p class="question-answer-text"> It is illegal for insurance companies to raise premiums due to natural disasters. However, insurance companies have to assess risk somehow, and when severe storms do affect an area, typically that entire zip code will see an increase in its property insurance rates. As a result, it is in your best interest to file a claim anytime there has been a significant storm and your property has been properly assessed for damage. </p>
                    </div>
                </div>
                <div class="question-container">
                    <div class="question-text-container">
                        <p class="question-text"> How much will I have to pay? </p>
                        <img alt="Expand" class="faq-action-icon-image" src={expanded[6] ? imageMap.collapse : imageMap.expand} onClick={() => {toggleGroup(6)}} />
                    </div>
                    <div class={"question-answer-container " + (expanded[6] ? 'expanded' : '')}>
                        <p class="question-answer-text"> If your claim is approved for a roof or siding replacement, your only out-of-pocket expense is your deductible. Additional expenses are only incurred if you elect to pay for upgrades or would like additional work done not included in the original scope of repairs. </p>
                    </div>
                </div>
                <div class="question-container">
                    <div class="question-text-container">
                        <p class="question-text"> Why shouldn't I get multiple estimates? </p>
                        <img alt="Expand" class="faq-action-icon-image" src={expanded[7] ? imageMap.collapse : imageMap.expand} onClick={() => {toggleGroup(7)}} />
                    </div>
                    <div class={"question-answer-container " + (expanded[7] ? 'expanded' : '')}>
                        <p class="question-answer-text"> Many insurance companies will encourage policyholders to get multiple estimates after a severe weather event. While there are instances when insurance companies write a fair and proper estimate, it remains rare that the initial estimate provided is not low-balled in some way. Encouraging policyholders to get multiple estimates is often times an attempt to lower the insurance company's payout for the claim as they are only required to pay the lowest bid for the work to be done. However, chances are, the lowest bid will not be the highest quality work. </p>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default FAQs;