import { Dialog } from "@mui/material";
import AddProductForm from "../../product-form";

export default function NewProductPage() {
  return (
    <Dialog open>
      <AddProductForm />
    </Dialog>
  );
}
