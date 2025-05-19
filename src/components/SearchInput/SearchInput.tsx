import type { ChangeEvent } from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      maxLength={1}
      value={value}
      onChange={handleChange}
      placeholder="Enter a letter"
      className="w-full mt-5 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
    />
  );
};
