const App = React.createClass({
    displayName: "CalculatorApp",    
    render: function(){
        console.log("being rendered: app.js")
        return (
            <Calculator  />
        )
    }
})