import { A as Assets } from "./assets.js";
import { g as getSkills } from "./skills.js";
const AiProjectDescription = {
  longDescription: `Wasif Khan has developed an AI web application that reflects his journey in artificial intelligence. Throughout this project, he gained valuable insights into AI model training and the essential role of Python in creating AI-based applications. His commitment to exploring these technologies is evident in his use of various libraries, including TensorFlow.
In addition to learning about model training, Wasif delved into web application development, discovering how to implement retry mechanisms for API calls to enhance user experience. This focus on reducing potential issues underscores his dedication to creating robust and user-friendly applications, aligning with current trends in the tech industry. <br>Feel free to <a href='https://github.com/wasifkhan00/VoiceraApp' target="_blank" 
	rel="noreferrer"> check outthe repository on GitHub for the code </a> and additional details!</br>`,
  shortDescription: `Discover Wasif Khan's AI web application! Dive into a user-friendly experience that showcases cutting-edge AI technology.`
};
const CryptoCurrencyProjectDescription = {
  longDescription: `I developed this web application using ReactJS to fetch and display historical cryptocurrency data. The app showcases my skills in accessing third-party API endpoints and is hosted on GitHub, with deployment on Netlify.
     <br/><b>Key Features</b><br/>
  <li><b> Historical Data Visualization:</b> Users can view historical data for several cryptocurrencies, including weekly, monthly, and yearly charts.</li>
  <li><b> Google Authentication:</b> Integrated Google OAuth for secure user login, with credentials stored in MongoDB.</li>
 <li><b>  Dark and Light Mode:</b> Users can toggle between dark and light themes for a personalized experience.<br/></li>
<li> <b>  Responsive Design:</b> The web app is fully responsive, ensuring a seamless experience across all device sizes.</li>
    Feel free to  <a href='https://github.com/wasifkhan00/blockchainpal' target="_blank"
        rel="noreferrer">check out the repository on GitHub for the code and additional details!</a>`,
  shortDescription: "Dive into the world of cryptocurrencies with my interactive web application! With a clear UI track the coins and start trading in crypto!"
};
const WeatherProjectDescription = {
  longDescription: `This web application provides users with real-time hourly and weekly weather forecasts based on their exact geographical location. Developed using JavaScript, HTML, and CSS, the application leverages modern web technologies to deliver an intuitive and responsive user experience.

<b><br/> Key Features </b><br/>
<li> <b>Location-Based Forecasts:</b> The app uses the Geolocation API to automatically fetch weather data for the user's current location, ensuring accurate and relevant information.</li>
<li> <b>Default Locations:</b> For users who prefer not to share their location, the app offers four preset default locations. Users can easily select any of these locations to view the hourly and weekly weather forecasts.</li>
<li> <b>Error Handling:</b> In the event that a user denies permission for location access, the app redirects to a user-friendly 403 error page, clearly explaining the need for location access and offering options to select a default location.
<br/><br/><b>Technical Details</b><br/>
<li> <b>Frontend Technologies:</b> Built with HTML for structure, CSS for styling, and JavaScript for dynamic content and API interactions.The application is responsive and optimized for both desktop and mobile devices.</li>
<li> <b>Data Source:</b> The weather data is fetched from a reliable weather API, ensuring up-to-date and accurate forecasts.</li>
<li> <b>Deployment:</b> The project is hosted on Netlify, providing seamless deployment and continuous integration capabilities.</li>

This project not only demonstrates my proficiency in web development but also highlights my ability to create user-centered applications. The integration of location services with error handling and default options showcases a thoughtful approach to user experience. I am excited to further enhance this application with additional features, such as user preferences and historical weather data. <br/>

Feel free to  <a href='https://github.com/wasifkhan00/weather' target="_blank"
        rel="noreferrer">check out the repository on GitHub for the code and additional details!</a>	
			
			`,
  shortDescription: "Discover real-time weather updates with weather forecast website of your current location!"
};
const MessengerProjectDescription = {
  longDescription: `Wasif Khan has developed an AI web application that reflects his journey in artificial intelligence. Throughout this project, he gained valuable insights into AI model training and the essential role of Python in creating AI-based applications. His commitment to exploring these technologies is evident in his use of various libraries, including TensorFlow.
In addition to learning about model training, Wasif delved into web application development, discovering how to implement retry mechanisms for API calls to enhance user experience. This focus on reducing potential issues underscores his dedication to creating robust and user-friendly applications, aligning with current trends in the tech industry. <br>Feel free to <a href='https://github.com/wasifkhan00/VoiceraApp' target="_blank" 
	rel="noreferrer"> check outthe repository on GitHub for the code </a> and additional details!</br>`,
  shortDescription: `Discover Wasif Khan's AI web application! Dive into a user-friendly experience that showcases cutting-edge AI technology.`
};
const labels = "Visit Project";
const items = [
  {
    slug: "Ai_Application",
    color: "#5e95e3",
    description: AiProjectDescription.longDescription,
    shortDescription: AiProjectDescription.shortDescription,
    links: [{ to: "https://voicera.netlify.app/", label: labels }],
    logo: Assets.ReactJs,
    name: "Ai Web Application",
    period: {
      from: /* @__PURE__ */ new Date("2024-09-10"),
      to: /* @__PURE__ */ new Date("2024 10 1")
    },
    skills: getSkills(
      "reactjs",
      "ts",
      "tailwind",
      "vite",
      `tensor`,
      "tensorFlow",
      "netlify",
      "git",
      "github"
    ),
    type: "Face Detection App",
    screenshots: [
      {
        label: "Home Page",
        src: `${Assets.aiOne}`
      },
      {
        label: "Live Webcam",
        src: `${Assets.aiTwo}`
      },
      {
        label: "Ai Didn't Detected Face",
        src: `${Assets.aiThree}`
      },
      {
        label: "Ai Detected Face ",
        src: `${Assets.aiFour}`
      },
      {
        label: "Prompt",
        src: `${Assets.aiFive}`
      }
    ]
  },
  // Project 2 start
  {
    slug: "CryptoCurrency_Application",
    color: "#5e95e3",
    description: CryptoCurrencyProjectDescription.longDescription,
    shortDescription: CryptoCurrencyProjectDescription.shortDescription,
    links: [{ to: "https://blockchainpal.netlify.app/", label: labels }],
    logo: Assets.ReactJs,
    name: "Cryptocurrency Application",
    period: {
      from: /* @__PURE__ */ new Date("2022-05-25"),
      to: /* @__PURE__ */ new Date("2022 09 13 ")
    },
    skills: getSkills(
      "reactjs",
      "css",
      "js",
      "Restfulapi",
      "postman",
      "",
      "netlify",
      "git",
      "github",
      "mongodb",
      "expressjs",
      "nodejs"
    ),
    type: "CryptoCurrency Graphical Data Interface App",
    screenshots: [
      {
        label: "Home (Light)",
        src: `${Assets.cryptoAppOne}`
      },
      {
        label: "Home (Dark)",
        src: `${Assets.cryptoAppTwo}`
      },
      {
        label: "Dashboard (Light)",
        src: `${Assets.cryptoAppThree}`
      },
      {
        label: "Dashboard (Dark)",
        src: `${Assets.cryptoAppFour}`
      },
      {
        label: "Coin's Historical Data",
        src: `${Assets.cryptoAppFive}`
      },
      {
        label: "Dashboard When Logged In ",
        src: `${Assets.cryptoAppSix}`
      },
      {
        label: "Footer",
        src: `${Assets.cryptoAppSeven}`
      }
    ]
  },
  // third application
  {
    slug: "Weather_Application",
    color: "#5e95e3",
    description: WeatherProjectDescription.longDescription,
    shortDescription: WeatherProjectDescription.shortDescription,
    links: [
      { to: "https://wasifkhan00.github.io/weather/", label: labels }
    ],
    logo: Assets.JavaScript,
    name: "Real-time Weather Application",
    period: {
      from: /* @__PURE__ */ new Date("2022-03-25"),
      to: /* @__PURE__ */ new Date("2022 10 11")
    },
    skills: getSkills("js", "css", "html", "git", "github", "Restfulapi", "postman"),
    type: "Real-time Weather Data based on your location",
    screenshots: [
      {
        label: "screen",
        src: `${Assets.weatherOne}`
      }
    ]
  },
  // third application
  {
    slug: "Messenger_Application",
    color: "#5e95e3",
    description: MessengerProjectDescription.longDescription,
    shortDescription: MessengerProjectDescription.shortDescription,
    links: [{ to: "https://stewardsmessenger.netlify.app/", label: labels }],
    logo: Assets.ReactJs,
    name: "Real-time Communication Application",
    period: {
      from: /* @__PURE__ */ new Date("2022-11-25"),
      to: /* @__PURE__ */ new Date("2023 04 14")
    },
    skills: getSkills("reactjs", "Restfulapi", "css", "aws", "expressjs", "mongodb", "git", "github", "nodejs", "netlify", "linux", "js"),
    type: "Real-time Messaging Application"
  },
  {
    slug: "slick-portfolio-svelte",
    color: "#ff3e00",
    description: "A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",
    shortDescription: "A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",
    links: [{ to: "https://github.com/RiadhAdrani/slick-portfolio-svelte", label: labels }],
    logo: Assets.Svelte,
    name: "Slick Portfolio",
    period: {
      from: /* @__PURE__ */ new Date()
    },
    skills: getSkills("svelte", "ts", "tailwind", "sass"),
    type: "Website Template",
    screenshots: [
      {
        label: "screen 1",
        src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        label: "2",
        src: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        label: "3",
        src: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      },
      {
        label: "4",
        src: "https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      },
      {
        label: "5",
        src: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      },
      {
        label: "6",
        src: "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      }
    ]
  }
];
const title = "Projects";
export {
  items as i,
  title as t
};
