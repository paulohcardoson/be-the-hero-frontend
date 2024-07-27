import { IProps } from "./types/IProps";

const Button: React.FC<IProps> = ({ text, className, ...props }) => {
  return (
    <button
      className={`h-10 bg-primary hover:bg-red-800 transition-colors rounded-md ${className}`}
      {...{ ...props }}
    >
      <span className="text-white font-medium">{text}</span>
    </button>
  );
};

export default Button;
