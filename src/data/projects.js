// Each project gets its own gradient identity (used on Work grid tile + detail hero)
// Order matters: determines grid placement. Current layout gives diagonal dark balance.
export const projects = [
  {
    slug: 'ai-voice-training',
    title: 'AI Voice Training System',
    subtitle: 'Frontend & Voice Lead — CS 490 Capstone',
    year: '2026',
    tagline: 'A real-time voice interface for practicing sales conversations with an AI persona.',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #d946ef 50%, #8b5cf6 100%)',
    accent: '#ec4899',
    description:
      'Built the React interface for a real-time voice training tool that lets sales reps practice conversations with an AI persona. Owns the annotated transcript view, AI feedback display, and note-taking experience. Integrates OpenAI, Deepgram, and ElevenLabs through a WebSocket pipeline.',
    role: 'Frontend Engineer, Voice Integration',
    team: 'USF CS 490 Capstone Team, ClearOne Advantage sponsor',
    stack: ['React', 'WebSockets', 'Deepgram', 'ElevenLabs', 'OpenAI'],
    highlights: [
      'Designed the annotated transcript UI that surfaces live AI feedback mid-conversation.',
      'Debugged CORS, React StrictMode WebSocket issues, and Deepgram SSL failures.',
      'Coordinated API integration across three external services and the backend team.',
    ],
  },
  {
    slug: 'riscv-emulator',
    title: 'RISC-V Emulator & Cache Simulator',
    subtitle: 'Individual Project — CS 315',
    year: '2026',
    tagline: 'A full instruction-level emulator written in C, with a set-associative cache model.',
    // Dark navy — row 1 right
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    accent: '#06b6d4',
    description:
      'A full RISC-V instruction emulator in C that decodes and executes R, I, B, and J-type instructions, tracks instruction counts, and simulates a set-associative cache with LRU eviction. Debugged through dozens of edge cases in branch handling, stack management, and cache indexing.',
    role: 'Solo',
    team: 'CS 315 with Phil Peterson, USF',
    stack: ['C', 'RISC-V', 'Computer Architecture'],
    highlights: [
      'Implemented the full R / I / B / J instruction families with correct sign-extension and branch offsets.',
      'Built a configurable cache simulator with LRU eviction, set-associative indexing, and hit/miss metrics.',
      'Wrote extensive test harnesses to validate against known hex inputs.',
    ],
  },
  {
    slug: 'go-search-chatbot',
    title: 'Web Server + Search + Chatbot',
    subtitle: 'Course Project — CS 272',
    year: '2025',
    tagline: 'A Go web service combining a crawler, search engine, and RAG chatbot.',
    // Deep plum/burgundy — reads dark but has real color. Row 2 left.
    gradient: 'linear-gradient(135deg, #4a044e 0%, #701a75 50%, #86198f 100%)',
    accent: '#e879f9',
    description:
      'A Go web service that combines a crawler, an inverted-index search engine, and a RAG-powered chatbot with OpenAI function calling. Taught me Go concurrency patterns and how to build backends that stay responsive under load.',
    role: 'Solo',
    team: 'CS 272 with Phil Peterson, USF',
    stack: ['Go', 'SQLite', 'RAG', 'MCP', 'OpenAI'],
    highlights: [
      'Built a crawler and inverted-index search engine from scratch.',
      'Integrated a RAG chatbot with OpenAI function calling and an MCP server.',
      'Used goroutines, channels, and mutexes to keep the server responsive under concurrent requests.',
    ],
  },
  {
    slug: 'llm-evaluation',
    title: 'LLM Evaluation Pipeline',
    subtitle: 'AI Engineering Intern — Orchestro.ai',
    year: '2025',
    tagline: 'Repeatable scoring infrastructure for measuring language model output quality.',
    // Bright orange/pink — row 2 right
    gradient: 'linear-gradient(135deg, #f97316 0%, #ec4899 50%, #d946ef 100%)',
    accent: '#ec4899',
    description:
      'Designed and built scoring pipelines and RAG infrastructure for evaluating large language model outputs. Worked across prompt design, retrieval tuning, and evaluation metrics to give the team a repeatable way to measure model quality.',
    role: 'AI Engineering Intern',
    team: 'Orchestro.ai platform team',
    stack: ['Python', 'RAG', 'Vector DBs', 'LLM Eval'],
    highlights: [
      'Designed evaluation metrics the team used to compare prompt and retrieval strategies.',
      'Built RAG infrastructure connecting vector search to downstream scoring.',
      'Turned ad-hoc prompt experimentation into a repeatable pipeline.',
    ],
  },
]