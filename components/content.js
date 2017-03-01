class Content extends React.Component{
    render(){
        const {activities} = this.props;
        return (
            <div className="content">
                <div className="line"></div>

                {activities.map(function(activity){
                    return (
                        <Activity activity={activity} />
                    )
                })}
            </div>
        );
    }
}