import React from 'react';
import { styled, SvgIcon } from '@mui/material';

const StyledPassIcon = styled(SvgIcon)(() => ({
    width: 'auto',
}));

export default function IconPass() {
    return (
        <StyledPassIcon >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8.00008L6.82843 10.8285L12.4847 5.17163" stroke="#51D85E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </StyledPassIcon>
    );
};
