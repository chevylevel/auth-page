import * as React from 'react';
import { Container, Stack, styled } from '@mui/material';
import Header from './Header';
import AuthForm from '../AuthForm/AuthForm';
import Footer from './Footer';
import AuthTabs from '../AuthForm/AuthTabs';


const StyledContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flex: '1',
    height: '100%',
    justifyContent: 'center',
    padding: '0 16px',

    [theme.breakpoints.up('tablet')]: {
        padding: '0 24px',
    },

    [theme.breakpoints.up('laptop')]: {
        padding: '0 64px 0 0',
        background: '#F4F4F4',
        justifyContent: 'flex-end',
    },

    [theme.breakpoints.up('desktop')]: {
        padding: '0 32px 0 157px',
    },
}));

const StyledStack = styled(Stack)(({ theme }) => ({
    alignItems: 'center',



    [theme.breakpoints.up('tablet')]: {
        justifyContent: 'space-between',
        width: '100%',
    },

    [theme.breakpoints.up('laptop')]: {
        width: 'auto',
    },

    [theme.breakpoints.up('desktop')]: {
        width: '100%',
    },
}));

export default function FormSection() {
    return (
        <StyledContainer>
            <StyledStack>
                <Header />

                <Stack
                    sx={{
                        background: '#FFFFFF',
                        padding: { mobile: '24px 0 40px', tablet: '64px 0  132px', laptop: '48px 40px' },
                        borderRadius: '16px',
                        boxSizing: 'border-box',
                        width: { tablet: '100%', laptop: '516px' },
                        maxWidth: { mobile: '480px', laptop: '516px' },
                    }}
                    spacing={{ mobile: 4, tablet: 6.5, laptop: 6 }}
                >
                    <AuthTabs />

                    <AuthForm />
                </Stack>

                <Container sx={{ padding: { tablet: '0 0 32px', laptop: '20px 0 20px' } }}>
                    <Footer />
                </Container>
            </StyledStack>
        </StyledContainer>
    );
}
