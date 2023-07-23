import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// Components
import Card from "../modules/MenuPage/Card";

const CategoriesPage = ({ data }) => {
  const [query, setQuery] = useState({ difficulty: "", time: "" });

  useEffect(() => {
    const { difficulty, time } = route.query;
    if (query.difficulty !== difficulty || query.time !== time) {
      setQuery({ difficulty, time });
    }
  }, []);

  const route = useRouter();

  const selectHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const searchHandler = () => {
    route.push({
      pathname: "/categories",
      query,
    });
  };

  return (
    <div className="subContainer">
      <h1 className="title">Categories</h1>
      <div className="grid grid-cols-1 gap-6 sm:block mt-10">
        <select
          value={query.difficulty}
          name="difficulty"
          onChange={selectHandler}
          className="selected"
        >
          <option value="">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select
          value={query.time}
          name="time"
          onChange={selectHandler}
          className="selected"
        >
          <option value="">Kooking Time</option>
          <option value="more">More Than 30 min</option>
          <option value="less">Less Than 30 min</option>
        </select>
        <button
          onClick={searchHandler}
          className="bg-primary py-1 sm:px-4 rounded-md shadow-xl shadow-primary hover:shadow-none transition-all"
        >
          Search
        </button>
      </div>
      <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {!data.length ? (
          <img src="/images/search.png" alt="Search" className="col-start-2" />
        ) : (
          data.map((food) => <Card key={food.id} data={food} />)
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
