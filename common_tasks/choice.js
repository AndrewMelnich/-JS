const auto = [
    {"brand": "Honda", "odometr": 184930, "price": 670000},
    {"brand": "Nissan", "odometr": 156543, "price": 450000},
    {"brand": "Tayota", "odometr": 94457, "price": 856000},
    {"brand": "Mitsubisi", "odometr": 205678, "price": 605000},
];

const getWorthyAuto = autoArr => {
    const WorthyAuto = [];

    autoArr.forEach(elementAuto => {
        if (elementAuto.odometr < 200000 && elementAuto.price < 500000) {
            WorthyAuto.push(elementAuto.brand);
        }
    });

    // выводит
        
    // for (let i = 0; i < autoArr.length; i++) {
    //     const elementAuto = autoArr[i];

    //     if (elementAuto.odometr < 190000 && elementAuto.price < 900000)
    //     WorthyAuto.push(elementAuto.brand);
    // }

    return WorthyAuto;
}

console.log(getWorthyAuto(auto));