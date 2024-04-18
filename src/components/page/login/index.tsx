'use client'
import AuthWrapper from "@/components/wrapper/AuthWrapper";
import {Spacer} from "@nextui-org/react";
import TextInput from "@/components/input/textInput";
import RegularButton from "@/components/button/regularButton";

const LoginPageComponent = () => {
    return (
        <AuthWrapper>
            <h3 className='text-xl font-bold text-center'>Welcome back!</h3>
            <Spacer y={ 8 } />
            <TextInput
                type={'email'}
                label={'email'}
                placeHolder={'email'}
                autoComplete='email'
            />
            <Spacer y={ 8 } />
            <TextInput
                type={'password'}
                label={'password'}
                placeHolder={'password'}
                autoComplete='new-password'
            />
            <Spacer y={ 8 } />
            <RegularButton
                text={'Login'}
                color='content1'
            />
        </AuthWrapper>
    );
};

export default LoginPageComponent;