var TodosList = React.createClass({
    displayName: "TodosList",
    renderTodoItem: function(t, i){
        return (
            <li key={i}>
                <TodoListItem onRemoveTodo2={this.props.onRemoveTodo} onRenameTodo2={this.props.onRenameTodo} onTodoStatusToggle2={this.props.onTodoStatusToggle} index={i} todo={t} />
            </li>
        )
    },
    render: function(){
        return (   

            <ul>{this.props.todos.map(this.renderTodoItem)}</ul>
        )
    }
})