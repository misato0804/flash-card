'use client'
import {Spacer} from "@nextui-org/react";
import TextInput from "@/components/input/textInput";
import RegularButton from "@/components/button/regularButton";
import AuthWrapper from "@/components/wrapper/AuthWrapper";
import {useEffect, useState} from "react";
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";
import {auth} from "@/app/_lib/firebase/config";

const RegisterPageComponent = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState('');

    const [passwordMatch, setPasswordMatch] = useState<boolean>(false)

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

    const handleSignUp = async () => {
        try {
            if (passwordMatch) {
                const res = await createUserWithEmailAndPassword(email, password)
                console.log({res})
                setEmail('')
                setPassword('')
                setConfirmPassword('')
            }
        } catch (e) {
            console.log(e)
        }
    }

    const passwordChecker = () => {
        if (password !== confirmPassword) {
            setPasswordMatch(false)
        } else {
            setPasswordMatch(true)
        }
    }

    useEffect(() => {
        passwordChecker()
    }, [password, confirmPassword])

    return (
        <AuthWrapper>
            <form>
                <h3 className='text-xl font-bold text-center'>
                    Nice to meet you!
                </h3>
                <Spacer y={8}/>
                <TextInput
                    type={'email'}
                    label={'email'}
                    placeHolder={'email'}
                    value={email}
                    autoComplete='email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Spacer y={8}/>
                <TextInput
                    type={'password'}
                    label={'password'}
                    placeHolder={'password'}
                    value={password}
                    autoComplete='new-password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Spacer y={8}/>
                <TextInput
                    type={'password'}
                    label={'confirm password'}
                    placeHolder={'confirm password'}
                    value={confirmPassword}
                    autoComplete='new-password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {!passwordMatch && <p>password doesnt match</p>}

                <Spacer y={8}/>
                <RegularButton
                    text={'Register'}
                    color='content1'
                    disabled={!passwordMatch}
                    onClick={handleSignUp}
                />
            </form>
        </AuthWrapper>
    );
};

export default RegisterPageComponent;