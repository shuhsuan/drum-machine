function App(){
    const [text, setText] = React.useState("")
    handleClick=() => {
        console.log("it worked?!");
    }
    return(
        <div id="drum-machine" className="text-center">
            <div id="display" classsName="text-center">
                <h1 classsName="text-center">Testing this out</h1>
            </div>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"))