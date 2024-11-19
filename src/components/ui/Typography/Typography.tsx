interface TypographyProps {
    children: React.ReactNode
}

export const Typography = ({children} : TypographyProps) => {
  return (
      <div className='font-bold'>{children}</div>
  )
}
