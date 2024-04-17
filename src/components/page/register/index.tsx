'use client'
import {Spacer} from "@nextui-org/react";
import TextInput from "@/components/input/textInput";
import RegularButton from "@/components/button/regularButton";
import AuthWrapper from "@/components/wrapper/AuthWrapper";

const RegisterPageComponent = () => {
    return (
        <AuthWrapper>
            <h3 className='text-xl font-bold text-center'>Nice to meet you!</h3>
            <Spacer y={ 8 } />
            <TextInput type={'email'} label={'email'} placeHolder={'email'}/>
            <Spacer y={ 8 } />
            <TextInput type={'password'} label={'password'} placeHolder={'password'}/>
            <Spacer y={ 8 } />
            <TextInput type={'password'} label={'confirm password'} placeHolder={'confirm password'}/>
            <Spacer y={ 8 } />
            <RegularButton text={'Register'} color='content1'/>
        </AuthWrapper>
    );
};

export default RegisterPageComponent;