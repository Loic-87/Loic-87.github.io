import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiJsonwebtokens,
} from 'react-icons/si'

const ICONS = {
  React: { Icon: SiReact, color: '#61DAFB' },
  'JavaScript (ES6+)': { Icon: SiJavascript, color: '#F7DF1E' },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  'HTML5 sémantique': { Icon: SiHtml5, color: '#E34F26' },
  HTML5: { Icon: SiHtml5, color: '#E34F26' },
  'CSS3 / Sass': { Icon: SiSass, color: '#CC6699' },
  CSS3: { Icon: SiCss, color: '#1572B6' },
  Sass: { Icon: SiSass, color: '#CC6699' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#38BDF8' },
  Vite: { Icon: SiVite, color: '#A855F7' },
  'Node.js': { Icon: SiNodedotjs, color: '#5FA04E' },
  Express: { Icon: SiExpress, color: '#ffffff' },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  'Git / GitHub': { Icon: SiGithub, color: '#ffffff' },
  Git: { Icon: SiGit, color: '#F05032' },
  Figma: { Icon: SiFigma, color: '#F24E1E' },
  JWT: { Icon: SiJsonwebtokens, color: '#ffffff' },
}

function TechTag({ children }) {
  const entry = ICONS[children]

  return (
    <li className="flex items-center gap-1.5 rounded-md border border-white/10 bg-bg-elevated px-2.5 py-1 text-xs text-text">
      {entry && <entry.Icon color={entry.color} size={13} aria-hidden="true" />}
      {children}
    </li>
  )
}

export default TechTag
