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

