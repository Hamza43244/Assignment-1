const mobiles = {

    Iphone: {
        Iphone7: {
            Name: "Iphone",
            Model: "Iphone 7",
            Ram: "3 GB",
            Rom: "32 GB",
            Price: "50000 Rs",
        },
        Iphone8: {
            Name: "Iphone",
            Model: "Iphone 8",
            Ram: "4 GB",
            Rom: "64 GB",
            Price: "60000 Rs",
        },
        Iphone9: {
            Name: "Iphone",
            Model: "Iphone 9",
            Ram: "4 GB",
            Rom: "128 GB",
            Price: "70000 RS",
        },
    },
    Samsung: {
        Notes: {
            Name: "Samsung",
            Model: "Galaxy Note s",
            Ram: "4 GB",
            Rom: "32 GB",
            Price: "50000 Rs",
        },
        Notess: {
            Name: "Samsung",
            Model: "Galaxy Note ss",
            Ram: "6 GB",
            Rom: "64 GB",
            Price: "60000 Rs",
        },
        Notesss: {
            Name: "Samsung",
            Model: "Note sss",
            Ram: "8 GB",
            Rom: "128 GB",
            Price: "70000 Rs",
        },
    },
}

const brand = document.getElementById('brand')
const model = document.getElementById('model')
const renderValues = document.getElementById('renderValues')
const BrandNames = Object.keys(mobiles)


const firstValue = () => {

    for (let i = 0; i < BrandNames.length; i++) {
        brand.innerHTML += `  <option value=${BrandNames[i]}>${BrandNames[i]}</option>`

    }
}

firstValue()

const NextValue = () => {
    model.disabled = false
    const mobileNames = Object.keys(mobiles[brand.value])
    for (let i = 0; i < mobileNames.length; i++) {

        model.innerHTML += `  <option value=${mobileNames[i]}>${mobileNames[i]}</option>`

    }
    console.log(mobileNames);
}

const renderVal = () => {
    const selectedVal = mobiles[brand.value][model.value]
    console.log(selectedVal);

    renderValues.innerHTML = `        
    <h1>
         ${selectedVal.Name}   
    </h1>
    <h1>
         ${selectedVal.Model}   
    </h1>
    <h1>
         ${selectedVal.Ram}   
    </h1>
    <h1>
         ${selectedVal.Rom}   
    </h1>
    <h1>
         ${selectedVal.Price}   
    </h1>
    `
}