// 나중에 쌓인(들어온) 데이터가 먼자 나오는 구조여야 합니다.
class Stack {
  // private storage: object;
  // private count: number;
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  // stack의 크기(데이터의 개수)를 알 수 있어야 합니다.
  size() {
    console.log(Object.keys(this.storage).length)
    return Object.keys(this.storage).length;
  }

  // stack에 데이터를 넣을 수 있어야 합니다.
  push(item) {
    if(item){
      const newItemKey = this.count === 0 ? 0 : this.count;
      this.storage[newItemKey] = item;
      this.count++
      console.log(`${item}가(이) 추가되었습니다.`)
      console.log(this.storage)
      return this.storage
    }else{
      console.log("입력값이 없습니다.");
      return
    }
    
  }

  // stack에서 데이터를 빼내어 값을 확인 할 수 있어야 합니다.
  pop() {
    if(this.count!==0){
      const delItem = this.storage[this.count-1];
      delete this.storage[this.count-1];
      this.count--;
      console.log(`${delItem}가(이) 삭제되었습니다.`)
      console.log(this.storage)
    }else{
      console.log("삭제할 데이터가 없습니다.")
    }
    return this.storage
  }
}

const stackInstance = new Stack;

stackInstance.push("A");
stackInstance.push("B");
stackInstance.pop();
stackInstance.pop();
stackInstance.pop();
stackInstance.push("A");
stackInstance.size();

//메소드 호출하면 console 찍힘!
