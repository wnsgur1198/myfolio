import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'kim_junhyeok',
	title: 'Hello World!',
	subTitle: emoji("성장하는 개발자 김준혁입니다."),
	role: "응용 프로그램 개발자",
	resumeLink: "https://drive.google.com/file/d/1NE0J3Q5vC2UjkySUYgKsvQhd5cfcjd8U/view?usp=sharing",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/wnsgur1198',
	linkedin: '',
	email: 'kimjunhyeok.it@gmail.com',
	facebook: '',
	twitter: "",
	instagram: "",
	medium: '',
	stackoverflow: ''
};

export const skills = {
	title: emoji("I Can Do ⚡"),
	subTitle: "",
	describeSkills: [
		emoji("★ 50% : 기본적인 이해 완료, 남이 작성한 프로그램을 해석 가능"),
		emoji("★ 70% : 활용 가능, 기존 프로그램을 개선할 수 있음"),
		emoji("★ 90% : 원하는 기능의 프로그램을 개발할 수 있음"),
		emoji("✔ DBMS : MariaDB, Oracle"),
		emoji("✔ Deep Learning : Tensorflow, Keras, Torch"),
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-windows", text: "C#", proficiency: 90},
		{fontAwesome: "fab fa-python", text: "PYTHON", proficiency: 90},
		{fontAwesome: "fab fa-java", text: "JAVA", proficiency: 70},
		{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 70},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 70},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 70},
		{fontAwesome: "fas fa-code", text: "C/C++", proficiency: 50},		
		{fontAwesome: "fab fa-ubuntu", text: "UBUNTU", proficiency: 90},
		{fontAwesome: "fab fa-android", text: "ANDROID", proficiency: 70},
		{fontAwesome: "fab fa-aws", text: "AWS", proficiency: 70},
		{fontAwesome: "fas fa-database", text: "DBMS", proficiency: 90},
		{fontAwesome: "fas fa-brain", text: "AI", proficiency: 70},
	],
	view: true
};

export const experience = {
	title: "Work Experience",
	lists: [
		{
			date: "2018.03~",
			company: "Google",
			role: "Front-End Developer",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		}
	],
	view: false
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: true
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "",
	lists: [
		{
			title: "의료표준을 이용한 SW품질평가시스템",
			desc: "국제표준에 기술된 테스트케이스들을 DB화하여 사용자가 체크함으로써 SW의 품질을 평가하도록 함",
			url: "https://github.com/wnsgur1198/SW_Quality_Evaluation_System"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: true
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Your Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: false
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "",
	introduce: emoji(""),
	view: true
}