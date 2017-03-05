const CreateTodo = React.createClass({
    displayName: "CreateTodo",
    createTodo: function(){
        const todoText = this.refs.todoText.value.trim();
        if(todoText !== "")
        {
            this.props.onCreateTodo(todoText);
        }        
        this.refs.todoText.value = "";
    },
    render: function(){
        console.log("being rendered: create-todos.js")
        return (
            <div className="create-todo">
                <input type="text" ref="todoText" />
                <button onClick={this.createTodo}>Create Todo</button>
            </div>
        )
    }
})