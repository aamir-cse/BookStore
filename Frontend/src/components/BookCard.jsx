import React from "react";

//Here we created Card component that we will reuse it in our Hero section as well as in "Course" router
//Taked from daisy UI
function BookCard({items}) {
   
  return (
    <>
      {/* Copied code from DaisyUi.com for card component */}
      <div className="card w-90 p-3 bg-base-100 shadow-xl  ml-6  mr-6 mt-8 hover:scale-95 dark:bg-slate-900 dark:text-white dark:border duration-200">
        <figure >
          <img className="h-80 w-80 rounded-full my-4 m "
            src={items.image}
            alt="Book"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           {items.name}
            <div className="badge badge-secondary">{items.category}</div>
          </h2>
          <p>{items.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">₹{items.price}</div>
            <div className="badge badge-outline hover:bg-pink-600 hover:text-white">Buy Now</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookCard;
