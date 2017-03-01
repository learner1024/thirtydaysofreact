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
        };
        const activity2 = {
            timestamp: new Date().getTime(),
            text: "Woke up early for a beautiful run",
            user: {
                id: 2, name: 'Ari',
                avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
            },
            comments: [{ from: 'Nate', text: 'I am so jealous' }]
        };
        return (
            <div className="notificationsFrame">
                <div className="panel">
                    <Header title="timeline" />
                    <Content activities={[activity1, activity2]} />
                </div>
            </div>
        );
    }
}