import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.model';
//import { ShoppingListService } from './shopping-list.service';
import * as shoppingListActions from './store/shopping-list.actions'
import * as fromApp from '../store/app.reducer'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy {
  ingredients : Observable<{ ingredients : Ingredient[]}> ;
    private subscription : Subscription;
  constructor(
    //private shoppingListService:ShoppingListService , 
    private loggingService : LoggingService ,
    private store : Store <fromApp.AppState>){ }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList')
    // this.ingredients = this.shoppingListService.getIngredients();
    // this.subscription = this.shoppingListService.ingredientChanged.subscribe(
    //   (ingredients : Ingredient[] ) => {this.ingredients = ingredients ;}
    // )
    this.loggingService.printlog('Hello from ShoppinglistComponent ngOnInit')
  }
ngOnDestroy(): void {
    //this.subscription.unsubscribe();
}

onEditItem(index:number){
  //this.shoppingListService.startedEditing.next(index);
  this.store.dispatch(new shoppingListActions.StartEdit(index));
}
}
