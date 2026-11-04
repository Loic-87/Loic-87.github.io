const COLORS = {
  primary: 'bg-primary/25',
  accent: 'bg-accent/20',
  highlight: 'bg-highlight/20',
}

const POSITIONS = {
  left: 'left-0 top-1/3',
  right: 'right-0 top-1/3',
}

function SectionGlow({ color = 'primary', position = 'left' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 h-80 w-80 rounded-full blur-[100px] ${COLORS[color]} ${POSITIONS[position]}`}
    />
  )
}

export default SectionGlow
