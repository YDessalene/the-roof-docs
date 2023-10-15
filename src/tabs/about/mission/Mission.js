import './Mission.css';
import '../../../App.css';
import base64Images from '../../../assets/base64-images.config.json';
import integrity from '../../../assets/about/integrity.png';
import quality from '../../../assets/about/quality.png';
import simplicity from '../../../assets/about/simplicity.png';
import googleLogo from '../../../assets/googleLogo.png';

const Mission = () => {
    const imageMap = base64Images;

    return <>
        <div class="mission-container">
            <div class="mission-banner">
                <div class="mission-banner-text-container">
                    <p class="banner-text-small"> Our Mission? </p>
                    <p class="banner-text-large"> To Raise the Standard for Roofing Contractors  </p>
                </div>
                <img class="banner-icon" src={imageMap.pointUp} alt="Banner Icon Up" />
            </div>
            <div class="work-process-container">
                <div class="work-process-content">
                    <div class="work-item-container">
                        <div class="work-item-info-container">
                            <p class="step-header"> The ROOF<span style={{ color: "black" }}>ER</span> Mission </p>
                            <p class="step-info"> At <a href="/the-roof-docs">ROOF<span class="logo-text">ER</span></a>, our mission is to hold a fiduciary responsibility to our customers, plain and simple. In an industry known for poor workmanship, lack of communication, and at times, <a href="/the-roof-docs/#/blog/avoiding-roofing-scams">outright deceit</a>, we seek to restore the name of exterior remodeling contractors nationwide. By committing to our core values of integrity, quality, and simplicity, we promise to deliver an experience every homeowner wants when remodeling their home: <span class="step-info-bold">a simple and straightforward quality installation for a fair and honest price.</span>  </p>
                        </div>
                    </div>
                </div>
                <div class="work-process-content">
                    <div class="work-item-container">
                        <div class="work-item-info-container">
                            <p class="step-header"> Our Values </p>
                        </div>
                    </div>
                    <div class="work-item-container">
                        <div class="work-item-icon-container">
                            <img src={integrity} alt="Integrity" />
                        </div>
                        <div class="work-item-info-container">
                            <p class="step-header"> 1. INTEGRITY  </p>
                            <p class="step-info"> Great businesses are built on trust: trust in the people, the process, and the product. ROOF<span class="roofDocsRed">ER</span>'s commitment to integrity starts with our training methods and continues through our final quality inspection.  Customers know what to expect from us and as a result, are confident in referring us to their friends and family.  ROOF<span class="roofDocsRed">ER</span> is proud to say 90% of our new customers are referrals.</p>
                        </div>
                    </div>
                    <div class="work-item-container">
                        <div class="work-item-icon-container">
                            <img src={quality} alt="Quality" />
                        </div>
                        <div class="work-item-info-container">
                            <p class="step-header"> 2. QUALITY  </p>
                            <p class="step-info"> Sustainability doesn't come through shortcuts.  By focusing on quality from start-to-finish, ROOF<span class="roofDocsRed">ER</span> is quickly becoming the premier roofing contractor in <a href="/the-roof-docs/#/areas/tysons"> Northern Virginia </a> and Maryland for those customers looking for a restoration project done right.  Whether it is our detailed inspections or our quality assurance protocol, we focus on every last detail to ensure our customers know they've received the best service available.</p>
                        </div>
                    </div>
                    <div class="work-item-container">
                        <div class="work-item-icon-container">
                            <img src={simplicity} alt="Simplicity" />
                        </div>
                        <div class="work-item-info-container">
                            <p class="step-header"> 3. SIMPLICITY  </p>
                            <p class="step-info"> Complexity = chaos.  After a storm, this equation has the potential to become even worse. ROOF<span class="roofDocsRed">ER</span> understands what homeowners want most after noticing an issue with their home’s exterior: peace of mind. Leveraging technology and emphasizing simplicity allows ROOF<span class="roofDocsRed">ER</span> to offer an unrivaled value proposition: an expert restoration project with minimal headaches.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="google-reviews-background">
                <div class="reviews-content">
                    <p class="success-text"> Why we do it </p>
                    <p class=" success-subheader"> Our customers are our reason. Read our Roof-ER reviews.</p>
                    <div class="reviews-holder">
                        <div class="reviews-arrow-container left">
                            <img id="left" src={imageMap.arrowLargeLeft} alt="Previous" />
                        </div>
                        <div class="google-reviews-list">
                            <div class="review">
                                <div class="review-user-info">
                                    <div class="review-photo-container">
                                        <img src="https://lh5.googleusercontent.com/-2IUCuvLe7ls/AAAAAAAAAAI/AAAAAAAAAAA/Ezgb9rM7DTA/c-rp-mo-br100/photo.jpg" alt="Profile" />
                                    </div>
                                    <div class="review-name-rating-container">
                                        <p class="review-name"> Shahram Y </p>
                                        <div class="star-rating-container">

                                        </div>
                                    </div>
                                </div>
                                <div class="review-comment-container">
                                    <div class="LinesEllipsis">A very efficient business . Mike and Oliver, the owners are very helpful and persistent. If there is an issue they take care of it promptly whether it's with regards to your insurance or the roof. I definitely recommend the company 100%.<wbr /></div>
                                </div>
                            </div>
                            <div class="review" id="review2">
                                <div class="review-user-info">
                                    <div class="review-photo-container">
                                        <img src="https://lh5.googleusercontent.com/-C-LuzbSBhI0/AAAAAAAAAAI/AAAAAAAAAAA/9u18MyOtdaU/c-rp-mo-br100/photo.jpg" alt="Profile" />
                                    </div>
                                    <div class="review-name-rating-container">
                                        <p class="review-name"> Mike G </p>
                                        <div class="star-rating-container">
                                            <div class="star"></div>
                                            <div class="star">
                                            </div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-comment-container">
                                    <div class="LinesEllipsis">RoofER is a great company that provides great service with excellent workmanship. My roof was removed and replaced in a single day. Would recommend this company to my friends and family.<wbr /></div>
                                </div>
                            </div>
                        </div>
                        <div class="reviews-arrow-container right">
                            <img id="right" src={imageMap.arrowLargeRight} alt="Next" />
                        </div>
                    </div>
                    <a className="social-review-icons" href='https://www.google.com/search?q=theroofdocs#lrd=0x89b64b2fcb5573a1:0xe08c3a8b88ee6d4d,1,,,,' rel="noopener noreferrer" target="_blank">
                        <img src={googleLogo} alt="Google" />
                    </a>
                </div>
            </div>
        </div>
    </>
};

export default Mission;