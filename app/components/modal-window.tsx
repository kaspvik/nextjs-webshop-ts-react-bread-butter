"use client";

import styled from "@emotion/styled";
import { ReactNode } from "react";

interface ModalWindowProps {
  onClose: () => void;
  children: ReactNode;
}

export default function ModalWindow({ onClose, children }: ModalWindowProps) {
  return (
    <FullScreenWrapper onClick={onClose}>
      <Window onClick={(e) => e.stopPropagation()}>
        <TitleBar>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </TitleBar>
        <Content>{children}</Content>
      </Window>
    </FullScreenWrapper>
  );
}

const FullScreenWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9998;
`;

const Window = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 300px;
  background-color: #c0c0c0;
  box-shadow: 2px 2px black;
  display: flex;
  flex-direction: column;

  @media (max-width: 599px) {
    max-width: 90%;
  }
`;

const TitleBar = styled.div`
  margin-top: 2px;
  margin-left: 2.5px;
  width: 99%;
  background: linear-gradient(to right, #0f5796, #1f639e, #729bc0);
  padding: 5px 8px;
  display: flex;
  justify-content: right;
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

const Content = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;
