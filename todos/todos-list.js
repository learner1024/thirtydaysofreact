var TodosList = React.createClass({
    displayName: "TodosList",
    render: function(){
        return (
            <ul>
                {this.props.todos.map(function(t){
                    return <li> {t} </li>
                })}
            </ul>
        )
    }
})