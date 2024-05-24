/*
|-----------------------------------------
| setting up variant multiselect for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { useState } from "react";

import OptionItemPreview from "./option-item-preview";
import OptionItem from "./option-item";

const VariantMultiselect = ({
  options,
  title = "Please Select",
}: {
  title?: string;
  options: string[];
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const handleRemove = (value: string) => {
    setSelectedValues(selectedValues.filter((curr) => curr !== value));
  };
  const handleClick = (value: string) => {
    setIsDropdownOpen(false);
    setSelectedValues((pre) => [...pre, value]);
  };
  return (
    <div
      onClick={() => setIsDropdownOpen(true)}
      onBlur={() => setIsDropdownOpen(false)}
      className="mt-2 flex cursor-text flex-wrap gap-2 rounded-lg border border-slate-300 p-4"
    >
      {selectedValues.length > 0 ? (
        selectedValues.map((curr) => (
          <OptionItem
            key={curr}
            name={curr}
            handleRemove={() => handleRemove(curr)}
          />
        ))
      ) : (
        <p>{title}</p>
      )}
      {isDropdownOpen && (
        <div className="flex w-full flex-col [&>*:last-child]:border-b-0 [&>*]:border-b ">
          {options
            .filter((i) => {
              return !selectedValues.includes(i);
            })
            .map((curr) => (
              <OptionItemPreview
                key={curr}
                onClick={() => handleClick(curr)}
                name={curr}
              />
            ))}
        </div>
      )}
    </div>
  );
};
export default VariantMultiselect;
