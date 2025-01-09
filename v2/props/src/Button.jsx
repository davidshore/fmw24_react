import "./Button.css";

const sizes = {
  large: "buttonLarge",
  small: "buttonSmall",
};

export default function Button({ size, title }) {
  let sizeClassName = sizes[size];

  if (sizeClassName == null) {
    sizeClassName = "buttonLarge";
  }

  return <button className={sizeClassName}>{title}</button>;
}
