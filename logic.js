function forEachFunction() {

    const numbers = [2,4,6,8]

    numbers.forEach(myFunction) 
    
    function myFunction(item, index, arr) {
        arr[index] = item * 10
    }
    console.log(numbers)
    document.getElementById("result").innerHTML = numbers

}

function mapFunction() {

    const numbersMap = [10, 20, 30]

    let newNumbers = numbersMap.map((Element) => Element + 1)
    console.log(newNumbers)
    document.getElementById("result2").innerHTML = newNumbers
}

function filterFunction() {

    const words = ["manzana", "pera", "plátano", "kiwi", "durazno"]

    const result = words.filter(word => word.length >6)

    console.log(result)
    document.getElementById("result3").innerHTML = result
}

function reduceFunction() {

    const nums = [2, 4, 6, 8, 10]

    const finalNum = nums.reduce((a,b) => {
        return a+b;
    }, 0);

    console.log(finalNum)
    document.getElementById("result4").innerHTML = finalNum
}


function findFunction() {

    const cities = ["Lima", "Montevideo", "Bogotá", "Miami", "Santiago"]

    const findCity = cities.find((element) => element.length > 6);

    console.log(findCity)
    document.getElementById("result5").innerHTML = findCity


}

function findIndexFunction() {

    const names = ["Mariana", "Francesca", "Santiago", "Alejandro"]

    const nameIndex = names.findIndex((element, index) => {
        element.length > 8
        return index
    });

    console.log(nameIndex)
    document.getElementById("result6").innerHTML = "Index: " + nameIndex
}