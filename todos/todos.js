const Todos = React.createClass({
    createTodoCallback: function(todo){
        this.setState({
            todos: [...this.state.todos, {
                todo, status: 'todo'
            }]
        })
    },
    toggleTodoStatus: function(i){
        var todo = this.state.todos[i];
        if(todo.status === 'todo'){
            todo.status = 'done';
        }
        else{
            todo.status = 'todo';
        }
        this.setState({
            todos: this.state.todos
        });
    },
    getInitialState: function(){
        return {
            todos: []
        }
    },    
    render: function(){
        return (
            <div className="todos">
                <CreateTodo onCreateTodo={this.createTodoCallback} />
                <TodosList todos={this.state.todos} onTodoClick={this.toggleTodoStatus}/>
            </div>
        )
    }
})