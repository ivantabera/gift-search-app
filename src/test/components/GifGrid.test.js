import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => {

    let category = "Hola mundo";
    
    test('Debe de mostrar el componente de manera correcta', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        let wrapper = shallow( <GifGrid category={category} />);
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de mostrar items cuando se cargan imagentes con el useFetch', () => {
        const gifs = [{
            id:'ASB',
            url:'https://welcome.com',
            title:'Hola mundo'
        },
        {
            id:'234',
            url:'https://welcome23.com',
            title:'Hola mundo234'
        }]
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });
        const wrapper = shallow( <GifGrid category={category} />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GigGriditem').length ).toBe(gifs.length);
    })
    

})
