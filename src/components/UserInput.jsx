import Input from "./Input";
import { Fragment } from "react";
/* function getInputs(datas, onChangeValue) {
  const _datas = Object.entries(datas);
  const markup = _datas.map((data, index) => {
    const isWrap = index % 2 === 0;
   
    
    return 
    ({isWrap && }
      <Input
        index={data[0]}
        label={data[0]}
        value={data[1]}
        onChangeValue={onChangeValue}
      />
      {isWrap && </div>})
     
   
  });
  return markup;
} */

export default function UserInput({ datas, onChangeValue }) {
  const _datas = Object.entries(datas);
  return (
    <section id="user-input">
      {_datas.map((data, index) => {
        return (
          <Input
            key={index.toString()}
            index={data[0]}
            label={data[0]}
            value={data[1]}
            onChangeValue={onChangeValue}
          />
        );
      })}
    </section>
  );
}
