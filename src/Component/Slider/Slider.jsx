import React, { useState, useEffect } from 'react'
import './Slider.css';

function Slider() {

const [sliderImages, setSliderImages]=useState([])
 useEffect(()=>{
   fetch('https://travel-api-lous.onrender.com/api/v1/admin/banner')
       .then(res => res.json())
       .then(
         (result) => {
           setSliderImages(result.data)
         },
         (error) => {
             console.log(error)
           }
         )
})

  const [activeImageNum, setCurrent] = useState(0);
   const length = sliderImages.length;
   const nextSlide = () => {
      setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
   };
   const prevSlide = () => {
      setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
   };
   if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
      return null;
   }

  return (
      <div className='slider'>
         {sliderImages.map((currentSlide, ind) => {
            return (
               <div
                  className={ind === activeImageNum ? "currentSlide-active" : "currentSlide"}
                  key={ind} 
               >
                  {ind === activeImageNum && <img src={`https://travel-api-lous.onrender.com/${currentSlide.image}`} className="image" />}
                  {ind === activeImageNum && <h1>{currentSlide.name}</h1>}
               </div>
               );
         })}
         <div className='controlling '>
            <a onClick={prevSlide}><i className="fa-solid fa-chevron-left"></i></a>
            <a onClick={nextSlide}><i className="fa-solid fa-chevron-right"></i></a>
         </div>
      </div>
  )
}
export default Slider;