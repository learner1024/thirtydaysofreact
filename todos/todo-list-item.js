var TodoListItem = React.createClass({
    displayName: "TodoListItem",
    getInitialState: function(){
        return {
            editMode: false
        }
    },
    toggleStatus: function(){
        this.props.onTodoStatusToggle2(this.props.index);
    },
    onEditClick: function(){
        this.setState({
            editMode: true
        })
    },
    onCancelClick: function(){
        this.setState({
            editMode: false
        })
    },
    onRemoveClick: function(){
        this.props.onRemoveTodo2(this.props.index);
    },
    onSaveClick: function(){
        this.setState({
            editMode: false
        })
        this.props.onRenameTodo2(this.props.index, this.refs.changedTodoVal.value);
    },
    render: function(){
        if(this.state.editMode === true){
            return (
                <div>
                    <input type="text" defaultValue={this.props.todo.todo} ref="changedTodoVal"></input>
                    <i onClick={this.onSaveClick} className="fa fa-save"></i>
                    <i onClick={this.onCancelClick} className="fa fa-undo"></i>
                </div>
            )
        }
        else {
            return (           
                <div>
                    <span className={this.props.todo.status} onClick={this.toggleStatus}>{this.props.todo.todo}</span>
                    <i onClick={this.onEditClick} className="fa fa-edit"></i>
                    <i onClick={this.onRemoveClick} className="fa fa-times"></i>
                </div>            
            )
        }
    }
})

