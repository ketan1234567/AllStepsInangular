import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';


const routes: Routes = [
  //{path:'',redirectTo:'home',pathMatch:"full"},
  {path:'',component:DashBoardComponent},
  {path:"home",component:DashBoardComponent},
  {path:"about/:id",component:AboutComponent},
  {path:"contact",component:ContactComponent,canActivate:[authGuard]},
  {path:"login",component:LoginComponent},
  {path:"student",
  children:[
    {path:'',component:StudentComponent},
    {path:'studentDetails/:id',component:StudentDetailsComponent},
    {path:'AccountDetails',component:AccountDetailsComponent}

  ],
  
  
},
  {path:'**', component:PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
