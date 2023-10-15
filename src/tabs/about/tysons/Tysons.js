import './Tysons.css';
import '../../../App.css';
import base64Images from '../../../assets/base64-images.config.json';

const Tysons = () => {
    const imageMap = base64Images;

    return <>
        <div class="services-container">
            <div class="services-banner">
                <div class="services-banner-text-container">
                    <p class="banner-text-small"> Roofing Services in Tysons </p>
                    <p class="banner-text-large"> Roof-ER are the roofing experts in Tysons, VA </p>
                </div>
                <img class="banner-icon" src={imageMap.pointUp} alt="Banner Icon Up" />
            </div>
            <div class="services-template-container">
                <div class="services-template-content">
                    <h1>Roof Repair and Replacement Services in Tysons</h1>
                    <p class="main-text">When your roof gets damaged in a storm, it's time to call Roof-ER. <a href="/the-roof-docs/#/docs">Our team</a>&nbsp;has years of experience in repairing and replacing residential roofs in Tysons, VA <a href="/the-roof-docs/#/areas/vienna"> and beyond</a>, and we can work with any type of roofing system. Whether you need <a href="/the-roof-docs/#/blog/architectural-shingles">shingle replacements</a> following a severe wind storm or an <a href="/the-roof-docs/#/services/roofreplacement">entire roof replacement</a> due to extensive water damage, our Roof Docs are here to restore your roof for only the cost of your deductible.</p>
                    <h2>Roof Repair in Tysons</h2>
                    <p class="main-text">As a&nbsp;<a href="/the-roof-docs/#/services/roofrepair">roof repair company serving Tysons, VA</a>, we pride ourselves on our <a href="/the-roof-docs/#/mission">reputation for excellence</a> in fast, thorough repair services. We offer free inspections and roof repairs for Tysons customers at an affordable price point, and our <a href="/the-roof-docs/#/services/roofrepair">repair services</a> cover damage caused by:</p>
                    <ul>
                        <li>Hail</li>
                        <li>Wind</li>
                        <li>Water from severe storms</li>
                        <li>Unforeseen circumstances, such as fallen tree limbs</li>
                    </ul>
                    <p>When your roof is damaged, it's an emergency! You need to have it inspected and repaired immediately to keep yourself safe from worsening damage. Fortunately, the ER roofing company is here to help.</p>
                    <h2>Common Roof Types in Tysons</h2>
                    <p>In Tysons, we provide&nbsp;<a href="/the-roof-docs/#/services/roofreplacement">roof replacement</a>&nbsp;and repair services for a variety of roof types. This region's most common roof types include:</p>
                    <ul>
                        <li>Asphalt shingle roofs, including three-tab, luxury and dimensional (architectural or laminate) shingles</li>
                        <li>Metal roofs</li>
                        <li>Wood shake or shingle roofs</li>
                    </ul>
                    <p>Roof-ER specializes in top-quality asphalt shingle replacements in the Tysons area. We can also service any architectural style of roof, from flat to Victorian.</p>
                    <h2>The Housing Market in Tysons</h2>
                    <p>Are you looking to sell your house? If so, it's crucial that you make sure your home is in excellent condition — especially your roof. Many homeowners overlook their roofing needs during the stress of putting their home on the market, but undetected damage can turn into an obstacle in the way of closing a deal.</p>
                    <p>Roof-ER offers <a href="/the-roof-docs/#/inspection">free inspections</a> for roofs, siding and gutters before any repair or replacement service. We'll fully assess your roof's condition before performing repair or replacement services. Plus, we repair and replace most types of roofs quickly, so you can focus on optimizing your home's value.</p>
                    <p>Roof replacements <a href="https://www.irs.gov/pub/irs-pdf/i5695.pdf">can be tax deductible</a> if they&nbsp;make your home more sustainable, as outlined by the IRS's energy-efficient home improvement guidelines. You could qualify for a federal tax deduction of up to 10% if your roof replacement meets the following criteria:</p>
                    <ul>
                        <li>It's for your main residence.</li>
                        <li>It's not for a new home or rental property.</li>
                        <li>It's a reflective roof.</li>
                    </ul>
                    <p>In any case, you'll want to consult a tax expert to fully understand your eligibility for this tax deduction.</p>
                    <h2>Siding Replacement</h2>
                    <p>We also offer&nbsp;<a href="/the-roof-docs/#/services/sidingreplacement">siding replacement</a>&nbsp;and free siding inspections for our Tysons customers. Whether your roof and siding needs a free hail damage inspection after a storm or a full-blown replacement, we can handle it.</p>
                    <p>Maintaining your siding is a critical part of protecting your home from weather damage. Let Roof-ER handle your siding issues so that your home stays in excellent condition all year long.</p>
                    <h2>Free Roof Inspection in Tysons</h2>
                    <p>When it comes to your home, skimping on maintenance is never a good option. Sign up for a&nbsp;<a href="/the-roof-docs/#/inspection">free roof inspection</a>&nbsp;today and call us at <a href="tel:+17032393738">703-239-3738</a>!</p>
                </div>
            </div>
        </div>
    </>
};

export default Tysons;