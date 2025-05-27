"use client";

import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import FacebookButton from "./providers/facebook-button";
import GithubButton from "./providers/github-button";

export default function SignInPage() {
  return (
    <FullScreenWrapper>
      <Window>
        <TitleBar>
          <CloseButton>✕</CloseButton>
        </TitleBar>
        <Content>
          <Typography>Sign in</Typography>
          <GithubButton />
          <FacebookButton />
        </Content>
      </Window>
    </FullScreenWrapper>
  );
}

const FullScreenWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Window = styled.div`
  width: 320px;
  background-color: #c0c0c0;
  box-shadow: 2px 2px #666;
`;

const TitleBar = styled.div`
  background: linear-gradient(to right, #1669b1, #739bbd);
  padding: 4px 8px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const CloseButton = styled.div`
  background: #c0c0c0;
  box-shadow: 2px 2px #666;
  color: black;
  padding: 0 6px;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;
