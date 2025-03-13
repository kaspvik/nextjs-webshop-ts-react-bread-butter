import { Edit } from "@mui/icons-material";
import { Button, IconButton, useMediaQuery, useTheme } from "@mui/material";

export default function EditButton({ onClick }: { onClick?: () => void }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return isSmallScreen ? (
        <IconButton onClick={onClick} data-cy="admin-edit-product" sx={{ color: "#9C8173" }}>
      <Edit />
    </IconButton>
    ) : (
        <Button
      onClick={onClick}
      data-cy="admin-edit-product"
      startIcon={<Edit />}
      sx={{
        backgroundColor: "#9C8173",
        color: "#FAF2E9",
        padding: "6px 16px",
        width: "120px",
        border: "1px solid #9C8173",
        "&:hover": { backgroundColor: "#876C5A" },
      }}
    >
      REDIGERA
    </Button>
    );
}

