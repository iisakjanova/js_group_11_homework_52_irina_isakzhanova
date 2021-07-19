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

    _isFlush() {
        const result = this._checkMatches(5, "suit");

        if (result.length > 0) {
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
        if (this._isFlush()) {
            return "Flush";
        } else if (this._isTwoPairs()) {
            return "Two pairs";
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
