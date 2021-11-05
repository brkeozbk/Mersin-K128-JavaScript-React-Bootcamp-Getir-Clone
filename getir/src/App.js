import Header from "components/Header";
import HeroSection from "components/HeroSection";
import Categories from "components/Categories";
import Favorites from "components/Favorites";
import Footer from "components/Footer";
import Card from "components/Card";
import MobileApp from "components/MobileApp";
import Campaigns from "components/Campaigns";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Product } from "components/Product";





function App() {
  return (
    <>
      
      
     


      <Router>
       <Switch>

      <Route exact path="/"> 

      <Header />
      <HeroSection />
      <Categories /> 
      <Favorites />
      <Campaigns />
      <Footer />
      <Card />
      <MobileApp />

      </Route>

      </Switch>
      
   <Switch>
      <Route exact path="/category/:id" component={Product}> 
      <Header />
      <Campaigns />
      </Route>
      </Switch>
      </Router>
      
     
      
      
    


    </>
  );
}

export default App;
