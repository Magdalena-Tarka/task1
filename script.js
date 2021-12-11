'use strict'

// selectors
const btn = document.querySelector('.btn');
const randomNumbers = document.querySelector('.randomNumbers');
const listsWrapper = document.querySelector('.listsWrapper');
const evenList = document.querySelector('.evenList');
const oddList = document.querySelector('.oddList');

const getArrayOfHundredInt = () => {
    let array = [];
    for(let i=1;i<=100;i++) {
        array.push(i);
    };
    return array;
};

const getRandomElementsFromArray = (array, numberOfRandomElementsToExtract = 1) => {
    const elements = [];
    
    function getRandomElement(arr) {
        if(elements.length < numberOfRandomElementsToExtract) {
            const index = Math.floor(Math.random() * arr.length);
            const element = arr.splice(index, 1)[0];
            elements.push(element);
            return getRandomElement(arr);

        } else return elements;
    }
    return getRandomElement([...array]);
};

const sortAscending = arr => {
    arr.sort((a,b) => a - b);
    return arr;
};

const createColumOfFiltredNumbers = (arr, list) => {
    arr.forEach(item => {
        const listElement = document.createElement('li');
        listElement.className = 'listElement';
        list.appendChild(listElement);
        listElement.innerHTML = item;
    });
};

const btnHandler = () => {
    const array = getArrayOfHundredInt();
    const randomTwentyNumbers = getRandomElementsFromArray(array, 20);
    const evenNumbers = sortAscending(randomTwentyNumbers.filter(number => number % 2 == 0));
    const oddNumbers = sortAscending(randomTwentyNumbers.filter(number => number % 2 !== 0));

    evenList.innerHTML = '';
    oddList.innerHTML = '';
    listsWrapper.classList.add('visible');
    randomNumbers.innerHTML = `Drawn 20 numbers: [ ${randomTwentyNumbers.join(', ')} ]`;

    createColumOfFiltredNumbers(evenNumbers, evenList);
    createColumOfFiltredNumbers(oddNumbers, oddList);
}
