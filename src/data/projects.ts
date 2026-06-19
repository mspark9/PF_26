export type Category = 'Web' | 'App' | 'Open Source'

export type Project = {
  id: string
  type: string
  year: string
  title: string
  desc: string
  role: string
  result: string
  tags: string[]
  category: Category
  gradient: string // 썸네일 폴백 (이미지 없을 때 배경)
  image?: string // 썸네일 경로 (있으면 흑백→호버 시 컬러)
  github?: string
  notion?: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: 'keywofarm',
    type: '팀 프로젝트',
    year: '2026',
    title: '키워팜',
    desc: '지역·장소·일조 정보만 입력하면 AI가 지금 심기 좋은 작목을 추천하고, 파종부터 수확까지 텃밭 캘린더로 관리해주는 AI 텃밭 추천·관리 플랫폼입니다.',
    role: '기획 · 프론트엔드 · 백엔드 · 테스트 전 과정 참여',
    result: '',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'axios', 'GPT-4o API', 'OpenAI', 'RAG', '농사로 공공데이터', 'Claude Code'],
    category: 'Web',
    gradient: 'linear-gradient(135deg, #11998E 0%, #38EF7D 100%)',
    image: '/projects/keywofarm.png',
    notion: 'https://catkin-toad-7ab.notion.site/KiwoFarm-37be9464821580be9079e01cc9bd218a?source=copy_link',
    demo: 'https://www.kiwofarm.store',
  },
  {
    id: 'flowfit',
    type: '팀 프로젝트',
    year: '2026',
    title: 'Flowfit AI Hub',
    desc: '부서별 AI 도구를 한곳에 모아 업무 자동화를 돕는 사내 AI 포털입니다. 경영지원·사업영업·R&D 등 카테고리로 부서별 업무 도구를 제공합니다.',
    role: '기획 · 프론트엔드 · 백엔드 · 테스트 전 과정 참여',
    result: '',
    tags: ['React', 'FastAPI', 'Tailwind CSS', 'OpenAI API (GPT)', 'RAG', 'Python', 'Claude Code'],
    category: 'Web',
    gradient: 'linear-gradient(135deg, #2D6CDF 0%, #16161A 100%)',
    image: '/projects/flowfit.png',
    notion: 'https://catkin-toad-7ab.notion.site/Flowfit-AI-Hub-341e946482158059a67cd3a727dec62d?source=copy_link',
    demo: 'https://flowfit-frontend-five.vercel.app',
  },
  {
    id: 'honeymat',
    type: '팀 프로젝트',
    year: '2026',
    title: 'HoneyMat',
    desc: '음식 사진을 찍기만 하면 AI가 영양을 분석해주는 스마트 영양 관리 서비스입니다. 일일 식사 기록부터 주간·월간 리포트, 영양점수 추적까지 건강한 식습관을 돕습니다.',
    role: '기획 · 프론트엔드 · 백엔드 · 테스트 전 과정 참여',
    result: '',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'OpenAI API (GPT)', 'RESTful API', 'JWT', 'Claude Code', 'Antigravity'],
    category: 'Web',
    gradient: 'linear-gradient(135deg, #F2792B 0%, #16161A 100%)',
    image: '/projects/honeymat.png',
    notion: 'https://catkin-toad-7ab.notion.site/HoneyMat-344e94648215801aa8a5e7993fd6ac88?source=copy_link',
    demo: 'https://honeymat.site',
  },
]
