import {Component} from "react";
import Card from "./components/Card/Card";
import CardDeck from "./CardDeck";
import PokerHand from "./PokerHand";
import "./App.css";

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

    getResult() {
        const pokerHand = new PokerHand(this.state.cards);
        return pokerHand.getOutcome();
    }

    render() {
        return (
            <div className="App">
                <div className="btn-wrapper">
                    <button onClick={this.getCards}>Get 5 cards</button>
                    <button onClick={this.startNewGame}>Get new card deck</button>
                </div>
                <div className="playingCards">
                    {this.state.cards.map(card => {
                        return <Card suit={card.suit} rank={card.rank} key={`${card.suit}-${card.rank}`}/>
                    })}
                </div>
                <p className="outcome">Outcome: <b>{this.getResult(this.state.cards)}</b></p>
            </div>
        );
    }
}

export default App;
