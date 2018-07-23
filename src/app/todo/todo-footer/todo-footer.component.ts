import { BorrarCompletedTodosAction } from './../todo.actions';
import { Todo } from './../model/todo.model'
import { AppState } from './../../app.reducers'
import { Store } from '@ngrx/store'
import * as fromFiltrosActions from './../../filter/filter.actions';
import { Component, OnInit } from '@angular/core'
import * as fromTodoAtions from '../todo.actions'

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtros: fromFiltrosActions.filtrosValidos[] = ['Todos', 'Completados', 'Pendientes']
  filtroActual: fromFiltrosActions.filtrosValidos
  pendientes: number;
  completados: number;


  constructor( private store:Store<AppState> ) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.contarPendientes( state.todos )
      this.contarCompletos( state.todos )
      this.filtroActual = state.filtro
    })

  }

  cambiarFiltro( filtro:fromFiltrosActions.filtrosValidos  ) {
    const action = new fromFiltrosActions.SetFilterAction(filtro);
    this.store.dispatch(action)
  }

  contarPendientes( todos:Todo[] ){
    this.pendientes = todos.filter(todo => !todo.completado ).length
  }

  contarCompletos (todos:Todo[] ){
    this.completados = todos.filter(todo => todo.completado ).length
    
  }

  borrarTodosCompletos(){
    const action = new fromTodoAtions.BorrarCompletedTodosAction()
    this.store.dispatch(action)
  }

}
