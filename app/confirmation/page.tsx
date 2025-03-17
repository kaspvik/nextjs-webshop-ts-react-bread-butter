"use client";
import { Box, Container, Link, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.background,
    color: theme.palette.text,
    fontSize: 20,
    fontWeight: "400",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  image: string,
  title: string,
  quantity: number,
  price: number
) {
  return { image, title, quantity, price };
}

const generateOrderNumber = () => {
  return `${Date.now()}`;
};

const rows = [
  createData("/images/rustiktragbrod.png", "Rustikt rågbröd", 3, 50),
  createData("/images/levain.png", "Levain", 2, 65),
  createData("/images/brytbrod.png", "Brytbröd", 1, 40),
];

const totalSum = rows.reduce((sum, row) => sum + row.quantity * row.price, 0);

export default function ConfirmationPage() {
  const orderNr = generateOrderNumber();
  return (
    <Container
      sx={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "flexStart",
      }}
    >
      <Box
        component="main"
        sx={{
          padding: 4, //Mått vi förmodligen vill använda i hela appen. (1=8px)
          bgcolor: "background.paper", //Funktion för att hämta våra färger från theme.
          border: "2px solid #9C8173",
          borderRadius: "0.5rem",
          margin: "2rem 0",
          width: "100%",
        }}
      >
        <Typography variant="h1" component="div" sx={{ textAlign: "center" }}>
          Tack för din beställning!
        </Typography>
        <Typography
          variant="h1"
          component="p"
          sx={{ textAlign: "center", fontSize: "1.25rem", padding: "1.5rem" }}
        >
          Ditt ordernummer: {orderNr}
        </Typography>

        <Typography
          variant="h2"
          component="p"
          sx={{ fontSize: "2rem", fontWeight: "400", mb: "1.5rem" }}
        >
          Din beställning:{" "}
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="order-overview">
            <TableHead>
              <TableRow>
                <StyledTableCell>Produkt</StyledTableCell>
                <StyledTableCell align="right">Antal</StyledTableCell>
                <StyledTableCell align="right">Pris</StyledTableCell>
                <StyledTableCell align="right">Summa</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.title}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <img
                      src={row.image}
                      alt={row.title}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    ></img>
                    {row.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.quantity}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.price}</StyledTableCell>
                  <StyledTableCell align="right">
                    {(row.quantity * row.price).toFixed(2)}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              <StyledTableRow>
                <StyledTableCell colSpan={3} align="right">
                  <strong>Totalt</strong>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <strong>{totalSum.toFixed(2)} kr</strong>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography sx={{ marginTop: "2rem" }}>
          Separat kvitto kommer skickas till din e-mail. Tack för att du har
          handlat på Bread & Butter!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centrerar knappen horisontellt
            mt: 3, // Lägg till marginal om du vill
          }}
          component={Link}
          href="/"
        >
          <Button>Till startsidan</Button>
        </Box>
      </Box>
    </Container>
  );
}
