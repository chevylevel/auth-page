/* eslint-disable react/prop-types */
import { FilledInput, FormControl, InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { emailPasswordSchema } from '../authSchema';
import PasswordChecklist from './PasswordChecklist';
import TogglePasswordAdornment from './TogglePasswordAdornment';
import GeneratePasswordAdornment from './GeneratePasswordAdornment';



export default function PasswordField({ errors, email, register }) {
    const [issues, setIssues] = useState([]);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    useEffect(() => {
        if (!password) return setIssues([]);

        const validation = emailPasswordSchema.safeParse({
            email,
            password,
        });

        if (validation.success) return setIssues([]);

        setIssues(validation.error?.issues
            ?.filter(issue => issue.path[0] === 'password')
            .map(issue => issue.params?.code))
    }, [email, password])

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    }

    return (
        <FormControl
            {...register("password")}
            variant="filled"
            color={errors ? 'error' : 'primary'}
        >
            <InputLabel
                htmlFor="password"
                sx={{ '&, &.Mui-focused': { color: '#A6ABB0' } }}
            >
                Password
            </InputLabel>

            <FilledInput
                required
                fullWidth
                name="password"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                endAdornment={password
                    ? (
                        <TogglePasswordAdornment
                            showPassword={showPassword}
                            onTogglePasswordVisibility={handleClickShowPassword}
                        />
                    )
                    : <GeneratePasswordAdornment />
                }
                sx={{
                    borderRadius: '8px',
                    background: '#FFFFFF',
                    border: '1px solid #DCDEE0',
                    '&:hover, &.Mui-focused': {
                        background: '#FFFFFF',
                    },
                    '&:before, &:after': {
                        display: 'none',
                    },
                }}
            />

            <PasswordChecklist
                issues={issues}
                dirty={!!password}
            />
        </FormControl>
    );
}
