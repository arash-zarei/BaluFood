import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full flex items-center flex-col justify-center md:flex-row">
      <div className="lg:w-[60%] w-full">
        <h1 className="text-2xl border-b-2 border-primary w-fit">BaluFood</h1>
        <p className="text-black mt-5">Food Delivery and Takeout!</p>
        <p className="my-4 text-gray-500">
          BaluFood is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </p>
        <Link href="/menu" className="py-1 px-5 bg-primary text-white rounded-md hover:bg-black hover:text-primary transition-all">See All</Link>
      </div>
      <div className="lg:w-[40%] w-full">
        <img src="/images/banner.png" alt="food banner" />
      </div>
    </div>
  );
};

export default Banner;
