//https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
    let sum = 0;
    let avg = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        sum+= numbers[i];
    }

    avg = sum / numbers.length;

    return avg;
}