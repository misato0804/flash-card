'use client'
import AuthWrapper from "@/components/wrapper/AuthWrapper";
import {Spacer} from "@nextui-org/react";
import TextInput from "@/components/input/textInput";
import RegularButton from "@/components/button/regularButton";
import {signInWithEmailAndPassword} from 'firebase';
import {auth} from "@/app/_lib/firebase/config";
import {useState} from "react";

const LoginPageComponent = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()



    const handleLogin = async () => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            console.log(res)

            // if (res.)

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <AuthWrapper>
            <h3 className='text-xl font-bold text-center'>Welcome back!</h3>
            <Spacer y={8}/>
            <TextInput
                type={'email'}
                label={'email'}
                placeHolder={'email'}
                autoComplete='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Spacer y={12}/>
            <TextInput
                type={'password'}
                label={'password'}
                placeHolder={'password'}
                autoComplete='new-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Spacer y={12}/>
            <RegularButton
                text={'Login'}
                color='primary'
                disabled={false}
                onClick={handleLogin}
            />
        </AuthWrapper>
    );
};

export default LoginPageComponent;