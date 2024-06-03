import React from 'react'
import BookCard from './BookCard';
// For reacte slider we need below files
import List from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


//Created for slider of Free books at hero section
function FreeBook() {
  
  // For Reacte slider we need to past below code of "settings"
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


    // Filter only those data whose category is "Free"
    const filterData = List.filter((data)=> data.category === "Free");
    
  return (
    <>
   
      <div className="max-w-screen-2xl container mx-auto   md:px-20 px-4 py-1">
        
        {/* Heading and paragraph is here */}
        <div>
           <h1 className="font-semibold text-xl pb-2">Free offerd <span className="text-xl font-extrabold text-green-500">Books</span></h1>
            <p>Our mission is to provide free books to everyone so that everyone can get knowledge and enhance there own gorwth</p>
        </div>

        {/* Slider code is here */}
          <div>

            {/* Here we map card into Slider to show all cards in curosal. */}
              <Slider {...settings}>
                {
                  filterData.map( (item)=>(
                    // Passing props from parent(FreeBook) to Children(BookCard)
                    <BookCard  items = {item} key = {item.id}/>
                  ))
                }
                
              </Slider>
          </div>
      
      </div>

   
    </>
  )
}

export default FreeBook