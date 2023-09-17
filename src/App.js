import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import pathConfig from './paths.config.json';
import Home from './tabs/home/Home';
import NoPage from './tabs/no-page/NoPage';
import Layout from './tabs/Layout';
import Mission from './tabs/about/mission/Mission';
import Docs from './tabs/about/docs/Docs';
import Fairfax from './tabs/about/fairfax/Fairfax';
import Gaithersburg from './tabs/about/gaithersburg/Gaithersburg';
import Tysons from './tabs/about/tysons/Tysons';
import Vienna from './tabs/about/vienna/Vienna';
import Process from './tabs/work/process/Process';
import RoofRepair from './tabs/work/roof-repair/RoofRepair';
import RoofReplacement from './tabs/work/roof-replacement/RoofReplacement';
import SidingReplacement from './tabs/work/siding-replacement/SidingReplacement';
import Gutters from './tabs/work/gutters/Gutters';
import Gallery from './tabs/work/gallery/Gallery';
import Inspection from './tabs/inspection/Inspection';
import FAQs from './tabs/faqs/FAQs';
import Blog from './tabs/blog/Blog';

function App() {
  const [navPaths, setNavPaths] = useState([]);
  const paths = pathConfig;

  useEffect(() => {
    const navMap = {
      'mission': <Mission />,
      'docs': <Docs />,
      'areas/fairfax': <Fairfax />,
      'areas/gaithersburg': <Gaithersburg />,
      'areas/tysons': <Tysons />,
      'areas/vienna': <Vienna />,
      'process': <Process />,
      'services/roofrepair': <RoofRepair />,
      'services/roofreplacement': <RoofReplacement />,
      'services/sidingreplacement': <SidingReplacement />,
      'services/gutters': <Gutters />,
      'gallery': <Gallery />,
      'inspection': <Inspection />,
      'faqs': <FAQs />,
      'blog': <Blog />
    }
    
    const routes = [];
    for (const section of paths) {
      if (section.path) {
        routes.push(<Route path={section.path} element={navMap[section.path]} />)
      } else {
        for (const page of section.values) {
          if (page.path) {
            routes.push(<Route path={page.path} element={navMap[page.path]} />)
          } else {
            for (const nestedPage of page.values) {
              routes.push(<Route path={nestedPage.path} element={navMap[nestedPage.path]} />)
            }
          }
        }
      }
    }
    setNavPaths(routes);
  }, [paths]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout navItems={paths} />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="inspection" element={< Inspection />} />
          {navPaths}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
