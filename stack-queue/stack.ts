// 나중에 쌓인(들어온) 데이터가 먼자 나오는 구조여야 합니다.
class Stack {
  private storage: object;
  private count: number;

  constructor() {
    this.storage = {};
    this.count = 0;
  }

  // stack의 크기(데이터의 개수)를 알 수 있어야 합니다.
  size() {}

  // stack에 데이터를 넣을 수 있어야 합니다.
  push() {}

  // stack에서 데이터를 빼내어 값을 확인 할 수 있어야 합니다.
  pop() {}
}
