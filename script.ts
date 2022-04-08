// let city : string = "Kyiv"
// city = "Lviv"
// let address : string = city
// console.log(address)

// let number: any = prompt('Enter number')
// if(number == 0){
//     console.log('Число - нуль')
// }else if(number % 2 == 0){
//     console.log('Парне')
// }else{
//     console.log('Непарне')
// }

// function findMax(...arg: number [] ) : void {
//     let max = arguments[0]
//     arg.forEach(elem => {
//         if(elem > max){
//             max = elem
//         }
//     })
//     console.log(max)
// }
// findMax(10,20,30,40,1,3)

// function getSqrt(number: any) {
//     if (typeof number == 'string') {
//         console.log('Повинно бути числове значення')
//     } else if (typeof number == 'number') {
//         console.log(Math.sqrt(number))
//     }else if (number  < 0) {
//         console.log('Введіть додатнє число')
//     }else if (typeof number == 'undefined') {
//         console.log('Будь ласка,введіть число')
//     }
// }
// getSqrt()


// 5 task
// let badWords: string [] = []


// const addBadWords = () => {
//     const badWordsInput = (<HTMLInputElement>document.getElementById('bad__words')).value;
//     badWords.push(badWordsInput)
//     showBadWords()
// }
// const showBadWords = () => {
//     const wordsContent = (<HTMLInputElement>document.getElementById('words__content'));
//     wordsContent.innerHTML = ` ${badWords}`
// }
// const resetButton = () => {
//     const wordsContent = (<HTMLInputElement>document.getElementById('words__content'));
//     wordsContent.innerHTML = ``
//     badWords = []
// }
// const checkBadWords = () => {
//         let text = (<HTMLInputElement>document.getElementById('textarea')).value;
//         let wordsArr = text.split(" ")
//         console.log(wordsArr)
//         for(let word in wordsArr){
//             for(let banWord in badWords){
//                 if(wordsArr[word] == badWords[banWord]){
//                     wordsArr[word] = '*'.repeat(wordsArr[word].length)
//                 }
//             }
//         }
//         let censored = wordsArr.join(' ');
//         (<HTMLInputElement>document.getElementById('textarea')).value = `${censored}`
// }

