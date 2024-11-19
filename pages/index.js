import styles from "../styles/Home.module.css";
import Avatar from "@/components/avatar/avatar";
import Header from "@/components/header/header";

export default function Home() {
  return (
      <div className={styles.container}>
          <Header />
          <div className={styles.content}>
              <div className={styles.sideStrip}>
                <span>
                    Software engineer
                </span>
                <hr/>
                <span>
                    {new Date().getFullYear().toString()}
                </span>
              </div>
              <div className={styles.mainBloc}>
                  <div className={styles.blocTitle}>
                      <span className={styles.mainTitle}>
                          Hi!
                      </span>
                      <span className={styles.secondaryTitle}>
                        Welcome on my portfolio
                      </span>
                  </div>
                <Avatar />
              </div>
          </div>
      </div>
  );
}
