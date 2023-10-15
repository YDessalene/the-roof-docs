import './Vienna.css';
import '../../../App.css';
import base64Images from '../../../assets/base64-images.config.json';

const Vienna = () => {
    const imageMap = base64Images;

    return <>
        <div class="services-container">
            <div class="services-banner">
                <div class="services-banner-text-container">
                    <p class="banner-text-small"> Roofing Services in Vienna </p>
                    <p class="banner-text-large"> Roof-ER are the roofing experts in Vienna, VA </p>
                </div>
                <img class="banner-icon" src={imageMap.pointUp} alt="Banner Icon Up" />
            </div>
            <div class="services-template-container">
                <div class="services-template-content">
                    <h1>Roof Repair and Replacement Services in Vienna</h1>
                    <p class="main-text">When your roof is damaged, it's time to call Roof-ER. We specialize in&nbsp;<a href="/the-roof-docs/#/services/roofrepair">roof repair</a>,&nbsp;<a href="/the-roof-docs/#/services/roofreplacement">roof replacement</a>and&nbsp;<a href="/the-roof-docs/#/services/sidingreplacement">siding replacement in Vienna, VA</a>, offering free inspections prior to any roofing service. Our team of Vienna roofing experts can address hail damage, wind damage and other forms of storm damage requiring roof repair in Vienna.</p>
                    <p class="main-text">Learn more below about our roofing and siding services designed specifically for Vienna homes.</p>
                    <h2>Roof Repair &amp; Roofing, Vienna VA</h2>
                    <p class="main-text">Roof-ER is a leader in all things roof repair and full roof replacements in Vienna. We can service any type of residential roofing system in this area, from simple flat roofs to elaborate architectures. If your roof was damaged by a severe storm, <a href="tel:7032393738">call a roofing repair professional</a> as soon as possible. Untreated roof damage can worsen quickly and even pose a safety threat to your home.</p>
                    <p class="main-text">If you experience any of the following circumstances, you'll need a roof repair immediately:</p>
                    <ul>
                        <li>Storm damage resulting in pooling water or leaks</li>
                        <li>Shingles blown off from wind damage</li>
                        <li>Hail damage, especially in the form of cracks or punctures</li>
                        <li>Damage from fallen trees or tree limbs and other debris</li>
                    </ul>
                    <p>We offer storm damage roof repair in Vienna for the cost of your deductible, and we always start with <a href="/the-roof-docs/#/inspection">free damage inspections.</a></p>
                    <h2>Common Roof Types in Vienna</h2>
                    <p>The roof types that we service in Vienna include:</p>
                    <ul>
                        <li>Aluminum (Replace with a sturdier asphalt roof)</li>
                        <li>Asphalt — three-tab shingles, dimensional (architectural or laminate) shingles and luxury or "premium" shingles</li>
                        <li>Others, such as wood and tile</li>
                    </ul>
                    <p>Roof-ER specializes in repairing and replacing high-quality asphalt shingles, which are by far the most popular roofing materials in the Vienna area.</p>
                    <h2>The Housing Market in Vienna</h2>
                    <p>Thanks to Vienna's beautiful neighborhoods and proximity to Washington, D.C., many people are flocking to the area in search of homes. If you're selling your house in Vienna, you'll need to make sure your roof is in excellent condition. A sturdy, aesthetically pleasing roof will increase your home's value and provide the structural integrity to prevent unforeseen issues from throwing a wrench into your selling plans.</p>
                    <p>We provide <a href="/the-roof-docs/#/inspection">free roof inspections</a> for homeowners looking to sell in Vienna. Talk to our team for more information.</p>
                    <h2>Storm- and Hail-Damaged Siding</h2>
                    <p>Has your siding taken storm or hail damage? If so, we can help. We'll gladly <a href="/the-roof-docs/#/blog/damage-covered">work with your insurance company</a> and provide you with the appropriate repair and replacement services.</p>
                    <h2>Issues Caused by Damaged Siding</h2>
                    <p>If your siding is damaged, you'll need repairs as quickly as possible to avoid major issues like:</p>
                    <ul>
                        <li>Interior and exterior leaks</li>
                        <li>Broken wood, shingles and other debris</li>
                        <li>Rusting</li>
                        <li>Wood rot</li>
                        <li>Pooling water</li>
                    </ul>
                    <h2>The Roof Inspection Process</h2>
                    <p>Are you new to Roof-ER's inspection services? You can expect us to:</p>
                    <ol>
                        <li>Thoroughly inspect your roof and/or siding for damage.</li>
                        <li>Diagnose any problem we discover.</li>
                        <li>Take you through the restoration process required to restore your roof or siding.</li>
                        <li>Complete all necessary repairs or replacements quickly and efficiently.</li>
                    </ol>
                    <h2>Free Roof Inspection in Vienna, VA</h2>
                    <p>For a free roof inspection in Vienna,&nbsp;<a href="/the-roof-docs/#/inspection">contact us online</a>&nbsp;or give us a call at <a href="tel:7032393738">703-239-3738!</a></p>
                </div>
            </div>
        </div>
    </>
};

export default Vienna;