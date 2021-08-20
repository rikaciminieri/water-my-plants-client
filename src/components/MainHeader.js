import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../assets/images/logo.svg";

const navigation = ["Dashboard", "Plantomatic"];
const styles = {
  className:
    "block px-3 py-2 rounded-md text-base font-medium text-green-400 hover:text-white hover:bg-green-700",
};
const profileLinks = [
  {
    className: styles.className,
    to: "/user-details",
    name: "Your Profile",
  },
  {
    className: styles.className,
    to: "/",
    name: "Settings",
  },
  {
    className: styles.className,
    to: "/",
    name: "Sign Out",
  },
];

const MainHeader = () => {
  return (
    <Disclosure as="nav" className="bg-green-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8" src={logo} alt="Workflow" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item, itemIdx) =>
                      itemIdx === 0 ? (
                        <Fragment key={item}>
                          {/* Current: "bg-green-900 text-white", Default: "text-green-300 hover:bg-green-700 hover:text-white" */}
                          <Link
                            to="/dashboard"
                            className="bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {item}
                          </Link>
                        </Fragment>
                      ) : (
                        <Link
                          to="/"
                          key={item}
                          href="#"
                          className="text-green-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {item}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button className="bg-green-800 p-1 rounded-full text-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="max-w-xs bg-green-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <svg
                              width="20"
                              fill="currentColor"
                              height="20"
                              class="text-green-200"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                            </svg>
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            {profileLinks.map((link) => (
                              <Menu.Item key={link.name}>
                                {({ active }) => (
                                  <Link
                                    to={link.to}
                                    className={`block px-4 py-2 text-sm text-green-700 ${
                                      active ? "bg-green-100" : ""
                                    }`}
                                  >
                                    {link.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-green-800 inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item, itemIdx) =>
                itemIdx === 0 ? (
                  <Fragment key={item}>
                    {/* Current: "bg-green-900 text-white", Default: "text-green-300 hover:bg-green-700 hover:text-white" */}
                    <Link
                      to="/dashboard"
                      className="bg-green-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item}
                    </Link>
                  </Fragment>
                ) : (
                  <Link
                    to="/"
                    key={item}
                    href="#"
                    className="text-green-300 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
            <div className="pt-4 pb-3 border-t border-green-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
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
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    Rika Ciminieri
                  </div>
                  <div className="text-sm font-medium leading-none text-green-400">
                    rika@example.com
                  </div>
                </div>
                <button className="ml-auto bg-green-800 flex-shrink-0 p-1 rounded-full text-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {profileLinks.map((link) => {
                  return (
                    <Link
                      key={link.name}
                      className={link.className}
                      to={link.to}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                {/* {profile.map((item) => (
                    <Link
                      key={item}
                      to="/user-details"
                      className="block px-3 py-2 rounded-md text-base font-medium text-green-400 hover:text-white hover:bg-green-700"
                    >
                      {item}
                    </Link>
                  ))} */}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MainHeader;
