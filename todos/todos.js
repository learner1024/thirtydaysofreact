const Todos = React.createClass({
    createTodoCallback: function(todo){
        this.setState({
            todos: [...this.state.todos, todo]
        })
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
                <TodosList todos={this.state.todos}/>
            </div>
        )
    }
})