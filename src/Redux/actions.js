import { add_todo, filtered_Todos, mark_all_completed, mark_completed, mark_Incompleted, remove_todo, searched_todos, toggle_todo } from "./actionTypes"

export const addTodo = (text) =>({
    type: add_todo,
    payload: {text},
    
});

export const toggleTodo = (id) => ({
    type: toggle_todo,
    payload: {id},
});

export const removeTodo = (id) => ({
    type: remove_todo,
    payload: {id},
});

export const markCompleted = (id) => ({
    type: mark_completed,
    payload: {id},
});

export const markInCompleted = (id) => ({
    type: mark_Incompleted,
    payload: {id},
});

export const FilteredTodos = (filter) =>({
    type: filtered_Todos,
    payload: {filter},
});

export const markAllCompleted = () =>({
    type: mark_all_completed,
});

export const searchedTodos = (searchedText) =>({
    type: searched_todos,
    payload: {searchedText},
});