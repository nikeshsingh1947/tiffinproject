import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Food from "./Food";
import Category from "./Category";
import Footer from "./Footer";

export const Home=()=>{
    return(
        <div>
        <Navbar/>
        <Hero />
      <Card />
      <Food />
      <Category />
      <Footer/>
      </div>
    )
}