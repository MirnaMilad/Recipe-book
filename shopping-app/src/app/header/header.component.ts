import { Component, OnDestroy, OnInit} from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions'

import { DataStorageService } from "../shared/data-storage.service";
import { map } from "rxjs/operators";
@Component({
    selector : 'app-header',
    templateUrl : './header.component.html'
})

export class HeaderComponent implements OnInit , OnDestroy {
    private userSub :Subscription ;
    isAuthenticated = false;
    collapsed = true;
    loadedPosts=[];

    constructor(private dataStorageService : DataStorageService ,
         private authService : AuthService ,
         private store : Store<fromApp.AppState>){}
    ngOnInit(): void {
       this.userSub =
        // this.authService.user.subscribe(user=>{
            this.store.select('auth').pipe(map(authState => authState.user)).subscribe(user=> {
           this.isAuthenticated = !user? false:true ;
       })
    }

    onSaveData(){
        this.dataStorageService.storageRecipe();
    }
    
    onFetchData(){
        this.dataStorageService.onFetchRecipes().subscribe();
    }
    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
    onLogout(){
        this.store.dispatch(new AuthActions.Logout())
    }
}