export const projects = {
  "devcollective": {
    "no": "01",
    "title": "DevCollective",
    "type": "AI-powered college learning & developer collaboration platform",
    "intro": "A college-focused platform for learning, building, collaborating, asking questions, finding mentors, and growing through meaningful contributions.",
    "color": "bg-purple",
    "stack": [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "WebSockets",
      "AI"
    ],
    "status": "ACTIVE DEVELOPMENT",
    "problem": "College developers often have fragmented learning resources, scattered communities, and no shared place to track meaningful technical contribution. DevCollective brings those workflows into one focused platform.",
    "build": "The product is structured around students, mentors, and administrators. The core experience combines learning paths, roadmaps, community discussions, mentorship, and a Reputation Points system.",
    "features": [
      "Reputation Points (REP) with a 6-level progression system",
      "Learning paths and technical roadmaps",
      "Community discussions, questions, and Build in Public",
      "Mentor discovery and mentor matching",
      "Badges, daily streaks, and college/branch leaderboards",
      "AI-assisted recommendations and resume intelligence"
    ],
    "architecture": [
      "React frontend",
      "Node.js + Express backend",
      "PostgreSQL + Prisma data layer",
      "Socket.IO / WebSockets for real-time features",
      "FastAPI AI service",
      "Authentication, RBAC, storage, and infrastructure services"
    ],
    "challenges": [
      "Designing a progression system around meaningful contribution rather than simple activity counts",
      "Keeping student, mentor, and admin workflows separate while sharing the same platform",
      "Planning AI features without making the core product dependent on AI"
    ],
    "learned": "A platform becomes more useful when its systems reinforce the behavior you actually want. For DevCollective, that meant making REP, mentorship, learning paths, and community contribution part of one coherent loop.",
    "github": "https://github.com/inputtext/DevCollective",
    "live": "https://devcollective-app.onrender.com"
  },
  "zero-trust-vault": {
    "no": "02",
    "title": "Zero-Trust Vault",
    "type": "Client-side encrypted file storage system",
    "intro": "A privacy-focused vault where files are encrypted inside the browser before they ever reach the backend.",
    "color": "bg-lavender",
    "stack": [
      "C++",
      "WebAssembly",
      "AES-256-GCM",
      "React",
      "TypeScript",
      "FastAPI",
      "SQLite"
    ],
    "status": "ENGINEERING PROJECT",
    "problem": "Traditional file storage requires the server to receive plaintext or otherwise hold significant trust over the data. Zero-Trust Vault explores a model where the backend stores ciphertext instead.",
    "build": "The browser handles the encryption boundary. A C++ WebAssembly crypto core performs AES-256-GCM encryption, encrypted data is split into chunks, and the backend acts as blind storage.",
    "features": [
      "Client-side encryption before upload",
      "C++ crypto core compiled to WebAssembly",
      "AES-256-GCM encryption",
      "Encrypted chunk storage",
      "Blind backend that receives ciphertext rather than plaintext",
      "Browser-first privacy model"
    ],
    "architecture": [
      "User selects a file in the browser",
      "React + TypeScript receives the file as an ArrayBuffer",
      "C++ WebAssembly crypto core encrypts the data",
      "AES-256-GCM produces ciphertext",
      "Ciphertext is split into encrypted chunks",
      "FastAPI stores ciphertext through the backend layer",
      "SQLite stores encrypted chunk data and metadata"
    ],
    "challenges": [
      "Bridging browser data with a native C++ crypto core compiled to WebAssembly",
      "Keeping encryption on the client while maintaining a usable storage workflow",
      "Separating the storage backend from the user's plaintext trust boundary"
    ],
    "learned": "Security architecture is not something to bolt onto a finished interface. The trust boundary has to be designed first, then every data flow should respect it.",
    "github": "https://github.com/inputtext/zero-trust-vault"
  },
  "cflow": {
    "no": "03",
    "title": "C·FLOW",
    "type": "Interactive C/C++ code visualization platform",
    "intro": "A visual learning and debugging environment that turns program execution into something you can see.",
    "color": "bg-green",
    "stack": [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express"
    ],
    "status": "ACTIVE DEVELOPMENT",
    "problem": "Reading C/C++ source code does not always make execution state obvious. Variables change, branches execute, functions return, and loops mutate state — often faster than a beginner can mentally track.",
    "build": "C·FLOW is designed around a pipeline that transforms C/C++ source code into structured execution information and then presents that state visually.",
    "features": [
      "Step-by-step code execution visualization",
      "Control-flow visualization for branches and loops",
      "Variable tracking",
      "Execution-state inspection",
      "C/C++ focused learning experience",
      "Visualization pipeline for source → execution → state → UI"
    ],
    "architecture": [
      "C/C++ source code",
      "Code analysis",
      "Execution / instrumentation pipeline",
      "Structured execution state",
      "Visualization engine",
      "Interactive learning UI"
    ],
    "challenges": [
      "Turning execution behavior into information that can be rendered clearly",
      "Designing a useful mental model for control flow and state",
      "Building incrementally while the execution-analysis pipeline evolves"
    ],
    "learned": "Developer tools become powerful when they expose the invisible part of a system. C·FLOW is an experiment in making program execution understandable instead of treating it as a black box.",
    "github": "https://github.com/inputtext/CFlow",
    "live": "https://cflow-landing-web.onrender.com/"
  }
} as const;