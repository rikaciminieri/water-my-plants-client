import React from "react";

const UserDetailsForm = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <section class="h-screen bg-gray-100 bg-opacity-50">
          <form class="container max-w-2xl mx-auto shadow-md md:w-3/4">
            <div class="p-4 bg-gray-100 border-t-2 border-green-400 rounded-lg bg-opacity-5">
              <div class="max-w-sm mx-auto md:w-full md:mx-0">
                <div class="inline-flex items-center space-x-4">
                  <svg
                    width="20"
                    fill="currentColor"
                    height="20"
                    class="text-green-600"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                  </svg>
                  <h1 class="text-gray-600">Rika</h1>
                </div>
              </div>
            </div>
            <div class="space-y-6 bg-white">
              <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 class="max-w-sm mx-auto md:w-1/3">Account</h2>
                <div class="max-w-sm mx-auto md:w-2/3">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="user-info-email"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 class="max-w-sm mx-auto md:w-1/3">Personal info</h2>
                <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                  <div>
                    <div class=" relative ">
                      <input
                        type="text"
                        id="user-info-name"
                        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div>
                    <div class=" relative ">
                      <input
                        type="text"
                        id="user-info-phone"
                        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 class="max-w-sm mx-auto md:w-4/12">Change password</h2>
                <div class="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="user-info-password"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div class="text-center md:w-3/12 md:pl-6">
                  <button
                    type="button"
                    class="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Change
                  </button>
                </div>
              </div>
              <hr />
              <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                <button
                  type="submit"
                  class="py-2 px-4  bg-blue-500 hover:bg-blue-600 focus:ring-blue-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UserDetailsForm;
