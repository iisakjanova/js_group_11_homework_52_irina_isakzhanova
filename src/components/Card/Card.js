import "./cards.css";

const Card = props => {
    const rank = props.rank.toLowerCase();
    let symbol;
    let suit;

    switch (props.suit) {
        case "D":
            suit = "diams";
            symbol = "♦";
            break;
        case "H":
            suit = "hearts";
            symbol = "♥";
            break;
        case "S":
            suit = "spades";
            symbol = "♠";
            break;
        case "C":
            suit = "clubs";
            symbol = "♣";
            break;
        default:
            suit = "clubs";
            symbol = "♣";
            break;
    }

    return (
        <div className={`card rank-${rank} ${suit}`}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{symbol}</span>
        </div>
    );
};

export default Card;
