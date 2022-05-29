import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoPageComponent } from "./crypto-page/crypto-page.component";

const routes: Routes = [
  { path: '', component: CryptoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
