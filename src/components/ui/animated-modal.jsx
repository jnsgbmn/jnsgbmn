import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";

const ModalContext = createContext({
  openModalId: null,
  openModal: () => { },
  closeModal: () => { },
});

// Provider to manage the modal state globally
export const ModalProvider = ({ children }) => {
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (id) => setOpenModalId(id);
  const closeModal = () => setOpenModalId(null);

  return (
    <ModalContext.Provider value={{ openModalId, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Hook to manage individual modal state by id
export const useModal = (id) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return {
    open: context.openModalId === id,   // Check if the current modal is open
    openModal: () => context.openModal(id),  // Open modal with given id
    closeModal: context.closeModal,    // Close modal
  };
};

// Button trigger to open the modal
export const ModalTrigger = ({ children, id, className }) => {
  const { openModal } = useModal(id);   // Hook to handle the opening of the modal with a specific id
  return (
    <button
      className={cn("px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden", className)}
      onClick={openModal}
    >
      {children}
    </button>
  );
};

// Modal component that displays content when the modal is open
export const ModalBody = ({ children, id, className }) => {
  const { open, closeModal } = useModal(id);   // Hook to handle modal opening/closing state
  const modalRef = useRef(null);

  // Manage overflow behavior on modal open/close
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Close the modal if clicking outside
  useOutsideClick(modalRef, closeModal);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <Overlay />
          <motion.div
            ref={modalRef}
            className={cn("relative max-h-[90%] w-full max-w-[40%] bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 md:rounded-2xl flex flex-col overflow-auto", className)}
            initial={{ opacity: 0, scale: 0.5, rotateX: 40, y: 40 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: 10 }}
            transition={{ type: "spring", stiffness: 260, damping: 15 }}
          >
            <CloseIcon closeModal={closeModal} />
            <div className="flex flex-col flex-1">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Reusable modal content component
export const ModalContent = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col flex-1 p-8 md:p-10", className)}>
      {children}
    </div>
  );
};

// Reusable modal footer component
export const ModalFooter = ({ children, className }) => {
  return (
    <div className={cn("flex justify-end p-4 bg-gray-100 dark:bg-neutral-900", className)}>
      {children}
    </div>
  );
};

// Overlay component
const Overlay = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${className}`}
    />
  );
};

// Close icon for the modal
const CloseIcon = ({ closeModal }) => {
  return (
    <button
      onClick={closeModal}
      className="absolute top-4 right-4 z-50 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 group-hover:scale-125 group-hover:rotate-3 transition duration-200"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    </button>
  );
};

// Hook to close the modal if clicking outside
export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};