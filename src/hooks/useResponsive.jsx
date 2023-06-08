export default function useResponsiveTo (display) {
  const steps = {
    md: '758px',
    lg: '1024px',
    xl: '1280px'
  }
  return `@media (min-width: ${steps[display]})`
}
