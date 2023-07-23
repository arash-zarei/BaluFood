import React from "react";

// Icons
import Fast from "../../icons/Fast";
import Food from "../../icons/Food";
import Choice from "../../icons/Choice";
import Clock from "../../icons/Clock";

const Attributes = () => {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-primary my-20">Why us?</h1>
      <div className="flex items-center justify-center flex-wrap gap-16">
        <div className="attribute">
          <Fast />
          <p>Fast</p>
        </div>
        <div className="attribute">
          <Food />
          <p>Food</p>
        </div>
        <div className="attribute">
          <Choice />
          <p>Choice</p>
        </div>
        <div className="attribute">
          <Clock />
          <p>Clock</p>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
