import './Button.scss'

export const buttonTypes = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

export function Button ({ children, buttonType, ...props }) {
  return (
    <button className={`${buttonType} button-container`} {...props}>
      { children }
    </button>
  )
}
