import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CardProfile from "../EventCard/CardProfile";
import Modal from "../EventCard/Modal";
import Overlay from "../EventCard/Overlay";

const Events = ({ data, index }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
    window.scrollTo(0, 0);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <CardProfile data={data} open={openModal} index={index}></CardProfile>

      <AnimatePresence>
        {open && (
          <Overlay close={closeModal}>
            <Modal data={data} close={closeModal}></Modal>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Events;
