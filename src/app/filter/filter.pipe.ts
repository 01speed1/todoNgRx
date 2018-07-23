import { Todo } from './../todo/model/todo.model';
import { filtrosValidos } from './filter.actions';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[] , filtro: filtrosValidos): Todo[] {
    
    switch (filtro) {
      case 'Completados':
        return todos.filter(todo => todo.completado )
        
      case 'Pendientes':
        return todos.filter(todo => !todo.completado )
        
    
      default: return todos;
        
    }
   

  }

}
