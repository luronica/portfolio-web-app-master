import React from "react";
import { FaLaptopCode, FaRobot, FaServer } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";

const skillCategories = [
	{
		title: "AI & ML Expertise",
		icon: <FaRobot />,
		skills: ["LLMs", "RAG", "ChatBots", "NLP", "TensorFlow", "PyTorch"],
		color: "bg-teal-500",
	},
	{
		title: "Development",
		icon: <FaLaptopCode />,
		skills: ["Python", "FastAPI", "React", "Vue", "Vector DBs"],
		color: "bg-orange-400",
	},
	{
		title: "DevOps & Cloud",
		icon: <FaServer />,
		skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
		color: "bg-yellow-400",
	},
	{
		title: "Leadership",
		icon: <BsPeople />,
		skills: ["Tech Speaking", "Project Management", "Community Building"],
		color: "bg-purple-400",
	},
];

export default function Home() {
	return (
		<section className="pt-20 sm:pt-16 md:pt-24 bg-cream dark:bg-gray-900 overflow-hidden">
			{/* Hero Section */}
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center">
					{/* Left Column */}
					<div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-textDark dark:text-gray-100">
							Hey there I am Varnika Kambey
							
						</h1>
						<p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-4">
							Transforming Ideas into{" "}
							<span className="text-orange-500 font-semibold">
								Intelligent Solutions
							</span>{" "}
							with AI and Innovation
						</p>
						<p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200 mb-6">
							varnikakambley@gmail.com
						</p>

						<div className="flex items-center justify-center md:justify-start space-x-6 md:space-x-10">
							<div>
								<h2 className="text-3xl font-bold text-textDark">
									{new Date().getFullYear() - 2020}+
								</h2>
								<p className="text-gray-600 text-sm sm:text-base">
									Years Experience
								</p>
							</div>
							<div>
								<h2 className="text-3xl font-bold text-textDark">20+</h2>
								<p className="text-gray-600 text-sm sm:text-base">
									Speaking Sessions
								</p>
							</div>
						</div>
					</div>

					{/* Right Column - Image */}
					<div className="md:w-1/2 relative">
						<div className="relative flex justify-center py-4 md:py-8">
							<img
								src={process.env.PUBLIC_URL + "/images/varnika-profile.jpg"}
								alt="Varnika Kambley"
								className="mx-auto rounded-full border-4 border-teal-400 shadow-lg object-cover w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Skill Cards */}
			<div className="container mx-auto px-4 mt-20">
				<h2 className="text-2xl md:text-3xl font-bold text-textDark dark:text-gray-100 mb-8 text-center">
					Core Skill Areas
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
					{skillCategories.map((category, idx) => (
						<div
							key={idx}
							className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
						>
							<div className="flex items-start space-x-6">
								<div
									className={`${category.color} p-4 rounded-full text-white text-2xl`}
								>
									{category.icon}
								</div>
								<div className="flex-1">
									<h3 className="text-2xl font-bold text-textDark dark:text-gray-100 mb-3">
										{category.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
										{category.skills.join(", ")}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Experience Section */}
			<div className="container mx-auto px-4 mt-12 mb-20">
				<h2 className="text-2xl md:text-3xl font-bold text-textDark dark:text-gray-100 mb-6 text-center">
					Experience
				</h2>
				<div className="flex flex-col md:flex-row justify-center gap-8">
					{/* Experience Card 1 */}
					<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex-1 border-t-4 border-teal-400">
						<h3 className="text-lg font-bold text-teal-600 mb-1">
							AI Developer
						</h3>
						<p className="text-gray-700 dark:text-gray-200 font-medium mb-1">
							Innovative AI Solutions Pvt Ltd
						</p>
						<p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
							2022 - Present
						</p>
						<ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-200 text-sm space-y-1">
							<li>Developed AI-powered web applications</li>
							<li>Led a team of 5 engineers</li>
						</ul>
					</div>

					{/* Experience Card 2 */}
					<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex-1 border-t-4 border-orange-400">
						<h3 className="text-lg font-bold text-orange-500 mb-1">
							Speaker & Mentor
						</h3>
						<p className="text-gray-700 dark:text-gray-200 font-medium mb-1">
							Tech Conferences & Workshops
						</p>
						<p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
							2020 - Present
						</p>
						<ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-200 text-sm space-y-1">
							<li>Delivered 20+ sessions on AI, React, and Innovation</li>
							<li>Mentored 100+ students</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
