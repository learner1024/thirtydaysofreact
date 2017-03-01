class App extends React.Component{
    render(){
        const activity1 = {
            timestamp: new Date().getTime(),
            text: "Ate lunch",
            user: {
                id: 1,
                name: "Nate",
                avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
            },
            comments: [
                {from: "Ari", text: "Me too!"}
            ]
        }
        return (
            <div className="notificationsFrame">
                <div className="panel">
                    <Header title="timeline" />
                    <Content activity={activity1} />
                </div>
            </div>
        );
    }
}