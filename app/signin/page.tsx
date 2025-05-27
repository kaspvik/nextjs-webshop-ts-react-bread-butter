"use client";

import { Box, Container, Paper, Typography } from "@mui/material";
import GithubButton from "./providers/github-button";

export default function SignInPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}>
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          textAlign: "center",
          width: "100%",
          bgcolor: "background.paper",
        }}>
        <Typography variant="h4" gutterBottom>
          Sign in to Surf & Sound
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
          Use your GitHub account to continue.
        </Typography>

        <div className="flex flex-col gap-4 items-center">
          <GithubButton />
        </div>
      </Paper>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          pointerEvents: "none",
          backgroundImage: "url('/images/crt-noise.gif')",
          opacity: 9,
          mixBlendMode: "screen",
        }}
      />
    </Container>
  );
}
