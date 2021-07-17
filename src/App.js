import {Component} from "react";
import Card from "./components/Card/Card";
import CardDeck from "./CardDeck";

class App extends Component {
    constructor(props) {
        super(props);
        this.cardDeck = new CardDeck();
    }

    state = {
        cards: [],
    };

    getCards = () => {
        const cards = this.cardDeck.getCards(5);
        this.setState({cards: cards});
    }

    getNewCardDeck() {
        this.cardDeck = new CardDeck();
    }

    startNewGame = () => {
        this.getNewCardDeck();
        this.getCards();
    }

    render() {
        return (
            <div className="App">
                <div>
                    <button onClick={this.getCards}>Get 5 cards</button>
                    <button onClick={this.startNewGame}>Get new card deck</button>
                </div>
                <div className="playingCards">
                    {this.state.cards.map(card => {
                        return <Card suit={card.suit} rank={card.rank} key={`${card.suit}-${card.rank}`}/>
                    })}
                </div>
            </div>
        );
    }
}

export default App;
