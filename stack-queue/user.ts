class User {
  // 이름
  firstName;
  // 성
  lastName;

  // const 인스턴스 = new User('a', 'b')
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  // 인스턴스.fullName // a b
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // 인스턴스.fullName = 'a b'
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }

  fullNameKo() {
    return `${this.lastName} ${this.firstName}`;
  }

  changeLastName(newName) {
    this.lastName = newName;
  }
}

const sample = new User("길동", "홍");
console.log(sample.fullName);
sample.changeLastName("김");
console.log(sample.fullNameKo());
