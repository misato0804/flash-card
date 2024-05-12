export type RegularButtonProps = {
    color?: "primary" | "secondary" | "default" | "success" | "warning" | "danger" | undefined
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    size?: 'sm' | 'md' | 'lg';
    variant?: "flat" | "light" | "solid" | "bordered" | "faded" | "shadow" | "ghost" | undefined
    type?: 'button' | 'submit' | 'reset';
    text: string
}