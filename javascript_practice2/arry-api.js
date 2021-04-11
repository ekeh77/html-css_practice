//01. make a string out of an array
//배열을 string으로 만들어주는 join();
//배열.join(구분자?);
{
    const fruits =  ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);
}

//02. make an array out of a string
//string을 배열로 만들어주는 split();
//string.split(구분자, limit(얼마나 표시할지)?);
{
    const fruits = '사과, 키위, 바나나, 체리';
    const result = fruits.split(',');
    console.log(result);
}

//03. make this array look like this: [5, 4, 3, 2, 1]
//주어진 배열의 순서를 거꾸로 하는 reverse();
//배열.reverse();
//배열 자체를 바꾼다
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}

//04. make new array without the first two elements
//배열 자체에서 원하는값을 삭제하는 splice();
//배열.splice(start(어디서부터), howmany(몇개나));
//배열의 특정한 부분을 새롭게 리턴하는 slice(); 배열을 안건들임
//배열.slice(start(시작할곳), end(마지막값+1해야함))
{
    const array = [1, 2, 3, 4, 5];
    /*
    const result = array.splice(0, 2);
    console.log(result);//삭제된값이 리턴됨
    console.log(array);//배열자체에는 삭제되고 남은 값이 나옴
    */
    const result = array.slice(2,5)
    console.log(result);
    console.log(array);

}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
]

//05. find a student with the score 90
//원하는 값을 찾는 find();
//찾을곳.find(function(찾을곳){return 찾을곳.찾을곳 조건;})
{
    /*
    const result = students.find(function(student, index){
        return student.score === 90;
    })
    console.log(result);
    */
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

//06. make an array of enrolled students
//원하는값을 필터해주는 filter()
//찾을곳.filter(function(찾을곳){return 찾을곳.찾을곳 조건;})
{
    const result = students.filter((status) => status.enrolled);
    console.log(result);
}

//07. make an array containing only the students' scores
//result should be : [45, 80, 90, 66, 88]
//원하는 변환으로 맵핑하는 map()
//변환할것.map(function(변환할것){return 변환할것.번환할곳 조건?;})
{
    const result = students.map((student) => student.score);
    console.log(result);
}

//08. check if there is a student with the score lower than 50
//배열에서 한조건만 만족해도 true를 반환하는 some
//배열에서 모든조건을 만족해야 true를 반환하는 every
//반환할것.some or every(function(반환할것){return 반환할것.반환할것 조건;})
{
    console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result);

    console.clear();
    const result = students.every((student) => student.score < 50);
    console.log(result);
} 

//09. compite students' average score
//배열의 누적된값을 전달하는 reduce(주로 평균으로 사용)
//누적할값.reduce((이전값, 현재값) =>{}, 시작값 )
//reduceRight는 꺼꾸로 값을 누적
{
    const result = students.reduce((prev, curr) => prev + curr.score,0); 
    console.log(result / students.length);
}

//10. make a string containing all the scores
// result should be : '45, 80, 90, 66, 88'
{
    const result = students.map((student) => student.score).join();
    console.log(result)
}

//Bonus! do 10 sorted in ascending order
//result should be : '45, 66, 80, 88, 90'
//배열을 정렬하는 sort();
//정렬할배열.sort((a, b) => a - b ) 마이너스일 때 ascending order
{
    const result = students
    .map((student) => student.score)
    .sort((a,b) => a - b)
    .join();
    console.log(result);
}
