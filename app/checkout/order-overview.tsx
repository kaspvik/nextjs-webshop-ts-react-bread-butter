"use client";

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
import { useCart } from "../provider";

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

export default function OrderOverview() {
  const { cartItems } = useCart();
  const totalSum = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <Box sx={{ width: "100%", px: 6, py: 3 }}>
      <Typography variant="h1">Beställningsöversikt</Typography>
      <Box sx={{ backgroundColor: "background.default", mt: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell>Produkt</TableCell>
                <TableCell align="right">Antal</TableCell>
                <TableCell align="right">Pris/ styck</TableCell>
                <TableCell align="right">Delsumma</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
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
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    ></img>
                    {item.title}
                  </TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">
                    {(item.quantity * item.price).toFixed(2)}
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
