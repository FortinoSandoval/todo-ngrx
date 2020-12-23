import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  actualFilter: actions.validFilters;
  filters: actions.validFilters[] = ['all', 'pending', 'completed'];
  pendingTodos: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(({ filter, todos }) => {
      this.actualFilter = filter;
      this.pendingTodos = todos.filter(todo => !todo.completed).length;
    });
  }

  changeFilter(filter: actions.validFilters) {
    this.store.dispatch(actions.setFilter({ filter }));
  }
}
