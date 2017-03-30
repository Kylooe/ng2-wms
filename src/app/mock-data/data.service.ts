import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let goods = [
      { id: 1, name: 'aaa轮胎', quantity: 19 },
      { id: 2, name: 'bbb香水', quantity: 29 },
      { id: 3, name: 'ccc坐垫', quantity: 8 },
      { id: 4, name: 'ddd香水', quantity: 24 },
      { id: 5, name: 'eee轮胎', quantity: 5 },
      { id: 6, name: 'fff汽油1L', quantity: 7 },
      { id: 7, name: 'ggg清洗液', quantity: 29 },
      { id: 8, name: 'hhh香水', quantity: 54 },
      { id: 9, name: 'iii香水', quantity: 24 },
      { id: 10, name: 'jjj坐垫', quantity: 546 },
      { id: 11, name: 'jjj坐垫', quantity: 546 },
      { id: 12, name: 'jjj坐垫', quantity: 546 },
      { id: 13, name: 'jjj坐垫', quantity: 546 },
      { id: 14, name: 'jjj坐垫', quantity: 546 }
    ];
    let store = [
     {
        id :    '11',
        storeLocation :  '深圳市',
        code :       '518000',
        time :       '2016年7月',
        storeTel :        '13444322121',
        licenseNum :       '12345678',
        headPeople :  {
          name    :       'www',
          tel      :      '11111',
          email    :       '1344fsdf@qq.com',
          location :       'ddd'
        }
     },{
        id :    '12',
        storeLocation :  '广州市',
        code :       '518000',
        time :       '2016年7月',
        storeTel :        '13444322121',
        licenseNum :       '12345678',
        headPeople :  {
          name    :       'www',
          tel      :      '11111',
          email    :       '1344fsdf@qq.com',
          location :       'ddd'
        }
     },{
        id :    '13',
        storeLocation :  '深圳市1',
        code :       '518000',
        time :       '2016年7月',
        storeTel :        '13444322121',
        licenseNum :       '12345678',
        headPeople :  {
          name    :       'www',
          tel      :      '11111',
          email    :       '1344fsdf@qq.com',
          location :       'ddd'
        }
     }
    ];
    return {goods,store};
  }
}