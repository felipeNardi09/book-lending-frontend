/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import Button from "./Button";

export default function Modal({ children, onClose }) {
  return createPortal(
    <div className="bg-backdrop-color duration-400 fixed left-0 top-0 z-50 h-screen w-full drop-shadow-xl backdrop-blur-[2px]  backdrop-contrast-50 backdrop-opacity-75 transition-all">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-gray-100 p-12 shadow-lg transition-all duration-500">
        <Button type="modal" onClick={onClose}>
          <IoClose />
        </Button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
