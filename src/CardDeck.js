class CardDeck {
    constructor() {
        const suits = ["H", "D", "C", "S"];
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        this.cards = this.generateCards(suits, ranks);
    }

    generateCards(suits, ranks) {
        let cards = [];
        let key = 0;

        for (let i = 0; i < suits.length; i++) {
            const suit = suits[i];

            for (let j = 0; j < ranks.length; j++) {
                const rank = ranks[j];
                const card = {
                    suit,
                    rank,
                    key,
                };
                key++;
                cards.push(card);
            }
        }

        return cards;
    }

    getCard() {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(randomIndex, 1);
    }

    getCards(quantity) {
        let cards = [];

        if (this.cards.length >= quantity) {
            for (let i = 0; i < quantity; i++) {
                const cardArray = this.getCard();
                cards = [...cards, ...cardArray];
            }
        }

        return cards;
    }
}

export default CardDeck;
