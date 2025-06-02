"use client";

import { Typography } from "@mui/material";
import { RetroButton } from "../signin/providers/retro-buttons";
import styled from "@emotion/styled";
import ModalWindow from "../components/modal-window";

interface CustomAlertProps {
  onClose: () => void;
  message: string;
}

export default function CustomAlert({ onClose, message }: CustomAlertProps) {
  return (
    <ModalWindow onClose={onClose}>
      <AlertContent>
        <RetroIcon>x</RetroIcon>
        <BoxContainer>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "1rem",
              paddingRight: "10px",
            }}
          >
            {message}
          </Typography>
          <SmallRetroButton onClick={onClose}>Close</SmallRetroButton>
        </BoxContainer>
      </AlertContent>
    </ModalWindow>
  );
}

const AlertContent = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const RetroIcon = styled.div`
  width: 50px;
  height: 40px;
  border-radius: 50%;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 28px;
  font-weight: bold;
  padding-left: 2px;
  padding-bottom: 1px;
  text-shadow: 0px 0px 0 #000, 0px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  box-shadow: 2px 1px 0px rgba(0, 0, 0, 0.6);
  margin-bottom: 90px;
`;

const SmallRetroButton = styled(RetroButton)`
  width: 20%;
`;
