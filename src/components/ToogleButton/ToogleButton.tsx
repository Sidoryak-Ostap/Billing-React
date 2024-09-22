import "./tooglebutton.css";

type Props = {
  handleButtonToogle: () => void;
};

const ToogleButton = ({ handleButtonToogle }: Props) => {
  return (
    <label className="switch" aria-label="Toggle billing option">
      <input
        onChange={handleButtonToogle}
        className="toggle-btn"
        type="checkbox"
      />
      <span className="toggle round"></span>
    </label>
  );
};

export default ToogleButton;
