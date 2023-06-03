import classNames from 'classnames'

interface ButtonProps {
  children: React.ReactNode
  primary?: boolean
  secondary?: boolean
  success?: boolean
  outline?: boolean
  type?: 'button' | 'submit'
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  success,
  outline,
  type,
  className,
  onClick
}) => {
  const classes = classNames(
    'px-6 py-2 border-[1.5px] rounded-lg hover:shadow-lg transition',
    {
      'border-primary-100 bg-primary-100 text-white hover:bg-primary-200 hover:border-primary-200': primary,
      'border-success-100 bg-success-100 text-white hover:bg-success-200 hover:border-success-200': success,
      'bg-transparent text-primary-100 border-primary-100': outline
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
