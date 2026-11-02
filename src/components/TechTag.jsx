function TechTag({ children }) {
  return (
    <li className="flex items-center gap-1.5 rounded-md border border-white/10 bg-bg-elevated px-2.5 py-1 font-mono text-xs text-text">
      <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
      {children}
    </li>
  )
}

export default TechTag
