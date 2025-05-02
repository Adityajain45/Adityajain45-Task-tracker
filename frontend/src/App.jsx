import { Outlet } from "react-router";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "./components/Notification/Notification";
import { useState } from "react";

function App() {
  const [showNotification, setShowNotification] = useState(true);

  const handleClose = () => {
    setShowNotification(false);
  };

  const message =
    "Please note: This Task Manager application requires you to log in or sign up to manage tasks. As the application is hosted on a free server (OnRender), loading your data may take some time if the server was idle. We appreciate your patience!";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {showNotification && (
        <div className="max-w-4xl mx-auto mt-4">
          <Notification message={message} onClose={handleClose} />
        </div>
      )}
      <ToastContainer />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
}


export default App;
