import { CardStatus } from "@/type/CardStatus";

export type Deck = {
  id: string,
  uid: string,
  title: string,
  statusCounts?: {
    [K in CardStatus]?: number;
  };
};
