const App = React.createClass({
    displayName: "TodoApp",    
    render: function(){
        console.log("being rendered: app.js")
        return (
            <Todos  />
        )
    }
})