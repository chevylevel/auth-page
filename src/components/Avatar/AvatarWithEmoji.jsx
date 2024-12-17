import React from "react";
import styles from "./AvatarWithEmoji.module.css";
import { Avatar, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  border: `4px solid #FFFFFF`,
  width: '32px',
  height: '32px',
  background: '#FFFFFF',
  boxSizing: 'border-box',
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: '100px',
  height: '100px',
  '& .MuiAvatar-img': {
    objectPosition: 'top',
  }
}));

function AvatarWithEmoji({ photoSrc, emojiSrc, style }) {
  return (
    <div className={styles.container} style={style}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={<SmallAvatar alt="emoji" src={emojiSrc} />}
      >
        <StyledAvatar alt="trader" src={photoSrc} />
      </Badge>
    </div>
  );
}

export default AvatarWithEmoji;
