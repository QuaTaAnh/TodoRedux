const initValue = {
    todoList: [], 
}

const rootReducer = (state = initValue, action) =>{
    switch (action.type) {
        //Thêm todolist
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload,
                ]
            }
        //Xóa todo
        case 'todoList/deleteTodo':
            return {
                ...state,
                todoList: state.todoList.filter(x => x.id !== action.payload)
            }
        default:
            return state;
    }
}
export default rootReducer;