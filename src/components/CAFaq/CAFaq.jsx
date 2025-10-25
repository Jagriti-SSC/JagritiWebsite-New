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
        <div className="md:flex items-center justify-center mt-10 mb-10">
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
                Are there any specific guidelines or resources provided to Campus Ambassadors?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                These can include training materials, brand guidelines, communication tips, event planning resources.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)} className="font-popins">
                What kind of support or assistance can Campus Ambassadors expect from the Jagriti'26 team?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                They can have a mentor for having a point of contact within the organization team for advice and support.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)} className="font-popins">
                How can Campus Ambassadors collaborate or connect with other Ambassadors or the organizing team?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                We will be making a whatsapp group for effective communication between all CAs and organizing team.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 4}>
                <AccordionHeader onClick={() => handleOpen(4)} className="font-popins">
                Will there be opportunities to interact with guest speakers or notable personalities associated with Jagriti'26?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                Yes
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 5}>
                <AccordionHeader onClick={() => handleOpen(5)} className="font-popins">
                How Much Time Will I Need to Dedicate as a Campus Ambassador?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                Around 3-4 hours per week start date will be informed to all CAs.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 6}>
                <AccordionHeader onClick={() => handleOpen(6)} className="font-popins">
                Are There Any Requirements to Become a Campus Ambassador for the College Fest?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                YES,Just a great enthusiasm about learning about our Jagriti Culture and paas on the knowledge to their respective institutions.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 7}>
                <AccordionHeader onClick={() => handleOpen(7)} className="font-popins">
                How Does Being a Campus Ambassador Benefit My Resume?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                Being a Campus ambassador for one of the most prestigious institutions of country and one of most important fest definitely adds Brownie points in front of recruiters eyes.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 8}>
                <AccordionHeader onClick={() => handleOpen(8)} className="font-popins">
                What will be the procedure for the selection of Campus Ambassador?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                A short telephonic interview about themselves.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 9}>
                <AccordionHeader onClick={() => handleOpen(9)} className="font-popins">
                Will training or onboarding be given to the campus ambassador? Of what nature shall it be?
                </AccordionHeader>
                <AccordionBody className="font-popins">
                All CAs will be given extensive onboarding training about our Jagriti culture and importance of it. All CAs are expected to pass on knowledge to their own campuses and become a part of our great culture.
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
