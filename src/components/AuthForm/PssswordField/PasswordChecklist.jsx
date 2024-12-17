/* eslint-disable react/prop-types */
import * as React from 'react';
import { Box, Stack, styled, Typography } from '@mui/material';
import IconPass from './icons/IconPass';
import IconFail from './icons/IconFail';

const passwordRules = [
    {
        code: 'password_contains_email',
        message: 'Can’t contain e-mail address',
    },
    {
        code: 'length',
        message: 'At least 8 characters',
    },
    {
        code: 'digit_or_symbol',
        message: 'Contains a number or(and) symbol',
    },
    {
        code: 'uppercase_letter',
        message: 'One or more capitalized letter',
    },
];

const StyledText = styled(Typography)(() => ({
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
}));

export default function PasswordChecklist({ issues, dirty }) {
    return (
        <Stack sx={{ marginTop: '4px' }}>
            <Box>
                <StyledText
                    component={'span'}
                    color='#A6ABB0'
                >
                    Password strenght:
                </StyledText>

                &nbsp;

                {issues.length !== 0 && (
                    <StyledText
                        component={'span'}
                        color='#EF4E57'
                    >
                        Weak password :(
                    </StyledText>
                )}

                {dirty && issues.length === 0 && (
                    <StyledText
                        color={'#51D85E'}
                        component={'span'}
                    >
                        Strong password :)
                    </StyledText>
                )}
            </Box>

            <Stack spacing={0.5} marginTop={1}>
                {passwordRules.map(item => {
                    let color = '#51D85E';
                    let icon = <IconPass color={color} />

                    if (!dirty) {
                        color = '#A6ABB0';
                        icon = <IconFail color={color} />
                    }

                    if (dirty && issues.includes(item.code)) {
                        color = '#EF4E57'
                        icon = <IconFail color={color} />
                    }

                    return (
                        <Stack key={item.code} direction={'row'} alignItems={'center'}>
                            {icon}

                            <StyledText color={color} >
                                {item.message}
                            </StyledText>
                        </Stack>
                    )
                })}
            </Stack>
        </Stack>
    );
}
