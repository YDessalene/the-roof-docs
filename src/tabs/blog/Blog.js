import './Blog.css';
import '../../App.css';
import base64Images from '../../assets/base64-images.config.json';

const Blog = () => {
    const imageMap = base64Images;

    return <>
        <div class="blog-container">
            <div class="blog-banner">
                <div class="blog-banner-text-container">
                    <p class="banner-text-small"> Blog </p>
                    <p class="banner-text-large">  Learn More About Roofing From Roof-ER </p>
                </div>
                <img class="banner-icon" src={imageMap.pointUp} alt="Banner Icon Up" />
            </div>
            <div class="blog-container">
                <div class="blog-content">
                    <a href="/the-roof-docs/#/blog/right-siding">
                        <div class="blog-post-card">
                            <p class="title"> Choosing the Right Vinyl Siding for Your Home </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/right-contractor">
                        <div class="blog-post-card">
                            <p class="title"> How to Find the Right Roofing Contractor </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/protecting-gutters">
                        <div class="blog-post-card">
                            <p class="title"> Protecting your Gutters from Storm Damage </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/best-time">
                        <div class="blog-post-card">
                            <p class="title"> When is the Best Time for Roofing Repairs or Replacements </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/hail-damage">
                        <div class="blog-post-card">
                            <p class="title"> What size hail will damage a roof </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/roofing-clean-up">
                        <div class="blog-post-card">
                            <p class="title"> Everything you need to know about roofing clean up </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/roofing-felt">
                        <div class="blog-post-card">
                            <p class="title"> What you need to know about roofing felt </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/roof-ventilation">
                        <div class="blog-post-card">
                            <p class="title"> When does a roof need ventilation? </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/roof-flashing">
                        <div class="blog-post-card">
                            <p class="title"> What is roof flashing? </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/ice-water-shield">
                        <div class="blog-post-card">
                            <p class="title"> What You Need To Know About Ice &amp; Water Shield </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/damage-covered">
                        <div class="blog-post-card">
                            <p class="title"> What Kind of Roof Damage Is Covered By Insurance? </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/avoiding-roofing-scams">
                        <div class="blog-post-card">
                            <p class="title"> How to Avoid Roofing Scams </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/roofing-square">
                        <div class="blog-post-card">
                            <p class="title"> What Is a Roofing Square? </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/hardboard-siding">
                        <div class="blog-post-card">
                            <p class="title"> What is Hardboard Siding? </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/horizontal-versus-vertical-siding">
                        <div class="blog-post-card">
                            <p class="title"> Horizontal vs. Vertical Siding </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/soffit-vents">
                        <div class="blog-post-card">
                            <p class="title"> What are Soffit Vents? </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/architectural-shingles">
                        <div class="blog-post-card">
                            <p class="title"> What are Architectural Shingles? </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/getting-a-new-roof">
                        <div class="blog-post-card">
                            <p class="title"> Getting A New Roof </p>
                        </div>
                    </a>
                    <a href="/the-roof-docs/#/blog/best-time-for-new-roof">
                        <div class="blog-post-card">
                            <p class="title"> The Best Time to Replace a Roof </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </>
};

export default Blog;