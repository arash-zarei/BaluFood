import MenuPage from "../../components/templates/MenuPage";

const Menu = ({ foods }) => {
  return <MenuPage foods={foods} />;
};

export default Menu;

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  return {
    props: { foods: data },
    revalidate: 60 * 60,
  };
}
