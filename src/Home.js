import HeroSection from "./components/HeroSection";
const Home = () => {
  const data = {
    name: "Mobhub",
  };

  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default Home;
