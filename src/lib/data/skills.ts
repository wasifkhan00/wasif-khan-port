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
		slug: 'Python',
		color: 'yellow',
		description:
			'Wasif Khan has explored the Python programming language and, while he doesn’t yet have a strong foundation, he feels confident in his ability to work with it. Having written over 1,000 lines of code in Python, he finds that picking up the syntax comes easily to him. This familiarity gives him the assurance that he can handle projects requiring Python, and he is eager to further develop his skills in this versatile language. His enthusiasm for learning and adaptability make him ready to take on new challenges in Python programming.',
		logo: Assets.Python,
		name: 'Python',
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
		slug: 'db',
		color: 'orange',
		description: `MongoDB was one of the first databases Wasif Khan worked with, and he quickly became adept at creating RESTful APIs using Node.js and Express.js as the server. He found that while populating databases was relatively straightforward, the real challenge lay in designing an efficient architecture for API requests that balanced performance and cost-effectiveness.

Wasif learned the importance of managing data effectively, implementing strategies to cache data and refresh the cache when the database was updated. This approach not only optimized performance but also reduced costs for the company by minimizing unnecessary database queries. His experience with MongoDB and API design further solidified his skills in backend development, allowing him to create more efficient and scalable applications.`,
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	// Databases descrip has been updated beggining from below tomoroow
	// devtools start
	defineSkill({
		slug: 'library',
		color: 'orange',
		description: `When Wasif Khan learned TypeScript, he also discovered that it was specifically designed to work seamlessly with AngularJS. Intrigued, he jumped into exploring AngularJS and its core concepts. As he delved deeper, he appreciated how AngularJS structured applications and facilitated the development of dynamic web interfaces.

Wasif believes that just as learning programming in one language makes it easier to pick up others—due to shared core concepts—similarly, mastering one framework or library lays the groundwork for understanding others. His experience with TypeScript and AngularJS reinforced this idea, allowing him to transition smoothly between different tools and technologies. This approach not only accelerated his learning process but also enriched his overall development skill set, making him a more versatile and confident developer.`,
		logo: Assets.AWS,
		name: 'AWS',
		category: 'devtools'
	}),
	// devtools first item end

	defineSkill({
		slug: 'frameworks',
		color: 'orange',
		description: `When Wasif Khan learned TypeScript, he also discovered that it was specifically designed to work seamlessly with AngularJS. Intrigued, he jumped into exploring AngularJS and its core concepts. As he delved deeper, he appreciated how AngularJS structured applications and facilitated the development of dynamic web interfaces.

Wasif believes that just as learning programming in one language makes it easier to pick up others—due to shared core concepts—similarly, mastering one framework or library lays the groundwork for understanding others. His experience with TypeScript and AngularJS reinforced this idea, allowing him to transition smoothly between different tools and technologies. This approach not only accelerated his learning process but also enriched his overall development skill set, making him a more versatile and confident developer.`,
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'db',
		color: 'orange',
		description: `When Wasif Khan learned TypeScript, he also discovered that it was specifically designed to work seamlessly with AngularJS. Intrigued, he jumped into exploring AngularJS and its core concepts. As he delved deeper, he appreciated how AngularJS structured applications and facilitated the development of dynamic web interfaces.

Wasif believes that just as learning programming in one language makes it easier to pick up others—due to shared core concepts—similarly, mastering one framework or library lays the groundwork for understanding others. His experience with TypeScript and AngularJS reinforced this idea, allowing him to transition smoothly between different tools and technologies. This approach not only accelerated his learning process but also enriched his overall development skill set, making him a more versatile and confident developer.`,
		logo: Assets.azure,
		name: 'Azure DevOps',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'devtools',
		color: 'orange',
		description: `When Wasif Khan learned TypeScript, he also discovered that it was specifically designed to work seamlessly with AngularJS. Intrigued, he jumped into exploring AngularJS and its core concepts. As he delved deeper, he appreciated how AngularJS structured applications and facilitated the development of dynamic web interfaces.

Wasif believes that just as learning programming in one language makes it easier to pick up others—due to shared core concepts—similarly, mastering one framework or library lays the groundwork for understanding others. His experience with TypeScript and AngularJS reinforced this idea, allowing him to transition smoothly between different tools and technologies. This approach not only accelerated his learning process but also enriched his overall development skill set, making him a more versatile and confident developer.`,
		logo: Assets.linux,
		name: 'Kali Linux',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'soft',
		color: 'orange',
		description: `When Wasif Khan learned TypeScript, he also discovered that it was specifically designed to work seamlessly with AngularJS. Intrigued, he jumped into exploring AngularJS and its core concepts. As he delved deeper, he appreciated how AngularJS structured applications and facilitated the development of dynamic web interfaces.

Wasif believes that just as learning programming in one language makes it easier to pick up others—due to shared core concepts—similarly, mastering one framework or library lays the groundwork for understanding others. His experience with TypeScript and AngularJS reinforced this idea, allowing him to transition smoothly between different tools and technologies. This approach not only accelerated his learning process but also enriched his overall development skill set, making him a more versatile and confident developer.`,
		logo: Assets.Github,
		name: 'Github',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'skill',
		color: 'orange',
		description: `When Wasif Khan learned TypeScript, he also discovered that it was specifically designed to work seamlessly with AngularJS. Intrigued, he jumped into exploring AngularJS and its core concepts. As he delved deeper, he appreciated how AngularJS structured applications and facilitated the development of dynamic web interfaces.

Wasif believes that just as learning programming in one language makes it easier to pick up others—due to shared core concepts—similarly, mastering one framework or library lays the groundwork for understanding others. His experience with TypeScript and AngularJS reinforced this idea, allowing him to transition smoothly between different tools and technologies. This approach not only accelerated his learning process but also enriched his overall development skill set, making him a more versatile and confident developer.`,
		logo: Assets.netlify,
		name: 'Netlify',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'hard',
		color: 'orange',
		description: ``,
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'pro',
		color: 'orange',
		description: ``,
		logo: Assets.postman,
		name: 'Postman',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'api',
		color: 'orange',
		description: ``,
		logo: Assets.api,
		name: 'Restful APis',
		category: 'devtools'
	}),

	defineSkill({
		slug: 'vite',
		color: 'orange',
		description: ``,
		logo: Assets.Vite,
		name: 'Vite',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'photoshop',
		color: 'orange',
		description: ``,
		logo: Assets.Photoshop,
		name: 'Photoshop',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'Illustrator',
		color: 'orange',
		description: ``,
		logo: Assets.Illustrator,
		name: 'Illustrator',
		category: 'devtools'
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
