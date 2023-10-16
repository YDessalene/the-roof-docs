import './Process.css';
import '../../../App.css';
import base64Images from '../../../assets/base64-images.config.json';
import halfLogo from '../../../assets/work/half-logo.png';
import inspect from '../../../assets/work/inspect.png';

const Process = () => {
    const imageMap = base64Images;
    
    return <>
        <div class="our-work-container">
            <div class="work-banner">
                <div class="work-banner-text-container">
                    <p class="banner-text-small"> OUR PROCESS </p>
                    <p class="banner-text-large"> Simplified for Exceptional Service </p>
                </div><img class="banner-icon" src={imageMap.pointUp} alt="Banner Up" />
            </div>
            <div class="work-process-container">
                <div class="work-process-banner">
                    <p class="main-text"> OUR FOUR STEP PROCESS </p>
                    <p class="small-text"> A standard approach to every job ensures a quality restoration </p>
                </div>
                <div class="work-process-content">
                    <div class="work-item-container">
                        <div class="work-item-icon-container">
                            <img src={inspect} alt="Inspect" />
                        </div>
                        <div class="work-item-info-container">
                            <p class="step-header"> 1. Inspect </p>
                            <p class="step-info"> ROOF<span class="logo-text">ER</span> will perform a FREE inspection of your roof, siding, and gutters to find evidence of wind, hail, or other damage. </p>
                            <div class="work-step-item-container">
                                <img alt="icon" src={halfLogo} />
                                <p> You will be notified once we arrive (no direct contact required) </p>
                            </div>
                            <div class="work-step-item-container">
                                <img alt="icon" src={halfLogo} />
                                <p> We will take all necessary safety precautions prior to performing the inspection </p>
                            </div>
                            <div class="work-step-item-container">
                                <img alt="icon" src={halfLogo} />
                                <p> Next, we'll complete our free inspection using our custom Field - App to determine the condition of your exterior systems </p>
                            </div>
                        </div>
                    </div>
                    <div class="work-item-container">
                        <div class="work-item-icon-container">
                            <img src={imageMap.diagnose} alt="Diagnose" />
                        </div>
                        <div class="work-item-info-container">
                            <p class="step-header"> 2. Diagnose </p>
                            <p class="step-info"> ROOF<span class="logo-text">ER</span> and your Roof Doc will properly assess all findings to determine whether your exterior systems are storm-damaged, old, or perfectly fine. </p>
                            <div class="work-step-item-container">
                                <img alt="icon" src={halfLogo} />
                                <p> Our Field-app goes through a step-by-step checklist to ensure we gather all the information needed to properly assess your roof, siding, &amp; gutter systems  </p>
                            </div>
                            <div class="work-step-item-container">
                                <img alt="icon" src={halfLogo} />
                                <p> The items we look for include wind and hail damage, weathering effects, faulty installation methods, etc. </p>
                            </div>
                            <div class="work-step-item-container">
                                <img alt="icon" src={halfLogo} />
                                <p> Upon synthesizing our findings, we will determine our recommended course of action: a repair or replacement, an insurance claim for storm damage, or a simple sign off that your exterior is in good shape for a few more years! </p>
                            </div>
                        </div>
                    </div>
                    <div class="work-item-container">
                        <div class="work-item-icon-container">
                            <img src={imageMap.prescribe} alt="Prescribe" />
                        </div><div class="work-item-info-container">
                            <p class="step-header"> 3. Prescribe </p>
                            <p class="step-info"> Your Roof Doc will provide you with an honest recommendation based on their findings. </p>
                            <div class="work-step-item-container">
                                <img alt="icon" src={halfLogo} />
                                <p> Property insurance claim: if ROOF<span class="logo-text">ER</span> finds storm-related damage to your roof, siding, or gutters, we may recommend filing a claim with your insurance company. You can learn more about this process by visiting our <a href="/the-roof-docs/#/faqs"><span class="roofDocsRed">FAQs page</span> </a> </p>
                            </div>
                            <div class="work-step-item-container">
                                <img alt="icon" src={halfLogo} />
                                <p> Repair/replacement: often times, homeowners ask us to inspect their property because they're aware of an issue already. In these cases, our Roof Docs are experts at deciding exactly what needs done to ensure those problems are addressed </p>
                            </div>
                            <div class="work-step-item-container">
                                <img alt="icon" src={halfLogo} />
                                <p> Good/great condition: even if your roof/siding/gutters were installed quite a few years ago, there's a chance they have maintained their useful life and will remain serviceable for a few more years. We pride ourselves on providing honest recommendations to our homeowners - we won't sell you what you don't need! </p>
                            </div>
                        </div>
                    </div>
                    <div class="work-item-container">
                        <div class="work-item-icon-container">
                            <img src={imageMap.operate} alt="Operate" />
                        </div>
                        <div class="work-item-info-container">
                            <p class="step-header"> 4. Operate </p>
                            <p class="step-info"> If your roof, siding, or gutters are found to have an ailment, the last step is to review project details with your Roof Doc and let ROOF<span class="logo-text">ER</span>'s install team take care of the rest.  </p>
                            <div class="work-step-item-container">
                                <img alt="icon" src={halfLogo} />
                                <p> If work is required, we will do our best to educate you on all of your options, focusing on how to provide you with the most value </p>
                            </div>
                            <div class="work-step-item-container">
                                <img alt="icon" src={halfLogo} />
                                <p> Our Roof Docs can recommend colors &amp; products based on your style of home and your preferences. The best part? Our pricing is 100% haggle-free </p>
                            </div>
                            <div class="work-step-item-container">
                                <img alt="icon" src={halfLogo} />
                                <p> Once the project details have been completed, our production team takes over and our factory-certified installers deliver a professional remodeling project! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Process;