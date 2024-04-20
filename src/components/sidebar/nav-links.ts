import {NavLinkType} from "@/components/sidebar/type";
import DeckIcon from "@/components/elements/icons/DeckIcon";
import ListIcon from "@/components/elements/icons/ListIcon";
import ChartIcon from "@/components/elements/icons/ChartIcon"
import UserIcon from "@/components/elements/icons/UserIcon";

export const navLinks : NavLinkType[] = [
    {
        title: 'Decks',
        link: 'decks',
        Icon: DeckIcon
    },
    {
        title: 'Browse',
        link: 'brows',
        Icon: ListIcon
    },
    {
        title: 'Status',
        link: 'status',
        Icon: ChartIcon
    },
    {
        title: 'Profile',
        link: 'profile',
        Icon: UserIcon
    }
]