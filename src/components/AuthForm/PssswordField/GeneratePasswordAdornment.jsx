import { Button, InputAdornment, Typography } from '@mui/material';
import React from 'react';

export default function GeneratePasswordAdornment() {
    return (
        <InputAdornment position="end">
            <Button
                variant={'outlined'}
                size={'large'}
                sx={{
                    maxWidth: '72px',
                    borderRadius: '8px',
                    color: '#101112',
                    borderColor: '#A6ABB0'
                }}
            >
                <Typography sx={{
                    textTransform: "none",
                    fontSize: '12px',
                    fontWeight: '600',
                    lineHeight: '16px',
                }}>
                    Generate
                </Typography>
            </Button>
        </InputAdornment>
    );
};
