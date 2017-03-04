var TodosList = React.createClass({
    displayName: "TodosList",
    todoItemClick: function(t){
        this.props.onTodoClick(t)
    },
    renderTodoItem: function(t, i){
        return (<li onClick={this.todoItemClick.bind(this, i)} key={i}>{t.status} - {t.todo}</li>)
    },
    render: function(){
        return (
            <ul>{this.props.todos.map(this.renderTodoItem)}</ul>
        )
    }
})