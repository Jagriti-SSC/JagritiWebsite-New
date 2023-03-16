import React,{useState} from 'react'
import {AnimatePresence} from "framer-motion";
import Card from '../EventCard/Card';
import Modal from '../EventCard/Modal';
import Overlay from '../EventCard/Overlay';

const Events = ({data,index}) => {
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
    <Card data={data} open={openModal} index={index}></Card>

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