import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './application/contact/contact.component';
import { CrudComponent } from './application/crud/crud.component';
import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { ErrorComponent } from './application/error/error.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { FunComponent } from './application/fun/fun.component';
import { HomeComponent } from './application/home/home.component';
import { TutorielleComponent } from './application/tutorielle/tutorielle.component';

const routes: Routes = [
  {path:'crud', component: CrudComponent},
  {path:'form', component: FormulaireComponent},
  {path:'read/:Param', component: ReadComponent},
  {path:'update/:Param', component: UpdateComponent},
  {path:'fun', component: FunComponent},
  {path:'contact', component: ContactComponent},
  {path:'tutorial',
  children:[
    {path:':id', component: TutorielleComponent}
  ]},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
