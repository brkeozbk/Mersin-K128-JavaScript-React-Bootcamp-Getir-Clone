import Header from "components/Header";
import HeroSection from "components/HeroSection";
import Categories from "components/Categories";
import Favorites from "components/Favorites";
import Footer from "components/Footer";
import Card from "components/Card";
import MobileApp from "components/MobileApp";
import Campaigns from "components/Campaigns";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Product } from "components/Product";





function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Favorites />


      <Router>
        <Route  exact path="/">
      <Categories />
      </Route>
      <Route  exact path="/" component = {Product}>
      
      </Route>
      </Router>

      <Card />
      <MobileApp />
      <Campaigns />
      <Footer />
      
      {/* <Route>
        
      </Route> */}


    </>
  );
}

export default App;
