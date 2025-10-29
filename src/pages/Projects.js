const projects = [
  {
    "title": "AI-Powered IoT Smart Security Bracelet",
    "description": "Innovative women's safety device integrating NDSO database, KNN for offender proximity detection, and ML-driven risk assessment. Features include GPS tracking, tap-to-alert mechanism, and multi-portal support for law enforcement integration. Achieved significant recognition for enhancing urban safety through AI and IoT integration.",
    "image": "https://picsum.photos/300/180?random=1",
    "link": "#"
  },
  {
    "title": "RamaTrak: Sustainable Solar Tracker",
    "description": "Innovative dual-axis solar tracker inspired by Jantar Mantar's Rama Yantra, achieving 30% improved efficiency. Features gravity-powered tilt system, integrated water cooling, and composting capabilities. Perfect blend of traditional wisdom and modern engineering for sustainable energy solutions.",
    "image": "https://picsum.photos/300/180?random=2",
    "link": "#"
  },
  {
    "title": "AIoT Access Control System",
    "description": "Smart security system combining RFID, motion detection, and machine learning. Utilizes Random Forest classifier for anomaly detection and pattern recognition. Features cloud-based monitoring, real-time tracking, and comprehensive access logging for enhanced security management.",
    "image": "https://picsum.photos/300/180?random=3",
    "link": "#"
  }
]



export default function Projects() {
  return (
    <section className="pt-24 bg-cream dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-teal-500 mb-4 text-center">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 text-lg">Innovative solutions combining technology and social impact</p>
        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border-t-4 border-orange-400 flex flex-col transform hover:-translate-y-1"
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