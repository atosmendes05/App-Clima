const key = 'f7d7633c4d7448ecbe3222307242002'

const fetchData = async function (cidade) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${cidade}&aqi=no`

    const fetchResponse = await fetch(url)
    const data = await fetchResponse.json()

    return data
}


export default fetchData;