import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvlPageModule } from '@app/elements/layout/page-convl';

import { FlexLayoutModule, MaterialDesignModule } from '@iote/bricks-angular';
import { MultiLangModule } from '@ngfi/multi-lang';

import { ModulesDashboardComponent } from './pages/modules-dashboard/modules-dashboard.component';
import { ModulesListHeaderComponent } from './components/modules-list-header/modules-list-header.component';
import { ModulesListAllCoursesComponent } from './components/modules-list-all-courses/modules-list-all-courses.component';

import { ConvsMgrModulesRouterModule } from './modules.routing';

@NgModule({
  imports: [
    CommonModule,
    ConvlPageModule,
    FlexLayoutModule,
    MaterialDesignModule,
    MultiLangModule,
    ConvsMgrModulesRouterModule,
  ],
  declarations: [
    ModulesDashboardComponent,
    ModulesListHeaderComponent,
    ModulesListAllCoursesComponent,
  ],
})
export class ConvsMgrModulesModule {}
