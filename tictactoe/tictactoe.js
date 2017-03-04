const Square = React.createClass({
    displayName: "Square",
    render(){
        return (
            <div className="col"><i className="fa fa-times"></i></div>
        );
        
    }
});
const TicTacToe = React.createClass({
    displayName: "TicTacToe",
    render: function(){
        return (
            <div className="board">
                <div className="row">
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="row">
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="row">
                    <Square />
                    <Square />
                    <Square />
                </div>
            </div>
            
        )
    }
})