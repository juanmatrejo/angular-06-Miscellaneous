import { Routes } from "@angular/router";
import { DetailUserComponent } from "./detail-user.component";
import { EditUserComponent } from "./edit-user.component";
import { NewUserComponent } from "./new-user.component";

export const USUARIO_ROUTES: Routes = [
    { path: 'new/:code', component: NewUserComponent },
    { path: 'edit/:code', component: EditUserComponent },
    { path: 'detail/:code', component: DetailUserComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'new' }
]

