
// Фильтрация строки урок первый

// const string = document.querySelectorAll('lesson__one-text');
const string = 'Я в своем познании настолько преисполнился, что я как будто бы уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, как эта Земля';
const target = ['я', 'ы', 'и', 'о', 'е', 'у', 'а'];

const getTarget = stringToFilter => {
    let WordsWithTarget = '';

    for (let i = 0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i].toLowerCase();
        
        if (target.includes(currentLetter)) {
            WordsWithTarget += currentLetter;
        }
    }

    return WordsWithTarget;
}

console.log(getTarget(string));

// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.

const arr = ['6,3', '2012', '-100', '0,2', '7', '3', '5', '10', '11', '-1', '2', '4'];

let result = arr.filter(elem => elem > 0 && elem < 10);

console.log(result);