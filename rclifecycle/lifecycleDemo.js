class LifeCycleDemo extends React.Component{
    //mounting
    constructor(props){
        super(props);

        //default props

        //default state

        console.log("constructor");
    }
    componentWillMount(){
        console.log("component will mount");
    }
    render(){
        console.log("render");
        return (
            <p>lifecycle demo</p>
        );
    }
    componentDidMount(){       
        console.log("component did mount");
    }

    //updating props 1
    componentWillReceiveProps(nextProps){
        //component has about to receive new props
        console.log("component will receive props");
    }

    //updating props 2, updating state 1
    shouldComponentUpdate(nextProps, nextState){
        console.log("should component update");
        return true;
    }

    //updating props 3, updating state 2
    componentWillUpdate(){
        console.log("component will update");
    }

    //updating props 4,updating state 3
    componentDidUpdate(){
        console.log("component did update");
    }

    //unrendering
    componentWillUnmount(){
        console.log("component will unmount");
    }

    
}
