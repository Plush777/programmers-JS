//https://school.programmers.co.kr/learn/courses/30/lessons/120806

const solution = (num1, num2) => {
    var answer = num1 / num2;
    answer = Math.floor(answer * 1000);
    
    return answer;
}