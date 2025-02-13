import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries and Frameworks', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Cloud Services & Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};
export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'Wasif Khan started his coding journey with JavaScript, writing over 5,000+ lines of code since 2021. He developed various projects that is hosted on GitHub, beginning with a simple calculator app. As he progressed, he delved into different JavaScript frameworks, enhancing his skills and expanding his project portfolio. Later, he ventured into backend development, utilizing Node.js to build a chat system, showcasing his ability to create robust applications using server-side technologies. His commitment to continuous learning has laid a solid foundation for his development career.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: `As Wasif Khan progressed in his career, he began tackling larger projects and quickly realized that JavaScript's lack of a type system posed challenges, particularly when managing props. This limitation made it difficult for him to determine the types of data being passed around in his applications. Seeking a solution, he decided to learn TypeScript.

Jumping into TypeScript transformed his coding approach. He implemented TypeScript in significant projects, including a video chat app, which not only improved the scalability of his applications but also enhanced code readability and maintainability. The ability to define types allowed Wasif to catch errors early in the development process, leading to cleaner and more understandable code.

This experience reinforced his belief in the importance of strong typing in modern web development and empowered him to build more robust applications with confidence. TypeScript has since become an essential part of his toolkit, further elevating the quality of his work.`,
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'Py',
		color: 'yellow',
		description:
			'Wasif Khan has explored the Python programming language and, while he doesn’t yet have a strong foundation, he feels confident in his ability to work with it. Having written over 1,000 lines of code in Python, he finds that picking up the syntax comes easily to him. This familiarity gives him the assurance that he can handle projects requiring Python, and he is eager to further develop his skills in this versatile language. His enthusiasm for learning and adaptability make him ready to take on new challenges in Python programming.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'sql',
		color: 'yellow',
		description:
			'',
		logo: Assets.SQL,
		name: 'SQL',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'At the beginning of his career, Wasif Khan learned HTML and quickly became curious about how to style it effectively. This curiosity led him to explore CSS, where he created several templates using HTML and CSS in 2021. Though these templates were initially without any functionality, the process fascinated him and ignited a deeper interest in web development. As he crafted various designs, Wasif honed his skills in layout, color theory, and typography, which laid a strong foundation for his future projects. This exploration of HTML and CSS not only enhanced his understanding of web design but also encouraged him to dive further into the world of web development. His early work with templates paved the way for more complex projects as he continued to expand his skill set.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			"Wasif Khan's journey with HTML began in 2021 as I dove into web development. Initially, I was fascinated by how HTML serves as the backbone of web pages, structuring content and making it accessible. I started by learning the fundamental concepts, including the use of various tags, attributes, and elements that define the layout of a webpage. To solidify my understanding, I began implementing HTML in my projects. I created simple static web pages, experimenting with different elements such as headings, paragraphs, lists, images, and links. This hands-on approach allowed me to grasp how HTML organizes content hierarchically, making it easier for users to navigate.",
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'pink',
		description:
			"After familiarizing himself with CSS, Wasif Khan explored frameworks like Bootstrap and Tailwind CSS. As Tailwind gained popularity among companies, he decided to dive deeper into it. He found Tailwind to be particularly intuitive and efficient for building projects, allowing for rapid styling without the constraints of predefined components. Wasif quickly adapted to Tailwind's utility-first approach, which enabled him to create custom designs with ease. This flexibility allowed him to implement responsive layouts and styles efficiently. Over time, he built numerous projects using Tailwind CSS, leveraging its capabilities to enhance both the aesthetics and functionality of his applications. His experience with Tailwind has further enriched his skill set and contributed to his growth as a developer.",
		logo: Assets.Tailwind,
		name: 'Tailwind Css',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			"Wasif Khan began his career in 2021 by learning his first frontend framework, React.js. He quickly built a strong foundation in React and developed numerous applications using the framework. By the end of 2022, he had a solid understanding of React's core principles. Recognizing that React is not inherently SEO-friendly, he later integrated it with Node.js to implement server-side rendering, enhancing the SEO capabilities of his applications. This adaptability showcases his commitment to creating effective and user-friendly web solutions.",
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: `Wasif Khan has recently started learning Svelte, finding it to resemble Angular in many ways. Having written over 1,000 lines of code in Svelte, he is diving deeper into its features and functionality, which has truly fascinated him. The simplicity and reactivity of Svelte have inspired him to explore its capabilities further.

