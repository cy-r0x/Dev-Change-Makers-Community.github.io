import mitul from '@/assets/team/md-shahriyar-al-mustakim-mitul.jpg'
import zaynul from '@/assets/team/zaynul-abedin-miah.jpg'
import mahinoor from '@/assets/team/mahinoor-rahman.jpg'
import sifar from '@/assets/team/md-musfikur-rahman-sifar.jpg'
import razu from '@/assets/team/md-razibul-hasan-razu.jpg'

export type Link = { label: string; url: string }

export const LINKS = {
  discord: 'https://discord.gg/uTDCWqpTVX',
  luma: 'https://luma.com/DevChangeMakersANBS',
  youtube: 'https://www.youtube.com/@mitul_shahriyar',
  projectHub: 'https://github.com/Dev-Change-Makers-Community/Project_Hub',
  projectHubTree: 'https://github.com/Dev-Change-Makers-Community/Project_Hub/tree/main/',
  githubOrg: 'https://github.com/Dev-Change-Makers-Community',
  email: 'devchangemakers@gmail.com',
}

export const NAV: Link[] = [
  { label: 'Guide yourself', url: '#guide' },
  { label: 'Events', url: '#events' },
  { label: 'Project Hub', url: '#projects' },
  { label: 'Learn', url: '#learn' },
  { label: 'Field notes', url: '#watch' },
  { label: 'Programs', url: '#programs' },
  { label: 'Communities', url: '#communities' },
  { label: 'Team', url: '#team' },
]

export const MOBILE_NAV: Link[] = [
  { label: 'Guide yourself', url: '#guide' },
  { label: 'Events', url: '#events' },
  { label: 'Project Hub', url: '#projects' },
  { label: 'Learn', url: '#learn' },
  { label: 'Field notes', url: '#watch' },
  { label: 'Paid platforms', url: '#paid' },
  { label: 'Programs', url: '#programs' },
  { label: 'Communities', url: '#communities' },
  { label: 'Culture', url: '#culture' },
  { label: 'Team', url: '#team' },
  { label: 'Reach out', url: '#guidance' },
]

export const DECIDE_STEPS = [
  { title: 'Read the trends', text: 'Look at where industry and research are heading this year, globally and in Bangladesh.' },
  { title: 'Think it through with AI', text: "Use an AI assistant to question your assumptions and fill in what you don't know yet." },
  { title: 'Talk to someone in industry', text: 'One honest conversation with a working engineer tells you more than ten forum threads.' },
  { title: 'Talk to a professor abroad', text: 'Ask what their students did before joining, and what they do after.' },
]

export type PathKey = 'dev' | 'study'

export type Stop = { when: string; title: string; text: string; res?: Link[] }

export type Path = {
  label: string
  /** One line for the overview above the Guide section. */
  summary: string
  intro: string
  stops: Stop[]
  earn: {
    title: string
    text: string
    points: string[]
    close: string
    feature?: { title: string; note: string; url: string }
    res?: Link[]
  }
}

const l = (label: string, url: string): Link => ({ label, url })

