import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const h1Typed = useRef(null);
  const h2Typed = useRef(null);

  useEffect(() => {
    const h1Options = {
      strings: ["Hey, I'm Harry"],
      typeSpeed: 200, // Adjust the speed (in milliseconds) to your preference
      showCursor: false, // Hide the cursor
    };

    h1Typed.current = new Typed(h1Ref.current, h1Options);

    return () => {
      h1Typed.current.destroy();
    };
  }, []);

  useEffect(() => {
    const h2Options = {
      strings: [
        'a Digital Designer',
        'an Events Manager',
        'an Adventurer',
        'an Innovater',
        'an AI Integrator',
      ],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
      loopCount: Infinity,
    };

    h2Typed.current = new Typed(h2Ref.current, h2Options);

    return () => {
      h2Typed.current.destroy();
    };
  }, []);

  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            <span ref={h1Ref}></span>
            <span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m <span ref={h2Ref}></span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            Riding the Waves of Design & Events for 5 years! Passionate about crafting exceptional brands and helping companies thrive. Sharing my adventurous nature, helping people to make a splash. 
            Let's connect  🤝
          </p>
        </Reveal>
        <Reveal>
          <StandardButton onClick={() => document.getElementById("contact")?.scrollIntoView()}>
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
