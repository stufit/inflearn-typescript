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