export const PATHS: Record<PathKey, Path> = {
  dev: {
    label: 'Industry-Focused path',
    summary:
      'Pick a role, learn its stack from the official docs, contribute to its open-source projects, build in public, then apply globally.',
    intro:
      "Industry is far more than web, app and editing work. In Bangladesh, web or app skills plus some competitive programming will get you a job; aim for global standards instead. University prepares you for the next degree, not for industry, so this path is on you.",
    stops: [
      {
        when: 'Step 1 · Sem 1–2',
        title: 'Shortlist a role, then study the people in it',
        text: "Pick a few roles, such as ML, cloud or security engineer, and study the people doing them. Use AI and job boards to see what each role requires. Then follow engineers in that role: LinkedIn for their experience, X for their daily work, and Instagram for the life, remembering it shows the best moments, not the average day. Choose a role you'd love that still has a future in the era of AI.",
        res: [l('LinkedIn Jobs', 'https://www.linkedin.com/jobs/')],
      },
      {
        when: 'Step 2',
        title: 'Narrow down the tech stack for that role',
        text: "List the languages, frameworks and tools people in that role actually use. Compare job posts and engineer profiles until the same names keep appearing: that's your stack. New to programming? Learn one language and Git first; everything else builds on them.",
        res: [l('roadmap.sh role roadmaps', 'https://roadmap.sh/')],
      },
      {
        when: 'Step 3',
        title: 'Learn the stack, then contribute to its official projects',
        text: 'Learn each tool from its official docs, then contribute to the GitHub projects behind it. Start with documentation and good first issues. Maintainers notice consistent contributors, and so do employers.',
        res: [
          l('Good First Issue', 'https://goodfirstissue.dev/'),
          l('CNCF Landscape', 'https://landscape.cncf.io/'),
          l('GitHub Explore', 'https://github.com/explore'),
        ],
      },
      {
        when: 'Step 4',
        title: 'Learn system design, and DSA in moderation',
        text: "System design teaches you how real products are built and scaled. Learn data structures and algorithms well enough to solve problems and pass interviews, but don't make them your whole focus.",
        res: [
          l('System Design Primer', 'https://github.com/donnemartin/system-design-primer'),
          l('NeetCode roadmap', 'https://neetcode.io/roadmap'),
        ],
      },
      {
        when: 'Step 5',
        title: 'Build projects and show your work',
        text: "Build projects with your stack, and record a video or demo of each one. Post on X about what you're building, and share your progress on LinkedIn once a month. Over time, that public record brings opportunities to you.",
      },
      {
        when: 'Step 6',
        title: 'Go deep on the stack, then apply',
        text: "Go as deep as the role demands, then apply, globally as well as locally. Link your projects, contributions and posts from your resume. Start applying for internships during Step 5; waiting until you feel ready is a common mistake.",
        res: [
          l('Tech Interview Handbook', 'https://www.techinterviewhandbook.org/'),
          l('LinkedIn Jobs', 'https://www.linkedin.com/jobs/'),
        ],
      },
    ],
    earn: {
      title: 'Earn through open source',
      text: 'Go deep on one stack and contribute consistently to projects built on it. Over time, open source pays off in ways tuition never will.',
      points: [
        'Paid programs such as Google Summer of Code and LFX Mentorship',
        'GitHub Sponsors support from people who use your work',
        'Job offers from companies that notice your contributions',
        'Invitations to conferences and summits as a contributor or maintainer',
        'A global network, and a portfolio that speaks for itself',
      ],
      close: 'Pick one project, start small with documentation and good-first-issues, and stay consistent. It compounds.',
      feature: {
        title: 'Open source that pays',
        note: 'A short reel on the programs and paths that turn open-source contributions into real income.',
        url: 'https://www.instagram.com/reel/DcwLhhio9hc/',
      },
      res: [
        l('Linux Foundation', 'https://www.linuxfoundation.org/'),
        l('CNCF Landscape', 'https://landscape.cncf.io/'),
        l('Google Summer of Code', 'https://summerofcode.withgoogle.com/'),
        l('LFX Mentorship', 'https://lfx.linuxfoundation.org/tools/mentorship/'),
        l('GitHub Sponsors', 'https://github.com/sponsors'),
      ],
    },
  },
  study: {
    label: 'Higher Study path',
    summary:
      "Build a strong CGPA and real research experience, take the language tests, find funding, then contact professors for a funded master's or PhD.",
    intro:
      "For a funded master's or PhD, the path university is actually built for. Admissions committees look at grades, research experience and who can vouch for your work, and all three take years to build.",
    stops: [
      {
        when: 'Step 1 · Sem 1–2',
        title: 'Shortlist a research area, then study the people in it',
        text: "Pick a few areas, such as machine learning, quantum computing or networks, and study the people working in them. Read their recent papers, look at their lab pages, and see where their students end up. Choose an area you'd enjoy for years that still matters in the era of AI.",
        res: [l('Google Scholar', 'https://scholar.google.com/'), l('CSRankings', 'https://csrankings.org/')],
      },
      {
        when: 'Step 2',
        title: 'Aim for a CGPA of 3.7 to 4.0, with real depth',
        text: "A CGPA of 3.7 or above keeps you competitive for most funded programs, and many scholarships filter on it first. Grades alone aren't enough, so build real depth in your subject. Linear algebra, probability and statistics carry into almost every research area.",
        res: [
          l('MIT 18.06 Linear Algebra', 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/'),
          l('Essence of Linear Algebra', 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab'),
        ],
      },
      {
        when: 'Step 3',
        title: 'Get real research experience',
        text: 'Talk to faculty early about a thesis or a lab. Read papers in your area, try to reproduce one, and apply for research internships. Either result gives you something concrete to write about in your SOP.',
        res: [
          l('arXiv', 'https://arxiv.org/'),
          l('Papers with Code', 'https://paperswithcode.com/'),
          l('Semantic Scholar', 'https://www.semanticscholar.org/'),
        ],
      },
      {
        when: 'Step 4',
        title: 'Take the language and admission tests',
        text: 'Take IELTS or TOEFL for most countries, and the GRE mainly for the US. Many programs have made the GRE optional, so check each one before you pay the fee.',
        res: [
          l('IELTS', 'https://ielts.org/'),
          l('TOEFL', 'https://www.ets.org/toefl.html'),
          l('GRE', 'https://www.ets.org/gre.html'),
        ],
      },
      {
        when: 'Step 5',
        title: 'Choose a country and find the funding',
        text: 'Compare countries on cost, funding, visa rules and life after graduation. Then match programs to your research area and find the money. The big scholarships close up to a year before the program starts.',
        res: [
          l('Watch: choosing a country for higher study', 'https://www.youtube.com/watch?v=8WZPdhGnTfY'),
          l('Erasmus Mundus catalogue', 'https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en'),
          l('DAAD database', 'https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/'),
          l('Fulbright', 'https://foreign.fulbrightonline.org/'),
          l('Chevening', 'https://www.chevening.org/'),
          l('MEXT (Japan)', 'https://www.studyinjapan.go.jp/en/'),
        ],
      },
      {
        when: 'Step 6',
        title: 'Contact professors, then apply',
        text: 'Build your SOP around one research question you care about, and ask for letters from faculty who know your work. For a PhD, email professors with a specific reason to join their group before you apply. Start early: applications, letters and tests take longer than you expect.',
      },
    ],
    earn: {
      title: 'Earn through research internships',
      text: 'With a strong CGPA and an interest in research, a research internship is the natural next step. It pays a stipend, gives you real lab experience, and often leads to strong recommendation letters, which weigh heavily in PhD applications.',
      points: [
        'Start early: many programs open applications months in advance.',
        "Read a professor's recent work before you write to them.",
        "Keep the email short: what you read, what you'd like to work on, and why you're a fit.",
      ],
      close: 'A focused email to the right professor goes a long way.',
      res: [
        l('Research internships for undergraduates', 'https://github.com/zapplyjobs/Research-Internships-for-Undergraduates'),
      ],
    },
  },
}

export const CURSOR_EXAMPLE_LINKS: Link[] = [
  l(
    "Forbes: Cursor's co-founders are now billionaires",
    'https://www.forbes.com/sites/rashishrivastava/2025/11/13/four-cofounders-of-popular-ai-coding-tool-cursor-are-now-billionaires/',
  ),
  l('SpaceX deal doubles their net worth', 'https://finance.yahoo.com/technology/ai/articles/spacex-acquires-cursor-ai-coding-114028456.html'),
  l('The story on LinkedIn', 'https://lnkd.in/p/gBKVx5vK'),
]

export const ARCHIVE = [
  { title: 'OctoberFest: Dhaka', kind: 'Monthly TechFest', repo: 'Dhaka_Monthly_TechFest' },
  { title: 'Cerebras Cafe Compute', kind: 'AI inference', repo: 'Cerebras_Cafe_Compute' },
  { title: 'Codex Dhaka Meetup', kind: 'AI coding', repo: 'Codex-Dhaka-Meetup' },
  { title: 'Qwen Developer Meetup', kind: 'Open models', repo: 'Qwen-Developer-Meetup' },
  { title: 'Devin Community Bangladesh', kind: 'AI agents', repo: 'Devin_community_Bangladesh' },
  { title: 'Microsoft Build Sessions', kind: 'Azure', repo: 'Microsoft-Build-Sessions' },
  { title: 'AWS Talks', kind: 'Cloud', repo: 'AWS_Talks' },
  { title: 'IaC and HashiCorp Terraform', kind: 'DevOps', repo: 'IaC-and-HashiCorp-Terraform' },
  { title: 'Claude Dhaka Meetup', kind: 'AI coding', repo: 'Claude-Dhaka-Meetup' },
  { title: 'Cursor Dhaka Meetup', kind: 'AI coding', repo: 'Cursor-Dhaka-Meetup' },
  { title: 'GitHub Copilot Dev Days Dhaka 2026', kind: 'AI coding', repo: 'GitHub-Copilot-Dev-Days-Dhaka-2026' },
  { title: 'Build with AI 2026', kind: 'Google Cloud', repo: 'Build-with-AI2026' },
]

export type Project = { date: string; name: string; note: string; stack: string[]; path: string }

export const MONTHS: { month: string; folder: string; projects: Project[] }[] = [
  {
    month: 'October 2026',
    folder: 'October_2026',
    projects: [
      {
        date: 'Oct 30, 2026',
        name: 'Notion Task Board on Kubernetes',
        note: 'A Flask app that reads tasks from a Notion database, runs on a local Kubernetes cluster, and is monitored live with Prometheus and Grafana. Move a task to Done in Notion and the dashboard updates within about 30 seconds.',
        stack: ['Notion API', 'Python · Flask', 'Docker', 'Kubernetes (kind)', 'Helm', 'Prometheus', 'Grafana', 'Devin Desktop', 'GitHub Copilot CLI'],
        path: 'notion-task-board',
      },
      {
        date: 'Oct 31, 2026',
        name: 'MentorMatch',
        note: 'An AI mentor marketplace for developers in Bangladesh. A learner types what they want to learn, AI finds matching mentors, and the learner books and pays through Stripe Connect in test mode.',
        stack: ['Figma Make', 'Claude Code', 'Amazon Bedrock', 'Qwen on Cerebras', 'Grok (Cursor)', 'GitHub Copilot', 'Stripe Connect', 'Node.js · Express'],
        path: 'mentor-match',
      },
    ],
  },
]

export const PLAYLISTS: { title: string; note?: string; url: string }[] = []

export type NoteSource = 'youtube' | 'instagram' | 'linkedin' | 'x'

export type FieldNote = { type: NoteSource; topic?: string; title: string; by?: string; note: string; url: string }

export const FIELD_NOTES: FieldNote[] = [
  {
    type: 'youtube',
    topic: 'Mindset',
    title: 'Stanford Commencement Address',
    by: 'Steve Jobs',
    note: "Connecting the dots looking backwards, and why you can't plan every step in advance.",
    url: 'https://www.youtube.com/watch?v=UF8uR6Z6KLc',
  },
  {
    type: 'instagram',
    topic: 'Higher study',
    title: 'North America vs Europe',
    note: 'How the two compare on education, money and career, for anyone weighing where to study or work abroad.',
    url: 'https://www.instagram.com/reel/DcdzYtmRszF/',
  },
  {
    type: 'youtube',
    topic: 'Higher study',
    title: 'How to choose a country for higher study now',
    by: 'Dr. Karan Gupta on Raj Shamani Clips',
    note: 'A career counsellor on whether studying abroad is still worth the cost, which countries suit which budgets, and how to avoid debt traps and misleading agents.',
    url: 'https://www.youtube.com/watch?v=8WZPdhGnTfY',
  },
]

export const PICKS = [
  {
    kind: 'Courses',
    name: 'Udemy',
    text: 'Structured video courses on ML, cloud, web and certification prep. Read the reviews and the curriculum before buying, and wait for a sale. Courses are discounted often.',
    host: 'udemy.com',
    url: 'https://www.udemy.com/',
  },
  {
    kind: 'Hands-on labs',
    name: 'KodeKloud',
    text: "Browser-based labs for Linux, Docker, Kubernetes, Terraform and cloud. The best place we've found to practise for CKA, CKAD and CKS without breaking your own machine.",
    host: 'kodekloud.com',
    url: 'https://kodekloud.com/',
  },
]

export type Program = { name: string; text: string; org: string; url: string }

export const PROGRAMS: { group: string; items: Program[] }[] = [
  {
    group: 'AI labs and models',
    items: [
      { name: 'Claude Community Ambassadors', text: 'Lead Claude meetups and events in your city and work with Anthropic on the product.', org: 'Anthropic', url: 'https://claude.com/community/ambassadors' },
      { name: 'Claude Campus', text: 'Paid student ambassadors who run Claude Builder Clubs, AI discussions or research workshops on campus.', org: 'Anthropic', url: 'https://claude.com/programs/campus' },
      { name: 'Codex Ambassadors', text: "Run Codex meetups and help developers in your region build with OpenAI's coding agent.", org: 'OpenAI', url: 'https://developers.openai.com/community/codex-ambassadors' },
      { name: 'Qwen Ambassador Program', text: 'Host Qwen meetups and events and grow the open-model community locally.', org: 'Alibaba Qwen', url: 'https://qwen.ai/ambassador' },
      { name: 'Cerebras Ambassadors', text: 'Host Cafe Compute meetups and bring fast inference to builders in your city.', org: 'Cerebras', url: 'https://www.cerebras.ai/ambassadors' },
    ],
  },
  {
    group: 'Developer and builder tools',
    items: [
      { name: 'GitHub Stars', text: 'Recognition for people who teach, share and build in the open on GitHub.', org: 'GitHub', url: 'https://stars.github.com/' },
      { name: 'Docker Captains', text: 'Experts who share Docker knowledge through talks, content and community work.', org: 'Docker', url: 'https://www.docker.com/captains' },
      { name: 'Lovable Ambassadors', text: 'Represent Lovable with meetups, workshops and office hours. Waitlist when closed.', org: 'Lovable', url: 'https://community.lovable.app/ambassadors' },
      { name: 'n8n Ambassadors', text: 'Run automation meetups and help others build workflows with n8n.', org: 'n8n', url: 'https://n8n.notion.site/n8n-Ambassador-Program-d883b2a130e5448faedbebe5139187ea' },
      { name: 'Notion Ambassadors', text: 'Teach Notion, build templates and lead local Notion communities.', org: 'Notion', url: 'https://notion.notion.site/notion-ambassador-program' },
    ],
  },
  {
    group: 'Cloud, data and APIs',
    items: [
      { name: 'AWS Community Builders', text: 'Resources, credits and mentorship for people who share AWS knowledge.', org: 'AWS', url: 'https://aws.amazon.com/developer/community/community-builders/' },
      { name: 'Stripe Community Builders', text: 'Host Stripe meetups and help developers and founders build with payments.', org: 'Stripe', url: 'https://stripe.com/guides/become-a-stripe-community-builder' },
      { name: 'Tableau Ambassadors', text: 'Recognised data visualisation leaders in the Tableau community.', org: 'Tableau', url: 'https://www.tableau.com/blog/tableau-ambassador-nominations-applications' },
      { name: 'GraphQL Ambassadors', text: 'Grow the GraphQL ecosystem through talks, content and local events.', org: 'GraphQL Foundation', url: 'https://graphql.org/community/ambassadors/' },
    ],
  },
]

export const VOWS = [
  {
    tag: 'Recognition',
    title: 'Appreciate what should be appreciated',
    text: "When a student ships a project, fixes a bug in someone else's repo, or gives their first talk, we say so out loud. Credit goes to the people who did the work, not the loudest name in the room.",
  },
  {
    tag: 'Visibility',
    title: 'Use X and LinkedIn well',
    text: 'Post what you built and what you learned, not just certificates. Follow builders, share their work, and treat your profile as a public notebook that recruiters and professors will actually read.',
  },
  {
    tag: 'Free events',
    title: 'No catch. No edtech.',
    text: 'Our events are free and unpaid. There\'s no course to buy at the end, no "premium batch", and no registration fee hidden behind a form. Sponsors support the room, not a sales pitch.',
  },
]

export const COMMUNITIES: { name: string; focus: string; links: Link[] }[] = [
  {
    name: 'AWS User Group Bangladesh',
    focus: 'AWS, cloud architecture and certification',
    links: [
      l('Luma', 'https://luma.com/awsugbd'),
      l('Meetup', 'https://www.meetup.com/awsugbd/'),
      l('Facebook group', 'https://www.facebook.com/share/g/1M4UM3CVSc/'),
    ],
  },
  {
    name: 'Cloud Native Dhaka',
    focus: 'Kubernetes, containers and cloud native',
    links: [
      l('LinkedIn', 'https://www.linkedin.com/company/cloudnativedhaka/'),
      l('Facebook group', 'https://www.facebook.com/share/g/1AAXy6BLTK/'),
    ],
  },
  {
    name: 'Dhaka HashiCorp User Group',
    focus: 'Terraform, Vault and infrastructure as code',
    links: [
      l('LinkedIn', 'https://www.linkedin.com/company/dhaka-hashicorp-user-group/'),
      l('Facebook group', 'https://www.facebook.com/share/g/1JcR2gMBgy/'),
    ],
  },
  {
    name: 'SpaceXSI Community Dhaka',
    focus: 'Building with Grok and SpaceXAI tools',
    links: [
      l('LinkedIn', 'https://www.linkedin.com/company/spacexsi-community-dhaka/'),
      l('Luma', 'https://luma.com/spacexai-dhaka'),
    ],
  },
  {
    name: 'Qiskit User Group Bangladesh',
    focus: 'Quantum computing with Qiskit',
    links: [
      l('LinkedIn', 'https://www.linkedin.com/company/qiskit-ug-bd/'),
      l('Facebook group', 'https://www.facebook.com/share/g/19w2MrpDrz/'),
    ],
  },
  {
    name: 'Qwen Community Dhaka',
    focus: 'Open models and the Qwen ecosystem',
    links: [l('LinkedIn', 'https://www.linkedin.com/company/qwen-community-dhaka/')],
  },
  {
    name: 'AAIF Community Dhaka',
    focus: 'Agentic AI, with the Agentic AI Foundation',
    links: [
      l('LinkedIn', 'https://www.linkedin.com/company/aaif-community-dhaka/'),
      l('Luma', 'https://luma.com/aaif-dhaka'),
    ],
  },
  {
    name: 'Friends of Figma Dhaka',
    focus: 'Design, prototyping and Figma',
    links: [
      l('LinkedIn', 'https://www.linkedin.com/company/fof-dhaka/'),
      l('Website', 'https://friends.figma.com/dhaka/'),
    ],
  },
  {
    name: 'Dhaka GitHub User Group',
    focus: 'Git, GitHub and open source',
    links: [
      l('LinkedIn', 'https://www.linkedin.com/company/dhaka-github-user-group/'),
      l('Facebook group', 'https://www.facebook.com/share/g/19WJbGEFZw/'),
    ],
  },
]

export const TEAM: { name: string; role: string; photo: string; url?: string }[] = [
  { name: 'MD Shahriyar Al Mustakim Mitul', role: 'Founder, DevChangeMakers', photo: mitul, url: 'https://www.linkedin.com/in/mitul-shahriyar/' },
  { name: 'Zaynul Abedin Miah', role: 'Cognition Ambassador', photo: zaynul, url: 'https://www.linkedin.com/in/zaynul-abedin-miah/' },
  { name: 'Mahinoor Rahman', role: 'SpaceXSI Ambassador', photo: mahinoor, url: 'https://www.linkedin.com/in/mahinoorrahman/' },
  { name: 'Md Musfikur Rahman Sifar', role: 'AWS SBG BRACU Lead', photo: sifar, url: 'https://www.linkedin.com/in/md-musfikur-rahman-sifar/' },
  { name: 'MD Razibul Hasan Razu', role: 'Owner, M/S Hamza Enterprise', photo: razu },
]

export const GUIDES: { name: string; role: string; url: string }[] = [
  { name: 'Ubayed Bin Sufian', role: 'Google Summer of Code contributor at FOSSASIA', url: 'https://www.linkedin.com/in/ubayedbinsufian/' },
  { name: 'Asem Hamid', role: 'Maintainer, CNCF Glossary and the Kubernetes Bengali localization branch', url: 'https://www.linkedin.com/in/asemhamid/' },
  { name: 'Rawad Hossain', role: 'LFX Mentee', url: 'https://www.linkedin.com/in/rawadhossain/' },
]

export const SOCIALS: Link[] = [
  l('LinkedIn', 'https://www.linkedin.com/company/devchangemakers'),
  l('X', 'https://x.com/devchangemakers'),
  l('YouTube', 'https://www.youtube.com/@mitul_shahriyar'),
  l('Luma', 'https://luma.com/DevChangeMakersANBS'),
  l('Facebook page', 'https://www.facebook.com/devchangemakersOfficial'),
  l('Facebook group', 'https://www.facebook.com/share/g/1CLUCAka4G/'),
  l('GitHub', 'https://github.com/Dev-Change-Makers-Community'),
]
