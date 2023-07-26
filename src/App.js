
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PickBike from "./Components/PickBike/PickBike";
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import BookBike from './Components/BookBike/BookBike';
import FaQ from './FaQ/FaQ';
import PlanTrip from './Components/PlanTrip/PlanTrip';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <BookBike/>
      <PlanTrip/>
      <PickBike/>
      <Banner/>
      {/* <ChooseUs/>
      <Testimonials/> */}
      <FaQ/>
      {/* <Download/>
      <Footer/> */}
      
    </div>
  )
}
  


export default App;
