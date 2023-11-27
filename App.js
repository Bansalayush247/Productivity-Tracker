import './App.css';
import Intro from './components/Intro';
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import FAQs from "./components/FAQsSection/FAQsSection";
import FeatureSection from './components/featureSection/featureSection'
import About from './src/components/About';
import ReviewCard from './components/reviewCard/reviewCard'

function App() {
  return (
<>
<Navbar></Navbar>
<Intro></Intro>
<About></About>
<FAQs/>
<FeatureSection />
    <ReviewCard />
    <Contact />
</>
 );
}

export default App;
