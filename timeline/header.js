class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            searchInvisible: true
        };
    }
    render(){
        let searchInputCssClasses = ["searchInput"];

        if(this.state.searchInvisible){
            searchInputCssClasses.push("inactive");
        }

        return (
        <div className="header">
            <div className="menuIcon">
                <div className="dashTop"></div>
                <div className="dashBottom"></div>
                <div className="circle"></div>
            </div>
            <span className="title">{this.props.title}</span>
            <input
                type="text"
                className={searchInputCssClasses.join(" ")}
                placeholder="Search ..." />
            <div onClick={this.toggleSearch.bind(this)} className="fa fa-search searchIcon"></div>
        </div>
        );
    }

    toggleSearch(){
        this.setState({
            searchInvisible: !this.state.searchInvisible
        });
    }
}