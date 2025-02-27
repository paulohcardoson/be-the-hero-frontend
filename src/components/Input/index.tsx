import { IProps } from "./types/IProps";

const Input: React.FC<IProps> = ({ className, ...props }) => (
  <input
    className={`font-inter font-medium h-12 px-2.5 rounded-md border-solid border-2 border-gray-200 focus:border-primary transition-colors ${className}`}
    {...{ ...props }}
  />
);

export default Input;
