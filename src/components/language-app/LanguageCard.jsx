import { useState } from "react";

const LanguageCard = ({ name, img, options }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="language-card" onClick={() => setShow(!show)}>
      {show && (
        <div>
          <img src={img} />
          <h4>{name}</h4>
        </div>
      )}

      {!show && (
        <ul className="option-list">
          {options.map((option) => (
            <li>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageCard;
