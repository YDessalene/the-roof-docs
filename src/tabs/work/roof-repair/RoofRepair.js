import './RoofRepair.css';
import '../../../App.css';
import base64Images from '../../../assets/base64-images.config.json';

const RoofRepair = () => {
    const imageMap = base64Images;

    return <>
        <div class="services-container">
            <div class="services-banner">
                <div class="services-banner-text-container">
                    <p class="banner-text-small"> Professional Roof Repair Services Near You in VA &amp; MD </p>
                    <p class="banner-text-large"> Roof-ER are your Fairfax roof repair experts</p>
                </div>
                <img class="banner-icon" src={imageMap.pointUp} alt="Banner Icon Up" />
            </div>
            <div class="services-template-container">
                <div class="services-template-content">
                    <h1>Roof Repair Services</h1>
                    <p class="main-text">When your roof gets damaged, you need trusted roof repair professionals to diagnose and fix the damage before it turns into a bigger, more expensive issue. At Roof-ER, we specialize in roof repairs in Northern Virginia and Maryland. Our certified and expertly-trained professional roofers will restore your roof to its original quality with a fast turnaround — and we even provide <a href="/the-roof-docs/#/inspection">free contactless estimates</a> for every customer.</p>
                    <h2>Why Do I Need to Repair My Roof?</h2>
                    <p>Whether a bad storm rolled through your area or water has been pooling on your roof for days, you should never ignore emerging roof issues. Not only can ignored roof damage worsen into a costly problem for your home, but it can also pose a safety risk and decrease your property value.</p>
                    <p>You need to have your roof damage repaired as soon as possible by professional roofing contractors who specialize in your type of roof. The sooner you address your roofing issues, the less you'll have to spend on future repairs and maintenance. Our roof repair services are top-rated in Fairfax, VA and the surrounding communitites.</p>
                    <h2>Common Roof Problems</h2>
                    <p>Here are some of the most common roof problems that our&nbsp;<a href="/the-roof-docs/#/mission">roof repair company</a>&nbsp;in Tysons can address:</p>
                    <h3>Roof Leaks</h3>
                    <p>Roof leaks are common issues in Northern VA. They typically occur after periods of heavy rain, and they indicate that your roof has:</p>
                    <ul>
                        <li>Cracked or otherwise damaged flashing</li>
                        <li>Broken or torn shingles or tiles</li>
                        <li>Damaged skylights</li>
                        <li>Chimney cracks</li>
                        <li>Improperly sealed roof penetrations</li>
                        <li>Carpenter gaps in the roof decking</li>
                    </ul>
                    <p>There are many causes for roof leaks, and the location of the leaks often indicates where your roof may be damaged.</p>
                    <h3>Pooled Water</h3>
                    <p>Pooled water occurs after a rainstorm and can result in water damage to your roof if it's left untreated. However, tapering your roof's slope will prevent pools of water from forming. If you've had water pooling on your roof for multiple days or weeks, you need to have your roof inspected for water damage before any tapering can be completed.</p>
                    <h3>Shrinkage</h3>
                    <p>Shrinkage happens when your roofing materials begin to deteriorate, warp or crack as a result of aging. When shrinkage occurs, you need to have the issue addressed as soon as possible.</p>
                    <h3>Hail Damage</h3>
                    <p>Even,&nbsp;<a href="/the-roof-docs/#/faqs">places like Northern VA experience hail</a>. When hailstorms occur, they tend to cause varying degrees of damage to roofs. Hail damage can be difficult to assess but, if present, can lead to costly repairs. It is best to consult a professional roof inspector if you believe your home has been <a href="/the-roof-docs/#/blog/hail-damage">impacted by hail</a>.</p>
                    <h3>Storm Damage (Wind)</h3>
                    <p>Strong storms are also common reasons for roof repair service in the Tysons area. When your roof is exposed to strong gusts of wind, your shingles blow off, leaving your roof vulnerable to more serious damage. Storms can also pummel your roof with debris, which can prove quite destructive to most roof types.</p>
                    <p>If you experience any of the roofing issues listed above, it's time to call The Roof Docs at Roof-ER for fast roof repair services in Fairfax County.</p>
                    <h2>Roof Repair Service in Fairfax County</h2>
                    <p>When you need a top-notch roof repair contractor in Vienna or the surrounding communities, turn to The Roof Docs. <a href="/the-roof-docs/#/inspection">Schedule your free contactless estimate for roof repair</a>&nbsp;when you call us today at <a href="tel:7032393738"> 703-239-3738</a>!</p>
                </div>
            </div>
        </div>
    </>;
};

export default RoofRepair;