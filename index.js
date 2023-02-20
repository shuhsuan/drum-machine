function App(){
    function playH1(){
        const audio = document.getElementById("Q");
        audio.play();
        document.getElementById("display").innerHTML = "Heater 1"
    }
    function playH2(){
        const audio = document.getElementById("W");
        audio.play();
        document.getElementById("display").innerHTML = "Heater 2"
    }
    function playH3(){
        const audio = document.getElementById("E");
        audio.play();
        document.getElementById("display").innerHTML = "Heater 3"
    }
    function playH4(){
        const audio = document.getElementById("A");
        audio.play();
        document.getElementById("display").innerHTML = "Heater 4"
    }
    function playClap(){
        const audio = document.getElementById("S");
        audio.play();
        document.getElementById("display").innerHTML = "Clap"
    }
    function playOpenhh(){
        const audio = document.getElementById("D");
        audio.play();
        document.getElementById("display").innerHTML = "Open-HH"
    }
    function playKicknhat(){
        const audio = document.getElementById("Z");
        audio.play();
        document.getElementById("display").innerHTML = "Kick-n'-Hat"
    }
    function playKick(){
        const audio = document.getElementById("X");
        audio.play();
        document.getElementById("display").innerHTML = "Kick"
    }
    function playClosedhh(){
        const audio = document.getElementById("C");
        audio.play();
        document.getElementById("display").innerHTML = "Closed-HH"
    }

    const handleKeyPress = (e) => {
        switch(e.keyCode){
        case 81: playH1();
        break;
        case 87: playH2();
        break;
        case 69: playH3();
        break;
        case 65: playH4();
        break;
        case 83: playClap();
        break;
        case 68: playOpenhh();
        break;
        case 90: playKicknhat();
        break;
        case 88: playKick();
        break;
        case 67: playClosedhh();
        break;
        }
    };

    React.useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);
    
    return(
        <div id="drum-machine">
            <text id="display"></text>
            <div onClick={playH1} id="heater1" className="drum-pad btn btn-secondary p-4 m-3">
            <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3">This browser does not support the audio element</audio>
            {"Q"}
            </div>

            <div onClick={playH2} id="heater2" className="drum-pad btn btn-secondary p-4 m-3">
            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3">This browser does not support the audio element</audio>
            {"W"}
            </div>

            <div onClick={playH3} id="heater3" className="drum-pad btn btn-secondary p-4 m-3">
            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3">This browser does not support the audio element</audio>
            {"E"}
            </div>

            <div onClick={playH4} id="heater4" className="drum-pad btn btn-secondary p-4 m-3">
            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3">This browser does not support the audio element</audio>
            {"A"}
            </div>

            <div onClick={playClap} id="clap" className="drum-pad btn btn-secondary p-4 m-3">
            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3">This browser does not support the audio element</audio>
            {"S"}
            </div>

            <div onClick={playOpenhh} id="openhh" className="drum-pad btn btn-secondary p-4 m-3">
            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3">This browser does not support the audio element</audio>
            {"D"}
            </div>

            <div onClick={playKicknhat} id="kicknhat" className="drum-pad btn btn-secondary p-4 m-3">
            <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3">This browser does not support the audio element</audio>
            {"Z"}
            </div>

            <div onClick={playKick} id="kick" className="drum-pad btn btn-secondary p-4 m-3">
            <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3">This browser does not support the audio element</audio>
            {"X"}
            </div>

            <div onClick={playClosedhh} id="closedhh" className="drum-pad btn btn-secondary p-4 m-3">
            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3">This browser does not support the audio element</audio>
            {"C"}
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))