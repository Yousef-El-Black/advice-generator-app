import { useState, useEffect } from "react";
import { CardContainer, CardTitle, CardText, GenBtn } from "./Card.styled";
import { getAdvice } from "../../Hooks/fetchData";

const Card = () => {
  const [adviceNumber, setAdviceNumber] = useState("");
  const [adviceContent, setAdviceContent] = useState("");

  const handleClick = async () => {
    const advice = await getAdvice();
    setAdviceNumber(advice?.adviceId);
    setAdviceContent(advice?.adviceContent);
  };

  useEffect(() => {
    const displayAdvice = async () => {
      const advice = await getAdvice();
      setAdviceNumber(advice?.adviceId);
      setAdviceContent(advice?.adviceContent);
    };
    displayAdvice();
  }, []);

  return (
    <div className="card relative">
      <CardContainer className="content flex flex-col justify-around items-center p-5 rounded-lg">
        <CardTitle className="title uppercase tracking-widest">
          Advice # {adviceNumber}
        </CardTitle>
        <CardText className="text text-center">
          &#8220;{adviceContent}&#8221;
        </CardText>
        <div className="end-border">
          <img src="./images/pattern-divider-desktop.svg" alt="" />
        </div>
      </CardContainer>
      <GenBtn
        className="gen-btn flex justify-center items-center rounded-full"
        onClick={handleClick}
      >
        <img src="./images/icon-dice.svg" alt="Dice Icon" />
      </GenBtn>
    </div>
  );
};

export default Card;
