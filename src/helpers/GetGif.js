// haremos una funcion asincrona para recibir los datos de la API
export const getGif = async( category ) => {

    // Guardamos nuestra url del api en una constante
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=fb36rhWkdzSVD5NPLfFas2Wryuq82AM2`;
    // hacemos la peticion con un fetch
    const resp = await fetch( url );
    // desestructuramos la data para que solo nos de la data y evitar la demas informacion
    const {data} = await resp.json();

    // Extraemos la informacion barriendo cada imagen
    const gifs = data.map( img => {
        // el return es el que transforma cada elemento del arreglo img
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;

}
