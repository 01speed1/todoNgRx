import * as fromTodoActions from './todo.actions';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.reducers';
import { Store } from '../../../node_modules/@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  isAllCompleted:boolean = false;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll(){
    this.isAllCompleted = !this.isAllCompleted
    const action = new fromTodoActions.ToggleAllTodoAction(this.isAllCompleted);
    this.store.dispatch(action);
  }

}
