import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { ModalComponent }      from './modal/modal.component';
import { SearchComponent }     from './search/search.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [SearchComponent, ModalComponent ],
    exports: [ CommonModule, FormsModule, SearchComponent, ModalComponent ]
})

export class SharedModule { }