export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "website";
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  dates: string;
  location: string;
  logo?: string;
  monogram?: string;
  bullets: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
  type: "github" | "youtube" | "external";
}

export interface Project {
  id: string;
  title: string;
  stack: string[];
  summary: string;
  bullets: string[];
  image?: string;
  links?: ProjectLink[];
  metrics?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Education {
  school: string;
  degree: string;
  honors: string;
  graduation: string;
  location: string;
  coursework: string[];
}

export interface SiteContent {
  identity: {
    name: string;
    tagline: string;
    email: string;
    website: string;
    resumePath: string;
    aboutImage: string;
    bio: string;
  };
  demosPlaylist: string;
  nav: NavItem[];
  socials: SocialLink[];
  experiences: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  education: Education;
}

export const site: SiteContent = {
  identity: {
    name: "Aseef Durrani",
    tagline:
      "Software & AI Engineer · Embedded Systems · ECE @ Rutgers",
    email: "aseef.dur@gmail.com",
    website: "https://aseefdurrani.com",
    resumePath: "/Aseef_Durrani_Resume.pdf",
    aboutImage: "/images/personal/about_pic.jpg",
    bio: "Software engineer with a B.S. in Electrical and Computer Engineering from Rutgers University. Driven by a mindset that welcomes challenges and seeks discomfort, I build across the full stack — from AI recruiting pipelines and LLM copilots to custom ASIP processors and FINN accelerators on FPGA. My work sits at the intersection of hardware, software, and AI.",
  },

  demosPlaylist:
    "https://youtube.com/playlist?list=PLm1fceVQzObcxbBazTGMy0QPisMkW7EcR&si=7pWyMDKC0rL6nMMs",

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/aseefdurrani",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aseefdurrani/",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:aseef.dur@gmail.com",
      icon: "mail",
    },
    {
      label: "Website",
      href: "https://aseefdurrani.com",
      icon: "website",
    },
  ],

  experiences: [
    {
      id: "eliteis",
      role: "AI Engineer (Intern)",
      company: "EliteIS",
      dates: "Dec 2025 – Mar 2026",
      location: "Remote",
      logo: "/images/logos/eliteising_logo.png",
      bullets: [
        "Designed and implemented an AI recruiter system in n8n, automating key recruiting workflows including job requirements intake, candidate/client coordination, and conversational interview scheduling across 9 AI agents and 16 workflows.",
        "Migrated initial email ingestion from 1-minute polling to a webhook-based architecture using Google Cloud Pub/Sub and Microsoft Graph subscriptions, reducing average inbound email detection latency by 30x.",
        "Integrated Google Calendar and Microsoft Graph APIs to automate calendar availability checks, slot selection, and meeting creation across Google Meet and Microsoft Teams.",
      ],
    },
    {
      id: "confiz",
      role: "Software Engineer (AI)",
      company: "Confiz",
      dates: "Apr 2025 – Jun 2025",
      location: "Remote",
      logo: "/images/logos/confiz_logo.webp",
      bullets: [
        "Designed and deployed an end-to-end system to process multi-phase customer journey data, generating monthly cohort metrics and visualizations for 5 brands across 20,000 customers.",
        "Integrated LLMs for automated generation of tooltips and prompt cards from aggregated metrics, mapping outputs to Azure SQL for scalable delivery of customer insights.",
        "Developed an AI-powered Copilot service with FastAPI and Azure AI Foundry, streamlining access to product performance insights and enabling leadership to directly assess product effectiveness.",
      ],
    },
    {
      id: "mynd",
      role: "Software Engineer (AI & Backend Intern)",
      company: "Mynd",
      dates: "Sep 2024 – Dec 2024",
      location: "Remote",
      logo: "/images/logos/mynd.png",
      bullets: [
        "Engineered a Python data pipeline to scrape 21,000+ therapist profiles, automating contact discovery and competitor analysis, resulting in a 469% increase in qualified sales leads for the company's mental health platform.",
        "Leveraged AI to automate the creation of intake forms for therapists, streamlining the onboarding process for new clients.",
        "Designed and developed backend endpoints in Django to support AI-driven features, integrating with a tech stack consisting of React, Chakra, and TypeScript on the front end.",
      ],
    },
    {
      id: "headstarter",
      role: "Software Engineer (Fellowship)",
      company: "Headstarter AI",
      dates: "Jul 2024 – Sep 2024",
      location: "Remote",
      logo: "/images/logos/headstarterLogo.png",
      bullets: [
        "Built 5+ AI apps utilizing technologies like Next.js, OpenAI API, Stripe API, Pinecone, Firebase, and Node, culminating in a final project aiming to ship to 1,000+ users.",
        "Developed an interactive holistic health application leveraging RAG architecture to enhance 5 LLMs with contextual knowledge from 35+ curated videos, enabling personalized guidance based on individual needs.",
      ],
    },
    {
      id: "elavize",
      role: "Software Engineer (Full-Stack Intern)",
      company: "Elavize",
      dates: "Jun 2024 – Jul 2024",
      location: "New York, NY",
      logo: "/images/logos/elavizeLogo.png",
      bullets: [
        "Developed and maintained a full-stack application for job seekers using Next.js, DaisyUI (Tailwind), TypeScript, Node.js, and MongoDB.",
        "Built an internal tool for the team to access and edit the knowledge base directly within the platform, streamlining operations and improving team efficiency.",
        "Engaged in a client-facing role by gathering valuable feedback and insights from potential clients, contributing to platform development while adapting to the fast-paced, dynamic challenges of a startup environment.",
      ],
    },
    {
      id: "rutgers-es",
      role: "Embedded Systems Developer",
      company: "Rutgers University — Embedded Systems",
      dates: "Spring 2024",
      location: "New Brunswick, NJ",
      logo: "/images/logos/RENG_V_RED.svg",
      bullets: [
        "Designed and implemented a custom 16-bit ASIP processor in VHDL — multi-cycle control FSM, register file, ALU, dual-port framebuffer, BRAM instruction/data memories, and application-specific UART/VGA I/O — integrated on Digilent Zybo via Vivado IP Integrator.",
        "Developed five custom opcodes and a dedicated arithmetic unit; authored GRISC assembly for an interactive UART-driven demo with VGA color control, block move/resize, pixel readback, and terminal arithmetic.",
        "Validated custom instruction and control FSM behavior through extensive Vivado testbench waveform simulation, then verified end-to-end on Zybo hardware via UART and VGA demo (7,323 LUTs, 4,224 LUTRAM).",
      ],
    },
  ],

  projects: [
    {
      id: "resolved",
      title: "Resolved",
      stack: [
        "Next.js",
        "Flask",
        "Pinecone",
        "LangChain",
        "PostgreSQL",
        "Docker",
        "AssemblyAI",
      ],
      summary:
        "Multimodal customer complaint analysis platform with RAG over 4,400 company complaints for a fintech startup.",
      bullets: [
        "Engineered a multimodal customer complaint analysis platform for a fintech startup; integrated AssemblyAI, Google Cloud APIs, and OpenAI, resulting in efficient processing times for customer inquiries.",
        "Designed a RAG pipeline to smart search over 4,400 company complaints, providing accurate and actionable insights to team members for addressing specific issues.",
      ],
    },
    {
      id: "linkedin-growth",
      title: "Intelligent LinkedIn Growth Facilitator",
      stack: [
        "Next.js",
        "Flask",
        "AWS RDS",
        "OpenAI",
        "Docker",
        "Kubernetes",
        "TypeScript",
        "Python",
      ],
      summary:
        "AI-powered full-stack app to automate video transcription and LinkedIn post generation for rapid content creation.",
      bullets: [
        "Developed an AI-powered full-stack application using Next.js and Flask to automate video transcription and LinkedIn post generation, aiming to reduce manual effort and enable rapid content creation.",
        "Prompt engineered an LLM to replicate top performing LinkedIn posts to maximize user interaction and accelerate account growth.",
      ],
    },
    {
      id: "hackru",
      title: "HackRU (2nd Place — Health Track)",
      stack: ["Python", "Streamlit", "AWS EC2"],
      summary:
        "Real-time campus gym crowd-level web app — 2nd place in Health Track among 170 competitors.",
      bullets: [
        "Secured 2nd place in Health Track from 170 competitors overall; worked with a team of 2 others to develop a web app to reduce campus gym overcrowding.",
        "Developed the app in Python, utilizing third-party services like Streamlit API, optimizing for real-time crowd-level updates based on user input; deployed on an EC2 instance, ensuring scalability and performance.",
      ],
      metrics: ["2nd place", "170 competitors"],
    },
    {
      id: "finn-mnist",
      title: "FPGA MNIST Classifier (FINN)",
      stack: [
        "FINN",
        "Brevitas",
        "Vivado",
        "PYNQ-Z1",
        "Python",
        "Embedded Linux",
      ],
      summary:
        "Team-built FINN accelerator on PYNQ-Z1 for quantized MNIST inference with high throughput at 100 MHz.",
      bullets: [
        "Built a FINN-based MNIST digit classifier on PYNQ-Z1 (team project), synthesizing a FINN hardware overlay (13K LUTs, 17.8K FFs) and achieving 92.6% accuracy on 10,000+ test images.",
        "Deployed and benchmarked the quantized accelerator via PYNQ (FINNExampleOverlay), measuring ~754K images/s throughput at 100 MHz with IODMA data movement.",
        "Co-built an end-to-end ML-on-FPGA pipeline: Brevitas quantization → FINN ZynqBuild → Vivado bitstream → Python driver validation on live handwritten-digit inference.",
      ],
      metrics: ["92.6%", "~754K img/s", "13K LUTs"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/ECE493Fall2024/final-project-aseefdurrani",
          type: "github",
        },
        {
          label: "Presentation",
          href: "https://youtu.be/hArzYvTULlM",
          type: "youtube",
        },
        {
          label: "Live Demo",
          href: "https://youtu.be/A7nu_iRP5NE",
          type: "youtube",
        },
      ],
    },
    {
      id: "asip-processor",
      title: "Custom 16-bit ASIP Processor",
      stack: ["VHDL", "Vivado", "Zybo Z7", "UART", "VGA", "Assembly"],
      summary:
        "Application-specific microprocessor with custom opcodes, UART I/O, and interactive VGA demo on Digilent Zybo.",
      bullets: [
        "Designed and implemented a custom 16-bit ASIP processor in VHDL with multi-cycle control FSM, register file, ALU, dual-port framebuffer, and BRAM instruction/data memories integrated via Vivado IP Integrator.",
        "Developed five custom opcodes and a dedicated arithmetic unit; authored GRISC assembly for an interactive UART-driven demo with VGA color control, block move/resize, pixel readback, and terminal arithmetic.",
        "Validated instruction and control FSM behavior through Vivado testbench simulation, then verified end-to-end on Zybo hardware (7,323 LUTs, 4,224 LUTRAM).",
      ],
      metrics: ["7,323 LUTs", "5 custom opcodes"],
    },
    {
      id: "uart-serial",
      title: "UART Serial Communication",
      stack: ["VHDL", "Vivado", "UART", "FPGA", "Zybo Z7"],
      summary:
        "UART transmitter on Digilent Zybo with baud-rate clock division and PMOD serial I/O at 115200 baud.",
      bullets: [
        "Designed and implemented a UART transmitter in VHDL on Digilent Zybo using a 3-state FSM with baud-rate clock division and PMOD serial I/O at 115200 baud.",
        "Integrated a top-level UART design (uart_tx, sender, clock_div, debounce); verified character-by-character transmission in Vivado testbench simulation and on-board terminal demo.",
      ],
      metrics: ["115200 baud", "3-state FSM"],
    },
  ],

  skills: [
    {
      name: "Languages",
      skills: [
        "C",
        "Embedded C",
        "VHDL",
        "Python",
        "TypeScript",
        "JavaScript",
      ],
    },
    {
      name: "Technologies",
      skills: [
        "FPGA",
        "Embedded Linux",
        "Linux",
        "Zybo Z7",
        "PYNQ-Z1",
        "Next.js",
        "Node.js",
        "Express",
        "Django",
        "Flask",
        "FastAPI",
        "MongoDB",
        "Firebase",
        "PostgreSQL",
        "SQL",
        "Pinecone",
        "Databricks",
        "Pandas",
        "Scikit-learn",
        "Tailwind CSS",
      ],
    },
    {
      name: "Tools / Platforms",
      skills: [
        "Vivado",
        "Vitis",
        "Xilinx",
        "n8n",
        "Cursor",
        "Docker",
        "Git",
        "Kubernetes",
        "Postman",
        "ngrok",
        "Google Cloud Platform (GCP)",
        "AWS",
        "Amazon RDS",
        "Azure",
        "Azure AI Foundry",
        "OpenAI",
        "Claude",
        "LangChain",
        "Clerk",
        "Auth0",
      ],
    },
  ],

  education: {
    school: "Rutgers University",
    degree: "B.S. in Electrical and Computer Engineering",
    honors: "Summa Cum Laude",
    graduation: "May 2025",
    location: "New Brunswick, NJ",
    coursework: [
      "Embedded Systems",
      "Embedded Systems 2",
      "Computer Architecture",
      "Principles of Electrical Engineering (1/2)",
      "Data Structures & Algorithms",
      "Software Engineering",
      "Machine Learning",
      "Intro to Deep Learning",
    ],
  },
};
