import { Store } from '@ngrx/store';
import * as fromTodoActions from './../todo.actions';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Todo } from '../model/todo.model';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef

  editando: boolean;

  chkField: FormControl;
  txtInput: FormControl;

  constructor(private store:Store<AppState> ) { }

  ngOnInit() {
    this.chkField = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( 
      this.todo.texto,
      Validators.required )
    
    this.chkField.valueChanges.subscribe(()=>{
      const action = new fromTodoActions.ToggleTodoAction(this.todo.id)
      this.store.dispatch(action);
    })

  }

  editar() {
    this.editando = true;

    setTimeout( ()=>{
      this.txtInputFisico.nativeElement.select();
    },1 )
  }

  terminarEdicion() { 
    const action = new fromTodoActions.EditarTextoTodoAction(this.todo.id, this.txtInputFisico.nativeElement.value )
    if (this.txtInputFisico.nativeElement.value === '') {
      this.editando = false;
    } else {
      this.store.dispatch(action);
      this.editando = false;
    }
    

    


  }

  borrar(){{
    const action = new fromTodoActions.BorrarTodoAction(this.todo.id)
    this.store.dispatch(action)
  }}
}
