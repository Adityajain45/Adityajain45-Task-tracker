// // eslint-disable-next-line react/prop-types
// function Notification({ message, onClose }) {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//         backgroundColor: "#f9f9f9",
//         border: "1px solid #ccc",
//         borderRadius: "10px",
//         padding: "20px",
//         boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//         zIndex: 1000,
//       }}
//     >
//       <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Important Notice</h1>
//       <p style={{ color: "#555" }}>{message}</p>
//       <button
//         onClick={onClose}
//         style={{
//           marginTop: "10px",
//           padding: "10px 20px",
//           backgroundColor: "#007BFF",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Okay
//       </button>
//     </div>
//   );
// }

// export default Notification;


// eslint-disable-next-line react/prop-types
function Notification({ message, onClose }) {
  return (
    <div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-lg p-6 shadow-xl z-50 max-w-sm w-full"
    >
      <h1 className="text-xl font-semibold mb-2">Important Notice</h1>
      <p className="text-gray-600 mb-4">{message}</p>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
      >
        Okay
      </button>
    </div>
  );
}

export default Notification;
