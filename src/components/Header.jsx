import logo from "../assets/investment-calculator-logo.png";

export default function Header({ title }) {
  return (
    <header id="header">
      <img src={logo} alt={title} />
      <h1>{title}</h1>
    </header>
  );
}
