import "./button.styles.scss"

const Button = ({children, color, disabled, ...props}) =>(
    <button disabled={disabled} className={color}{...props} >{children}</button>
)

export default Button;