const STYLES = {
  Formation: 'border-primary/40 text-primary-strong bg-primary/10',
  Personnel: 'border-accent/40 text-accent bg-accent/10',
}

function CategoryBadge({ category }) {
  return (
    <span
      className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${STYLES[category] ?? ''}`}
    >
      {category}
    </span>
  )
}

export default CategoryBadge
