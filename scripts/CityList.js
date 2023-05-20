import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvt) => {
        const cityTarget = clickEvt.target
        if (cityTarget.dataset.type === "city"){
            window.alert(`The walker who services this city is ${cityTarget.dataset.walkername}`)
        }
        
    }
)

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const walker of walkers) {
        citiesHTML += `<li data-type="city" data-walkername="${walker.name}">${walker.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

