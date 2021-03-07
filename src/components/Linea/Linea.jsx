import {StyledLinea} from './Linea.styled'

//Frase y si esta seleccionada o no
const Linea = ({fraseItem, selected}) => {
    return (
        <>
            <StyledLinea selected={selected}>{fraseItem}</StyledLinea>
        </>
    );
}

export default Linea