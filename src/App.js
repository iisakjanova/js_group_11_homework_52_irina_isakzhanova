import {Component} from "react";
import Card from "./components/Card/Card";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="playingCards">
                    <Card suit="D" rank="5"/>
                </div>
            </div>
        );
    }
}

export default App;
