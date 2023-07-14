import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Fitter Together",
    imgSrc: "project-imgs/ehpt.png",
    code: "https://framer.com/projects/fitter-together--xWQzjYCDIBJ1hOAItsuo-7pz70",
    projectLink: "https://fitter-together.bubbleapps.io/version-test/sign-up-auth",
    tech: ["Figma", "Bubble.", "OpenAI", "API"],
    description:
      "A real-time coaching app for clients wanting personalised Fitness Plans and other training tools. This app is designed and built on my own.",
    modalContent: (
      <>
        <p>
        Join Fitter Together and Transform Your Fitness Journey Today!
        </p>
        <p>
        Get the Motivation and Support You Need to Achieve Your Fitness Goals
        </p>
        <p>
        Are you tired of struggling to stay motivated and need that extra push to kickstart your fitness journey? Look no further! Fitter Together is here to support you every step of the way. Our personalized programs are designed not only to build muscle and burn fat but also to provide the motivation and support you need to stay on track. Say goodbye to excuses and hello to a healthier, happier you!{" "}
          {":)"}
        </p>
        <p>
        Sign up and Receive Exclusive Tips and Tricks from Fitter Together
        </p>
        <p>
        gain access to our exclusive free resource that will supercharge your progress. Whether you're looking to build muscle, burn fat, or find the motivation you've been missing, our expert trainers and coaches have you covered. Don't miss out on this opportunity to transform your life!
        </p>
      </>
    ),
  },
  {
    title: "Clear Correct",
    imgSrc: "project-imgs/Clearcorrect.png",
    code: "https://www.github.com",
    projectLink: "https://www.instagram.com/reel/Ct83Vu5gILM/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    tech: ["Conference", "Event Management", "AV support"],
    description:
      "Join me on a journey to elevate ClearCorrect excellence at the incredible Birmingham Millennium Point & get a glimpse of the conference action..",
    modalContent: (
      <>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "YesChef!",
    imgSrc: "project-imgs/yeschefig.jpg",
    code: "https://www.github.com",
    projectLink: "steam-portfolio-javascript/public/Yes Chef! Identity Guide.pdf",
    tech: ["Illustrator", "Indesign", "Photoshop", "AWS"],
    description:
      "Logo and Branding Design for an artisinal pastry and chocolate supplier brand, that has sold over a million products within days of launching. ",
    modalContent: (
      <>
        <p>
          A logo is often how the customers become aware and associate with a brand.
          It is vital that the logo is presented correctly in every execution. and a surrounding
          guidelines covered this in detail.
        
        </p>
        <p>
         Elevate your
          culinary game
         Artisinal Chocolate & Pastry supplies
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "Elrond Turtles",
    imgSrc: "project-imgs/elrondturtles.jpg",
    code: "https://twitter.com/ElrondTurtles",
    projectLink: "https://elrond-turtles.webflow.io/",
    tech: ["Webflow", "Figma", "NFT", "community" ],
    description:
      "Aiming to build on the growing Elrond network to create a club of NFT enthusiasts looking to take part in the mass NFT revolution.",
    modalContent: (
      <>
        <p>Elrond Turtles is a non-profit organization that protects sea turtles through conservation travel and volunteer tours, our Billion Baby Turtles, Too Rare To Wear, & Sea Turtles & Plastic programs, education programs, and by promoting inclusivity in the sea turtle community.</p>
        <p>
        4,500 2D Generated reptiles built on the #Elrond Network 🐢 | Website coming soon ⌛
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
];
