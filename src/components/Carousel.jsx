import React, {useContext, useEffect} from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { DataContext, DataProvider } from "../context/DataContext"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getData } from "../context/DataContext";
import Category from "./Category";

const Carousel = () => {
  const {data} = getData();
  console.log(data);
  

  const SamplePrevArrow = (props)=>{
    const {className, style, onClick} = props;
    return(
      <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
        <AiOutlineArrowLeft className='arrows' style={{...style, display: "block", borderRadius:"50px", background:"#f53347" , color:"white" , position:"absolute", padding:"2px", left:"50px"}}/>
      </div>
    )
  }
    const SampleNextArrow = (props)=>{
    const {className, style, onClick} = props;
    return(
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowRight className='arrows' style={{...style, display: "block", borderRadius:"50px", background:"#f53347" , color:"white" , position:"absolute", padding:"2px", right:"50px"}}/>
      </div>
    )
  }

    let settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next"/>,
    prevArrow: <SamplePrevArrow to="prev"/>
  };
  return (
    <>
    <Slider {...settings}>
       {
        data?.slice(0,7)?.map((item,index)=>{
          return <div key={index} className="bg-gradient-to-r from-teal-400 to-yellow-200"> 
          <div className="flex gap-10 justify-center h-[455px] items-center px-4">
            <div className="space-y-6">
              <h3 className="text-white text-xl">Powering your world best in Electronics</h3>
              <h1 className="text-3xl font-semibold uppercase line-clamp-3 md:w-[500px] text-gray-500">{item.title}</h1>
              <p className="line-clamp-3 md:w-[500px] ">{item.description}</p>
              <button className="bg-gray-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2">Shop Now</button>
            </div>
            <img src={item.image} alt={item.title} className="rounded-full w-[450px] hover:scale-105 transition-all shadow-amber-400 shadow-2xl" />
            </div>
            
            </div>
        })
       }
      
    </Slider>
    <Category></Category>
    </>
  )
}

export default Carousel