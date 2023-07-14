import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Photoshop</span>
            <span className="chip">Illustrator</span>
            <span className="chip">Indesign</span>
            <span className="chip">CSS</span>
            <span className="chip">Figma</span>
            <span className="chip">Webflow</span>
            <span className="chip">Framer</span>
            <span className="chip">Wordpress</span>
            <span className="chip">Blender</span>
            <span className="chip">Sketchup</span>
            <span className="chip">Office 365</span>
            
            <span className="chip">Asana</span>
            <span className="chip">Notion</span>
            <span className="chip">Trello</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Bubble.</span>
            <span className="chip">Midjourney</span>
            <span className="chip">ChatGPT</span>
            <span className="chip">Java</span>
            <span className="chip">FastAPI</span>
            <span className="chip">Cinema 4d</span>
            <span className="chip">Premier Pro</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
