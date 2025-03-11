import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "text.primary",
        py: 2,
        textAlign: "center",
        width: "100%",
        marginTop: "auto",
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Bread & Butter
      </Typography>
    </Box>
  );
}
