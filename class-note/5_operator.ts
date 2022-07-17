// 일반적 타입선언
function logMessage(value: string) {
  console.log(value);
}
logMessage('hello');
logMessage(100); // 타입이 int 이므로 에러

// 유니온타입
function logMessage_v2(value: string | number) {
  console.log(value);
}
logMessage_v2('hellowWorld');
logMessage_v2(100); // 유니온 타입이므로 number도 가능함.