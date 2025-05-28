import { getAllOrders } from "@/app/admin/action";
import OrderTable from "@/app/admin/orders/order-table";
import { Container, Dialog } from "@mui/material";

export default async function OrdersPage() {
  try {
    const orders = await getAllOrders();
    return (
      <Dialog disableScrollLock open>
        <OrderTable orders={orders} />
      </Dialog>
    );
  } catch (error) {
    return (
      <Container>
        <p>Failed to load orders.</p>
      </Container>
    );
  }
}
