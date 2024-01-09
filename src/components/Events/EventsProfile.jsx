import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CardProfile from "../EventCard/CardProfile";
import ModalCard from "../EventCard/ModalCard";
import Overlay from "../EventCard/Overlay";

const EventsProfile = ({ data, index }) => {
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
            <ModalCard data={data} close={closeModal}></ModalCard>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default EventsProfile;
