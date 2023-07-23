import React from "react";

// Icons
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

const DetailsPage = ({ data }) => {
  const { id, name, price, discount, details, introduction, ingredients, recipe } = data;

  return (
    <div className="subContainer">
      <h1 className="title">Details</h1>
      <div className="mt-5">
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-5 mb-20">
          <img
            src={`/images/${id}.jpeg`}
            alt={name}
            className="w-full sm:w-72 rounded-xl"
          />
          <div className=" w-full sm:max-w-fit flex flex-col gap-7">
            <p className="text-primary">{name}</p>
            <span className="flex items-center text-[12px] text-gray-500">
              <Location />
              {details[0].Cuisine}
            </span>

            <span className="flex items-center mb-3">
              {" "}
              <Dollar /> {(price * (100 - discount)) / 100}$
            </span>
            {discount ? (
              <span className="w-full rounded-md bg-red-700 text-sm p-1 text-white text-center">
                {discount}% OFF
              </span>
            ) : (
              <span className="w-full rounded-md text-sm p-1 text-white text-center opacity-0 invisible">
                % OFF
              </span>
            )}
          </div>
        </div>
        <div>
          <p>{introduction}</p>
        </div>
        <div>
            <p className="subTitle">Details</p>
            <ul>
                {details.map((detail, index) => (
                    <li key={index} className="flex gap-1 my-2">
                        <p className="text-black font-semibold">{Object.keys(detail)[0]}:</p>
                        <p className="text-gray-700">{Object.values(detail)[0]}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div>
        <p className="subTitle">Ingredients</p>
            <ul className="list-disc marker:text-primary px-3">
                {ingredients.map((item, index)=> (
                    <li key={index} className="my-2">{item}</li>
                    ))}
            </ul>
        </div>
        <div className="mb-14">
            <p className="subTitle mb-5">Recipe</p>
            <ul className=" ">
                {recipe.map((item, index)=> (
                    <li key={index} className="flex gap-5 items-center text-sm even:bg-green-700 odd:bg-primary even:text-white py-3 px-8 my-2 rounded-lg"><p className="text-4xl">{index+1}</p>{item}</li>
                    ))}
            </ul>
        </div>
        <button className="w-full mb-20 bg-primary rounded-md text-white p-3">Add To Cart</button>
      </div>
    </div>
  );
};

export default DetailsPage;
