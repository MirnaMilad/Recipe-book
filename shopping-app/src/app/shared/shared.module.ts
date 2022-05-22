import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinner } from "./loading-spinner/Loading-spinner.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";

@NgModule({
    declarations : [ 
        LoadingSpinner,
        AlertComponent,
        DropdownDirective,
        PlaceholderDirective],
    imports : [CommonModule],
    exports : [
        LoadingSpinner,
        AlertComponent,
        DropdownDirective,
        PlaceholderDirective,
        CommonModule
    ],
    entryComponents:[
        AlertComponent
      ]
})
export class SharedModule{
    
}