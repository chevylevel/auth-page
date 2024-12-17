import * as React from 'react';
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

import {
    Link,
    styled,
    Typography,
    useMediaQuery,
} from '@mui/material';

import BpCheckbox from './StyledCheckbox';
import { theme } from '../../App';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authsSchema } from './authSchema';
import PasswordField from './PssswordField/PasswordField';

// eslint-disable-next-line react/display-name
const StyledTextField = styled(forwardRef((props, ref) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

    return (
        <TextField
            ref={ref}
            size={isMobile ? 'small' : 'medium'}
            variant='filled'
            slotProps={{ input: { disableUnderline: true }, }}
            {...props}
        />
    );
}))(() => ({
    '& .MuiInputBase-root': {
        borderRadius: '8px',
        background: '#FFFFFF',
        border: '1px solid #DCDEE0'
    },
    '&:hover, &.Mui-focused': {
        background: '#FFFFFF',
    },
    '&:before, &:after': {
        display: 'none',
    },
}));

export default function AuthForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isDirty },
    } = useForm({
        resolver: zodResolver(authsSchema),
        defaultValues: {
            email: '',
            password: '',
            phone: '',
            referralCode: '',
            policy: '',
        },
    });

    const submit = (data) => {
        console.log('data', data);
    };

    return (
        <Box
            component="form"
            id='auth-form'
            onSubmit={handleSubmit(submit)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                boxSizing: 'border-box',
                maxWidth: 480
            }}
        >
            <StyledTextField
                {...register("email")}
                required
                fullWidth
                id="email"
                label="E-mail"
                placeholder="E-mail"
                name="email"
                autoComplete="email"
                error={!!errors['email']}
                helperText={errors['email']?.message}
                color={errors['email'] ? 'error' : 'primary'}
            />

            <StyledTextField
                {...register("phone")}
                name="phone"
                required
                fullWidth
                id="phoneNumber"
                placeholder="Phone number"
                label="Phone number"
                autoComplete={'phone'}
                error={!!errors['phone']}
                helperText={errors['phone']?.message}
                color={errors['phone'] ? 'error' : 'primary'}
            />

            <PasswordField
                errors={errors['password']}
                email={watch('email')}
                register={register}
            />

            <StyledTextField
                {...register("referralCode")}
                name="referralCode"
                required
                fullWidth
                id="referralCode"
                placeholder="Referral code"
                label="Referral code"
                error={errors['referralCode']}
                helperText={errors['referralCode']?.message}
                color={errors['referralCode'] ? 'error' : 'primary'}
            />

            <FormControlLabel
                {...register("policy")}
                control={<BpCheckbox value="allowExtraEmails" color="primary" />}
                label={
                    <Typography sx={{
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '20px',
                        color: '#A6ABB0',
                    }}>
                        I accept the <Link>Therms of Use</Link> and have read <Link>Privacy Policy</Link>
                    </Typography>
                }
            />

            <Button
                form='auth-form'
                type="submit"
                fullWidth
                variant="contained"
                disabled={Object.keys(errors).length !== 0 || !isDirty}
                sx={{
                    height: 48,
                    borderRadius: 2,
                    '&.Mui-disabled': { background: '#A1B1E7' },
                }}
            >
                <Typography sx={{
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '24px',
                    textTransform: "none",
                    color: '#FFFFFF'
                }}>
                    Sign up

                    {JSON.stringify(isDirty)}
                </Typography>
            </Button>
        </Box >
    );
}
