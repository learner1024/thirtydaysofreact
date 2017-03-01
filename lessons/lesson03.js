var HelloReactApp = React.createClass(
    {
        render: function(){
            return <h1>lesson03 - Hello React App</h1>
        }
    }
);

ReactDOM.render(<HelloReactApp />, document.querySelector("#helloReactApp"));