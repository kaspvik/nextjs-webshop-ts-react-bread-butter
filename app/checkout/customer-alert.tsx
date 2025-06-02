"use client";

import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Image from "next/image";
import ModalWindow from "../components/modal-window";
import { RetroButton } from "../signin/providers/retro-buttons";

interface CustomAlertProps {
  onClose: () => void;
  message: string;
}

export default function CustomAlert({ onClose, message }: CustomAlertProps) {
  return (
    <ModalWindow onClose={onClose}>
      <AlertContent>
        <IconWrapper>
          <Image
            src="/images/error-icon.png"
            alt="Error icon"
            width={22}
            height={22}
          />
        </IconWrapper>
        <BoxContainer>
          <Typography variant="h6" align="center">
            {message}
          </Typography>

          <SmallRetroButton onClick={onClose}>Close</SmallRetroButton>
        </BoxContainer>
      </AlertContent>
    </ModalWindow>
  );
}

const AlertContent = styled.div`
  position: relative;
  padding: 32px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: -59px;
  left: -5px;
`;

const BoxContainer = styled.div`
  display: flex;
  width: 75%;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const SmallRetroButton = styled(RetroButton)`
  width: 30%;
  font-weight: 300;
`;
