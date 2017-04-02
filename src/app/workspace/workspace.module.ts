import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { FormsModule }           from '@angular/forms';

import { WorkspaceRoutingModule } from './workspace.routes';

import { WorkspaceComponent }     from './workspace.component';
import { SidebarComponent }       from '../sidebar/sidebar.component';
import { DashboardComponent }     from '../dashboard/dashboard.component';

@NgModule({
  imports:         [ CommonModule, FormsModule, WorkspaceRoutingModule ],
  declarations:    [ WorkspaceComponent, SidebarComponent, DashboardComponent ],
  entryComponents: [ SidebarComponent ],
})
export class WorkspaceModule { }