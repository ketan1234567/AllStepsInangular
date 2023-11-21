import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  //{path:'',redirectTo:'home',pathMatch:"full"},
  {path:'',component:DashBoardComponent},
  {path:"home",component:DashBoardComponent},
  {path:"about/:id",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:'**', component:PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