Wasif is excited about the potential of Svelte and plans to continue expanding his knowledge and skills with the framework in the future. His enthusiasm for learning new technologies drives him to stay updated and proficient in modern web development practices.`, // when clicked on the component  and it redirects you to http://localhost:5173/skills/ts
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'angularjs',
		color: 'orange',
		description: `When Wasif Khan learned TypeScript, he also discovered that it was specifically designed to work seamlessly with AngularJS. Intrigued, he jumped into exploring AngularJS and its core concepts. As he delved deeper, he appreciated how AngularJS structured applications and facilitated the development of dynamic web interfaces.

Wasif believes that just as learning programming in one language makes it easier to pick up others—due to shared core concepts—similarly, mastering one framework or library lays the groundwork for understanding others. His experience with TypeScript and AngularJS reinforced this idea, allowing him to transition smoothly between different tools and technologies. This approach not only accelerated his learning process but also enriched his overall development skill set, making him a more versatile and confident developer.`,
		logo: Assets.Angular,
		name: 'Angular Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'orange',
		description: `Wasif Khan learned Next.js after mastering React because he recognized that Next.js addressed some of React's limitations, particularly with features like built-in routing and SEO optimization. He found the transition smooth, as Next.js builds on React's principles, making it easy for him to adopt. This allowed him to create more efficient, user-friendly applications while leveraging the benefits of server-side rendering and static site generation. Overall, his experience highlighted the synergy between React and Next.js in modern web development.`,
		logo: Assets.Nextjs,
		name: 'Next Js',
		category: 'library'
	}),

	defineSkill({
		slug: 'nodejs',
		color: 'orange',
		description: `Wasif Khan had a strong interest in full stack development, driven by his curiosity to learn new technologies. Recognizing that the backend is the backbone of any application, he decided to dive into backend development. He learned Node.js, which he found beginner-friendly due to his existing experience with JavaScript. This made it easier for him to grasp the concepts and functionalities of Node.js.

After mastering Node.js in 2022, Wasif applied his knowledge to build functional forms and various applications, enhancing his skills and expanding his portfolio. His journey reflects his dedication to becoming a well-rounded full stack developer, blending both frontend and backend expertise.`,
		logo: Assets.NodeJs,
		name: 'Node Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'expressjs',
		color: 'orange',
		description: `After diving into Node.js, Wasif Khan explored Express.js, a powerful framework that significantly simplified server-side development and reduced his workload. He found the journey with Express.js particularly enjoyable, especially when learning about routing, middleware, and controllers. The concepts of authorization tokens further piqued his interest in backend development.

As he delved deeper into Express.js, Wasif began exploring databases and various backend libraries, broadening his understanding and skill set. This exploration not only enhanced his capabilities as a full stack developer but also fueled his passion for creating robust, efficient applications. His enthusiasm for learning and building with these technologies reflected his commitment to mastering backend development.`,
		logo: Assets.ExpressJs,
		name: 'Express Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'orange',
		description: `MongoDB was one of the first databases Wasif Khan worked with, and he quickly became adept at creating RESTful APIs using Node.js and Express.js as the server. He found that while populating databases was relatively straightforward, the real challenge lay in designing an efficient architecture for API requests that balanced performance and cost-effectiveness.

Wasif learned the importance of managing data effectively, implementing strategies to cache data and refresh the cache when the database was updated. This approach not only optimized performance but also reduced costs for the company by minimizing unnecessary database queries. His experience with MongoDB and API design further solidified his skills in backend development, allowing him to create more efficient and scalable applications.`,
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),

	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: `Wasif Khan had a solid grasp of full stack engineering, but he soon realized that while coding backend architecture was straightforward, deploying it presented a new set of challenges. This prompted him to explore AWS, where he learned about deploying backend applications on Ubuntu via EC2 instances.

He delved into essential concepts like load balancers and SSL certificates, understanding their roles in ensuring security. Wasif recognized that securing the backend was critical, as any vulnerabilities could potentially grant unauthorized access to the entire application. He focused on measures to protect against DDoS attacks and unauthorized data insertion, solidifying his knowledge of best practices in backend security. This exploration not only enhanced his technical skills but also deepened his understanding of the importance of robust security measures in full stack development.`,
		logo: Assets.AWS,
		name: 'AWS',
		category: 'devtools'
	}),

	defineSkill({
		slug: 'docker',
		color: 'orange',
		description: `When it came to deploying his backend, Wasif Khan sought cost-effective solutions and delved into Docker. He understood that the concept was similar to installing an operating system from an ISO image, allowing him to package his code in a way that made it easily accessible for his team.

