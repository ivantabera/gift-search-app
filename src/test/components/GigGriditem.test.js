import React from 'react';
import '../../setupTests';
import {shallow} from 'enzyme';
import { GigGriditem } from '../../components/GigGriditem.js';

describe('Pruebas en el grid item', () => {

    const title = 'Hola mundo';
    const url =  'https://holamundo.com';
    const wrapper = shallow( <GigGriditem title = { title } url = {url} /> );

    test('Mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe tener un parrafo con el Title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim()).toBe( title );
    })

    test('Comprobar que tenemos un img con url y alt valido similar al de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Comprobar que el div contenga el className "animate__fadeIn"', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        const animacion = className.includes('animate__fadeIn');
        expect( animacion ).toBe(true);
    })
    
    
    
});
