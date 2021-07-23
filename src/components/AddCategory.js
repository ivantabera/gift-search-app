import React, {useState} from 'react';
import PropTypes from 'prop-types';

//Se destructuran los argumentos del componente 
export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validacion para evitar que el input tenga menos de 2 letras
        if ( inputValue.trim().length > 2 ) {
            // mandamos la referencia con el operador de arrastre a setCategories y el texto en el input con la variable (inputValue) para que haga la insercion
            setCategories( cate => [ inputValue, ...cate]);
            // borrar el valor del input para evitar el doble posteo
            setInputValue('');
        }

        
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}