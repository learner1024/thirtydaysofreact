class DigitalClock extends React.Component{
    constructor(props){
        super(props);

        //initial state
        
        this.state = this.getStateObj();

        setInterval(this.updateState.bind(this), 1000);
    }

    updateState(){
        this.setState(this.getStateObj());
    }

    getStateObj(){
        const now = new Date();
        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds()
        }
    }

    render(){
        const {hours, minutes, seconds} = this.state;
        return (
            <div className="digital-clock">{hours} : {minutes} : {seconds}</div>
        );
    }
}