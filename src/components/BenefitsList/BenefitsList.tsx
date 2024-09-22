import "./benefitsList.css";
import checkIcon from "../../assets/icon-check.svg";
import BenefitsItem from "./BenefitsItem/BenefitsItem";

const benefits = [
  {
    image: checkIcon,
    text: "Unlimited websites",
  },
  {
    image: checkIcon,
    text: "100% data ownership",
  },
  {
    image: checkIcon,
    text: "Email reports",
  },
];

const BenefitsList = () => {
  return (
    <ul className="benefits-list">
      {benefits.map((item, index) => (
        <BenefitsItem key={index} text={item.text} image={item.image} />
      ))}
    </ul>
  );
};

export default BenefitsList;
