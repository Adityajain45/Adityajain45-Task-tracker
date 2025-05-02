// /* eslint-disable react/prop-types */
// import React, { useId } from "react";

// const Input = React.forwardRef(function Input(
//   { label, type = "text", className = "", ...props },
//   ref
// ) {
//   const id = useId(); // for accessability purpose, we can remove it also htmlFor
//   return (
//     <div className="w-full">
//       {label && (
//         <label className="inline-block mb-1 pl-1" htmlFor={id}>
//           {label}
//         </label>
//       )}

//       <input
//         type={type}
//         className={`px-3 mb-2  py-2  bg-white text-black  outline-none 
//          focus:bg-gray-50 duration-200 border border-gray-300 w-full  ${className}`}
//         ref={ref}
//         {...props}
//         id={id}
//       />
//     </div>
//   );
// });

// export default Input;




/* eslint-disable react/prop-types */
import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", error, ...props },
  ref
) {
  const id = useId(); // For accessibility purposes, we can remove htmlFor as we use id here

  return (
    <div className="w-full relative">
      {label && (
        <label
          className="inline-block mb-2 text-sm font-medium text-gray-700 pl-1"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        className={`w-full px-4 py-3 mb-2 border rounded-md bg-white text-black 
          focus:ring-2 focus:ring-blue-500 focus:outline-none 
          transition duration-200 ease-in-out 
          ${error ? 'border-red-500' : 'border-gray-300'} 
          ${className}`}
        ref={ref}
        {...props}
        id={id}
      />

      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
});

export default Input;
