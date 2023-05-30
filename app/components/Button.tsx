import classNames from 'classnames'

interface ButtonProps {
  children: React.ReactNode
  primary?: boolean
  secondary?: boolean
  outline?: boolean
  type?: 'button' | 'submit'
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  outline,
  type,
  className,
  onClick
}) => {
  const classes = classNames(
    'px-6 py-2 border-[1.5px] rounded-lg hover:shadow-md transition',
    {
      'border-[#2b5adc] bg-[#2b5adc] text-white': primary,
      'bg-[#fff]': outline,
      'text-[#2b5adc]': outline && primary
    },
    className
  )

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
export default Button
