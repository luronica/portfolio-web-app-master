import React, { useState } from "react";
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

export default function About() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-20" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className={`${category.color} p-6 rounded-lg`}>
              <div className="text-4xl text-white mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
              <ul className="text-white">
                {category.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* About Text */}
        <h2 className="text-4xl font-bold text-textDark dark:text-gray-100 mb-2">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-16 text-lg">
          is a distinguished student leader and academic achiever with a remarkable track record. Currently serving as a NEP SAARTHI 2025-26 Student Ambassador for the Ministry of Education, Government of India, she combines academic excellence with significant leadership roles and innovative projects.

          Her academic journey is marked by exceptional performance, maintaining a stellar CGPA of 9.605. Beyond academics, she has demonstrated technical innovation through projects like the Women's safety bracelet (HerSpark Winner) and a Dual-axis solar tracker (DIPEX 2025 Finalist).

          As a natural leader, she has held various positions including Junior Council Member at TSDW, TCET, and has led large-scale initiatives such as the Ingenious India Exhibition, managing over 100 students. Her achievements extend to public speaking, winning the Best Orator in Mumbai (Female) award from Ramkrishna Mission, and earning multiple academic gold medals in national competitions.

          Varnika's diverse talents are further evidenced by her participation in cultural activities, including the Sojourn '25 Cultural Fest, and her crowning as Ms. SVIS 2023. Her commitment to excellence has been recognized with numerous accolades, including participation in the Guinness World Art Contest and consistent academic honors.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6 mx-auto"
        >
          <h3 className="text-3xl font-bold text-teal-600 text-center mb-4">
            Contact Me
          </h3>

          {/* First + Last Name */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full">
              <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
                First Name
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                type="text"
                placeholder="John"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
                Last Name
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Doe"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
              Company Name
            </label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              type="text"
              placeholder="Your Company"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
              Email
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="example@email.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
              Phone Number
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="(+995) 555-55-55-55"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us what we can help you with"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

        

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
