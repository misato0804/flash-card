export type IsQuizModalOpenType = {
  isOpen: boolean;
  onQuizOpen: () => void;
  onQuizClose: () => void;
  toggle: () => void;
};