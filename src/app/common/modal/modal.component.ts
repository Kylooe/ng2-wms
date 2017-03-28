import { Component, OnInit, Input, Output, EventEmitter,
         ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'modal',
  host: {
    '[class.show]': 'isOpened'
  },
  template: `
    <div class="modal">
      <div class="modal-header">
        <span class="modal-title">题头</span>
        <button type="button" class="close" aria-label="Close" (click)="close()">x</button>
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
    }

    .modal {
      margin: 100px auto;
      width: 600px;
      background-color: #fff;
      border-radius: 5px;
    }

    .modal-header {
      padding: 0 15px;
      line-height: 50px;
      border-bottom: 1px solid #e5e6e7;
    }

    .close {
      float: right;
      font-size: 1.5em;
      line-height: 50px;
      font-family: sans-serif;
      color: #555;
      background: transparent;
      border: none;
      cursor: pointer;
    }
  `]
})

export class ModalComponent {
  @ViewChild('content', { read: ViewContainerRef }) content:ViewContainerRef;
  isOpened:boolean = false;
  @Output() reload = new EventEmitter<boolean>();

  constructor(private resolver:ComponentFactoryResolver) {}

  componentRef:any;
  open(component:any, options:any):void {
    this.isOpened = true;
    let factory = this.resolver.resolveComponentFactory(component);
    this.componentRef = this.content.createComponent(factory);
    this.componentRef.instance.options = options;
  }

  close() {
    this.isOpened = false;
    this.content.remove();
    if(this.componentRef.instance.reload) this.reload.emit(true);
  }
}