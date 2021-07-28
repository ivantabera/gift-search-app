import React from 'react';
import '../../setupTests';
import {shallow} from 'enzyme';
import { getGif } from '../../helpers/GetGif';

describe('Pruebas en getGif "Fetch"', () => {

    test('Debe de traer 10 elementos ', async() => {
        const gifs = await getGif('marvel');
        expect(gifs.length).toBe(10)
    });

    test('Debe de traer un arreglo vacio ', async() => {
        const gifs = await getGif('');
        expect(gifs.length).toBe(0)
    });

})