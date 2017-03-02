class Evnt extends React.Component{
    render(){
        const {evnt} = this.props;
        return (
            <div className="evnt">
                <div className="avatar">
                    <img width="100" height="100" src={evnt.actor.avatar_url} />
                </div>
                <span className="time">
                    {evnt.created_at}
                </span>
                <p>{evnt.type}</p>
            </div>
        )
    }
}