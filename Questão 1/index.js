let numbers = [1, 2, 3, 4, 5, 6, 6];

const secondHighestNumber = ( arrey ) => {
    const arr = new Set (arrey)
    const resutlt = [...arr.values()]
    resutlt.splice(resutlt.indexOf(Math.max(...resutlt)), 1)
    return Math.max(...resutlt)
}

console.log(secondHighestNumber(numbers))

