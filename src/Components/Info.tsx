
const Button: React.FC<Props> = ({
    border,
    color,
    children,
    height,
    onClick,
    width
}) => {
    return (
        <button
        onClick={onClick}
        style={{
            backgroundColor: color,
            border,
            height,
            width
        }}
    >
    {children}
    </button>
    );
}

export default Button;