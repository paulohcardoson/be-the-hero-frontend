import { IProps } from "./types/IProps";

const TextArea: React.FC<IProps> = ({ className, ...props }) => (
	<textarea
		className={`font-inter font-medium h-12 p-2.5 rounded-md border-solid border-2 border-gray-200 focus:border-primary transition-colors resize-none ${className}`}
		{...{ ...props }}
	/>
);

export default TextArea;
