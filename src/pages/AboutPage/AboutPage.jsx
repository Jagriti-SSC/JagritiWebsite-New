import React from "react";
import "./AboutPage.css";
import ClubCard from "../../components/CardAboutPage/ClubCard";
const AboutPage = () => {
  return (
    <>
      <div className="text-center my-10 mx-5">
        <img
          className="mx-auto my-3"
          src="/assets/Jagriti_big_logo.webp"
          alt=""
        />
        <h2 className="text-4xl my-3 text-blue font-Montserrat tracking-tight font-bold">
          JAGRITI
        </h2>
        <p className="p-3 lg:text-xl w-[70vw] mx-auto tracking-normal text-[#0B1641] font-popins">
          Jagriti is an enlightening and edifying annual social service fast
          concentrated primarily on raising awareness through an assortment of
          educative and profound thinking events. We conduct an array of events
          circulating the theme of social issues. Jognitiis on eller to
          self-contentment wherein we help the underprivileged, borrowing time
          and drawing attention from our surplus lives.
        </p>
      </div>
      <hr className=" h-[2px] bg-light-blue-700  mx-20" />
      <div className="text-center my-10 mx-5">
        <img
          className="w-[300px] mx-auto my-3"
          src="/assets/SSC_logo.webp"
          alt=""
        />
        <h2 className="text-blue font-Montserrat my-3 text-4xl tracking-tight font-bold">
          SOCIAL SERVICE COUNCIL
        </h2>
        <p className="p-3 lg:text-xl w-[70vw] mx-auto tracking-normal text-[#0B1641] font-popins">
          Social Service Council IIT(BHU) Varanasi embraces of the clube
          dedicated to bringing about positive changes in our society's social
          aspects. We are committed to developing and disseminating professional
          knowledge, critical analysis and drafting innovative solutions,
          consequently contributing to overall responsive social welfare. We
          believe that the inherent humane quaities and the sprit of
          volunteerism already existent in every individual needs to be nurtured
          and further developed, thereby blooming out with the full potential to
          benefit the society as a whole.
        </p>
      </div>
      <hr className=" h-[2px] bg-light-blue-700 mx-20 mb-10" />

      {/* <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-2 justify-center"> */}
      <div className="clubBox">
        <ClubCard
          clubLogo="SC_logo.webp"
          clubName="Sahyog Club"
          clubDescription='Sahyog Club, with a mission of "improving quality education in government schools," collaborates with school teachers to improve the basic literacy and numeracy skills of children, leading to uplift their family conditions and background.'
        />

        <ClubCard
          clubLogo="KUC_logo.webp"
          clubName="Kashi Utkarsh Club"
          clubDescription="Kashi Utkarsh, as the name suggests, is the development of Kashi. The development is a process that creates growth and positive change, and the volunteers of Kashi Utkarsh strive to get this change in bastis (slums). The prime motto of Kashi Utkarsh is to improve the quality of life of basti people by alleviating poverty through children's education."
        />
      </div>
      <div className="clubBox mb-10 mt-5">
        <ClubCard
          clubLogo="HHC_logo.webp"
          clubName="Health and Hygiene Club"
          clubDescription="The Health & Hygiene club promotes and advocates a safe and healthy environment for the society. Our various initiatives involve organising blood donation camps, medicine collection drive and spreading awareness on sensitive issues such as menstruation, diseases, healthy habits, sustainability, etc."
        />

        <ClubCard
          clubLogo="SPC_logo.webp"
          clubName="Social Projects' Club"
          clubDescription="Social Projects' Club has taken the challenge of empowering society by employing simple and effective methods. We identify the public's problems and incorporate our technical skills with proper planning and strategy to come up with innovative solutions."
        />
      </div>
    </>
  );
};

export default AboutPage;
