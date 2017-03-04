const CreateTodo = React.createClass({
    displayName: "CreateTodo",
    createTodo: function(){
        const todoText = this.refs.todoText.value;
        this.props.onCreateTodo(todoText);
        this.refs.todoText.value = "";
    },
    render: function(){
        return (
            <div className="create-todo">
                <input type="text" ref="todoText" />
                <button onClick={this.createTodo}>Create Todo</button>
            </div>
        )
    }
})