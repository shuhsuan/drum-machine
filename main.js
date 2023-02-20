class theDrum extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="drum-machine">
                <div id="display">
                    <heater1 id="heater1" />
                    <heater2 id="heater2" />
                    <heater3 id="heater3"/>
                    <heater4 id="heater4" />
                    <clap id="clap" />
                    <openhh id="openhh" />
                    <kickhat id="kickhat" />
                    <kick id="kick" />
                    <closedhh id="closedhh" />
                </div>
            </div>
        )
    }
}

const heater1 = () => {
    return(
        <div className=""></div>
    )
}
const heater2 = () => {
    return(
        <div className=""></div>
    )
}
const heater3 = () => {
    return(
        <div className=""></div>
    )
}
const heater4 = () => {
    return(
        <div className=""></div>
    )
}
const clap = () => {
    return(
        <div className=""></div>
    )
}
const openhh = () => {
    return(
        <div className=""></div>
    )
}
const kickhat = () => {
    return(
        <div className=""></div>
    )
}
const kick = () => {
    return(
        <div className=""></div>
    )
}
const closedhh = () => {
    return(
        <div className=""></div>
    )
}

ReactDOM.render(<theDrum/>, document.getElementById("root"))