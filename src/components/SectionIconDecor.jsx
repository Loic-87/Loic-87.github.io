const POSITIONS = {
  'bottom-right': { className: 'bottom-0 right-0', translate: '25%, 25%' },
  'bottom-left': { className: 'bottom-0 left-0', translate: '-25%, 25%' },
  'top-right': { className: 'top-0 right-0', translate: '25%, -25%' },
  'top-left': { className: 'top-0 left-0', translate: '-25%, -25%' },
  'mid-right': { className: 'top-1/2 right-10', translate: '0, -50%' },
  'mid-left': { className: 'top-1/2 left-10', translate: '0, -50%' },
}

function SectionIconDecor({
  icon: Icon,
  position = 'bottom-right',
  rotate = 0,
  size = '16rem',
}) {
  const { className, translate } = POSITIONS[position]

  return (
    <Icon
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 text-primary/5 ${className}`}
      style={{
        fontSize: size,
        transform: `translate(${translate}) rotate(${rotate}deg)`,
      }}
    />
  )
}

export default SectionIconDecor
