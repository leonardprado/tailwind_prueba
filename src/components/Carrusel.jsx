import React from 'react'
import roblox from '../assets/images/roblox.png'
import pokemones from '../assets/images/pokemones.png'
import wallaper1 from '../assets/images/HD-wallpaper-pc-gamer.jpg'
import seul from '../assets/images/seul-21116.mp4'

export default function Carrusel() {
  return (
    <>
<div className="flex justify-center w-full py-2 gap-2 z-10">
  <a href="#item1" className="btn">1</a> 
  <a href="#item2" className="btn">2</a> 
  <a href="#item3" className="btn">3</a> 
  <a href="#item4" className="btn">4</a>
</div>
    <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full z-20">
    <img src={roblox} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={pokemones} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={wallaper1} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <video autoPlay controls className="w-full">
    <source src={seul} type=" video/mp4"/>
    TuNavegador No Es Compatible con HTML5.
    </video> 
  </div>
</div> 
</>
  )
}
