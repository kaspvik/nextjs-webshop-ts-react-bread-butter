import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function createData(
  image: string,
  title: string,
  quantity: number,
  price: number
) {
  return { image, title, quantity, price };
}

const rows = [
  createData("/images/rustiktragbrod.png", "Rustikt rågbröd", 3, 50),
  createData("/images/levain.png", "Levain", 2, 65),
  createData("/images/brytbrod.png", "Brytbröd", 1, 40),
];

const totalSum = rows.reduce((sum, row) => sum + row.quantity * row.price, 0);

export default function OrderOverview() {
  return (
    <Box sx={{ width: "100%", px: 6, py: 3 }}>
      <Typography variant="h1">Beställningsöversikt</Typography>
      <Box sx={{ backgroundColor: "background.default", mt: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell>Produkt</TableCell>
                <TableCell align="right">Pris/ styck</TableCell>
                <TableCell align="right">Antal</TableCell>
                <TableCell align="right">Delsumma</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.title}>
                  <TableCell
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
                  </TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">
                    {(row.quantity * row.price).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={3} align="right">
                  <strong>Totalt</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>{totalSum.toFixed(2)} kr</strong>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
