import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, styled } from '@mui/material';

import Banner from '../Banner/Banner';
import FormSection from '../FormSection/FormSection';
import { theme } from '../../App';

const StyledContainer = styled('div')(() => ({
    display: 'flex',
    flex: '1',
    minHeight: '100vh',
}));

const StyledBannerContainer = styled('div')(() => ({
    flex: '1',
}));

function RegisterPage() {
    const isDesktop = useMediaQuery(theme.breakpoints.up('laptop'));

    return (
        <StyledContainer>
            <Container sx={{ flex: 1 }} disableGutters>
                <FormSection />
            </Container>

            {isDesktop && (
                <StyledBannerContainer>
                    <Banner />
                </StyledBannerContainer>
            )}
        </StyledContainer>
    );
}

export default RegisterPage;
