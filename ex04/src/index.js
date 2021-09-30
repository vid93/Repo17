const BAKING_TEMPERATURES = {
    cake: {low : 180, high: 250},
    bread: {low: 150, high: 220},
    pie: {low: 200, high: 230}
}

function main(baking) {
    const {bread: {low: lowbread, high: highbread}} = baking;

    return {lowbread, highbread};
}

console.log(main(BAKING_TEMPERATURES));
module.exports = main;