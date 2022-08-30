AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Developer Team lead",
    desp: "  <li> Drafted progress reports, outlining important performance metrics and outstanding individual contributors</li><li> Consulted with development team members to determine system loads and develop improvement plans.</li> ",
  },
  {
    title: "Software Developer",
    desp: "<li>Database programming (MySQL, ORACLE MongoDB.</li><li> Web-based software engineering (HTML, CSS, PHP) </li><li> Java Programming</li><li> Mobile Application programming (Android studio, Mobile gaming and animation</li><li> .NET Development</li><li> Arduino programming (Built a successful laser tripwire security alarm system</li><li> Agile processes and product development </li><li> Python programming (Machine learning and data science</li><li> Geographical Information Systems Programming</li>
",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);