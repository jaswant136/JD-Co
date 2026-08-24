export const projects = [
  {
    id: "voltlink",
    number: "01",
    title: "VoltLink",
    category: "Smart EV / Software Project",
    status: "STARTUP",
    tech: ["React", "Vite", "Tailwind CSS", "Firebase", "AI"],
    summary:
      "A smart EV charging monitoring and complaint-resolution platform connecting EV users with charging-station operators.",
    problem:
      "EV users can face charging-station faults without having a clear way to report the problem or track what happens next. Operators also need a better way to monitor charger issues and manage customer complaints.",
    whatIBuilt:
      "A platform concept that connects EV users and charging-station operators. The system can monitor charger health and status, allow users to report problems, route complaints to operators, and provide tracking and status updates.",
    features: [
      "EV charging-station monitoring dashboard",
      "Charger health and status tracking",
      "Customer complaint submission and tracking",
      "Operator dashboard for complaint management",
      "Fault detection and issue-resolution workflow",
      "AI-assisted fault analysis concept",
    ],
    learned:
      "VoltLink helped me think beyond a normal CRUD application and understand how hardware status, user complaints, operator workflows and software systems can work together.",
  },

  {
    id: "complaint-management-system",
    number: "02",
    title: "Complaint Management System",
    category: "Academic / Personal Project",
    status: "ACADEMIC PROJECT",
    tech: ["Java", "Spring Boot", "JWT", "REST API"],
    summary:
      "A backend-focused complaint management platform with authentication and structured complaint workflows.",
    problem:
      "Most of my early projects were frontend-heavy. I wanted to go deeper into backend architecture, authentication, API design and data management.",
    whatIBuilt:
      "A Spring Boot backend with registration, login and JWT-based authentication, along with a structured complaint lifecycle for submission, tracking and status updates through REST APIs.",
    features: [
      "User registration and login",
      "JWT-based authentication and authorization",
      "Complaint creation and tracking",
      "Complaint status workflow",
      "REST API architecture",
      "Swagger / OpenAPI documentation",
    ],
    learned:
      "I learned how authentication, authorization and API design fit together in a real backend application, and how important it is to structure the system properly before adding more features.",
  },

  {
    id: "resume-analyzer",
    number: "03",
    title: "Resume Analyzer",
    category: "Personal Project / Experiment",
    status: "PROJECT",
    tech: ["React", "AI / ML", "Dashboard"],
    summary:
      "An ATS-style resume analysis concept designed to help users understand how their resume performs against job requirements.",
    problem:
      "Applying for internships made me curious about how ATS systems parse resumes and compare them with job descriptions. I wanted to explore that process by building my own analysis interface.",
    whatIBuilt:
      "A dashboard concept where a resume and job description can be analyzed for keyword overlap, compatibility and potential improvements, with the results presented through a readable interface.",
    features: [
      "Resume and job-description input",
      "Keyword matching",
      "Compatibility analysis",
      "Results dashboard",
      "Actionable resume feedback",
    ],
    learned:
      "I learned that working with real-world text is much messier than it looks and that good data processing is just as important as the model or scoring logic.",
  },

  {
    id: "fake-news-detection",
    number: "04",
    title: "Fake News Detection",
    category: "Personal Project / Experiment",
    status: "EXPERIMENT",
    tech: ["Python", "Machine Learning", "TF-IDF", "Logistic Regression"],
    summary:
      "A machine-learning experiment for classifying news text using NLP and supervised learning.",
    problem:
      "I wanted a practical introduction to NLP using a real-world problem rather than only following a basic machine-learning tutorial.",
    whatIBuilt:
      "A text-classification pipeline that preprocesses news text, converts it into numerical features using TF-IDF and uses logistic regression to classify articles.",
    features: [
      "Text preprocessing",
      "TF-IDF vectorization",
      "Logistic regression classification",
      "Model evaluation",
      "Confusion-matrix analysis",
    ],
    learned:
      "This project helped me understand how preprocessing affects machine-learning results and why accuracy numbers need to be evaluated with proper context.",
  },

  {
    id: "parkease",
    number: "05",
    title: "ParkEase",
    category: "Smart Parking / Software Project",
    status: "STARTUP",
    tech: ["React", "Web Development", "Dashboard", "Mock Data"],
    summary:
      "A parking booking and management platform that connects drivers with parking-space operators.",
    problem:
      "Finding available parking can be difficult, while parking operators need a simple way to manage spaces, bookings and vehicle movement from one place.",
    whatIBuilt:
      "A platform concept where drivers can find parking spaces, check availability and charges, and reserve a space before arriving. Operators can manage parking spaces, bookings, vehicle entries and exits through a dashboard.",
    features: [
      "Parking-space discovery",
      "Availability and charge information",
      "Parking reservation",
      "Operator management dashboard",
      "Booking management",
      "Vehicle entry and exit management",
      "Customer request management",
    ],
    learned:
      "ParkEase helped me understand how one application can serve two different types of users and how booking, availability and operator workflows need to stay connected.",
  },

  {
    id: "jdco",
    number: "06",
    title: "JD&Co",
    category: "Startup",
    status: "STARTUP",
    tech: ["React", "AI", "Branding", "Automation", "Web Development"],
    summary:
      "My early-stage startup/studio where I'm bringing together web development, branding, digital marketing, AI and automation.",
    problem:
      "I wanted to move beyond building individual projects and create something of my own that combines my interests in technology, design, AI and entrepreneurship.",
    whatIBuilt:
      "An early-stage digital studio brand focused on websites, branding, digital growth, AI-agent concepts and automation. JD&Co is also becoming a place for me to explore future digital products.",
    features: [
      "Web development",
      "Brand building",
      "Digital marketing",
      "AI agent concepts",
      "Business automation concepts",
      "Digital product exploration",
    ],
    learned:
      "JD&Co is teaching me that building a startup is different from building a project. Product thinking, positioning, consistency and learning what people actually need are just as important as writing code.",
  },
];

export default projects;