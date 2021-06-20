import React from 'react';
import Products from '../screens/products';
import './home.css';

function Home() {
    return (
        <div className="home">
            <div className="home-container">          
              <img  className="home-image" src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2021/TV/BRND/BRND_MTH21_GWBleedingHero_1500x600_Final_en-CA_FT_PVD6862._CB670220811_.jpg" alt="prime"/>
              <div className="home-row">
                <Products 
                id="p1"
                 title="iQOO 7 Legend 5G (Legendary Track Design, 12GB RAM, 256GB Storage)|Upto 9 Months NCEMI| 3GB Extended RAM"
                 price= {20000}
                 image="https://images-na.ssl-images-amazon.com/images/I/61Q%2BwdoRfRS._SX679_.jpg"/>
                 <Products
                id="p2"
                 title="OnePlus 9R 5G (Lake Blue, 12GB RAM, 256GB Storage)"
                 price= {43000}
                 image="https://images-na.ssl-images-amazon.com/images/I/61IwksZ-DGL._SX679_.jpg"/>
              </div>
              <div className="home-row col-md-6">
              <Products
                id="p3"
                 title="VROJASS Men's Solid Regular Jacket"
                 price={1234}
                 image="https://m.media-amazon.com/images/I/417esxg0c3L.jpg"/>
                 <Products
                id="p4"
                 title="Endeavor Men's Synthetic Jacket"
                 price={1234}
                 image="https://images-na.ssl-images-amazon.com/images/I/81kCcnbGwCL._UL1500_.jpg"/>
                <Products
                id="p5"
                 title="Endeavor Men's Quilted Jacket"
                 price={1400}
                 image="https://m.media-amazon.com/images/S/aplus-media/sota/85daba8e-11d7-4320-9c45-3c0138a9e519._CR0,0,300,300_PT0_SX300__.jpg"/>
              </div>
              <div className="home-row">
              <Products
                id="p6"
                 title="LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray) (2020 Model)"
                 price={16400}
                 image="https://images-na.ssl-images-amazon.com/images/I/71uKCdULRgL._SL1500_.jpg"/>
              </div>
              
            </div>
        </div>
    )
}

export default Home
