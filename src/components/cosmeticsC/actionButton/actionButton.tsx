

interface buttonShape {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type: "button" | "submit" | "reset";
    className?: string;
    value?: string;
}

const Button: React.FC<buttonShape> = ({
    text,
    onClick,
    type,
    className,
    value,
}) => {
  return (
    <button
    onClick={onClick}
    type={type}
    className={className}
    value={value}
    >
        {text}
    </button>
  )
}

export default Button