As he learned more about Docker, Wasif began contributing to open source repositories, recognizing Docker as an essential technology in modern web development. He appreciated how containerization streamlined the deployment process, enabling consistent environments and simplifying the management of dependencies. For him, the ability to encapsulate a web application within a Docker container represented a significant advancement, making it one of the best tools for deploying applications efficiently and reliably. This experience not only enhanced his technical skills but also connected him with the wider developer community.`,
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'azure',
		color: 'orange',
		description: `Wasif Khan gained valuable experience with Azure DevOps while working at In-House.com, where he managed the company’s codebase and collaborated with a team of developers to ensure smooth delivery of code. In this agile environment, he learned the importance of continuous integration and continuous delivery (CI/CD), which streamlined the development process and enhanced collaboration.

Through Azure DevOps, Wasif explored various tools and practices that improved project management, such as version control, automated testing, and deployment pipelines. His hands-on experience helped him understand how to effectively manage workflows and maintain high-quality standards in software development. This role not only honed his technical skills but also reinforced his ability to work in a team-oriented, agile setting.`,
		logo: Assets.azure,
		name: 'Azure DevOps',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'linux',
		color: 'orange',
		description: `Before diving into web development, Wasif Khan was deeply curious about ethical hacking. He explored Linux extensively, using it to perform tasks like capturing Wi-Fi handshakes and running dictionaries to crack passwords, which became one of his favorite areas of interest.

Although he eventually shifted his focus to web development, his passion for ethical hacking remained intact, particularly as he recognized the importance of Linux in deploying applications on AWS and within Docker containers. He continued to use Linux as a hobby for ethical hacking, allowing him to maintain a connection to that field while enhancing his overall technical skills. This background in security has also informed his approach to building secure applications in his web development work.`,
		logo: Assets.linux,
		name: 'Kali Linux',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'github',
		color: 'orange',
		description: `Wasif Khan developed a strong understanding of GitHub during his early days as a frontend developer. He hosted his first repository in 2021, which marked the beginning of his exploration of GitHub's features, such as branching and forking repositories.

This initial experience laid the foundation for his later contributions to open source projects. His active engagement with GitHub not only enhanced his technical skills but also helped him connect with the developer community. To this day, his GitHub account remains a testament to his ongoing journey in software development, showcasing his projects and contributions.`,
		logo: Assets.Github,
		name: 'Github',
		category: 'devtools'
	
	}),
	defineSkill({
		slug: 'netlify',
		color: 'orange',
		description: `Wasif Khan has a solid understanding of Netlify, having deployed various web applications using its straightforward deployment methods. He appreciates how easy it is to connect Netlify with GitHub, allowing him to automatically fetch repositories and host them seamlessly.

Additionally, he enjoys the ability to create custom URLs for his deployed apps, which enhances their professionalism and usability. This experience with Netlify has made it one of his preferred tools for hosting web applications, further showcasing his versatility as a full stack developer.`,
		logo: Assets.netlify,
		name: 'Netlify',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description: `Wasif Khan learned about GitHub, but he soon recognized the importance of using Git as a version control system to deploy and push branches to repositories via the command line interface (CLI). This exploration opened up new efficiencies in his workflow, allowing him to manage changes effectively both in production and local environments.

With Git, he could make changes locally, test them, and then push them to the repository seamlessly. This capability greatly eased his development process, enhancing collaboration with his team and ensuring that version control was handled smoothly. His understanding of Git has become a crucial part of his skill set, enabling him to work more efficiently and confidently in his projects.`,
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'postman',
		color: 'orange',
		description: `When developing APIs, Wasif Khan uses Postman as his primary tool for testing various types of requests, including POST, GET, PUT, and PATCH. His good understanding of Postman allows him to thoroughly test and debug his APIs effectively.

Although he occasionally uses an extension in VS Code called Thunderbolt, he particularly appreciates the user-friendly interface of Postman. This ease of use enhances his workflow, making it simpler to manage and execute API requests. His proficiency with these tools reflects his commitment to ensuring that his APIs function correctly and efficiently.`,
		logo: Assets.postman,
		name: 'Postman',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'Restfulapi',
		color: 'orange',
		description: `
Wasif Khan has a strong understanding of RESTful APIs and has developed several static RESTful APIs to support the websites he’s built over time. He prioritizes security, ensuring that unauthorized access to the database is not permitted.

