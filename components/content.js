class Content extends React.Component{
    render(){
        const {activity} = this.props;
        return (
            <div className="content">
                <div className="line"></div>

                <div className="item">
                    <div className="avatar">
                        <img src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
                        Doug
                    </div>
                    <span className="time">
                        {activity.timestamp}
                    </span>
                    <p>{activity.text}</p>
                </div>
                {/*<div className="item">
                    <div className="avatar">
                        <img src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
                    </div>
                    <span className="time">10 am</span>
                    <p>Read Day two article</p>
                </div>
                <div className="item">
                    <div className="avatar">
                        <img src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
                    </div>
                    <span className="time">10 am</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.</p>
                </div>
                <div className="item">
                    <div className="avatar">
                        <img src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
                    </div>
                    <span className="time">2:21 pm</span>
                    <p>Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.</p>
                </div>*/}
            </div>
        );
    }
}