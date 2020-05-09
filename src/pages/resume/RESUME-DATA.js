import unswLogo from "../../assets/unsw.png";
import siitLogo from "../../assets/siit.jpg";
import veveyLogo from "../../assets/vevey.png";
import crLogo from "../../assets/cr.png";
import nsLogo from "../../assets/ns.jpg";

export const Education = [
	{
		id: 1,
		title: "Bachelor of Electrical Engineering",
		place: "UNSW Sydney",
		time: "Feb 2011 - Oct 2014",
		details: [
			"Software development",
			"Programing in C",
			"Computational mathmatics",
		],
		logo: unswLogo,
	},
	{
		id: 2,
		title: "Diploma of Interpreting",
		place: "Sydney Institution of Interpreting and Translation",
		time: "Nov 2014 - Jun 2015",
		details: ["Awarded scholarships"],
		logo: siitLogo,
	},
];

export const Employment = [
	{
		id: 3,
		title: "Software Engineer & Network Engineer",
		place: "Vevey Group",
		time: "Mar 2018 - Now",
		details: [
			"Website development. (Javascript, HTML, CSS)",
			"Sever side development and optimisation (Perl, Mason)",
			"Integration and automation (Open API by swagger, ebXML)",
			"Network troubleshooting and hardware configuration",
		],
		logo: veveyLogo,
	},
	{
		id: 4,
		title: "Associate",
		place: "Chancellor & Rados Group",
		time: "Jun 2016 - Mar 2018",
		details: [
			"Efficiently lead my group to finish tasks assigned",
			"Proactively arranged meetings to deal with urgencies and staff shortage",
			"Demonstrated pressure handling skills working under high pressure",
		],
		logo: crLogo,
	},
	{
		id: 5,
		title: "Consultant",
		place: "Newstars Education",
		time: "Oct 2015 - Jun 2016",
		details: ["Provided excellent customer service", "KPI driven environment"],
		logo: nsLogo,
	},
];
