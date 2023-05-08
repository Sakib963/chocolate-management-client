
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  
  return (
    <div className="mb-10">
      <h3 className="text-white radial-bg text-center w-2/6 mx-auto py-5 text-4xl font-semibold rounded-lg my-10">
        Chocolate Management System
      </h3>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
