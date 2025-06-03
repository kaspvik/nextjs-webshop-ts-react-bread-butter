import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  StyledTableCell,
  StyledTableRow,
} from "../components/styled-table-components";

interface ReceiptProps {
  items: Array<{
    id: string;
    artist: string;
    image: string;
    quantity: number;
    price: number;
  }>;
  totalSum: number;
}

export default function Receipt({ items, totalSum }: ReceiptProps) {
  return (
    <>
      <Typography
        variant="h2"
        component="p"
        sx={{ fontSize: "1.5rem", fontWeight: "400", mb: "1.5rem" }}>
        Your order:
      </Typography>
      <TableContainer component={"div"} sx={{ maxHeight: "30vh" }}>
        <Table aria-label="order-overview">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product</StyledTableCell>
              <StyledTableCell align="right">Number</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.artist}
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      display: { xs: "none", sm: "block" }, // Dölj på små skärmar
                    }}
                  />

                  {item.artist}
                </StyledTableCell>
                <StyledTableCell align="right">{item.quantity}</StyledTableCell>
                <StyledTableCell align="right">{item.price}</StyledTableCell>
                <StyledTableCell align="right">
                  {(item.quantity * item.price).toFixed(2)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
            <StyledTableRow>
              <StyledTableCell colSpan={3} align="right">
                <strong>Total</strong>
              </StyledTableCell>
              <StyledTableCell align="right">
                <strong>{totalSum.toFixed(2)} kr</strong>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
