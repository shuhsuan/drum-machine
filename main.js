const audioClips = [
    {
       keycode: 81,
       key: "Q",
       id:"Heater-1",
       url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
        keycode: 87,
        key: "W",
        id:"Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
        keycode: 69,
        key: "E",
        id:"Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
        keycode: 65,
        key: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
        keycode: 83,
        key: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
        keycode: 68,
        key: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
        keycode: 90,
        key: "Z",
        id: "Kick-n-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
        keycode: 88,
        key: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
        keycode: 67,
        key: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    },

    
];

function App(){
    const [volume, setVolume] = React.useState(1);
    return(
    <div id="drum-machine">
     <div id = "display" className="text-center">
        <h2>Drum Machine</h2>
        {audioClips.map((clip)=>(
            <Pad className="drum-pad" key={clip.id} clip={clip} volume={volume}/>
        ))}
        <br />
        <h3>Volume</h3>
        <input 
        type="range" 
        step="0.01"
        onChange={(e) => setVolume(e.target.value)}
        value={volume}
        max="1" 
        min="0" 
        className="w-50"
       /> 
     </div>
    </div>
  );
}

function Pad({clip, volume}){

    React.useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    const handleKeyPress = (e) => {
        if(e.keyCode === clip.keycode){
            play();
        }
    };

    const play = () => {
        const audiobit = document.getElementById(clip.key);
        audiobit.volume = volume;
        audiobit.currentTime = 0;
        audiobit.play();
    }

    return(
        <div onClick={play} className="btn btn-secondary p-4 m-3">
            <audio className="clip" id={clip.key} src={clip.url}/>
            {clip.key}
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById("root"))