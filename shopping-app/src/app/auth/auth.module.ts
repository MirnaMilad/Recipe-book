import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule} from "@angular/router";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from "./auth.component";

@NgModule({
    declarations:[AuthComponent],
    imports:[
        RouterModule.forChild([
        {path:'', component : AuthComponent},
        {path:'**', redirectTo:'/not-found'},
        {path:'not-found' , component:PageNotFoundComponent}]),
        CommonModule ,
        FormsModule ,
        SharedModule
    ]
    
})
export class AuthModule{}