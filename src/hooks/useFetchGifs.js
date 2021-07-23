import { useState, useEffect} from "react"
import { getGif } from "../helpers/GetGif";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    
    // Declaramos la funcion getGif dentro del useEffect() con [] para que solo se ejecute 1 ves cuando cargue la pagina
    // El Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales:
    useEffect(() => {
        
        getGif(category)
            .then( imgs => {
                
                setState({
                    data:imgs,
                    loading:false
                });
                
            })

    }, [category])


    return state; // {data:[], loading:true}
}