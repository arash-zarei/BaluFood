import React from "react";

// Components
import Card from "../modules/MenuPage/Card";

const MenuPage = ({ foods }) => {
  return (
    <div className="subContainer">
      <h1 className="title">Menu</h1>

      <div className="pt-7 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <Card key={food.id} data={food} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
