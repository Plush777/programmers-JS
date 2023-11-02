//https://school.programmers.co.kr/learn/courses/30/lessons/120830

function solution(n, k) {
    let lamb = 12000 * n;
    let drink = 2000 * k;
    let calc = Math.floor(n / 10) * 2000;
    let sum = lamb+drink;
    
    return sum - calc;
}