const containerEl = document.querySelector('.container')

for (let i=0;i<10;i++){
    const colorContainer = document.createElement('div')
    colorContainer.classList.add('container-box')
    containerEl.appendChild(colorContainer)
}

const containerBox = document.querySelectorAll('.container-box')

generateColors()
function generateColors(){
    containerBox.forEach((containerEl) => {
        const newColorCode = randomColor();
        containerEl.style.backgroundColor = "#" + newColorCode
        containerEl.innerText = "#" + newColorCode
    });
}

function randomColor(){
    const colorRandom = "0123456789ABCDEF"
    const colorLength = 6
    let colorCode = ''
    for(let i=0;i<colorLength;i++){
        const randomNum = Math.floor(Math.random() * colorRandom.length)
        colorCode += colorRandom.substring(randomNum, randomNum + 1)
    }
    return colorCode
}



const rgbaEl = document.querySelector('.rgba')

for(let j=0;j<10;j++){
    const s = document.createElement('div')
    s.classList.add('rgba-container')
    rgbaEl.appendChild(s)
}
const rgbaContainer = document.querySelectorAll('.rgba-container')

function rgbaGenerate(){
    rgbaContainer.forEach((rgbaEl)=>{
        const load = rgbaRandom()
        rgbaEl.style.backgroundColor = "#" + load
        rgbaEl.innerText = "#" + load
    });
}
rgbaGenerate()

function rgbaRandom(){
    const randomColor = "0123456789ABCDEF"
    let num = 8
    let rgbaStore = ''
    for(let j=0;j<num;j++){
        const colorRgba = Math.floor(Math.random() * randomColor.length)
        rgbaStore += randomColor.substring(colorRgba, colorRgba + 1)
    }
    return rgbaStore
}