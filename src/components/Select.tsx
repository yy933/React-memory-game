import { data } from "../app/data/data";
import { SelectProps } from "@/types";
import Option from "./Option";
import { useEmojiStore } from "@/stores/useEmojiStore";
export default function Select({ handleChange}: SelectProps) {
  const formData = useEmojiStore((state) => state.formData); 
  const selectEl = Object.entries(data).map(([key, value]) => {
    return (
      <div key={key} className="form__inner-wrapper">
        <label htmlFor={key}>Select a {key}</label>
        <select
          name={key}
          id={key}
          onChange={handleChange}
          value={formData[key as keyof typeof formData]}
        >
          <Option valueArray={value} />
        </select>
      </div>
    );
  });

  return <>{selectEl}</>;
}