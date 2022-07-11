interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 3,
  name: '관영'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user)
}
const capt = {
  name: '마켓보로',
  age: 32
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b:number): number;
}
//var sum: SumFunction;
const sum_v2 = function (a:number, b: number) {
  return a+b;
}

// 인덱싱
// 인덱스는 배열[0] 처럼 숫자를 의미하기 때문에 number를 넣어주며, 반환값 즉 해당 인덱싱의 값 타입을 : string, number 등으로 선언해줄 수 있다.
interface StringArray {
  [index: number]: string; // 배열 안의 값은 스트링으로 선언
}
var arr_v1: StringArray = ['a','b','c'];
// arr_v1[0] = 3 // 배열 안의 값이 스트링으로 선언되어있기 때문에 숫자를 넣으면 에러

// 딕셔너리 패턴
// 딕셔너리는 키값이 보통 스트링이기 때문에 기본적으로 key는 string타입이며, value의 타입은 []: 으로 정의해주면 된다.
interface StringRegexDictionary {
  [key: string]: RegExp; // value 타입을 RegExp로 선언함.
}

var obj_v1: StringRegexDictionary = {
  // cssFile: 'ff' // value 값이 RegExp이기 때문에 string 타입은 에러가 발생.
  sth: /abc/,
}
// obj_v1['cssFile'] = 'a' // value 값이 RegExp이기 때문에 string 타입은 에러가 발생.
Object.keys(obj_v1).forEach(function (value) {})

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer_v1 { // 인터페이스 확장 전
  name: string;
  age: number;
  language: string;
}

interface Developer_v2 extends Person { // 인터페이스 확장 후 : extends를 붙여야함.
  language: string;
}

var cap : Developer_v2 = {
  language: '한국어',
  name: '관영',
  age: 32,
}



