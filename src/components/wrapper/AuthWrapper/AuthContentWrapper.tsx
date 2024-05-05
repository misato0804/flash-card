import {InputAreaWrapperProps} from "@/components/wrapper/AuthWrapper/type";

const AuthContentWrapper = ({children}: InputAreaWrapperProps) => {
    return (
        <div className='flex justify-center w-full h-full items-center'>
            <div className='w-full px-12 py-12 shadow-md max-w-xl'>
                { children }
            </div>
        </div>
    );
};

export default AuthContentWrapper;