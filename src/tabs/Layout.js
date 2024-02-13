import './Layout.css';
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import base64Images from '../assets/base64-images.config.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import rooferLogoWhite from '../assets/home/rooferLogoWhite.png';
import homeAdvisorLogo from '../assets/home/homeAdvisorLogo.png';
import certLogoFooter from '../assets/home/certLogoFooter.png';
import { Drawer } from '@mui/material';

const Layout = ({navItems}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = (width < 1100);
  const imageMap = base64Images;

  function handleView() {
    if (isMobile) {
      return mobileView();
    } else {
      return browserView();
    }
  }

  function mobileView() {
    return <div>
      <FontAwesomeIcon className='navigation-icon' icon={faBars} onClick={() => setOpen(true)}/>
      <Drawer sx={{'& .MuiPaper-root': {height: 'auto'}}} anchor='right' open={isOpen} onClose={() => setOpen(false)}>
        <div>test</div>
      </Drawer>
    </div>
  }

  function browserDropdown(item) {
    if (item.values) {
      const dropdownItems = [];
      for (const path of item.values) {
        dropdownItems.push(browserDropdown(path));
      }
      return <>
        <div className={`navigation-item ${item.classValue}`}>
          {item.title}
          <div className='nav-dropdown'>{dropdownItems}</div>
        </div>
      </>
    } else {
      return <a href={`/the-roof-docs/#/${item.path}`} className='navigation-item'>{item.title}</a>
    }
  }

  function browserView() {
    const titles = [];
    for (const item of navItems) {
      titles.push(<span className='navigation-item'>{browserDropdown(item)}</span>)
      titles.push(<img src={imageMap.slash} alt="Separator" />)
    }
    return <>
      <div>
        {titles}
        <a href="https://portal.theroofdocs.com/" className='navigation-item'>SIGN IN</a>
      </div>
      <a href="/the-roof-docs/#/inspection">
        <button className='inspection-button'>get a free inspection</button>
      </a>
    </>
  }

  return (
    <>
      <div className={`navigation ${!isOpen ? 'navigation-pos' : ''}`}>
        <div className="nav-info-bar">
          <div class="sm-icon facebook-icon">
            <a href="https://www.facebook.com/theroofdocs/" target="_blank" rel="noopener noreferrer">
              <img src={imageMap.facebook} alt="facebook" />
            </a>
          </div>
          <div class="sm-icon linked-in-icon">
            <a href="https://www.linkedin.com/company/the-roof-docs-llc/" target="_blank" rel="noopener noreferrer">
              <img src={imageMap.linkedIn} alt="linked-in" />
            </a>
          </div>
          <div class="contact-icon">
            <a href="tel:7032393739" rel="noopener noreferrer">
              <img src={imageMap.phone} alt="Call" /><label> 703-239-3738</label>
            </a>
          </div>
          <div class="contact-icon">
            <a href="mailto:info@theroofdocs.com" rel="noopener noreferrer">
              <img src={imageMap.mail} alt="Email" /><label> info@theroofdocs.com</label>
            </a>
          </div>
        </div>

        <div class="nav-link-container">
          <div class="navigation-logo-container">
            <a aria-current="page" href="/the-roof-docs">
              <div class="navigation-item navigation-logo">
                <img alt="logo" src={imageMap.logo} height={80} width={140}/>
              </div>
            </a>
          </div>
          <div className="navigation-items-container">
            {handleView()}
          </div>
        </div>
      </div>
      <Outlet />
      <div className='footer'>
        <div class="footer-banner">
          <div class="footer-content">
            <div class="footer-contact">
              <img class="footer-logo-image" src={rooferLogoWhite} alt="Footer Logo" />
              <div class="footer-contact-icon phone">
                <a href="tel:7032393739" rel="noopener noreferrer">
                  <img src={imageMap.phoneWhite} alt="phone" />
                  <label> 703-239-3738</label>
                </a>
              </div>
              <div class="footer-contact-icon email">
                <a href="mailto:info@theroofdocs.com" rel="noopener noreferrer">
                  <img src={imageMap.mailWhite} alt="email" />
                  <label> info@theroofdocs.com</label>
                </a>
              </div>
              <div class="footer-contact-icon map">
                <a href="https://www.google.com/maps?cid=16180371932207541581&amp;hl=en" rel="noopener noreferrer">
                  <img src={imageMap.mapWhite} alt="map" />
                  <label> 8100 Boone Blvd, Suite 400<br/>Tysons, VA 22182</label>
                </a>
              </div>
              <p class="footer-license-text "> Class A Virginia License #2705169915 </p>
              <p class="footer-license-text bottom"> MHIC License # 137412 </p>
            </div>
            <div class="footer-services">
              <h3> Our Services </h3>
              <a href="/the-roof-docs/#/services/roofreplacement">
                <p> <span class="service-icon"> + </span> Roofing </p>
              </a>
              <a href="/the-roof-docs/#/services/sidingreplacement">
                <p> <span class="service-icon"> + </span> Siding </p>
              </a>
              <a href="/the-roof-docs/#/services/gutters">
                <p> <span class="service-icon"> + </span> Gutters </p>
              </a>
              <a href="/the-roof-docs/#/inspection">
                <p> <span class="service-icon"> + </span> Inspections </p>
              </a>
              <a href="/the-roof-docs/#/faqs">
                <p> <span class="service-icon"> + </span> FAQs </p>
              </a>
              <a href="https://portal.theroofdocs.com/" rel="noopener noreferrer" target="_blank">
                <p><span class="service-icon"> + </span> Sign In </p>
              </a>
            </div>
            <div class="footer-social">
              <div class="social-links">
                <a href="https://www.facebook.com/theroofdocs/" rel="noopener noreferrer" target="_blank">
                  <img src={imageMap.facebookWhite} alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/company/the-roof-docs-llc/" rel="noopener noreferrer" target="_blank">
                  <img src={imageMap.linkedInWhite} alt="LinkedIn" />
                </a>
              </div>
              <div class="certs">
                <img src={certLogoFooter} alt="GAF" />
                <a href="https://www.homeadvisor.com/rated.RoofER.85269159.html" rel="noopener noreferrer" target="_blank">
                  <img src={homeAdvisorLogo} alt="HomeAdvisor" />
                </a>
              </div>
            </div>
          </div>
          <img class="banner-icon" src={imageMap.pointDown} alt="Banner Icon" />
        </div>
        <div class="footer-copyright">
          <p class="copyright-text"> Copyright © 2023 RoofER </p>
          <p class="copyright-text"> | </p>
          <a class="policy-text" href="/privacy"> Privacy Policy </a>
        </div>
      </div>
    </>
  )
};

export default Layout;