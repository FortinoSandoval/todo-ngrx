import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Something important pending to do')
];

const _todoReducer = createReducer(
  initialState,
  on(actions.deleteAll, state => state.filter(todo => !todo.completed)),
  on(actions.create, (state, { text }) => [...state, new Todo(text)]),
  on(actions.toggle, (state, { id }) => state.map(todo => id === todo.id ? { ...todo, completed: !todo.completed } : todo)),
  on(actions.edit, (state, { text, id }) => state.map(todo => id === todo.id ? { ...todo, text } : todo)),
  on(actions.deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(actions.toggleAll, (state, { completed }) => state.map(todo => ({
    ...todo,
    completed
  })
  ))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}