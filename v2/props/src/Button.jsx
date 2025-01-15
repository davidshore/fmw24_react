import "./Button.css";

const sizes = {
  large: "buttonLarge",
  small: "buttonSmall",
};

export default function Button({ title, size, imgSrc }) {
  let sizeClassName = sizes[size];

  if (sizeClassName == null) {
    sizeClassName = "buttonLarge";
  }

  return (
    <button className={sizeClassName}>
      <img src={imgSrc} alt="logo" />
      {title}
    </button>
  );
}
