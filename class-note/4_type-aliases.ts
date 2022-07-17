// 인터페이스와 비교 시 타입별칭의 차이점(특징)
// [1] : 타입별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있도록 이름을 부여하는 것
// [2] : 타입은 확장이 불가능함. 인터페이스는 확장이 가능함(extension 가능).

// 타입과 인터페이스 비교
interface Person_v1 {
  name: string;
  age: number;
}

type Person_v2 = {
  name: string;
  age: number;
}

var rhksdud: Person_v1 = { // 인터페이스 이용시
  name: '관영',
  age: 32
}

var rhksdud_v2: Person_v2 = { // 타입 이용시, Person_v2에 마우스 가져갈 시, 해당 타입에 대한 정보를 알 수 있음.
  name:'관영',
  age: 32
}

// type 정의는 nestjs의 DTO 와 비슷한 역할을 해준다.(사실 인터페이스도 마찬가지.)
type Mystring = string;
var str_v2: Mystring = 'hello! word';
type Todo_v2 = {
  id: string;
  title: string;
  done: boolean;
}
function getTodo_v2(todo: Todo_v2){}

