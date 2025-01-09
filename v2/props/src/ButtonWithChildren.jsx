import "./Button.css";

const sizes = {
  large: "buttonLarge",
  small: "buttonSmall",
};

export default function ButtonWithChildren({ size, children }) {
  let sizeClassName = sizes[size];

  if (sizeClassName == null) {
    sizeClassName = "buttonLarge";
  }

  return <button className={sizeClassName}>{children}</button>;
}
