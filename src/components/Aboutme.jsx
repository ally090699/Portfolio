import React from "react";
import "../styles.css";
import image from "../images/travel.png";


export default function Aboutme() {
  return (
    <div className="container">
      <div className="abouttitle">
        <h1>
          Enter <b>my domain</b>.
        </h1>
        <h1>
          <b>Explore</b> the lore.
        </h1>
      </div>
      <div>
        <h5 className="subtitle">
          I am a <b>creator</b>, <b>designer</b> and <b>programmer</b> with a
          foundation in computer science and medical science.
        </h5>
        <div className="travel">
          <p id="caption">
            I’ve got my hands full with a variety of creative pursuits—whether it's cooking, 
            baking (still learning!), building websites and apps, designing, crocheting, gaming, 
            or hiking. I’m always on the lookout for new adventures and mysteries to dive into, 
            whether in nature or through learning something new every day.
          </p>
          <div className="photo">
            <img src={image} className="img-fluid" alt="Sea of Clouds in Thailand" />
          </div>
        </div>
      </div>
      <div id="aboutcontent">
        <h1 className="abouttitle">
        <span role="img" aria-label="Girl on Computer emoji">👩🏻‍💻</span><b>experience</b>.
        </h1>
        <p className="textcontent">
          Throughout my time at Western University, I have developed multiple software projects 
          using Python, Java, C, C++, JavaScript, and SQL, applying core principles of algorithms, 
          data structures, and object-oriented programming. As part of a semester-long group project, 
          I contributed to the development of a machine learning model for breast cancer diagnosis using 
          Sklearn, NumPy, Pandas, Seaborn, SciPy, MatPlotLib and Jupyter Notebook, analyzing diagnostic 
          data to optimize model performance. In another team-based project, I collaborated on an interactive
           Java-based math game, where I helped design UI components and implement game logic to enhance user 
           engagement. My coursework also included hands-on experience with database management, where I created, 
           managed, and queried relational databases using SQL and MS Access, reinforcing my understanding of 
           data modeling and query optimization. 
        </p>
        <p className="textcontent">
          Additionally, I have built front-end web applications that emphasize modern design, responsiveness, and
           user interaction. In Winter 2024, I developed Kit Collective, a fully functional e-commerce website, 
           using HTML, CSS, JavaScript, jQuery and Bootstrap, incorporating parallax scrolling, Scrollfire animations, 
           and a validated contact form to enhance functionality. Alongside this, I created my personal portfolio website, 
           focusing on a clean, intuitive design that effectively showcases my work. Using CSS Grid and Flexbox, I ensured 
           a fully responsive layout that adapts seamlessly across devices. Both projects highlight my ability to independently 
           design, develop, and optimize front-end web applications, demonstrating my proficiency in web development and 
           user-centered design. 
        </p>
        <h3 className="aboutsubtitle">
          .<b>technical skills</b>.
          </h3>
          <p className="textcontent">
          I have a strong foundation in programming languages, including Python, Java, C, C++, JavaScript, R, SQL, and
          JSON. My web development expertise covers HTML, CSS, JavaScript, Bootstrap, jQuery, React.js, Node.js, 
          Express.js, REST APIs, Spring Boot, Web Service Design, SEO and AODA Compliance. I have experience working 
          with databases and data management, including SQL, MySQL, MS SQL Server, and database software, with 
          PostgreSQL (mastering) as a primary focus.
          </p>
          <p className="textcontent">
          In machine learning and data science, I have applied Scikit-learn, NumPy, Pandas, Seaborn, SciPy, Matplotlib, 
          and Jupyter Notebook, along with experience in deep learning, GenAI, LLMs, and computer vision. My software 
          development skills encompass object-oriented design (OOD), data structures, algorithms, software development 
          life cycle (SDLC – Agile), microservices, Express.js, AutoCAD, and JUnit. I am proficient with various 
          tools and platforms, including Git/GitHub, Jira, Confluence, Bitbucket, Apache NetBeans, Docker, Jenkins, 
          Adobe Illustrator, Adobe Photoshop, MS Office (Excel, Access), IntelliJ IDEA, Qt Creator, VS Code and Eclipse. 
          Additionally, I have experience developing in Linux and JavaOS environments.
          </p>
        <h1 className="abouttitle">
        <span role="img" aria-label="Stack of Books emoji">📚</span><b>education</b>.
        </h1>
        <p className="textcontent">
          I am currently completing a Bachelor of Science (BSc) in Medical Science & Computer Science at 
          Western University, with an expected graduation in April 2025. My coursework includes Software 
          Development, Web Development, Machine Learning, Computer Networks and Databases, equipping me 
          with a strong foundation in both theoretical and applied computing. Through group projects, I have 
          worked on machine learning applications, interactive software development, and database management, 
          gaining experience in several tools and technologies.
        </p>
        <h1 className="abouttitle">
        <span role="img" aria-label="Painting Palette emoji">🎨</span><b>art</b>.
        </h1>
        <p className="textcontent">
          Though it began as a fun hobby, I have been crocheting for more than
          four years now and have created over 40 unique pieces. I enjoy working
          on practical, fashionable and cozy pieces like tote bags, dresses, and
          sweaters!
        </p>
      </div>
    </div>
  );
}
