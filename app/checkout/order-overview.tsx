"use client";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useCart } from "../provider";

export default function OrderOverview() {
  const { cartItems, totalSum } = useCart();

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 1, sm: 2, md: 6 },
        py: 3,
      }}
    >
      <Typography variant="h4" sx={{ fontFamily: "var(--font-tomorrow)" }}>
        Order overview
      </Typography>
      <Box
        sx={{
          backgroundColor: "background.default",
          mt: 2,
          maxWidth: { xs: "310px", sm: "100%" },
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ p: 1, fontFamily: "var(--font-tomorrow)" }}>
                  Product
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ p: 1, fontFamily: "var(--font-tomorrow)" }}
                >
                  Number
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ p: 1, fontFamily: "var(--font-tomorrow)" }}
                >
                  Price/ unit
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ p: 1, fontFamily: "var(--font-tomorrow)" }}
                >
                  Subtotal
                </TableCell>
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
                      gap: "0.5rem",
                      fontFamily: "var(--font-tomorrow)",
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.artist}
                      sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        display: { xs: "none", sm: "block" },
                      }}
                    />
                    {item.artist} - {item.album}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontFamily: "var(--font-tomorrow)" }}
                  >
                    {item.quantity}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontFamily: "var(--font-tomorrow)" }}
                  >
                    {item.price}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontFamily: "var(--font-tomorrow)" }}
                  >
                    {(item.quantity * item.price).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell
                  colSpan={3}
                  align="right"
                  sx={{ fontFamily: "var(--font-tomorrow)" }}
                >
                  <Typography variant="h6" sx={{ fontFamily: "var(--font-tomorrow)" }}>
                    Total
                  </Typography>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontFamily: "var(--font-tomorrow)" }}
                >
                  <Typography variant="h6" sx={{ fontFamily: "var(--font-tomorrow)" }}>
                    {totalSum.toFixed(2)} kr
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
