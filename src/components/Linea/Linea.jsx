import {StyledLinea} from './Linea.styled'

const Linea = ({fraseItem, selected, bgcolor}) => {
    console.log(fraseItem, selected)
    return (
        <>
            <StyledLinea>{fraseItem}</StyledLinea>
        </>
    );
}

export default Linea