import {
  AccessTime,
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";

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
      }}
    >
      <Box id="contact" sx={{ maxWidth: 900, mx: "auto", textAlign: "center" }}>
        <Typography
          variant="h4"
          color="text.primary"
          paddingBottom={5}
          gutterBottom
        >
          Kontakta Oss
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="space-around"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <LocationOn
              sx={{
                fontSize: 40,
                color: "background.paper",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.5)" },
              }}
            />
            <Typography variant="h6">Hitta hit:</Typography>
            <Typography variant="body2">
              Lalalalalalalalalalalalalalalala, BATMAN
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AccessTime
              sx={{
                fontSize: 40,
                color: "background.paper",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.5)" },
              }}
            />
            <Typography variant="h6">Öppettider:</Typography>
            <Typography variant="body2">
              <b>Bread&Butter</b> <br />
              Mon - Sön: 07:00 - 16:00 <br />
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Email
              sx={{
                fontSize: 40,
                color: "background.paper",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.5)" },
              }}
            />
            <Typography variant="h6">Email:</Typography>
            <Typography variant="body2">info@bread&butter.com</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Phone
              sx={{
                fontSize: 40,
                color: "background.paper",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.5)" },
              }}
            />
            <Typography variant="h6">Telefon:</Typography>
            <Typography variant="body2">031-44 44 44</Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Social Media Links  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          paddingTop: 2,
        }}
      >
        <IconButton
          component={Link}
          href="#"
          // target="_blank"
          // rel="noopener"
          aria-label="Facebook"
          sx={{
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.5)", color: "#1877f2" },
          }}
        >
          <Facebook sx={{ fontSize: 30 }} />
        </IconButton>

        <IconButton
          component={Link}
          href="#"
          // target="_blank"
          // rel="noopener"
          aria-label="Github"
          sx={{
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.5)", color: "black" },
          }}
        >
          <GitHub sx={{ fontSize: 30 }} />
        </IconButton>

        <IconButton
          component={Link}
          href="#"
          // target="_blank"
          // rel="noopener"
          aria-label="LinkedIn"
          sx={{
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.5)", color: "#0077b5" },
          }}
        >
          <LinkedIn sx={{ fontSize: 30 }} />
        </IconButton>

        <IconButton
          component={Link}
          href="#"
          // target="_blank"
          // rel="noopener"
          aria-label="Instagram"
          sx={{
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.5)", color: "#e11d74" },
          }}
        >
          <Instagram sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>
    </Box>
  );
}
