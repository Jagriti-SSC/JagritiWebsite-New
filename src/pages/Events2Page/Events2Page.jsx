import React, { useEffect, useState } from "react";
import "./Events2Page.css";
import { motion } from "framer-motion";
import CompetitionCard from "../../components/CompetitionCard/CompetitionCard";
import Preloader from "../../components/preloader/Preloader";
import Footer from "../../components/footer/Footer";

const Events2Page = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    document.title = "Events | Jagriti IIT (BHU)";

    return () => clearTimeout(timer);
  }, []);

  const competitions = [
    {
      id: 1,
      title: "Strat-Impact",
      description:
        "Develop strategic solutions to real-world social impact challenges and present your innovative approaches.",
      detailedInfo:
        " This event provides a platform for innovative thinkers and aspiring strategists to solve real-world social and business challenges through strategic and data-driven solutions.",
      logo: null,
      icon: "🎯",
      registrationLink:
        "https://unstop.com/competitions/strat-impact-jagriti-2026-iit-bhu-1591918",
    },
    {
      id: 2,
      title: "Policy Case Simulation",
      description:
        "Engage in policy-making simulations and craft impactful policy recommendations for pressing social issues.",
      detailedInfo:
        "The Policy Simulation Challenge is a flagship governance event designed to test participants' ability to think analytically and act ethically under simulated real-world policymaking and crisis management scenarios.",
      logo: null,
      icon: "⚖️",
      registrationLink:
        "https://unstop.com/competitions/policy-case-simulation-jagriti-2026-iit-bhu-1592276",
    },
    {
      id: 3,
      title: "Impactify",
      description:
        "Analyze and propose product solutions that create meaningful social impact and sustainable change.",
      detailedInfo:
        "This event serves as a dynamic platform for aspiring product managers and creative problem solvers to design impactful solutions to pressing social challenges through product-driven strategies.",
      logo: null,
      icon: "💡",
      registrationLink:
        "https://unstop.com/competitions/impactify-jagriti-2026-iit-bhu-1592190",
    },
    {
      id: 4,
      title: "Voice of Change",
      description:
        "Tell compelling stories of change and impact through investigative journalism and creative reporting.",
      detailedInfo:
        "Voice of Change is designed to immerse students in the world of journalism, testing their awareness, writing skills, and field reporting abilities. Participants will experience real-world reporting scenarios, research-based article writing, and citizen interaction to highlight pressing social issues effectively.",
      logo: null,
      icon: "📰",
      registrationLink:
        "https://unstop.com/competitions/voice-of-change-journalism-challenge-jagriti-2026-iit-bhu-1592217",
    },
    {
      id: 5,
      title: "Socio-Entrepreneurship",
      description:
        "Create innovative business models that address social problems while ensuring financial sustainability.",
      detailedInfo:
        "It provides a platform for aspiring innovators and changemakers to design entrepreneurial solutions for real-world social challenges—combining creativity, strategy, and impact.",
      logo: null,
      icon: "🚀",
      registrationLink:
        "https://unstop.com/competitions/socio-entrepreneurship-jagriti-2026-iit-bhu-1592389",
    },
    {
      id: 6,
      title: "Serve-Smart Hackathon",
      description:
        "Build technological solutions to solve social challenges and improve community services.",
      detailedInfo:
        "The Serve-Smart Hackathon is the flagship AI & ML challenge dedicated to harnessing the power of technology for social good. This competition calls upon innovators to leverage Artificial Intelligence and Machine Learning to design intelligent, practical, and impactful solutions aimed at solving real-world social issues.",
      logo: null,
      icon: "💻",
      registrationLink:
        "https://unstop.com/hackathons/serve-smart-hackathon-jagriti-2026-iit-bhu-1592214",
    },
    {
      id: 7,
      title: "Impact-Metrics",
      description:
        "Use data analytics to measure and optimize social impact across various initiatives and programs.",
      detailedInfo:
        "This dynamic event invites data enthusiasts and problem solvers to dive into the world of analytics and derive actionable insights to address pressing social issues.",
      logo: null,
      icon: "📊",
      registrationLink:
        "https://unstop.com/competitions/impact-metrics-a-data-analytics-competition-jagriti-2026-iit-bhu-1592416",
    },
    {
      id: 8,
      title: "Re-Form",
      description:
        "Transform waste materials into fashionable wearables, promoting sustainability and circular economy.",
      detailedInfo:
        "Re-Form is not just a fashion event — it’s a movement toward sustainability and creativity. Participants are challenged to transform waste materials into wearable art that reflects innovation, environmental awareness, and social responsibility.",
      logo: null,
      icon: "♻️",
      registrationLink:
        "https://unstop.com/competitions/re-form-the-waste-to-wearable-challenge-jagriti-2026-iit-bhu-1592705",
    },
  ];

  return (
    <>
      <div className="events2-bg">
        {loading ? (
          <Preloader loading={loading} />
        ) : (
          <>
            <div className="events2-content-wrapper">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="events2-header"
              >
                <h1 className="events2-title">EVENTS</h1>

                <div className="events2-divider">
                  <span className="events2-divider-icon">✨</span>
                </div>
              </motion.div>

              {/* <div className="events2-grid">
                {competitions.map((competition, index) => (
                  <CompetitionCard
                    key={competition.id}
                    title={competition.title}
                    description={competition.description}
                    detailedInfo={competition.detailedInfo}
                    icon={competition.icon}
                    index={index}
                    registrationLink={competition.registrationLink}
                  /> */}
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Events2Page;
