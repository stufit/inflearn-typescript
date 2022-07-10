// JS 문자열 선언
//var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';
// TS 숫자 선언
let num: number = 10;
// TS 배열 선언
let arr: Array<number> = [1,2,3]; // 배열선언해주고 배열안에는 number만 들어갈 수 있음.
let heroes: Array<string> = ['rhksdud','rhksghd','chang'] // 배열 안에는 string만 들어갈 수 있음.
let items: number[] = [1,2,3]; // 배열표현은 이렇게 표현할 수도 있음. 배열 안에는 number만 가능
// TS 튜플 선언
let address: [string, number] = ['rhksdud',30]; // 자리수까지 타입을 선언해줄 수 있음.
// TS 객체
let obj: object = {};
// TS 객체 - 첫번째 선언방법
let person_v1: object = {
  name: 'rhksdud',
  age: 32,
};
// TS 객체 - 두번째 선언방법 => 들어갈 변수명과 타입을 미리 지정
let person_v2: {name: string, age: number} = {
  name: 'rhksdud',
  age: 32,
}
// TS 진위값
let show: boolean = true;



