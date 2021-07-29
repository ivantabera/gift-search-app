import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en AddCategory', () => {

    // Creamos una funcion simulada. Si no se proporciona ninguna implementación, la función simulada volverá undefinedcuando se invoca.
    const setCategories = jest.fn();
    //inicializamos la variable para no perder el intellisense 
    let wrapper = shallow( <AddCategory setCategories={setCategories} />);

    beforeEach( () => {
        //esto se llama por si tenemos una simulacion de algo se limpie y nos permita hacer los test limpios
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} />);

    })
    
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });
    })

    test('No debe de postear la informacion onSubmit', () => {
        //Simulamos el submit y el segundo parametro debe ser la accion 
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        //Se le pone el not ya que se espera que se llame 1 vez o mas
        expect( setCategories ).not.toHaveBeenCalled();
    })
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola mundo';
        // 1. simlar el input change
        wrapper.find('input').simulate('change', { target: { value } });
        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        //3. setCategories se debe haber llamado (3 formas de hacerlo)
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        //4. el valor de inputo debe estar vacio
        expect( wrapper.find('input').prop('value') ).toBe('');
    })
    
})
