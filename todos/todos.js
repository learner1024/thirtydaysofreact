const Todos = React.createClass({
    addTodo: function(todo){
        this.setState({
            todos: [...this.state.todos, {
                todo, status: 'todo'
            }]
        })
    },
    renameTodo: function(i, udpatedText){
        var todo= this.state.todos[i];
        todo.todo = udpatedText;
        this.setState({
            todos: this.state.todos
        });
    },
    removeTodo: function(i){
        this.state.todos.splice(i, 1);
        this.setState({
            todos: this.state.todos
        });
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
                <CreateTodo onCreateTodo={this.addTodo} />
                <TodosList todos={this.state.todos} onRemoveTodo={this.removeTodo} onRenameTodo={this.renameTodo} onTodoStatusToggle={this.toggleTodoStatus}/>
            </div>
        )
    }
})