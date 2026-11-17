'use client'

type LogoVariant = 'primary' | 'white' | 'navy' | 'compact'

export default function Logo({ variant = 'primary', className = '' }: { variant?: LogoVariant; className?: string }) {
  const textColor = variant === 'navy' ? '#091422' : '#FFFFFF'
  const ruleColor = variant === 'navy' ? '#09142240' : '#FFFFFF40'

  if (variant === 'compact') {
    return (
      <svg className={className} width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="18" fontFamily="'Inter', sans-serif" fontSize="16" fontWeight="300" letterSpacing="8" fill="#FFFFFF">RAVES</text>
        <line x1="0" y1="22" x2="80" y2="22" stroke="#FFFFFF40" strokeWidth="0.5"/>
        <text x="0" y="28" fontFamily="'Inter', sans-serif" fontSize="8" fontWeight="300" letterSpacing="6" fill="#FFFFFF80">CAPITAL</text>
      </svg>
    )
  }

  return (
    <svg className={className} width="200" height="52" viewBox="0 0 200 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="34" fontFamily="'Inter', sans-serif" fontSize="32" fontWeight="300" letterSpacing="10" fill={textColor}>RAVES</text>
      <line x1="0" y1="40" x2="184" y2="40" stroke={ruleColor} strokeWidth="0.5"/>
      <text x="10" y="50" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="300" letterSpacing="10" fill={textColor + '99'}>CAPITAL</text>
    </svg>
  )
}
