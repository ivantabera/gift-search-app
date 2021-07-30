import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp"

describe('Pruebas en GifExpertApp', () => {

    test('Probar que el componente se renderice bien ', () => {
        
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Mostrar una lista de categoria', () => {
        
        const categories = [ 'dragon ball', 'marvel' ];
        const wrapper = shallow(<GifExpertApp defaultCategories = {categories} />);

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length);


    })
    
    
})