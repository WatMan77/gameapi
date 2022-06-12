const { default: axios } = require("axios")

const countries = [
    'TR',
    'US',
    'GB',
    'DE',
    'AR',
    'ES',
    'MX',
    'FR',
    'IT',
    'JP',
    'KR',
    'PL',
    'BR',
    'RU',
    'TH',
    'CN'
]

const getBucket = async () => {
    const country = countries[2]
    const epic = await axios.get(`https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions?country=${country}`)
    console.log(epic.data.data.Catalog.searchStore.elements.map(x => x.title))
    console.log(epic.data.data.Catalog.searchStore.elements)

    return epic.data.data.Catalog.searchStore.elements
}

module.exports = { getBucket }