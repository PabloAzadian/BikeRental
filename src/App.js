
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PickBike from "./Components/PickBike/PickBike";
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import BookBike from './Components/BookBike/BookBike';
import FaQ from './Components/FaQ/FaQ';
import PlanTrip from './Components/PlanTrip/PlanTrip';
import Banner from './Components/Banner/Banner';
import Testimonials from './Components/Testimonials/Testimonials';
import DownloadApp from './Components/DownloadApp/DownloadApp';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <BookBike/>
      <PlanTrip/>
      <PickBike/>
      <Banner/>
      {/* <ChooseUs/>*/}
      <FaQ/>
      <Testimonials/> 
      <DownloadApp/>
      <Footer/>
      
    </div>
  )
}
  


export default App;
