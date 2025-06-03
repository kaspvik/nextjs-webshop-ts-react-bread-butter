import { AccessTime, Email, LocationOn, Phone } from "@mui/icons-material";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        py: 4,
        px: 2,
        height: "auto",
        boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.15)",
      }}>
      <Box id="contact" sx={{ maxWidth: 900, mx: "auto", textAlign: "center" }}>
        <Typography
          variant="h3"
          color="text.primary"
          paddingBottom={5}
          gutterBottom>
          Contact Us
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="space-around"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            textAlign: "center",
          }}>
          <Grid item xs={12} sm={6} md={3}>
            <LocationOn
              sx={{
                fontSize: 40,
                color: "#1A535C",
              }}
            />
            <Typography variant="h5">Find us:</Typography>
            <Typography variant="h6">
              Vinylgatan 12, 414 66 Gothenburg
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AccessTime
              sx={{
                fontSize: 40,
                color: "#1A535C",
              }}
            />
            <Typography variant="h5">Open Hours:</Typography>
            <Typography variant="h6">Mon - Sun: 07:00 - 16:00</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Email
              sx={{
                fontSize: 40,
                color: "#1A535C",
              }}
            />
            <Typography variant="h5">Email:</Typography>
            <Typography variant="h6">info@surf&sound.com</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Phone
              sx={{
                fontSize: 40,
                color: "#1A535C",
              }}
            />
            <Typography variant="h5">Telephone:</Typography>
            <Typography variant="h6">031-44 44 44</Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          paddingTop: 2,
        }}>
        <Image
          src="/images/netscape-netcenter-personal-finance-1999.gif"
          alt="Looking for a man in finance - advertisement from 1992"
          width={500}
          height={100}
        />
      </Box>
    </Box>
  );
}
