import React from "react";

import { useRouter } from "next/router";

// Spinners
import { BeatLoader } from "react-spinners";

// Components
import DetailsPage from "../../components/templates/DetailsPage";

const FoodDetails = ({ food }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="max-w-4xl mx-auto text-center mt-52">
        <BeatLoader margin="auto" color="#53c60b" size="50px" />
      </div>
    );
  }

  return <DetailsPage data={food} />;
};

export default FoodDetails;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();
  const limitData = data.slice(0, 10);
  const paths = limitData.map((item) => ({
    params: { foodId: item.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`${process.env.BASE_URL}/data/${params.foodId}`);
  const data = await res.json();

  if (!data.name) {
    return {
      redirect: { destination: "/menu" },
    };
  }

  return {
    props: { food: data },
    revalidate: 60 * 60,
  };
}
