import { filtrosValidos } from './../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducers';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  todos:Todo[] = []
  filtro: filtrosValidos;

  constructor(private sotre:Store<AppState>) { }
 
  ngOnInit() {
    this.sotre.subscribe(state => {
      this.todos = state.todos;
      this.filtro = state.filtro
      
    })
  }

}
