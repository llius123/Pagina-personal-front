import { NgModule } from "@angular/core";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";

@NgModule({
  declarations: [],
  imports: [NzInputModule, NzButtonModule],
  exports: [NzInputModule, NzButtonModule],
})
export class NgZorroModule {}
