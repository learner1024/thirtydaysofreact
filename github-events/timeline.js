class Timeline extends React.Component{
    componentWillMount(){
        this.setState({evnts: data});
    }
    render(){
        return (
            <div className="events">
                {this.state.evnts.map((e) => {
                    return <Evnt key={e.id} evnt={e} />
                })}
            </div>
        );        
    }
}