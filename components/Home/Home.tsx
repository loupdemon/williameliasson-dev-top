"use client";
import React from "react";
import Image from "next/image";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import styles from "./Home.module.scss";
import { useWindowScrollPositions } from "../../utils/useWindowScrollPosition";
import Card from "../Card/Card";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const { scrollY } = useWindowScrollPositions();
  const [showArrow, setShowArrow] = React.useState(true);
  if (scrollY >= 200 && showArrow === true) {
    setShowArrow(false);
  }

  return (
    <>
      <div className={styles["home"]}>
        <div className={styles["home-background"]}>
          <div className={styles["greeting"]}>
            <div className={styles["greeting-text"]}>
              <h1>Hej jag är,</h1>
              <div className={styles["greeting-text-name"]}>
                <h1>William Eliasson</h1>
                <p>(Fullstack Utvecklare)</p>
              </div>
              <p>Jag är en driven och ambitiös utvecklare</p>
              <p>som älskar att skapa saker.</p>
              Jag har en stor passion för
              <p>att utveckla verktyg som är användbara och som kan hjälpa </p>
              <p>andra människor.</p>
            </div>
            <div className={styles.skills}>
              <div>
                <h1>Vad kan jag för nåt?</h1>
                <div className={styles["skills-section"]}>
                  <h1>Språk</h1>
                  <div>
                    <span>JavaScript</span>
                    <span>TypeScript</span>
                    <span>Python🐍</span>
                    <span>Swedish🇸🇪</span>
                    <span>English🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                  </div>
                </div>
                <div className={styles["skills-section"]}>
                  <h1>Frontend</h1>
                  <div>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>Next.js</span>
                    <span>Redux</span>
                    <span>Material UI</span>
                    <span>Chakra UI</span>
                  </div>
                </div>

                <div className={styles["skills-section"]}>
                  <h1>Backend</h1>
                  <div>
                    <span>Prisma</span>
                    <span>Express</span>
                    <span>PostgreSQL</span>
                    <span>next-auth</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>Mongoose</span>
                    <span>REST API</span>
                  </div>
                </div>
                <div className={styles["skills-section"]}>
                  <h1>Devops & CI/CD</h1>
                  <div>
                    <span>Git</span>
                    <span>GitHub</span>
                    <span>EsLint</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showArrow && (
          <div
            className={
              scrollY < 100 ? styles.scrolldown : styles.scrolldisapear
            }
          >
            <ArrowDownIcon />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
