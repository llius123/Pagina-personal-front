import { NgModule } from "@angular/core";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzIconModule, NzIconService } from "ng-zorro-antd/icon";
import { IconDefinition } from "@ant-design/icons-angular";
import { NzModalModule } from "ng-zorro-antd/modal";

import {
  CiCircleFill,
  BorderLeftOutline,
  DeleteOutline,
  PlusCircleOutline,
} from "@ant-design/icons-angular/icons";
const icons: IconDefinition[] = [
  CiCircleFill,
  BorderLeftOutline,
  DeleteOutline,
  PlusCircleOutline,
];

const checkCircle =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"/></svg>';
const circle =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"/></svg>';

@NgModule({
  declarations: [],
  imports: [
    NzInputModule,
    NzButtonModule,
    NzGridModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule.forRoot(icons),
    NzModalModule,
  ],
  exports: [
    NzInputModule,
    NzButtonModule,
    NzGridModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    NzModalModule,
  ],
})
export class NgZorroModule {
  constructor(private iconService: NzIconService) {
    this.iconService.addIconLiteral("customIcon:circle", circle);
    this.iconService.addIconLiteral("customIcon:checkCircle", checkCircle);
  }
}
