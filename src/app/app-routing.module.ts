import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './core/contact/contact.component';
import { MainComponent } from './core/main/main.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
