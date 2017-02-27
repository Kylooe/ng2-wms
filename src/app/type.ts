export class Goods {
  id: number;
  name: string;
  quantity: number;
}

export class Record {
  id: number;
  time: string;
  goods: Goods[];
}