His APIs are designed to be cost-efficient, capable of handling over a million requests. In fact, he has tested their performance with over 10 million requests using the Artillery library. Wasif implements middleware to safeguard against unauthorized source requests and takes measures to protect his APIs from DDoS attacks, demonstrating his commitment to building robust and secure backend systems. This expertise allows him to deliver reliable services that can scale effectively.`,
		logo: Assets.api,
		name: 'Restful APis',
		category: 'devtools'
	}),

	defineSkill({
		slug: 'vite',
		color: 'orange',
		description: `Wasif Khan enjoys building frontend web applications using Vite, appreciating its reputation as one of the easiest and most popular tools among developers today. Vite significantly streamlines the local development environment, making it more efficient and enjoyable.

He particularly values its hot module replacement feature, which allows for real-time updates without a full page refresh. This capability reduces development time and enhances productivity, enabling Wasif to see changes instantly as he works. His positive experience with Vite reflects his commitment to leveraging modern tools to create high-quality web applications.`,
		logo: Assets.Vite,
		name: 'Vite',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'photoshop',
		color: 'orange',
		description: `Wasif Khan began using Adobe Photoshop in 2013, starting with Adobe Photoshop 2005 to enhance pictures. As he grew up, he developed a solid understanding of the software. When he explored the updated versions of Photoshop, he found that most functionalities remained consistent, with only a few enhancements.

On platforms like Fiverr, he completed jobs for clients, specializing in image restoration. Additionally, while he created logos in vector format, he often used Photoshop to enhance their visual appeal through lighting effects and other adjustments. This combination of skills in both Illustrator and Photoshop allows Wasif to create attractive and professional designs that meet his clients' needs.`,
		logo: Assets.Photoshop,
		name: 'Photoshop',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'Illustrator',
		color: 'orange',
		description: `Wasif Khan has two years of experience in graphic design, where he honed his design skills and developed a keen eye for symmetry. He created mockups that are showcased in his graphic design portfolio, demonstrating his proficiency and creativity.

In 2019, he began using Adobe Illustrator to create SVG vectors and design logos, accumulating two years of solid experience with the tool. His strong design sensibility has enabled him to develop all the user interfaces for his projects independently, blending his graphic design expertise with his technical skills in web development. This unique combination allows him to create visually appealing and functional applications.`,
		logo: Assets.Illustrator,
		name: 'Illustrator',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'tensorFlow',
		color: 'orange',
		description: `Wasif Khan has gained valuable experience with TensorFlow while developing an AI detection application. He was drawn to TensorFlow due to its user-friendly interface and robust capabilities, making it an ideal choice for his project. The ease of use allowed him to quickly get started and explore the extensive features of the framework.

In his initial work, Wasif utilized pre-defined face detection models, which provided a solid foundation for understanding how TensorFlow functions. This approach enabled him to effectively implement face detection in his application without the need for extensive training data or complex model architecture. However, he views this as just the beginning of his journey with TensorFlow.

Eager to deepen his skills, Wasif is enthusiastic about training custom models and exploring advanced techniques in machine learning and computer vision. Recognizing the growing importance of these technologies in various applications, he is committed to staying updated with the latest advancements in the field. As he continues to refine his expertise, Wasif is excited about the potential of TensorFlow to drive innovation in AI and contribute to future projects.`,
		logo: Assets.TensorFLow,
		name: 'TensorFlow',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'redis',
		color: 'orange',
		description: `Wasif Khan's experience with Redis demonstrates his ability to integrate powerful tools into his applications to enhance performance and reliability. Having gained a basic understanding of Redis, Wasif uses it for caching data from his database, a common practice to improve application speed and reduce database load. By leveraging Redis, he has been able to make his application faster, more reliable, and cost-effective.

The speed of data retrieval from RAM is one of the key reasons Wasif appreciates Redis. Its in-memory data store capabilities make it an ideal choice for caching, as it allows for extremely fast access to frequently requested data. This reduces the time spent on database queries, which is especially important for applications with high traffic or demanding performance requirements.

Redis has proven to be a valuable tool in Wasif's development toolkit, solving many performance-related issues and enabling him to build more efficient and scalable systems. His positive experience with Redis highlights the importance of using the right tools to address specific challenges in software development and improve overall application performance.`,
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	defineSkill({
		slug: 'postgres',
		color: 'orange',
		description: ``,
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>> 
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	// if (others.length !== 0) {
	// 	out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	// }

	return out;
};
