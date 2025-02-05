"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface SelectProps {
  options: number[];
  label: string;
}

const ProductSelect: React.FC<SelectProps> = ({ options, label }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState<number>(10);

  useEffect(() => {
    const limit = searchParams.get("limit");
    if (limit && options.includes(parseInt(limit, 10))) {
      setSelectedValue(parseInt(limit, 10));
    }
  }, [searchParams, options]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value, 10);
    setSelectedValue(value);

    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set("limit", value.toString());

    router.replace(`?${currentParams.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium">{label}</label>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="border-2 border-red-600 rounded px-2 py-1 text-red-600"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductSelect;
