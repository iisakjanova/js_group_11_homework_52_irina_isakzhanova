import {Component} from "react";
import Card from "./components/Card/Card";
import CardDeck from "./CardDeck";

class App extends Component {
    constructor(props) {
        super(props);
        this.cardDesk = new CardDeck();
    }

    state = {
        cards: [],
    };

    getCards = () => {
        const cards = this.cardDesk.getCards(5);
        this.setState({cards: cards});
    }

    render() {
        return (
            <div className="App">
                <div>
                    <button onClick={this.getCards}>Get 5 cards</button>
                </div>
                <div className="playingCards">
                    {this.state.cards.map(card => {
                        return <Card suit={card.suit} rank={card.rank} key={card.key}/>
                    })}
                </div>
            </div>
        );
    }
}

export default App;
