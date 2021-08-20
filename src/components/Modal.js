import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";

const Modal = ({ children, title, size = "md", open, onClose }) => {

  let modalSizeClassName = "";

  switch (size) {
    case "sm":
      modalSizeClassName = "sm:max-w-xs";
      break;
    case "md":
      modalSizeClassName = "sm:max-w-lg";
      break;
    case "lg":
      modalSizeClassName = "sm:max-w-lg lg:max-w-3xl";
      break;
    case "xl":
      modalSizeClassName = "sm:max-w-lg lg:max-w-3xl xl:max-w-6xl";
      break;
    default:
      // TODO: Throw an error or set a default
      break;
  }

  return (
    <Transition show={open} as={React.Fragment} appear={open}>
      <Dialog
        as="div"
        static
        open={open}
        onClose={onClose}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        {/* ACTUAL MODAL  */}
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            className={`pointer-events-none transform transition-all m-4 h-(screen-8) sm:my-8 sm:mx-auto sm:h-(screen-16) ${modalSizeClassName}`}
          >
            <div className="pointer-events-auto bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl sm:align-middle sm:w-full sm:p-6 max-h-full relative space-y-5 sm:space-y-6 flex flex-col">
              {/* HEADER */}
              <div className="flex-shrink-0">
                <Dialog.Title as="h3" className="text-lg leading-none font-medium text-gray-900">
                  {title}
                </Dialog.Title>
              </div>

              {/* BODY */}
              <div className="h-0 flex-1">
                {/* <SimpleBar className="h-full">{children}</SimpleBar> */}
                <div className="h-full">{children}</div>
              </div>
{/* 
              <Footer {...footer} /> */}
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;