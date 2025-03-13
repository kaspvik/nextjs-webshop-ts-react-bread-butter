import { Delete } from "@mui/icons-material";
import { Alert, Button, IconButton, useMediaQuery, useTheme } from "@mui/material";

interface DeleteButtonProps {
  onDelete: () => void;
}

export default function DeleteButton({ onDelete }:DeleteButtonProps ){
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const handleDelete = () => {
      const isConfirmed = <Alert severity="warning">Är du säker på att du vill ta bort denna produkt?</Alert>
      if (isConfirmed){
        onDelete();
      }
    }

    return isSmallScreen ? (
        <IconButton onClick={handleDelete} data-cy="admin-remove-product" sx={{ color: "#9C8173" }}>
      <Delete />
    </IconButton>
    ) : (
        <Button
      onClick={handleDelete}
      data-cy="admin-remove-product"
      startIcon={<Delete />}
      sx={{
        backgroundColor: "#FAF2E9",
        color: "#9C8173",
        padding: "6px 16px",
        width: "120px",
        border: "1px solid #9C8173",
        "&:hover": { backgroundColor: "#E8DACD" },
      }}
    >
      TA BORT
    </Button>
    );
}

