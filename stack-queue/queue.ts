// 먼저 쌓인(들어온) 데이터가 먼자 나오는 구조여야 합니다.
class Queue {
  private storage: object;
  private front: number;
  private end: number;

  constructor() {
    this.storage = {};
    this.front = 0;
    this.end = 0;
  }

  // queue의 크기(데이터의 개수)를 알 수 있어야 합니다.
  size() {}

  // queue에 데이터를 넣을 수 있어야 합니다.
  enqueue() {}

  // queue에서 데이터를 빼내어 값을 확인 할 수 있어야 합니다.
  dequeue() {}
}