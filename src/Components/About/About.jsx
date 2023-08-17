import styles from "./About.module.scss";
const About = () => {
  return (
    <div className={styles.aboutSection}>
      <h1 className={styles.head}>ABOUT US</h1>
      <section className={styles.about}>
        <div className={styles.content}>
          <h2>Our Vision</h2>
          <p>
            We envision a society where students from the civil and mechanical
            departments are empowered to lead and innovate in the public sector.
            Our vision is to create a holistic environment that nurtures
            academic excellence, practical competence, and ethical leadership.
            We aim to be a guiding light for students seeking government job
            opportunities, ensuring they are not just prepared, but also
            inspired to contribute meaningfully to the betterment of society
            through their expertise.
          </p>
        </div>
        <div className={styles.img}>
          <img
            src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1692274409/unsplash_7e2pe9wjL9M_hi9qyf.png"
            alt=""
          />
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.content}>
          <h2>Our Mission</h2>
          <p>
            This club is dedicated to providing comprehensive support,
            resources, and guidance to students pursuing government careers in
            civil and mechanical disciplines. Our mission is threefold:{" "}
          </p>
          <p>
            <span className={styles.bold}>Support from field experts:</span> We
            are committed to nurturing well-rounded individuals. We organize
            leadership seminars, soft-skills training, and community engagement
            initiatives to develop leaders who are not only technically
            proficient but also compassionate and socially aware. M.Tech ad
            Ph.D. students will themselves be available for any help with
            projects.
          </p>
          <p>
            <span className={styles.bold}> Academic Empowerment:</span> We
            strive to provide unparalleled academic support through specialized
            workshops, lectures, and study materials tailored to the specific
            requirements of government job exams. Our dedicated faculty and
            industry experts work closely with students to ensure a deep
            understanding of core subjects and concepts.
          </p>
          <p>
            <span className={styles.bold}> Skill Development:</span> Beyond
            textbooks, we emphasize hands-on skill development. Through
            practical training, workshops, and industrial visits, we equip our
            students with the practical skills and real-world insights necessary
            to excel in government roles.
          </p>
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.content}>
          <h2>ESTABLISHMENT OF THE CLUB</h2>
          <p>
            His club was the brainchild of Keshav and Abhinav which finnay came
            into existence in 2023. They were deeply influenced by an incident
            when an alumnus of nit silchar, who wanted to prepare for the core
            government sector in college time, but due to lack of resources,
            motivation, guidance, and friend circle, switched to IT Sector, in
            the last year of his graduation, he, however, got the job in a
            company but, within a year he realized that the job is not for him.
            He could not survive in the cut-throat competition and dynamic
            nature of IT sector. He had to leave the job, and now he had nothing
            in hand. And these cases were increasing in our college, Especially
            for the core branch like Civil, Mechanical, and electrical
            engineering. Ensuring that this would happen again, Keshav and
            Abhinav, started to launch the club, with support from our respected
            professor, and board of directors at Nit Silchar. We are committed
            to keep up with the expectation of all the people who are connected
            with us, who have helped this club to stand. We as the responsible
            club of Nit Silchar, pledge to carry forward the legacy that our
            senior has handled us. In fact, we always aspire to make people
            understand what their real goals and ambitions are. And to make this
            happen we will strive to take out the best from everyone connected
            with us.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
