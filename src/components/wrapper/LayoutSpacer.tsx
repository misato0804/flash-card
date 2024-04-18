type SpacerProps = {
    children: React.ReactNode
}

const LayoutSpacer = ({ children } : SpacerProps) => {
    return (
        <div className='container mx-auto max-w-screen-xl px-[24px]'>
            { children }
        </div>
    );
};

export default LayoutSpacer;