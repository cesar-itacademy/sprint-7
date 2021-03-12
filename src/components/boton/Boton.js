import {StyledBoton} from './Boton.styled'

const Boton = (props) => (
    <StyledBoton onClick={props.onClick} >{props.title}</StyledBoton>
)

export default Boton;