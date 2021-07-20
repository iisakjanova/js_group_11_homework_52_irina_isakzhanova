const cardsWeights = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14
};

class PokerHand {
    constructor(cards) {
        this.cards = cards;
    }

    /**
     * @param value - number of equal cards (either by suit or by rank)
     * @param searchBy - 'suit' or 'rank'
     */
    _checkMatches(value, searchBy) {
        let cardsMatches = {};

        this.cards.forEach(card => {
            const key = card[searchBy];

            if (cardsMatches[key]) {
                cardsMatches[key]++;
            } else {
                cardsMatches[key] = 1;
            }
        });

        return Object.values(cardsMatches).filter(item => item === value);
    }

    _checkStraight() {
        if (this.cards.length > 0) {
            const cardsSorted = this.cards.sort((cardA, cardB) => {
                return cardsWeights[cardB.rank] - cardsWeights[cardA.rank];
            });

            for (let i = 0; i < cardsSorted.length - 1; i++) {
                const difference = cardsWeights[cardsSorted[i].rank] - cardsWeights[cardsSorted[i + 1].rank];

                if (difference !== 1) {
                    return false;
                }
            }
            return true;
        }
    }

    _isRoyalFlush() {
        const result = this._checkMatches(5, "suit");

        if (result.length > 0) {
            const templateArray = ["10", "J", "Q", "K", "A"];

            for (let i = 0; i < this.cards.length; i++) {
                if (templateArray.indexOf(this.cards[i].rank) === -1) {
                    return false;
                }
            }

            return true;
        }
    }

    _isStraightFlush() {
        const result = this._checkMatches(5, "suit");

        if (result.length > 0 && this._checkStraight()) {
            return true;
        }
    }

    _isFourOfAKind() {
        const result = this._checkMatches(4, "rank");

        if (result.length > 0) {
            return true;
        }
    }

    _isFullHouse() {
        if (this._isThreeOfAKind() && this._isOnePair()) {
            return true;
        }
    }

    _isFlush() {
        const result = this._checkMatches(5, "suit");

        if (result.length > 0) {
            return true;
        }
    }

    _isStraight() {
        const filteredCardRankA = this.cards.filter(item => item.rank === "A");
        const filteredCardRankTwo = this.cards.filter(item => item.rank === "2");

        if (filteredCardRankA.length > 0 && filteredCardRankTwo.length > 0) {
            cardsWeights["A"] = 1;
        }

        if (this._checkStraight()) {
            return true;
        }
    }

    _isTwoPairs() {
        const result = this._checkMatches(2, "rank");

        if (result.length === 2) {
            return true;
        }
    }

    _isOnePair() {
        const result = this._checkMatches(2, "rank");

        if (result.length > 0) {
            return true;
        }
    }

    _isThreeOfAKind() {
        const result = this._checkMatches(3, "rank");

        if (result.length > 0) {
            return true;
        }
    }

    getOutcome() {
        if (this._isRoyalFlush()) {
            return "Royal Flush";
        } else if (this._isStraightFlush()) {
            return "Straight Flush";
        } else if (this._isFourOfAKind()) {
             return "Four of a kind";
        } else if (this._isFullHouse()) {
             return "Full house";
        } else if (this._isFlush()) {
            return "Flush";
        } else if (this._isTwoPairs()) {
            return "Two pairs";
        } else if (this._isStraight()) {
            return "Straight";
        } else if (this._isThreeOfAKind()) {
            return "Three of a kind";
        } else if (this._isOnePair()) {
            return "One pair";
        } else {
            return "0 combinations";
        }
    }
}

export default PokerHand;
