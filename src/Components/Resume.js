import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    
    var pics= data.pics.map((pic)=>{
      var picImage = "images/portfolio/skills/" + pic.image;
      return(
        <div key={pic.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={pic.url} title={pic.title}>
              <img alt={pic.title} src={picImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{pic.title}</h5>
                  <p>{pic.category}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      );
    });
    // var skills = data.skills.map(function (skills) {
    //   var className = "bar-expand " + skills.name.toLowerCase();
    //   return (
    //     <li key={skills.name}>
    //       <span style={{ width: skills.level }} className={className}></span>
    //       <em>{skills.name}</em>
    //     </li>
    //   );
    // });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>
          
          
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >{pics}</div>
          
        </div>
      </div>
    </section>
  );
};

export default Resume;
