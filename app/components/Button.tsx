import { Button as Btn, ResponsiveValue, SystemStyleObject } from '@chakra-ui/react'

export default function Button({
  children,
  as,
  bg,
  color,
  colorScheme,
  hover,
  variant,
  iconSpacing,
  isLoading,
  rightIcon,
  size,
  className
}: {
  children: React.ReactNode
  as?: string
  bg?: string
  color?: string
  colorScheme?: string
  hover?: SystemStyleObject
  variant?: 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled'
  iconSpacing?: ResponsiveValue<string | number | (string & {})>
  isLoading?: boolean
  rightIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  size?: 'lg' | 'md' | 'sm' | 'xs'
  className?: string
}) {
  return (
    <Btn
      bg={bg}
      color={color}
      _hover={hover}
      colorScheme={colorScheme}
      variant={variant}
      iconSpacing={iconSpacing}
      isLoading={isLoading}
      rightIcon={rightIcon}
      size={size}
      className={className}
    >
      {children}
    </Btn>
  )
}
