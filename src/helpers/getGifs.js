// Esto se separa por buenas prácticas, para no volver a activar el componente que se renderizará
export const getGifs =  async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=yhsQT1OzkELIVxFWNpTm2ga85oUTVzM9&q=${category}&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map( img => ({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }))
    return gifs
}