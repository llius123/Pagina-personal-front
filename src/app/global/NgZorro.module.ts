import { NgModule } from "@angular/core";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzGridModule } from "ng-zorro-antd/grid";

@NgModule({
  declarations: [],
  imports: [NzInputModule, NzButtonModule, NzGridModule],
  exports: [NzInputModule, NzButtonModule, NzGridModule],
})
export class NgZorroModule {}
