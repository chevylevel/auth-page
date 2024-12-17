import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Tab, Tabs, Typography } from '@mui/material';

const StyledTabs = styled(Tabs)({
    background: '#F4F4F4',
    borderRadius: '12px',
    width: '100%',

    '& .MuiTabs-indicator': {
        display: 'none',
    },
    '& .MuiTabs-flexContainer': {
        justifyContent: 'center'
    },
    '& .MuiTabs-selected': {
        color: 'unset'
    },
    '& .MuiTab-root': {
        flexGrow: 1,
    },
    '& .MuiButtonBase-root p': {
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '24px',
        color: '#A6ABB0',
    },


    '& .Mui-selected': {
        background: '#FFFFFF',
        borderRadius: '12px',
        margin: '4px',
    },

    '& .Mui-selected p': {
        color: '#101112',
    },

    '& .MuiTab-text': {
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '24px',
    }
});

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function AuthTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab
                label={<Typography>Sign In</Typography>}
                {...a11yProps(0)}
                sx={{ textTransform: "none" }}
            />
            <Tab
                label={<Typography>Login</Typography>}
                {...a11yProps(1)}
                sx={{ textTransform: "none" }}
            />
        </StyledTabs>
    );
}
