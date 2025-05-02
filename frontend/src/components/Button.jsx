

function Button({
  children,
  bgColor = "bg-blue-600", 
  textColor = "text-white", 
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-md ${bgColor} ${textColor} ${className} 
        hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
        transition-all duration-300`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
