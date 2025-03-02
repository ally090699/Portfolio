import React from "react";
import "../styles.css";
import image from "../images/travel.png";


export default function Aboutme() {
  return (
    <div className="container">
      <div className="abouttitle">
        <h1>
          About <b>me</b>.
        </h1>
        <h1>
          <b>My</b> journey.
        </h1>
      </div>
      <div>
        <h5 className="subtitle">
          I am a <b>programmer</b>, <b>creator</b> and <b>explorer</b> with a
          foundation in computer science and medical science.
        </h5>
        <div className="travel">
          <p id="caption">
          My journey is driven by a blend of technical curiosity and creative exploration. As a lifelong learner, I find joy in diverse pursuits, from crafting intricate crochet designs to developing dynamic web applications. My path took an unexpected turn when I discovered a passion for Computer Science late in my degree. This shift, fueled by a deep desire to build and innovate, has shaped my approach to problem-solving and design. 
          </p>
          <div className="photo">
            <img src={image} className="img-fluid" alt="Sea of Clouds in Thailand" />
          </div>
        </div>
      </div>
      <div id="aboutcontent">
        <h1 className="abouttitle">
        <span role="img" aria-label="Girl on Computer emoji">👩🏻‍💻</span><b>Experience</b>.
        </h1>
        <p className="textcontent">
        My foundation in software development is rooted in a robust academic experience at Western University, where I merged Computer Science and Medical Science studies. This interdisciplinary approach has equipped me with a versatile skillset, enabling me to tackle complex problems using a wide range of programming languages, including Python, Java, C, C++, R, HTML, CSS and JavaScript.
        </p>
        <p className="textcontent">
        In a collaborative project, I led data preprocessing and contributed to data analysis for a breast cancer diagnostic model, leveraging tools like Sklearn, Matplotlib, Numpy and Pandas. Achieving 95% accuracy and 100% recall in early detection showcased my ability to transform raw data into actionable insights, a skill I apply to all my projects.
        </p>
        <p className="textcontent">
        My experience extends to full-stack development, notably with a Java-based math game. Here, I spearheaded front-end development and contributed to the game's logic, ensuring a user-friendly and engaging experience. This project reinforced my understanding of the software development lifecycle, utilizing tools like Jira and GitHub for efficient collaboration.
        </p>
        <p className="textcontent">
        Web development is a core strength, evolving from front-end projects like 'Kit Collective' to full-stack applications using React.js, Next.js, Node.js, MySQL and PostgreSQL. My design skills, honed through projects and graphic design work with the Rare Disease Review Journal, allow me to create visually compelling and intuitive user interfaces. I also understand the importance of accessibility, and have experience with AODA compliance.
        </p>
        <h3 className="aboutsubtitle">.<b>Skills</b>.</h3>
        <p className="textcontent">
        My technical proficiency spans programming languages (Python, Java, JavaScript), web development frameworks (React, Next.js, Tailwind CSS), and data science tools (Sklearn, Pandas). I am also adept at database management (SQL, MySQL, Prisma) and familiar with cloud services (AWS RDS). My experience with Adobe Creative Suite and Figma further complements my design capabilities.
        </p>
        <p className="textcontent">
        Beyond my technical proficiencies, I possess a strong work ethic, a commitment to ongoing learning, and refined communication skills thanks to my sales experience. These attributes, developed through a combination of academic rigor and practical experience, contribute to my effectiveness in collaborative and fast-paced work environments.
        </p>
        <p className="textcontent">
        I am a quick learner and I am always looking to learn new technologies and to improve my skills.
        </p>
        <h1 className="abouttitle">
        <span role="img" aria-label="Stack of Books emoji">📚</span><b>Education</b>.
        </h1>
        <p className="textcontent">
        My academic journey at Western University, culminating in a Bachelor of Science in Medical Science and Computer Science, has provided a strong theoretical and practical foundation. My coursework, ranging from data analytics to software engineering, has equipped me with the skills to tackle diverse technical challenges.
        </p>
        <p className="textcontent">
        My project experience, particularly in machine learning and full-stack development, has allowed me to apply theoretical knowledge to real-world scenarios, reinforcing my problem-solving and collaboration skills.
        </p>
        <h1 className="abouttitle">
        <span role="img" aria-label="Painting Palette emoji">🎨</span><b>Hobbies</b>.
        </h1>
        <p className="textcontent">
        Crocheting and hiking are my creative outlets, allowing me to explore both intricate designs and the natural world. Crocheting fosters my attention to detail and problem-solving skills, while hiking cultivates my sense of exploration and adaptability. These experiences enrich my professional approach, driving me to create innovative and well-crafted solutions.
        </p>
      </div>
    </div>
  );
}
