/* eslint-disable react/prop-types */
import React from 'react';

import { IconButton, InputAdornment } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';


export default function TogglePasswordAdornment({
    showPassword,
    onTogglePasswordVisibility,
}) {
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <InputAdornment position="end">
            <IconButton
                aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                }
                onClick={onTogglePasswordVisibility}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
                sx={{ marginRight: 0 }}
            >
                {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
        </InputAdornment>
    );
};
