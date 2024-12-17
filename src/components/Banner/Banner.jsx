import React from "react";
import styles from "./Banner.module.css";
import { descriptionText, headerText } from "./constants";
import AvatarWithEmoji from "../Avatar/AvatarWithEmoji";
import { Stack, styled, Typography } from '@mui/material';

const StyledScreen = styled('div')(({ theme }) => ({
    position: 'absolute',

    top: '53%',
    left: '20%',

    [theme.breakpoints.up('desktop')]: {
        top: '50%',
        left: '35%',
    },
}));

function Banner() {
    return (
        <div className={styles.container}>
            <Stack spacing={3}>
                <Typography
                    sx={{
                        color: '#ffffff',
                        fontSize: '40px',
                        fontWeight: '700',
                        lineHeight: '52px',
                    }}
                >
                    {headerText}
                </Typography>

                <Typography
                    sx={{
                        color: '#ffffff',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        whiteSpace: 'pre-line',
                    }}
                >
                    {descriptionText}
                </Typography>

            </Stack>

            <StyledScreen>
                <div className={styles.screenBg}>
                    <img
                        src="/screen.png"
                        alt="screen"
                        loading={'lazy'}
                    />
                </div>

                <AvatarWithEmoji
                    photoSrc={"/trader2.png"}
                    emojiSrc={"/money.png"}
                    style={{
                        top: '40%',
                        transform: 'translateX(-50%)'
                    }}
                />

                <AvatarWithEmoji
                    photoSrc={"/trader1.png"}
                    emojiSrc={"/chart.png"}
                    style={{
                        top: '0%',
                        left: '62%',
                        transform: 'translateY(-50%)'
                    }}
                />
            </StyledScreen>
        </div>
    );
}

export default Banner;
