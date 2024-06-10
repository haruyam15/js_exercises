// 먼저 쌓인(들어온) 데이터가 먼자 나오는 구조여야 합니다.
class Queue {
  // private storage: object;
  // private front: number;
  // private end: number;

  constructor() {
    this.storage = {};
    this.front = 0;  //맨 앞 요소의 key값
    this.end = 0; //맨 뒤 요소의 key값
  }

  // queue의 크기(데이터의 개수)를 알 수 있어야 합니다.
  size() {
    return Object.keys(this.storage).length;
  }

  // queue에 데이터를 넣을 수 있어야 합니다.
  enqueue(addItem) {
    if(addItem){
      let newItemKey = this.size() ===  0 ? 0 : this.end+1; // 새로 추가 될 요소의 키값 - 맨 처음 들어온거면 무조건 0, 그 다음부턴 맨 끝 키값+1
      this.storage[newItemKey] = addItem; // storage에 등록
      this.front = Object.keys(this.storage)[0]; //front값 업데이트
      this.end = this.size() === 0 ? 0 : newItemKey;  //end값 업데이트
      console.log(`${addItem}가(이) 등록되었습니다.`)
      return this.storage
    }else{
      console.log(`입력값이 없습니다.`)
      return
    }
    
  }

  // queue에서 데이터를 빼내어 값을 확인 할 수 있어야 합니다.
  dequeue() {
    const delItem = this.storage[this.front]; //지워질 요소 - 맨 앞 요소!
    if(this.size() === 0){ 
      console.log("삭제할 데이터가 없습니다.")
    }else{
      console.log(`${delItem}가(이) 삭제되었습니다.`)
    }
    delete this.storage[this.front];
    this.front = this.size() === 0 ? 0 : Object.keys(this.storage)[0];
    this.end = this.size() === 0 ? 0 : this.end

    return this.storage
  }
}

const queueInstance = new Queue;

queueInstance.enqueue("A");
queueInstance.enqueue("B");
queueInstance.dequeue();


console.log(queueInstance.storage)
console.log(queueInstance.size())

//메소드 호출하면 return만 시켜줘서 console.log() 해줘야함!