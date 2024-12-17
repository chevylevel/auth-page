/* eslint-disable react/prop-types */
import React from 'react';
import { styled, SvgIcon } from '@mui/material';

const StyledFailIcon = styled(SvgIcon)(() => ({
    width: 'auto',
}));

export default function IconFail({ color }) {
    return (
        <StyledFailIcon>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12L8.00001 8.00001M8.00001 8.00001L4 4M8.00001 8.00001L12 4M8.00001 8.00001L4 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </StyledFailIcon>
    );
};
