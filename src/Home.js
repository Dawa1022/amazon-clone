import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/610o4Ny9RFL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="758689"
            title="Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition"
            price={24.49}
            image="https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="615197"
            title='Kurrajong Farmhouse Artificial Plant in Pot - 8" x 4.5" - Beautiful feaux Plant, Faux Plants Indoors, Artificial Succulents Plants for Living Room Decor'
            price={28.95}
            image="https://m.media-amazon.com/images/I/61N75+TiM3L._AC_SL1424_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="598443"
            title="Bose Lifestyle 650 Home Entertainment System, works with Alexa - Black"
            price={3999.0}
            image="https://m.media-amazon.com/images/I/71yCuyhzg7L._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="214226"
            title="Goodthreads Men's Lambswool V-Neck Sweater"
            price="35.90"
            image="https://m.media-amazon.com/images/I/A16sJcFVu6L._AC_SX679._SX._UX._SY._UY_.jpg"
            rating={5}
          />
          <Product
            id="282117"
            title="Luxja Carrying Bag for DR.J Mini Projector, Portable Case for Mini Projector and Accessories (Fits Most Major Mini Projectors), Black"
            price="19.99"
            image="https://m.media-amazon.com/images/I/819HUi7OSpL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="785582"
            title='LG LED Monitor 34" Curved UltraWide WQHD (3840 x 1440) IPS Display, 99% Color Accuracy, Immersive, Detailed Contrast, USB-C, Anti-Glare, Adjustable - Black'
            price="652.93"
            image="https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
