'use client'
import RegularButton from "@/components/button/regularButton";
import { useIsCreateCardModalOpen } from "@/store/isCreateCardModalOpen/useIsCreateModalOpen";
import { Deck } from "@/type/Deck";
type DeckTableProps = {
    decks: Deck[],
    loading: boolean
}

export default function DeckTable({ decks, loading }: DeckTableProps) {

    const shadow = 'shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'
    const {onOpen} = useIsCreateCardModalOpen()

    if (loading) {
        return (
            <div className={`${shadow} shadow-primary p-12 overflow-scroll `}>
                <ul className="table-title grid grid-cols-5 text-center mb-8 min-w-[480px]">
                    <li className="grow font-bold text-start">
                        Deck
                    </li>
                    <li className="flex-1 underline font-semibold">
                        New
                    </li>
                    <li className="flex-1 underline font-semibold">
                        Familiar
                    </li>
                    <li className="flex-1 underline font-semibold">
                        Confident
                    </li>
                    <li className="flex-1 underline font-semibold">
                        Mastered
                    </li>
                </ul>
                <h1 className="text-center">Loading Your Deck</h1>
            </div>
        )
    }

    return (
        <div className={`${shadow} shadow-primary p-12 overflow-scroll `}>
            <ul className="table-title grid grid-cols-5 text-center mb-8 min-w-[480px]">
                <li className="grow font-bold text-start">
                    Deck
                </li>
                <li className="flex-1 underline font-semibold">
                    New
                </li>
                <li className="flex-1 underline font-semibold">
                    Familiar
                </li>
                <li className="flex-1 underline font-semibold">
                    Confident
                </li>
                <li className="flex-1 underline font-semibold">
                    Mastered
                </li>
            </ul>
            {
                decks.length === 0 ? <h3 className="text-center font-bold text-primary opacity-20 text-xl py-12">Let&apos;s Create Your First Deck</h3>
                    : decks.map((deck) => (
                        <ul key={deck.id} className="grid grid-cols-5 text-center hover:cursor-pointer mb-4 min-w-[480px]">
                            <li className="font-bold text-start">
                                {deck.title}
                            </li>
                            <li className="text-sky-500">
                                {deck.cardStatus?.New}
                            </li>
                            <li className="text-green-500">
                                {deck.cardStatus?.Familiar}
                            </li>
                            <li className="text-yellow-500">
                                {deck.cardStatus?.Confident}
                            </li>
                            <li className="text-red-600">
                                {deck.cardStatus?.Mastered}
                            </li>
                        </ul>
                    ))
            }
            <RegularButton text="Add new card" color="secondary" className="mt-4" onClick={onOpen}/>
        </div>
    );
}
