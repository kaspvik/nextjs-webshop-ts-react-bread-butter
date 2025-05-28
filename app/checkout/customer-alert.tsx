import styled from "@emotion/styled";
import { Typography } from "@mui/material";

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
          <EmojiIcon>❌</EmojiIcon>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            {message}
          </Typography>
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
  max-width: 500px;
  max-height: 200px;
  background-color: #c0c0c0;
  box-shadow: 2px 2px black;
  display: flex;
  flex-direction: column;
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
  align-items: center;
  justify-content: center;
`;

const EmojiIcon = styled.div`
  font-size: 2rem;
  line-height: 1;
  flex-shrink: 0;
`;
