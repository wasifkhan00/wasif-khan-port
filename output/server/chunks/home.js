import { P as Platform } from "./types.js";
import { g as getSkills } from "./skills.js";
const title = "Home";
const name = "Wasif Khan";
const lastName = "";
const links = [
  { platform: Platform.GitHub, link: "https://github.com/" },
  {
    platform: Platform.Linkedin,
    link: "https://www.linkedin.com/"
  },
  {
    platform: Platform.Email,
    link: "riadh_adrani@hotmail.fr"
  }
];
const skills = getSkills("js", "css", "html", "reactjs", "svelte", "ts", "Restfulapi", "angularjs", "Py", "aws", "azure", "docker", "github", "git", "expressjs", "linux", "mongodb", "netlify", "nextjs", "vite", "tensorFlow", "postman", "Illustrator", "photoshop");
export {
  links as a,
  lastName as l,
  name as n,
  skills as s,
  title as t
};
