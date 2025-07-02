// Fill About section dynamically
document.getElementById("about-text").textContent =
  "Engineer. Analyst. AI Enthusiast. I build scalable software that unlocks the full potential of data and machine learning. I love learning new technologies and creating projects that solve real problems.";

// Example projects array
const projects = [

  {
    title: "EVA:An AI powered chatbot for university queries.",
    description: "we introduce EVA (Eklavya Virtual Assistant)—an intelligent and responsive university chatbot tailored to support the academic and administrative ecosystem of Eklavya University.EVA is designed to provide accurate, real-time assistance to students, faculty, and university stakeholders by answering queries related to admissions, course offerings, department details, campus facilities.",
    link: "https://github.com/ak-123459/Open-RAGA.git"
  },
  {
    title: "Unidentified-flying-object-Data-Analysis",
    description: "An unidentified flying object (UFO), or unidentified anomalous phenomenon (UAP),[a] is any perceived airborne, submerged or transmedium phenomenon that cannot be immediately identified or explained.by applying techniques data preprocessing and descriptive analysis I tried to understand key patterns in UFOs sightings places.",
    link: "https://github.com/ak-123459/UFO-Unidentified-flying-object-Data-Analysis.git"
  },

  {
    title: "Fine-tuning Large Language models",
    description: "fine-tune a bert-base-cased large language model for Named Entity Recognition (NER) on university-related data, targeting entities such as department names, course titles, and academic roles.",
    link: "https://github.com/ak-123459/UFO-Unidentified-flying-object-Data-Analysis.git"
  }
];

// Generate project cards
const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const desc = document.createElement("p");
  desc.textContent = project.description;

  const link = document.createElement("a");
  link.href = project.link;
  link.textContent = "View Project";
  link.target = "_blank";

  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(link);

  projectList.appendChild(card);
});



// Example projects array
const certificates = [

  {
    title: "Data Analytics",
    toolsAndTechnologies: "Python,Power BI,MS Excel,SQL,Data Visualizations etc.",
    link: "https://drive.google.com/file/d/1ijFF6qCHrtpPBqSy8cbos9vgnC3M_H45/view?usp=sharing"
  },
  {
    title: "Applied Data Science Lab",
    toolsAndTechnologies: "Python,MongoDB,Machine Learning,Data Preprocessing,Statistics,Data Science.",
    link: "https://www.credly.com/badges/613b2575-9289-4200-aaff-34a370709a2c/public_url"
  },

  {
    title: "Big Data Analytics",
    toolsAndTechnologies: "Apache hadoop,Apache hive,Pyspark.",
    link: "https://drive.google.com/file/d/1iwO7bGfJVmdUcuPGR0GdSyCg6iTQg-7z/view?usp=sharing"
  }
];



// Generate project cards
const certificateList = document.getElementById("certificates-list");

certificates.forEach(certificate => {
  const card = document.createElement("div");
  card.className = "certificates-card";

  const title = document.createElement("h4");
  title.textContent = certificate.title;

  const desc = document.createElement("p");
  desc.textContent = certificate.description;

  const link = document.createElement("a");
  link.href = certificate.link;
  link.textContent = "View Certificates";
  link.target = "_blank";

  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(link);

  certificateList.appendChild(card);
});






// Example: Resume download button
document.getElementById("downloadBtn").addEventListener("click", () => {

  redirectAfterDownload();

});


function redirectAfterDownload() {
    // Delay to allow download to trigger
    setTimeout(function() {
      window.location.href = "https://storage.googleapis.com/host-files/SD-AKASH-PRASAD-MISHRA.pdf";
    }, 500); // 1 second delay
  }