export class Goods {
  id: number;
  code: string;
  name: string;
  quantity: number;
  price: number;
}

export class Item {
  id: number;
  code: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export class Record {
  id: number;
  time: string;
  store: string;
  charge: string;
  code: number;
  list: Item[];
  total: number;
  remark: string;
}

export class newRecord {
  time: string;
  store: string;
  charge: string;
  code: number;
  list: Item[];
  total: number;
  remark: string;
}

export class Member {
  id: number;
  name: string;
  plateNum: string;
  phoneNum: number;
}