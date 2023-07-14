import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Giantleap",
    position: "Events Manager",
    time: "06.2021 - Present",
    location: "Apollo Park, Oxfordshire",
    description:
      "Managing and delivering a range of corporate hospitality from teambuilding, conference delivery, incentive programmes, venue selection, audio-visual solutions, exhibition design and event entertainment. Creation of proposals, itineraries and liasing and engaging with clients, venues, event suppliers whilst meeting high standards, targets and deadlines for very succesful projects and events. Production of creative content for exhibitions, conferences and providing AV support, Live streaming and digital media capture and presentation creation.",
    tech: [
      "Teambuilding",
      "Exhbition Design",
      "Incentive Travel",
      "Conferences",
      "AV Tech",
    ],
  },
  {
    title: "Cluego",
    position: "Event Manager",
    time: "09.2021 - Present",
    location: "National",
    description:
      "Running outdoor Teambuilding activities across the UK, motivating and connecting teams via a series of Ipad & tablet treasure hunt activities and events. Presenting event demo and brief through public speaking, and demonstrations whilst providing event support throughout.",
    tech: ["Teambuilding", "Public Speaking", "Customer Support", "Motivational",],
  },
  {
    title: "Quadrant2Design",
    position: "Exhibition Stand Designer",
    time: "09.2018 - 08.2019",
    location: "Poole, Dorset",
    description:
      "Developed Exhibition stand designs for a varied client base; From healthcare clientele, innovative vape businesses and pioneering tech and supplement brands. Researching clients daily and producing design assets to create 3D visualisations of an exhibit using the companies modular patents, to fit the clients stand space. Designing and rendering a series of compelling 3D visuals for the teams sales proposals.",
    tech: [
      "AutoCAD",
      "3DS Max",
      "Indesign",
      
    ],
  },
];
