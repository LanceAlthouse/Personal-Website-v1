import ExpenseSplitterImg from "../assets/images/expense_splitter_project_image.avif";
import WorkInProgressImg from "../assets/images/work_in_progress_image.avif";
import PersonalWebsiteImg from "../assets/images/personal_portfolio_image.avif";
import MovieCatalogImg from "../assets/images/movie_catalog_project_image.avif";

export const projectData = [
  {
    projectImgUrl: MovieCatalogImg,
    projectGithubUrl: "https://github.com/Lancealot4567/Movie-Catalog",
    projectTitle: "Movie Catalog Web App",
    projectStatus: "Work In Progress",
    projectDescription:
      "The Movie Catalog Web App is an ongoing project that uses React.js and Tailwind CSS to create a responsive UI. It utilizes the TMDB API to fetch and display movie data, providing users with a catalog of movies. Additionally, the app uses PostgreSQL to store and retrieve data.",
  },
  {
    projectImgUrl: PersonalWebsiteImg,
    projectGithubUrl: "https://github.com/Lancealot4567/Personal-Website",
    projectTitle: "Personal Portfolio Website",
    projectStatus: "Work In Progress",
    projectDescription:
      "My personal portfolio website is a dynamic web application built using React.js, JavaScript, and TailwindCSS. It serves as an online showcase of my skills, projects, and accomplishments. It is constantly being updated and improved as I develop new ideas.",
  },
  {
    projectImgUrl: ExpenseSplitterImg,
    projectGithubUrl: "https://github.com/Lancealot4567/Expense-Splitter",
    projectTitle: "Expense Splitter Web App",
    projectStatus: "Completed",
    projectDescription:
      "Collaborated with one teammate to create an expense-sharing web application using Flask, Python, JS, and HTML/CSS, helping to simplify cost distribution among groups.",
  },
  {
    projectImgUrl: WorkInProgressImg,
    projectTitle: "Sports Weather App",
    projectStatus: "Completed",
    projectDescription:
      "Built a JavaFX-based sports weather application, enhancing my Java development and UI design skills while working effectively in a team of five.",
  },
  {
    projectImgUrl: WorkInProgressImg,
    projectTitle: "Travel Planner App",
    projectStatus: "Completed",
    projectDescription:
      "Created a Python application for travel planning using Kivy frontend, strengthening my Python skills and gaining experience in developing user-friendly interfaces in a team of four.",
  },
  {
    projectImgUrl: WorkInProgressImg,
    projectTitle: "Burnplan Evaluation App",
    projectStatus: "Completed",
    projectDescription:
      "Developed a CLI Java application for burn plan evaluation, improving my Java skills and proficiency in collaborative software development within a team of four.",
  },
];
