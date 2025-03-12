import { Box, Container, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "text.primary",
        py: 2,
        mt: "auto",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="body1">
          © {new Date().getFullYear()} Bread&Butter
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;
