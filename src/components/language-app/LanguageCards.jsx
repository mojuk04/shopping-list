import LanguageCard from "./LanguageCard.jsx";
import { data } from "../../data/data.js";

const LanguageCards = () => {
  return (
    <section className="cards-container">
      {data.map((language, index) => (
        <LanguageCard {...language} key={index} />
      ))}
    </section>
  );
};

export default LanguageCards;
