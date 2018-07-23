import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '../../node_modules/@ngrx/store';
//reduciers 
import * as fromTodoReducer from './todo/todo.reducer'
import * as fromFilterReducer from './filter/filter.reducer'

import { filtrosValidos } from './filter/filter.actions'


export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos; 
}

export const AppReducers: ActionReducerMap<AppState> = {
    todos: fromTodoReducer.todoReducer,
    filtro: fromFilterReducer.filterReducer
}