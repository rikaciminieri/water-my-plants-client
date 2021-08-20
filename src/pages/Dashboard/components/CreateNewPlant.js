import React, { useState } from "react";
import Modal from "../../../components/Modal";

const initialFormValues = {
  id: "",
  nickname: "",
  species: "",
  h2oFrequency: "",
};

const CreateNewPlant = ({ open, onClose }) => {
  const [formValues, setFormValues] = useState(initialFormValues);


  const onChange = (evt) => {
    const { name, value } = evt.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div class="bg-white dark:bg-gray-800 w-72 mx-auto rounded-xl p-4">
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Add your newest plant!
        </div>
        <div className="p-6 mt-2 w-full">
          <form onSubmit={onSubmit}>
            <label>
              Nickname
              <div className="flex flex-col mb-2">
                <div className="relative">
                  <input
                    type="text"
                    name="nickname"
                    placeholder="Name your plant!"
                    onChange={onChange}
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </label>
            <label>
              Species
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    name="species"
                    placeholder="What species is it?"
                    onChange={onChange}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </label>
            <label>
              Watering Frequency (per week)
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="number"
                    name="h2oFrequency"
                    onChange={onChange}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-50 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </label>
            <div className="flex flex-col w-full pt-6">
              <button
                onClick={onClose}
                type="submit"
                className="py-2 px-4 mb-2 bg-green-500 hover:bg-green-600 focus:ring-green-400 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Add Plant
              </button>
              <button
                onClick={onClose}
                type="submit"
                className="py-2 px-4  bg-gray-300 hover:bg-gray-600 focus:ring-gray-400 focus:ring-offset-gray-200 text-gray-900 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default CreateNewPlant;
