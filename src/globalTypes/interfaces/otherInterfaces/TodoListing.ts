export interface TODOLISTING {
    todos: string[],
    deleteTodo: (todoIndex: number) => void,
}