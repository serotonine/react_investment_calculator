import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [datas, setDatas] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 12,
  });
  function handleOnChange(key, value) {
    const newDatas = { ...datas };
    newDatas[key] = +value;
    setDatas(newDatas);
  }
  // No 0 || negative values.
  const isValidInput =
    datas.initialInvestment >= 1 &&
    datas.annualInvestment >= 1 &&
    datas.expectedReturn >= 1 &&
    datas.duration >= 1;
  return (
    <main>
      <Header title="React Investment Calculator" />
      <UserInput datas={datas} onChangeValue={handleOnChange} />
      {isValidInput ? <Result datas={datas} /> : <p>Please enter valid data</p>}
    </main>
  );
}

export default App;
