import { Delete } from "@mui/icons-material";
import { Button, IconButton, useMediaQuery, useTheme } from "@mui/material";

export default function DeleteButton({ onClick }: { onClick?: () => void }){
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return isSmallScreen ? (
        <IconButton onClick={onClick} data-cy="admin-remove-product" sx={{ color: "#9C8173" }}>
      <Delete />
    </IconButton>
    ) : (
        <Button
      onClick={onClick}
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

