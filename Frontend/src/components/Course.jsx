// This component is created for Course router.
//Remember this component is not the part of Hero page and this is the part of Course page.
import React from "react";
import List from '../../public/list.json';
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

function Course() {
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto   md:px-20 px-4">


{/* Heading  */}
        <div className="mt-28  text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>{" "}
          </h1>
        </div>

{/* Paragraph */}
        <p className="mt-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia a
          nesciunt expedita. Rem ducimus quae ex sed illum magnam ipsa explicabo
          temporibus ipsum distinctio, repellat, error, nemo laborum similique?
          Aut et unde iste, minus expedita inventore omnis delectus sint vel?
        </p>

{/* Button */}
<div className="flex flex-col items-center">
  {/* When we click on Back "Button" then it will go back on Home page. */}
  <Link to="/">
     <button className="  mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back </button>
  </Link>

</div>


{/* Rendering the all components */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">

        {/* Maping list data to BookCard component */}

        {
          List.map( (item)=>
            (
               <BookCard key={item.id}  items ={item}  />
            )
          )}
        
        
      </div>

      

     </div>
    </>
  );
}

export default Course;
