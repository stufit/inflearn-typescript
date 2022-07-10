// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number,b: number) {
  return a+b;
}
sum(10,20);

// 함수의 반환 값에 타입을 정의하는 방식(return에 타입을 정의)
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식 종합
function sum2(a:number, b: number): number {
  return a+b;
}

// 파라미터를 제한하는 특성
function sum3(a:number, b:number): number {
  return a+b;
}
sum3(10,20,30,40); // 함수에서 a,b만 정의했으므로 그 이상의 인자값이 들어오면 에러가 발생함.


