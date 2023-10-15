import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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
import BlogShingles from './tabs/blog/architectural-shingles/BlogShingles';
import BlogScams from './tabs/blog/avoiding-roofing-scams/BlogScams';
import BlogTime from './tabs/blog/best-time/BlogTime';
import BlogNewRoofTime from './tabs/blog/best-time-for-new-roof/BlogNewRoofTime';
import BlogCovered from './tabs/blog/damage-covered/BlogCovered';
import BlogNewRoof from './tabs/blog/getting-a-new-roof/BlogNewRoof';
import BlogHail from './tabs/blog/hail-damage/BlogHail';
import BlogHardboard from './tabs/blog/hardboard-siding/BlogHardboard';
import BlogHorizVsVer from './tabs/blog/horizontal-versus-vertical-siding/BlogHorizVsVer';
import BlogIceWater from './tabs/blog/ice-water-shield/BlogIceWater';
import BlogGutters from './tabs/blog/protecting-gutters/BlogGutters';
import BlogContractor from './tabs/blog/right-contractor/BlogContractor';
import BlogSiding from './tabs/blog/right-siding/BlogSiding';
import BlogFlashing from './tabs/blog/roof-flashing/BlogFlashing';
import BlogVentilation from './tabs/blog/roof-ventilation/BlogVentilation';
import BlogCleanUp from './tabs/blog/roofing-clean-up/BlogCleanUp';
import BlogFelt from './tabs/blog/roofing-felt/BlogFelt';
import BlogSquare from './tabs/blog/roofing-square/BlogSquare';
import BlogVents from './tabs/blog/soffit-vents/BlogVents';

function App() {
  const [navPaths, setNavPaths] = useState([]);
  const paths = pathConfig;
  const blogs = ['blog/architectural-shingles', 'blog/avoiding-roofing-scams', 'blog/best-time', 'blog/best-time-for-new-roof', 'blog/damage-covered', 'blog/roofing-felt',
    'blog/getting-a-new-roof', 'blog/hail-damage', 'blog/hardboard-siding', 'blog/horizontal-versus-vertical-siding', 'blog/ice-water-shield', 'blog/roofing-square',
    'blog/protecting-gutters', 'blog/right-contractor', 'blog/right-siding', 'blog/roof-flashing', 'blog/roof-ventilation', 'blog/roofing-clean-up', 'blog/soffit-vents'];

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
      'blog': <Blog />,
      'blog/architectural-shingles': <BlogShingles />,
      'blog/avoiding-roofing-scams': <BlogScams />,
      'blog/best-time': <BlogTime />,
      'blog/best-time-for-new-roof': <BlogNewRoofTime />,
      'blog/damage-covered': <BlogCovered />,
      'blog/getting-a-new-roof': <BlogNewRoof />,
      'blog/hail-damage': <BlogHail />,
      'blog/hardboard-siding': <BlogHardboard />,
      'blog/horizontal-versus-vertical-siding': <BlogHorizVsVer />,
      'blog/ice-water-shield': <BlogIceWater />,
      'blog/protecting-gutters': <BlogGutters />,
      'blog/right-contractor': <BlogContractor />,
      'blog/right-siding': <BlogSiding />,
      'blog/roof-flashing': <BlogFlashing />,
      'blog/roof-ventilation': <BlogVentilation />,
      'blog/roofing-clean-up': <BlogCleanUp />,
      'blog/roofing-felt': <BlogFelt />,
      'blog/roofing-square': <BlogSquare />,
      'blog/soffit-vents': <BlogVents />
    }
    
    const routes = [];
    for (const section of paths) {
      if (section.path) {
        routes.push(<Route path={section.path} element={navMap[section.path]} />);
      } else {
        for (const page of section.values) {
          if (page.path) {
            routes.push(<Route path={page.path} element={navMap[page.path]} />);
          } else {
            for (const nestedPage of page.values) {
              routes.push(<Route path={nestedPage.path} element={navMap[nestedPage.path]} />);
            }
          }
        }
      }
    }
    for (const blog of blogs) {
      routes.push(<Route path={blog} element={navMap[blog]} />);
    }
    setNavPaths(routes);
  }, [paths]);

  return (
    <Routes>
      <Route exact path="/" element={<Layout navItems={paths} />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
        <Route path="inspection" element={< Inspection />} />
        {navPaths}
      </Route>
    </Routes>
  );
}

export default App;
