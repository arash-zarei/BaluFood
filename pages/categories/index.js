// Components
import CategoriesPage from "../../components/templates/CategoriesPage";

const Categories = ({ data }) => {
  return <CategoriesPage data={data} />;
};

export default Categories;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  const filteredData = data.filter((data) => {
    const difficultyResult = data.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );

    const timeResult = data.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      } else if (time === "more" && +timeDetail > 30) {
        return detail;
      }
    });
    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return data;
    } else if (!time && difficulty && difficultyResult.length) {
      return data;
    } else if (time && !difficulty && timeResult.length) {
      return data;
    }
  });

  return {
    props: { data: filteredData },
  };
}