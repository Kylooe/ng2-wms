import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let goods = [
      { id: 1, code: 1234567890, name: 'aaa轮胎', quantity: 19, price: 120 },
      { id: 2, code: 1234567890, name: 'bbb香水', quantity: 29, price: 30 },
      { id: 3, code: 1234567890, name: 'ccc坐垫', quantity: 8, price: 8 },
      { id: 4, code: 1234567890, name: 'ddd香水', quantity: 24, price: 20 },
      { id: 5, code: 1234567890, name: 'eee轮胎', quantity: 5, price: 95 },
      { id: 6, code: 1234567890, name: 'fff汽油1L', quantity: 7, price: 150 },
      { id: 7, code: 1234567890, name: 'ggg清洗液', quantity: 29, price: 25 },
      { id: 8, code: 1234567890, name: 'hhh香水', quantity: 54, price: 40 },
      { id: 9, code: 1234567890, name: 'iii香水', quantity: 24, price: 30 },
      { id: 10, code: 1234567890, name: 'jjj坐垫', quantity: 546, price: 20 },
      { id: 11, code: 1234567890, name: 'jjj坐垫', quantity: 546, price: 20 },
      { id: 12, code: 1234567890, name: 'jjj坐垫', quantity: 546, price: 20 },
      { id: 13, code: 1234567890, name: 'jjj坐垫', quantity: 546, price: 20 },
      { id: 14, code: 1234567890, name: 'jjj坐垫', quantity: 546, price: 20 }
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

    let records = [
      {
        id: 1,
        time: '2017-03-30',
        store: 11,
        charge: '某某某',
        code: 201703181536,
        list: [
          { id: 4, code: 1234567890, name: 'ddd香水', quantity: 24, price: 5, total: 120 },
          { id: 5, code: 1234567890, name: 'eee轮胎', quantity: 5, price: 10, total: 50 }
        ],
        total: 170
      }
    ];

    let members = [
      { id: 1, name: '某某某', plateNum: '粤B CCC66', phoneNum: '13212345678' },
      { id: 2, name: '某某某', plateNum: '粤B 66666', phoneNum: '13287654321' },
      { id: 3, name: '陈某某', plateNum: '粤B CCC66', phoneNum: '13212345678' },
      { id: 4, name: '沈某某', plateNum: '粤B 77777', phoneNum: '13287654321' },
      { id: 5, name: '林某某', plateNum: '粤B BBB66', phoneNum: '13212345678' },
      { id: 6, name: '王某某', plateNum: '粤B 22666', phoneNum: '13287654321' }
    ];

    return { goods, store, members, records };
  }
}