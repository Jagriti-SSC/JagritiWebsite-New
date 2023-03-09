import React,{useState} from 'react'
import {motion, AnimatePresence} from "framer-motion";
import Card from '../EventCard/Card';
import Modal from '../EventCard/Modal';
import Overlay from '../EventCard/Overlay';

const Events = ({data}) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
    <Card data={data} open={openModal}></Card>

    <AnimatePresence>
      {
        open && (<Overlay close={closeModal}>
          <Modal data={data} close={closeModal}></Modal>
        </Overlay>)
      }
    </AnimatePresence>


    </>
   

  )
}

export default Events