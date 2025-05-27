"use client";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

interface NetscapeButtonProps extends ButtonProps {
  emoji?: string;
}

const StyledButtonRoot = styled(Button)(({ theme }) => ({
  alignItems: "center",
  background: "var(--c-background-button-netscape)",
  borderColor: "#eee #111 #111 #eee",
  borderRadius: 0,
  borderStyle: "solid",
  borderWidth: "2px",
  cursor: "pointer",
  display: "inline-flex",
  fontFamily: "Times New Roman",
  fontWeight: 700,
  minHeight: "31px",
  minWidth: "88px",
  padding: "2px 4px 2px 2px",
  position: "relative",
  whiteSpace: "nowrap",
  zoom: 1.5,

  "&:hover, &:focus": {
    outline: "1px dotted var(--c-link)",
  },
  "&:active": {
    borderColor: "#111 transparent transparent #111",
    padding: "4px 2px 0px 4px",
  },

  "& .MuiTouchRipple-root": {
    display: "none",
  },
}));

const EmojiSpan = styled("span")({
  alignItems: "center",
  background: "#4169e1",
  display: "flex",
  flex: "0 0 24px",
  fontSize: "14px",
  height: "23px",
  justifyContent: "center",
  lineHeight: 0,
  marginRight: "4px",
  overflow: "hidden",
  paddingTop: "2px",
  width: "24px",
});

const StyledNetscapeButton: React.FC<NetscapeButtonProps> = ({
  emoji,
  children,
  ...props
}) => {
  return (
    <StyledButtonRoot {...props}>
      {emoji && <EmojiSpan>{emoji}</EmojiSpan>}
      {children}
    </StyledButtonRoot>
  );
};

export default StyledNetscapeButton;
