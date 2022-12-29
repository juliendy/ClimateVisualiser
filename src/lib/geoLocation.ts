
export default async function getLocationsByString(name: string) {
    const apiCall = 'https://geocoding-api.open-meteo.com/v1/search?name=' + name;

    const res = await fetch(apiCall)
    const data = await res.json()

    console.log(data)
    
    if (!data) return new Array([])
    if (!data.results) return new Array([])

    return (data.results)
}