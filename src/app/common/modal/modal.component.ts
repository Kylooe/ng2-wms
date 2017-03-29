import { Component, OnInit, Input, Output, EventEmitter,
         ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'modal',
  host: {
    '[class.show]': 'isOpened'
  },
  template: `
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" aria-label="Close" (click)="close()"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">题头</h4>
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
      width: 600px;
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