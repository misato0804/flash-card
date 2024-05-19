import DeckComponent from '@/components/page/user/decks/deck';

const Deck = ({ params }: { params: { deck: string } }) => {
    return (
        <DeckComponent deck_id={ params.deck } />
    );
};

export default Deck;