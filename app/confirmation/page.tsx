import { Box, Container, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { products } from "@/data";
import { Product } from "@/data";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "articleNumber", headerName: "Art.nr.", width: 90 },
  {
    field: "title",
    headerName: "Produkt",
    width: 150,
    editable: false,
  },
  {
    field: "quantity",
    headerName: "Antal",
    type: "number",
    width: 150,
    editable: false,
  },
  {
    field: "price",
    headerName: "Pris",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "sum",
    headerName: "Summa",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) =>
      row.quantity && row.price
        ? `${(row.quantity * row.price).toFixed(2)} kr`
        : "",
  },
];

const rows: GridRowsProp = [
  { articleNumber: "1234", title: "Rustikt rågbröd", quantity: 2, price: 50 },
  { articleNumber: "2345", title: "Levain", quantity: 4, price: 65 },
];

export default function ConfirmationPage() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        minHeight: "100vh",
      }}
    >
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 4, //Mått vi förmodligen vill använda i hela appen. (1=8px)
          bgcolor: "background.paper", //Funktion för att hämta våra färger från theme.
          border: "2px solid #9C8173",
          borderRadius: "0.5rem",
          margin: "2rem 0",
          width: "100%",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Container>
  );
}
