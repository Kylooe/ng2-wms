import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <form>
      <label for="staff">采购人员</label>
      <input type="text" id="staff" name="staff" require>
      <label for="supplier">供应商</label>
      <select id="supplier" name="supplier" required>
        <option *ngFor="let s of suppliers" [value]="s">{{s}}</option>
      </select>
      <label for="number">单据编号</label>
      <input type="text" id="number" name="number" require>
      <label for="time">采购时间</label>
      <input type="text" id="time" name="time" require>
      <table>
        <thead>
          <td>名称</td>
          <td>数量</td>
          <td>进价</td>
          <td>合计</td>
          <td>操作</td>
        </thead>
        <tr *ngFor="let item of goods">
          <td><input #itemName (blur)="update(itemName.value)" /></td>
          <td>{{item.quantity}}</td>
          <td><button (click)="del(item)">删除</button></td>
        </tr>
      </table>
    </form>
  `,
  styles: [`
  `]
})

export class PurchaseComponent {
  suppliers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
}