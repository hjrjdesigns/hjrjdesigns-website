import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Harry, if you haven&apos;t already gathered that by
              now. I&apos;m an adventurer turned designer from Banbury,
              Oxfordshire. Where I specialise in branding, graphic and web design, 
              and most recently implementing AI tooling but
              love building with whatever tools are right for the job and pushing the boundaries.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently freelance for Giantleap and Cluego as an Events manager 
              but I also design and build exhibition stands from time to time (once a creative,
              always a creative) with a passion for creating experiences.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love to workout, paddleboard & play rugby. Any given Saturday
              you&apos;ll find me tackling or paddling away my problems ☁️ I
              take AAA courses online at the moment if you&apos;re looking to implement!
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m passively looking for new positions where I can merge my
              love for design with my love for the outdoors. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
