const path = "C:\Users\Andrew\OneDrive\Рабочий стол\Учёба\Beats Git\css\main.css";

const isCss = path => {
    target = ".css";
    const pathEnd = path.slice(-4);

    return (pathEnd == target)
    //true

    

}

console.log(isCss(path));



const isCssTwo = path => {
    const targetTwo = ".css";
    const pathEnd4 = path.substring(path.length - 4);
    console.log(pathEnd4);

    return (targetTwo == pathEnd4)
    true
}

console.log(isCssTwo(path));