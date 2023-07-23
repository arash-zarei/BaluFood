import React from "react";

const Instruction = () => {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-primary mt-9 mb-4">
        How To Order?
      </h1>
      <ul className="list-disc marker:text-primary pl-4">
        <li className="mb-2">Sign in (or create an account) and set your delivery address.</li>
        <li className="mb-2">Choose the restaurant you want to order from.</li>
        <li className="mb-2">Select your items and tap “Add to Cart”.</li>
        <li className="mb-2">To place your order, select “View cart” or “Checkout”.</li>
        <li className="mb-2">Review your order and tap “Place Order”...</li>
        <li className="mb-2">Track your order progress.</li>
      </ul>
    </div>
  );
};

export default Instruction;
