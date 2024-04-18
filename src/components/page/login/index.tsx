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
                value={'email'}
                onChange={() => {}}
            />
            <Spacer y={ 8 } />
            <TextInput
                type={'password'}
                label={'password'}
                placeHolder={'password'}
                autoComplete='new-password'
                value={'email'}
                onChange={() => {}}
            />
            <Spacer y={ 8 } />
            <RegularButton
                text={'Login'}
                color='content1'
                disabled={false}
                onClick={() => console.log('click')}
            />
        </AuthWrapper>
    );
};

export default LoginPageComponent;