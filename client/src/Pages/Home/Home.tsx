import React from "react";
import { HomeContainer } from "./Home.styled";
import Card from "../../Components/Card/Card";

const Home = () => {
  return (
    <HomeContainer className="home">
      <div className="container w-full h-full flex justify-center items-center">
        <Card />
      </div>
    </HomeContainer>
  );
};

export default Home;
