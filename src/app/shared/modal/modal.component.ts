import { Component, OnInit, Input, Output, EventEmitter,
         ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'modal',
  host: {
    '[class.show]': 'isOpened'
  },
  template: `
    <div class="modal-content {{size}}">
      <div class="modal-header">
        <button type="button" class="close" aria-label="Close" (click)="close()"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">{{title}}</h4>
      </div>
      <div class="modal-body">
        <template #content>
            <!-- modal component will be here -->
        </template>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.5);
      z-index: 10;
      overflow: hidden;
    }

    .modal-content {
      margin: 100px auto;
    }

    .large {
      width: 600px;
    }

    .small {
      width: 400px;
    }
  `]
})

export class ModalComponent {
  @ViewChild('content', { read: ViewContainerRef }) content:ViewContainerRef;
  isOpened:boolean = false;
  title:string;  // 弹出框标题
  @Input() size:string;  // 弹出框大小
  @Output() val = new EventEmitter<any>();  // 通过弹出框传出的值

  constructor(private resolver:ComponentFactoryResolver) {}

  componentRef:any;
  open(title:string, component:any, options?:any):void {
    this.isOpened = true;
    this.title = title;
    let factory = this.resolver.resolveComponentFactory(component);
    this.componentRef = this.content.createComponent(factory);
    this.componentRef.instance.options = options;
  }

  close() {
    this.isOpened = false;
    this.content.remove();
    let value = this.componentRef.instance.value;
    if(value) this.val.emit(value);
  }
}