import ExpenseSplitterImg from "../assets/images/expense_splitter_project_image.avif";
import PersonalWebsiteImg from "../assets/images/personal_portfolio_image.avif";
import MovieCatalogImg from "../assets/images/movie_catalog_project_image.avif";
import BurnPlanImg from "../assets/images/burn_plan_evaluation_project_image.avif";
import SportsWeatherImg from "../assets/images/sports_weather_project_image.avif";
import TravelPlannerImg from "../assets/images/travel_planner_project_image.avif";
//import WorkInProgressImg from "../assets/images/work_in_progress_image.avif";

export const projectData = [
  {
    projectImgUrl: MovieCatalogImg,
    projectTitle: "Movie Catalog Web App",
    projectStatus: "Work In Progress",
    projectDescription:
      "The Movie Catalog Web App is an ongoing project that uses React.js and Tailwind CSS to create a responsive UI. It utilizes the TMDB API to fetch and display movie data, providing users with a catalog of movies. Additionally, the app uses PostgreSQL to store and retrieve data.",
  },
  {
    projectImgUrl: PersonalWebsiteImg,
    projectGithubUrl: "https://github.com/Lancealot4567/Personal-Website",
    projectTitle: "Personal Website",
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
      "I engaged in a collaborative effort with a single teammate to construct an expense-sharing web application. This project was created using Flask, a Python web framework, and incorporated JavaScript, HTML, and CSS. The primary objective was to simplify making cost allocations within group settings.",
  },
  {
    projectImgUrl: SportsWeatherImg,
    projectTitle: "Sports Weather App",
    projectStatus: "Completed",
    projectDescription:
      "I worked collaboratively with a team of five individuals to develop a JavaFX-based sports weather application that is directly integrated with the OpenWeather API. This project significantly contributed to my proficiency in Java programming, UI design, and teamwork skills.",
  },
  {
    projectImgUrl: TravelPlannerImg,
    projectTitle: "Travel Planner App",
    projectStatus: "Completed",
    projectDescription:
      "Developed a Python application for travel planning, utilizing Kivy for the frontend and MySQL for the backend. This project helped me enhance my Python skills and gain valuable experience in collaborating with a team of four to create user-friendly interfaces",
  },
  {
    projectImgUrl: BurnPlanImg,
    projectTitle: "Burnplan Evaluation App",
    projectStatus: "Completed",
    projectDescription:
      "Developed a CLI Java application for burn plan evaluation, utilizing an external weather API, which significantly improved my Java programming skills. This project allowed me to enhance my proficiency in collaborative software development within a team of four.",
  },
];
