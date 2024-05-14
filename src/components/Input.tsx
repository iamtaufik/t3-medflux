import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input = ({ name, required = true, className, ...props }: IProps) => {
  return (
    <div className="mt-6 flex flex-col">
      <label htmlFor={name} className="font-semibold">
        {name}
      </label>
      <input
        id={name}
        name={name}
        className={`h-30 bg-background  placeholder:text-muted-foreground flex w-full rounded-lg border border-gray-300 p-4 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-5 ${className}`}
        required={required}
        {...props}
      />
    </div>
  );
};

export default Input;
