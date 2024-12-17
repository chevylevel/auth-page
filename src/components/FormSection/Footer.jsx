import * as React from 'react';
import { Link, Stack, styled, Typography } from '@mui/material';


const StyledFooter = styled('div')(({ theme }) => ({
    display: 'none',

    [theme.breakpoints.up('tablet')]: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
}));

const StyledFeedback = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    gap: theme.spacing(1),

    [theme.breakpoints.up('laptop')]: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: theme.spacing(0),
    },
}));

export default function Footer() {
    return (
        <StyledFooter>
            <Typography sx={{ color: '#A6ABB0' }} component={'span'}>© 2024 MIND MONEY LIMITED</Typography>

            <StyledFeedback>
                <Typography sx={{ color: '#A6ABB0' }}>Have some issue?</Typography>

                <Typography sx={{ color: '#A6ABB0' }}>
                    Wrote us &nbsp;
                    <Link href="#">info@mind-money.eu</Link>
                </Typography>
            </StyledFeedback>
        </StyledFooter>
    );
}
