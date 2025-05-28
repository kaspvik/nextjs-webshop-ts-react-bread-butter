import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { RetroButton } from "../signin/providers/retro-buttons";

interface CustomAlertProps {
  onClose: () => void;
  message: string;
}

export default function CustomAlert({ onClose, message }: CustomAlertProps) {
  return (
    <Overlay onClick={onClose}>
      <AlertWindow onClick={(e) => e.stopPropagation()}>
        <AlertTitleBar>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </AlertTitleBar>
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
      </AlertWindow>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1300;
`;

const AlertWindow = styled.div`
  width: 100%;
  max-width: 550px;
  height: 100%;
  max-height: 250px;
  background-color: #c0c0c0;
  box-shadow: 2px 2px black;
  display: flex;
  flex-direction: column;

  @media (max-width: 599px) {
    max-width: 90%;
  }
`;

const AlertTitleBar = styled.div`
  margin-top: 2px;
  margin-left: 2.5px;
  width: 99%;
  background: linear-gradient(to right, #0f5796, #1f639e, #729bc0);
  padding: 5px 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CloseButton = styled.div`
  background: #c0c0c0;
  box-shadow: 2px 2px #403f3f;
  color: black;
  padding: 0 4px;
  cursor: pointer;
  :hover {
    background: #b0b0b0;
  }
`;

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
