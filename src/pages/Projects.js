const projects = [
  {
    "title": "Customer Care Chatbot",
    "description": "A Rasa open-source chatbot for e-commerce that handles FAQs, chitchat, and sends emails.",
    "image": "https://picsum.photos/300/180?random=1",
    "link": "https://github.com/Horizon733/customer-care-chatbot"
  },
  {
    "title": "COVID Chatbot & Android App",
    "description": "Rasa-based chatbot integrated with an Android app that provides COVID-19 info across states/countries.",
    "image": "https://picsum.photos/300/180?random=2",
    "link": "https://github.com/Horizon733/Covid-Chatbot-app"
  },
  {
    "title": "Anime Info Android App",
    "description": "An Android app built with Jetpack Compose that shows anime titles, characters & stats using Jikan API.",
    "image": "https://picsum.photos/300/180?random=3",
    "link": "https://github.com/Horizon733/Anime-app"
  },
  {
    "title": "Snap Login Kit Sample",
    "description": "Demo app showcasing Snapchat Login Kit integration using Jetpack Compose.",
    "image": "https://picsum.photos/300/180?random=4",
    "link": "https://github.com/Horizon733/snap-loginkit-sample"
  },
  {
    "title": "Snap Creative Kit Sample",
    "description": "Sample Android app demonstrating Snapchat Creative Kit features (stickers, dynamic lenses).",
    "image": "https://picsum.photos/300/180?random=5",
    "link": "https://github.com/Horizon733/creative-kit-sample"
  },
  {
    "title": "Certi-builder CLI Tool",
    "description": "Python CLI to generate bulk certificates—takes Excel input and renders PNG/JPG outputs.",
    "image": "https://picsum.photos/300/180?random=6",
    "link": "https://github.com/Horizon733/certi-build"
  }
]



export default function Projects() {
  return (
    <section className="pt-24 bg-cream dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-500 mb-8 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-4 border-t-4 border-orange-400 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-bold text-orange-500 mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-1">{project.description}</p>
              <span className="mt-4 inline-block text-teal-500 font-semibold hover:underline">
                View on GitHub
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}