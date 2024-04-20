import {NavLinkType} from "@/components/sidebar/type";
import DeckIcon from "@/components/elements/icons/DeckIcon";
import ListIcon from "@/components/elements/icons/ListIcon";
import ChartIcon from "@/components/elements/icons/ChartIcon"
import UserIcon from "@/components/elements/icons/UserIcon";

export const navLinks : NavLinkType[] = [
    {
        title: 'Decks',
        link: 'decks',
        icon: DeckIcon
    },
    {
        title: 'Browse',
        link: 'brows',
        icon: ListIcon
    },
    {
        title: 'Status',
        link: 'status',
        icon: ChartIcon
    },
    {
        title: 'Profile',
        link: 'profile',
        icon: UserIcon
    }
]