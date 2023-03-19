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
              src="/assets/FAQ_Hero.webp"
              alt="FAQ_Hero"
            />
          </div>
          <div className="md:w-[60vw]">
            <Fragment>
              <Accordion open={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)} className="font-popins">
                  What is Jagriti?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                JAGRITI is the annual socio-cultural fest of IIT (BHU) Varanasi. It is a three-day event filled with exciting competitions, workshops, performances, and more.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)} className="font-popins">
                What are the dates for Jagriti ’23?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                JAGRITI usually takes place in March or April. This year JAGRITI will be held from the 7th to the 9th of April.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)} className="font-popins">
                Who can participate in Jagriti?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                JAGRITI is open to students from any college or university, as well as the general public. However, some events may have specific eligibility criteria, so it's essential to read the rules and regulations carefully before registering.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 4}>
                <AccordionHeader onClick={() => handleOpen(4)} className="font-popins">
                What kind of events and competitions can I expect at Jagriti?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                JAGRITI features a wide variety of events and competitions, ranging from cultural performances to guest talks and hackathons. The events list can be found on the official website of JAGRITI.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 5}>
                <AccordionHeader onClick={() => handleOpen(5)} className="font-popins">
                How can I register for Jagriti?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                Registration details for JAGRITI are usually announced on the official website, or social media handles in the weeks leading up to the event. Participants may need to fill out an online form or register on unstop and pay a registration fee, depending on the event.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 6}>
                <AccordionHeader onClick={() => handleOpen(6)} className="font-popins">
                Is accommodation provided for participants?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                IIT (BHU) Varanasi usually provides accommodation for outstation participants, but participants may need to pay a fee for accommodation.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 7}>
                <AccordionHeader onClick={() => handleOpen(7)} className="font-popins">
                What is the theme of Jagriti ’23?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                The theme of JAGRITI ’23 is <span className="font-extrabold">Breaking Stereotypes</span>. The theme of <span className="font-extrabold">Breaking Stereotypes</span> encourages people to examine their own biases and assumptions and to strive to see individuals for who they truly are, rather than simply relying on preconceived notions.
                </AccordionBody>
              </Accordion>
              
            </Fragment>
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-screen"
          src="/assets/waves_in_FAQ.webp"
          alt="waves_in_FAQ"
        />
      </div>
    </>
  );
}
