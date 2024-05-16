'use client'
import React, { useMemo, useState } from "react";
import { CardStatus } from "@/type/CardStatus";
import { Deck } from "@/type/Deck";

type DeckTableProps = {
    decks: Deck[]
}

export default function DeckTable({ decks }: DeckTableProps) {

    const shadow = 'shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'

    return (
        <div className={`${shadow} shadow-primary  p-12 overflow-scroll`}>
            <ul className="table-title grid grid-cols-5 text-center mb-8 min-w-[480px]">
                <li className="grow font-bold text-start">
                    Deck
                </li>
                <li className="flex-1 underline font-semibold">
                    {CardStatus.New}
                </li>
                <li className="flex-1 underline font-semibold">
                    {CardStatus.Familiar}
                </li>
                <li className="flex-1 underline font-semibold">
                    {CardStatus.Confident}
                </li>
                <li className="flex-1 underline font-semibold">
                    {CardStatus.Mastered}
                </li>
            </ul>

            {
                decks.map((deck) => (
                    <ul key={deck.id} className="grid grid-cols-5 text-center hover:cursor-pointer mb-4 min-w-[480px]">
                        <li className="font-bold text-start">
                            {deck.title}
                        </li>
                        <li className="text-sky-500">
                            {deck.statusCounts?.New}
                        </li>
                        <li className="text-green-500">
                            {deck.statusCounts?.Familiar}
                        </li>
                        <li className="text-yellow-500">
                            {deck.statusCounts?.Confident}
                        </li>
                        <li className="text-red-600">
                            {deck.statusCounts?.Mastered}
                        </li>
                    </ul>
                ))
            }
        </div>
    );
}
