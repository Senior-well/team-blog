import React, { useState } from 'react';
import { Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './Login.sass';

interface LoginProps {
    email: string;
    phoneNumber?: number;
    password: string;
}

interface FormProps {
    requestInformation: string;
    placeholder?: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

const FormInformation: React.FC<FormProps> = ({ requestInformation, placeholder, value, name }) => {
    return (
        <FormControl sx={{ m: 1, width: '350px' }} variant={'outlined'}>
            <InputLabel htmlFor={'outlined-adorment-user'} sx={{ color: 'white' }} required></InputLabel>
            <OutlinedInput
                id={'outlined-adorment-user'}
                label={requestInformation}
                sx={{ color: 'white' }}
                placeholder={placeholder}
                value={value}
                name={name}
                required
            />
        </FormControl>
    );
}

const FormPassword: React.FC<FormProps> = ({ requestInformation, placeholder, value, name }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = () => setShowPassword((prev) => !prev);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); }
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); }

    return (
        <FormControl sx={{ m: 1, width: '350px' }} variant={'outlined'}>
            <InputLabel htmlFor={'outlined-adorment-user'} sx={{ color: 'white' }} required></InputLabel>
            <OutlinedInput
                id={'outlined-adorment-user'}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position='end'>
                        <IconButton
                            aria-label={
                                showPassword ? 'hide the password' : 'show the password'
                            }
                            onClick={handleShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge='end'
                        >
                            {showPassword ? <VisibilityOff sx={{ color: 'white' }} /> : <Visibility sx={{ color: 'white' }} />}
                        </IconButton>
                    </InputAdornment>
                }
                label={requestInformation}
                sx={{ color: 'white' }}
                placeholder={placeholder}
                value={value}
                name={name}
                required
            />
        </FormControl>
    );
}


const Login: React.FC<LoginProps> = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);

    return (
        <div className='Login'>

        </div>
    );
}

export default Login;