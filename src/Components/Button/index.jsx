function Button({ children, color, bgColor, textSize = "text-base" }) {
  return (
    <button
      className={`px-4 py-2 ${color} font-bold ${textSize} rounded-[5px] ${bgColor}`}
    >
      {children}
    </button>
  );
}

export default Button;
