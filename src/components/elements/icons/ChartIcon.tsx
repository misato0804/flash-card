import React from 'react';

const ChartIcon = (props: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            { ...props }
        >
            <path
                d="M9 6h2v14H9zm4 2h2v12h-2zm4-4h2v16h-2zM5 12h2v8H5z"
                fill='currentColor'
            />
        </svg>
    );
};

export default ChartIcon;