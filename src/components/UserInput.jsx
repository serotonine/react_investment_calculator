import Input from "./Input";

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
