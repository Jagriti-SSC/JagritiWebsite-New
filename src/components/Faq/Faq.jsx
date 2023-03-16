import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Example() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <div className="mx-10">
        <h1 className="mx-1 mt-10 font-Montserrat block text-4xl text-blue font-bold text-center">
          Frequently Asked Questions
        </h1>
        <div className="md:flex mt-10 mb-10">
          <div>
            <img
              className="mx-auto lg:mx-10 mb-10"
              src="/assets/FAQ_Hero.png"
              alt="FAQ_Hero"
            />
          </div>
          <div className="md:w-[60vw]">
            <Fragment>
              <Accordion open={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)} className="font-popins">
                  What is Material Tailwind?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)} className="font-popins">
                  How to use Material Tailwind?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)} className="font-popins">
                  What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Amet natus accusamus non animi?
                  Placeat explicabo officiis quasi iusto quia omnis, suscipit
                  unde animi atque nam vitae. Alias ducimus vel natus! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Amet natus
                  accusamus non animi? Placeat explicabo officiis quasi iusto
                  quia omnis, suscipit unde animi atque nam vitae. Alias ducimus
                  vel natus! Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Amet natus accusamus non animi? Placeat explicabo
                  officiis quasi iusto quia omnis, suscipit unde animi atque nam
                  vitae. Alias ducimus vel natus! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Amet natus accusamus non animi?
                  Placeat explicabo officiis quasi iusto quia omnis, suscipit
                  unde animi atque nam vitae. Alias ducimus vel natus! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Amet natus
                  accusamus non animi? Placeat explicabo officiis quasi iusto
                  quia omnis, suscipit unde animi atque nam vitae. Alias ducimus
                  vel natus! Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Amet natus accusamus non animi? Placeat explicabo
                  officiis quasi iusto quia omnis, suscipit unde animi atque nam
                  vitae. Alias ducimus vel natus! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Amet natus accusamus non animi?
                  Placeat explicabo officiis quasi iusto quia omnis, suscipit
                  unde animi atque nam vitae. Alias ducimus vel natus! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Amet natus
                  accusamus non animi? Placeat explicabo officiis quasi iusto
                  quia omnis, suscipit unde animi atque nam vitae. Alias ducimus
                  vel natus! Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Amet natus accusamus non animi? Placeat explicabo
                  officiis quasi iusto quia omnis, suscipit unde animi atque nam
                  vitae. Alias ducimus vel natus! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Amet natus accusamus non animi?
                  Placeat explicabo officiis quasi iusto quia omnis, suscipit
                  unde animi atque nam vitae. Alias ducimus vel natus! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Amet natus
                  accusamus non animi? Placeat explicabo officiis quasi iusto
                  quia omnis, suscipit unde animi atque nam vitae. Alias ducimus
                  vel natus!
                </AccordionBody>
              </Accordion>
            </Fragment>
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-screen"
          src="/assets/waves_in_FAQ.png"
          alt="waves_in_FAQ"
        />
      </div>
    </>
  );
}
