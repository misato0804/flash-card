import {AuthWrapperProps} from "@/components/wrapper/AuthWrapper/type";
import AuthContentWrapper from "@/components/wrapper/AuthWrapper/AuthContentWrapper";

/**
 * Todo:
 *  Logo
 */

const AuthWrapper = ({children}: AuthWrapperProps) => {

    return (
        <div className='w-screen h-screen px-8 py-4 xl:px-12 xl:py-8 flex justify-center'>
            <div className='w-full h-[80%]'>
                <h1 className='text-4xl'>Logo</h1>
                <div className='flex justify-center'>
                    <h1 className='text-4xl font-extrabold mt-8'>Snap Study</h1>
                </div>
                <AuthContentWrapper>
                    <form>
                        {children}
                    </form>
                </AuthContentWrapper>
            </div>
        </div>
    );
};

export default AuthWrapper;