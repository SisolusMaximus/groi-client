import './header-option.styles.scss'

const HeaderOption = ({children, onClick})=>(
    <span onClick={onClick} className={"header-option"}>
        {children}
    </span>
)

export default HeaderOption