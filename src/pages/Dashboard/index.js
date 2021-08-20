import React, { useState } from "react";
import Main from "./components/Main";
import MainHeader from "../../components/MainHeader";
import CreateNewPlant from "./components/CreateNewPlant";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <MainHeader />
      <Main />
      <div className="flex justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="py-2 px-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-80 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
      >
        Add a new plant
      </button>
      </div>
      <CreateNewPlant open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Dashboard;
