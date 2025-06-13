import { OptionProps } from "@/types";

export default function Option({ valueArray }: OptionProps) {
  return (
    <>
      {valueArray.map(({ name, value }) => (
        <option key={value} value={value}>
          {name ? name : value}
        </option>
      ))}
    </>
  );
}