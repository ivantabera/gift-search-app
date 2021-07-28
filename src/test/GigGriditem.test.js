import React from 'react';
import '../setupTests';
import {shallow} from 'enzyme';
import { GigGriditem } from '../components/GigGriditem.js';

describe('Pruebas en el grid item', () => {

    const title = 'Hola mundo';
    const url =  'https://holamundo.com';

    test('Mostrar el componente correctamente', () => {
        

        const wrapper = shallow( 
            <GigGriditem 
                title = { title } 
                url = {url} 
            /> 
        );

        expect( wrapper ).toMatchSnapshot();

    })
    
});
