const initialState = {
    todos: [],
    filter: 'All',
    searchedText: ''
}


const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_todo':
            return {
                todos: [...state.todos, { text: action.payload.text, completed: false }],
                filter: state.filter,
                searchedText: state.searchedText
            }
        case 'remove_todo':
            return {
                todos: state.todos.filter((todo, index) => index !== action.payload.id),
                filter: state.filter,
                searchedText: state.searchedText
            }
        case 'toggle_todo':
            return {
                todos: state.todos.map((todo, index) => index === action.payload.id ? { ...todo, completed: !todo.completed } : todo),
                filter: state.filter,
                searchedText: state.searchedText
            }
        case 'mark_completed':
            return {
                todos: state.todos.map((todo, index) =>
                    index === state.payload.id ? { ...todo, completed: true } : todo),
                filter: state.filter,
                searchedText: state.searchedText
            }
        case 'mark_Incompleted':
            return {
                todos: state.todos.map((todo, index) =>
                    index === state.payload.id ? { ...todo, completed: false } : todo),
                filter: state.filter,
                searchedText: state.searchedText
            }
        case 'mark_all_completed':
            return {
                todos: state.todos.map((todo) => ({ ...todo, completed: true })),
                filter: state.filter,
                searchedText: state.searchedText
            }
        case 'filtered_Todos':
            return{
                todos: state.todos,
                filter: action.payload.filter,
                searchedText: state.searchedText
            }
        case 'searched_todos':
            return{
                todos: state.todos,
                filter: state.filter,
                searchedText: action.payload.searchedText
            }
        default:
            return state;
    }
}

export default todoReducer;