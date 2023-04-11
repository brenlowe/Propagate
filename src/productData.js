import { calathea, ficus, cacti, monstera, philodendron, pilea, snakePlant, stringOfHearts, ZZ } from './assets'
const productData = [
    {
        id: 1,
        image: calathea,
        name: "Calathea Maui",
        price: 39,
        description: "This tropical indoor plant from Brazil requires reasonable maintenance, making it a fantastic option for plant parents trying to raise their game."
    },
    {
        id: 2,
        image: ficus,
        name: "Ficus Elastica",
        price: 29,
        description: "Perfect for bringing color and life to entry areas, empty corners and mixed plant groupings! Rubber Plants are a popular..."
    },
    {
        id: 3,
        image: monstera,
        name: "Monstera Deliciosa",
        price: 69,
        description: "Native to the rainforests of Central America, the big, bold Monstera deliciosa plant is also known as the 'split-leaf philodendron..."
    },
    {
        id: 4,
        image: philodendron,
        name: "Philodendron Brasil",
        price: 39,
        description: "Characterized by dark green, heart-shaped leaves with splashes of variegation in shades of lime green, the..."
    },
    {
        id: 5,
        image: pilea,
        name: "Pilea Peperomioides",
        price: 19,
        description: "This flowering perennial in the nettle family (Urticaceae) is native to southern China, growing naturally along..."
    },
    {
        id: 6,
        image: snakePlant,
        name: "Snake Plant",
        price: 29,
        description: "Snake plants generally grow slowly in indoor light, but increasing its exposure to light will boost growth if it..."
    },
];

function getProductData(id) {
    let productsData = productData.find(product => product.id === id)

    if (productsData == undefined) {
        console.log("Product data dies not exist for ID: " + id);
        return undefined;
    }

    return productsData;
}

export { productData, getProductData } 