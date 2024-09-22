import "./slider.css";

type Props = {
  handleSliderRange: (value: number) => void;
  sliderRange: number;
};
const Slider = ({ handleSliderRange, sliderRange }: Props) => {
  return (
    <section className="slider-container" aria-label="Pageviews range">
      <input
        onChange={(e) => handleSliderRange(+e.target.value)}
        className="slider"
        type="range"
        min="100"
        max="500"
        value={sliderRange}
      />
    </section>
  );
};

export default Slider;
