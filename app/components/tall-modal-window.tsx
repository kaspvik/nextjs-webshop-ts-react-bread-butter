"use client";

import styled from "@emotion/styled";
import { ReactNode } from "react";

interface TallModalWindowProps {
  onClose: () => void;
  children: ReactNode;
}

export default function TallModalWindow({ onClose, children }: TallModalWindowProps) {
  return (
    <FullScreenWrapper onClick={onClose}>
      <Window onClick={(e) => e.stopPropagation()}>
        <TitleBar>
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
  max-width: 600px;
  max-height: 90vh;
  background-color: #c0c0c0;
  display: flex;
  flex-direction: column;
  overflow: hidden;

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
  min-height: 30px;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
`;