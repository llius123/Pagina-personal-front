import { InicioComponent } from "./inicio.component";
import { NgModule } from "@angular/core";
import { NgZorroModule } from "../global/NgZorro.module";

@NgModule({
  declarations: [InicioComponent],
  imports: [NgZorroModule],
  providers: [],
  bootstrap: [],
})
export class InicioModule {}
