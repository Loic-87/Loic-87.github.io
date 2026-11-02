function SectionHeading({ number, title }) {
  return (
    <div className="mb-10">
      <div className="mb-3 flex items-center gap-3">
        <span className="font-mono text-xs text-primary">{number}</span>
        <span className="h-px w-10 bg-primary/40" />
      </div>
      <h2 className="font-display text-3xl font-bold md:text-4xl">{title}</h2>
    </div>
  )
}

export default SectionHeading
