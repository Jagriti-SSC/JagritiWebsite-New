import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CardProfile from "../EventCard/CardProfile";
import ModalCard from "../EventCard/ModalCard";
import Overlay from "../EventCard/Overlay";

const EventsProfile = ({ data, index,status }) => {
// console.log(status);
  const [open, setOpen] = useState(false);
// console.log(data);
  const openModal = () => {
    setOpen(true);
    window.scrollTo(0, 0);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <CardProfile status={status} data={data} open={openModal} index={index}></CardProfile>

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
