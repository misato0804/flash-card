'use client'
import AuthWrapper from "@/components/wrapper/AuthWrapper";
import { Spacer } from "@nextui-org/react";
import TextInput from "@/components/input/textInput";
import RegularButton from "@/components/button/regularButton";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/app/_lib/firebase/config";
import { useState } from "react";
import useAuthStore from "@/store/userState/userAuthStore";
import { useRouter } from "next/navigation";

const LoginPageComponent = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState()

    const { setUser, user } = useAuthStore()

    const router = useRouter()

    const handleLogin = async () => {
        try {
            const url = '/api/auth/login'
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            if (res.ok) {
                const data = await res.json()
                setUser(data.user)
                router.push(`/user/${user?.uid}/decks`)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <AuthWrapper>
            <h3 className='text-xl font-bold text-center'>Welcome back!</h3>
            <Spacer y={8} />
            <TextInput
                type={'email'}
                label={'email'}
                placeHolder={'email'}
                autoComplete='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Spacer y={8} />
            <TextInput
                type={'password'}
                label={'password'}
                placeHolder={'password'}
                autoComplete='new-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Spacer y={8} />
            <RegularButton
                text={'Login'}
                color='content1'
                disabled={false}
                onClick={handleLogin}
            />
        </AuthWrapper>
    );
};

export default LoginPageComponent;