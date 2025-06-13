import { data } from "../app/data/data";
import { SelectProps } from "@/types";
import Option from "./Option";
export default function Select({ handleChange }: SelectProps) {
  const selectEl = Object.entries(data).map(([key, value]) => {
    return (
      <div key={key} className="form__inner-wrapper">
        <label htmlFor={key}>Select a {key}</label>
        <select name={key} id={key} onChange={handleChange}>
          <Option valueArray={value} />
        </select>
      </div>
    );
  });

  return <>{selectEl}</>;
}