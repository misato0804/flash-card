'use client'
import AuthWrapper from "@/components/wrapper/AuthWrapper";
import { Spacer } from "@nextui-org/react";
import TextInput from "@/components/input/textInput";
import RegularButton from "@/components/button/regularButton";
import { useEffect, useState } from "react";
import useAuthStore from "@/store/userState/userAuthStore";
import { useRouter } from "next/navigation";

const LoginPageComponent = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState(false)

    const { signIn, authUser, loading } = useAuthStore()

    const router = useRouter()

    useEffect(() => {
        if(authUser) {
            router.push(`/user/${authUser.uid}/decks`)
        } else if (authUser === null && !loading) {
            console.log('login failed')
        }
    }, [authUser, loading, router])

    const handleLogin = async () => {
       await signIn(email, password)
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