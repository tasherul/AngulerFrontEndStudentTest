import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { DeleteCourseComponent } from './courses/delete-course/delete-course.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { ListCourseComponent } from './courses/list-course/list-course.component';
import { ViewCourseComponent } from './courses/view-course/view-course.component';
import { SignInComponent } from './user-auth/sign-in/sign-in.component';
import { SignUpComponent } from './user-auth/sign-up/sign-up.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';

const routes: Routes = [

   {path:'sign-in',component:SignInComponent},
   {path:'sign-up',component:SignUpComponent},
  
{
  path:'users',
  children:[
    {path:'create',component:AddUserComponent},
    {path:'list',component:ListUserComponent},
    {path:'delete/:id',component:DeleteUserComponent},
    {path:'edit/:id',component:EditUserComponent},
    {path:'view/:id',component:ViewUserComponent},
  ]
},

{
  path:'courses',
  children:[
    {path:'create',component:AddCourseComponent},
    {path:'list',component:ListCourseComponent},
    {path:'delete/:id',component:DeleteCourseComponent},
    {path:'edit/:id',component:EditCourseComponent},
    {path:'view/:id',component:ViewCourseComponent},
  ]
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
