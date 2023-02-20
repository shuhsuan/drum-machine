function App(){
    return(
        <div id="drum-machine" className="text-center">
            <div id="display">
            <Heater1 className="drum-pad" id="Heater1">Q</Heater1>
            <Heater2 className="drum-pad" id="Heater2">W</Heater2>
            <Heater3 className="drum-pad" id="Heater3">E</Heater3>
            <Heater4 className="drum-pad" id="Heater4">A</Heater4>
            <Clap className="drum-pad" id="Clap">S</Clap>
            <Openhh className="drum-pad" id="Openhh">D</Openhh>
            <Kickhat className="drum-pad" id="Kickhat">Z</Kickhat>
            <Kick className="drum-pad" id="Kick">X</Kick>
            <Closedhh className="drum-pad" id="Closedhh">C</Closedhh>
            </div>
         </div>
    )
}

function Heater1({handleChange}) {
    let heater1 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
    return(
        <button className ="clip" id="Q" onClick={()=> heater1.play()}>Q</button>
    )
}
function Heater2() {
    let heater2 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")
    return(
        <button className ="clip" id="W" onClick={()=> heater2.play()}>W</button>
    )
}
function Heater3() {
    let heater3 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")
    return(
        <button className ="clip" id="E" onClick={()=> heater3.play()}>E</button>
    )
}
function Heater4() {
    let heater4 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")
    return(
        <button className ="clip" id="A" onClick={()=> heater4.play()}>A</button>
    )
}
function Clap() {
    let clap = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")
    return(
        <button className ="clip" id="S" onClick={()=> clap.play()}>S</button>
    )
}
function Openhh() {
    let openhh = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
    return(
        <button className ="clip" id="D" onClick={()=> openhh.play()}>D</button>
    )
}
function Kickhat() {
    let kickhat = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")
    return(
        <button className ="clip" id="Z" onClick={()=> kickhat.play()}>Z</button>
    )
}
function Kick() {
    let kick = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")
    return(
        <button className ="clip" id="X" onClick={()=> kick.play()}>X</button>
    )
}
function Closedhh() {
    let closedhh = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
    return(
        <button className ="clip" id="C" onClick={()=> closedhh.play()}>C</button>
    )
}


ReactDOM.render(<App/>, document.getElementById("root"))