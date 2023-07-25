
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PickBike from "./Components/PickBike/PickBike";
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import BookBike from './Components/BookBike/BookBike';

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <BookBike/>
      {/* <PickBike/> */}
    </div>
  )
}
  


export default App;
