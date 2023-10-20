import './Gutters.css';
import '../../../App.css';
import base64Images from '../../../assets/base64-images.config.json';

const Gutters = () => {
    const imageMap = base64Images;

    return <>
        <div class="services-container">
            <div class="services-banner">
                <div class="services-banner-text-container">
                    <p class="banner-text-small"> Gutters Replacement Services </p>
                    <p class="banner-text-large"> Roof-ER are your Gutter &amp; Downspout replacement experts  </p>
                </div>
                <img class="banner-icon" src={imageMap.pointUp} alt="Banner Icon Up" />
            </div>
            <div class="services-template-container">
                <div class="services-template-content">
                    <h1>Gutter Replacement and Installation Services</h1>
                    <p>If your home in northern Virginia or Maryland experiences moisture issues after heavy rain or snow, you aren't alone. Working gutters divert water away from your residence, but damages can build up from the ravages of time and extreme weather.</p>
                    <p>That's why Fairfax County residents should call Roof-ER for gutter inspections. We offer professional gutter installation services in Tysons as part of our full-service roofing inspections, <a title="" href="/the-roof-docs/#/services/roofrepair" target="repairs">repairs</a>&nbsp;and&nbsp;<a title="" href="/the-roof-docs/#/services/roofreplacement" target="replacements">replacements</a>.&nbsp;Our gutter services help maintain your home's condition, improve its appearance and save you from more expensive issues.</p>
                    <h2>Signs of Gutter Damage</h2>
                    <p>Homeowners should periodically check for&nbsp;<a title="" href="/the-roof-docs/#/blog/protecting-gutters" target="gutter wear and deterioration">gutter wear and deterioration</a>. Look out for these warning signs that suggest it's time to contact a gutter inspection company:</p>
                    <ul>
                        <li><strong>Sagging or leaning gutters</strong>: Gutters can buckle or pull away from the fascia if the fasteners are loose. Sometimes gutters separate from the home after branches or wildlife weigh on them.</li>
                        <li><strong>Overflowing</strong>: Gutters cannot drain efficiently if debris, leaves or ice dams are clogging the trough or downspout. A professional can safely perform regular gutter cleanings or install a leaf guard.</li>
                        <li><strong>Separating gutter joints</strong>: Leaks occur where the gutter joints are misaligned, or the sealant has worn away.</li>
                        <li><strong>Rust</strong>: Orange splotches on conventional gutters are a telltale sign of corrosion and weakening.</li>
                        <li><strong>Cracks and splits</strong>: Some damaged gutters have open fissures along the troughs and will drip water.</li>
                        <li><strong>Water staining</strong>: Moisture stains and discoloration on sidings or concrete can appear when your gutters aren't protecting your home as they should.</li>
                    </ul>
                    <h2>Costs Associated With Damaged Gutters</h2>
                    <p>In most cases, clogged and aged gutters are a minor nuisance. But if left unaddressed, you could have major home repairs to make from the moisture buildup, such as:</p>
                    <ul>
                        <li>Rotting roof, fascia or foundations.</li>
                        <li>Pooling water in the basement or garage.</li>
                        <li>Mold and mildew growth on the interior or exterior.</li>
                        <li>Swollen or damaged siding.</li>
                        <li>Standing water in the yard or gutters — prime breeding grounds for mosquitos.</li>
                        <li>Damage to the landscape from soil erosion.</li>
                    </ul>
                    <h2>Our Gutter Installation Process</h2>
                    <p>Our gutter replacement services always begin with a comprehensive inspection.&nbsp;We can identify the potential impacts of your faulty gutters on other parts of your Tysons home, such as the siding and roof. If you approve a gutter replacement, we'll help you select the products, colors and upgrades so we can begin work as soon as possible.</p>
                    <p>On the day of your gutter installation, we'll set up access equipment, safely remove the existing gutters and fit the replacement, usually one elevation at a time. We connect and secure new or extended downspouts and add gutter guards if needed.</p>
                    <h3>How Long Does the Gutter Replacement Process Take?</h3>
                    <p>The time to complete a gutter replacement varies with the complexity of your home in Tysons — longer, straighter runs are simpler to install than multiple bends. We'll provide a time estimate with the cost. We aim to finish gutter replacement projects promptly and will work within your schedule to keep your home protected.</p>
                    <h2>Contact Roof-ER for a Free Inspection</h2>
                    <p>Before the next heavy storm, call Roof-ER.&nbsp;We'll check your entire gutter system's condition and work swiftly to grant you peace of mind again. We provide our clients with a hassle-free experience and handle invoicing insurance companies if the damage is the result of recent storms.&nbsp;</p>
                    <p>Contact us today for a&nbsp;<a href="/the-roof-docs/#/inspection">free gutter inspection</a>&nbsp;in Fairfax County and Tysons, Virginia.</p>
                </div>
            </div>
        </div>
    </>
};

export default Gutters;