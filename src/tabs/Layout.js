import './Layout.css';
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import base64Images from '../assets/base64-images.config.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Layout = ({navItems}) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = (width <= 850);
  const imageMap = base64Images;

  function handleView() {
    if (isMobile) {
      return mobileView();
    } else {
      return browserView();
    }
  }

  function mobileView() {
    return <FontAwesomeIcon icon={faBars} />
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
      <div className='navigation'>
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
    </>
  )
};

export default Layout;