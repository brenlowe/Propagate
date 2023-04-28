import { calathea, ficus, monstera, philodendron, pilea, snakePlant, stringOfHearts, ZZ, cacti } from './assets'
const productData = [
    {
        id: "price_1MyGRyDfxdhpvEhVltIeLoF3",
        image: calathea,
        name: "Calathea Maui",
        price: 39,
        description: "This tropical indoor plant from Brazil requires little maintenance. Great for beginners."
        // price_1MyGRyDfxdhpvEhVltIeLoF3
    },
    {
        id: "price_1Mz0kfDfxdhpvEhVTh09CQ9U",
        image: ficus,
        name: "Ficus Elastica",
        price: 29,
        description: "Perfect for bringing color and life to entry areas, empty corners and mixed plant groupings."
        // price_1Mz0kfDfxdhpvEhVTh09CQ9U
    },
    {
        id: 3,
        image: monstera,
        name: "Monstera Deliciosa",
        price: 69,
        description: "Big, bold, and lively. Native to the rainforests of Central America."
    },
    {
        id: 4,
        image: philodendron,
        name: "Philodendron Brasil",
        price: 39,
        description: "Dark green, heart-shaped leaves with splashes of variegation. Beautiful trailing plant."
    },
    {
        id: 5,
        image: pilea,
        name: "Pilea Peperomioides",
        price: 19,
        description: "Flowering perennial in the nettle family. Native to southern China, known for their coin-shaped leaves."
    },
    {
        id: 6,
        image: snakePlant,
        name: "Snake Plant",
        price: 29,
        description: "Drought-tolerant, light adaptive and great for beginner plant parents."
    },
];

function getProductData(id) {
    let productsData = productData.find(product => product.id === id)

    if (productsData === undefined) {
        console.log("Product data dies not exist for ID: " + id);
        return undefined;
    }

    return productsData;
}

export { productData, getProductData } 