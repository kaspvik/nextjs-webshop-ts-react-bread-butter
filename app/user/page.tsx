import { db } from "@/prisma/db";
import { Card, CardContent, Typography } from "@mui/material";

export default async function UserPage() {
  const orders = await db.order.findMany({
    include: {
      items: true,
      user: true,
      deliveryAddress: true,
    },
  });

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Alla ordrar</h1>
        <p className="text-gray-700 mt-4">
          Det finns inga ordrar i databasen ännu.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Alla ordrar</h1>
      {orders.map((order) => (
        <Card key={order.id} className="w-full max-w-2xl mb-6 shadow-md">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Ordernummer: {order.orderNr}
            </Typography>

            <Typography variant="body2" color="textSecondary">
              Användare: {order.user.name} ({order.user.email})
            </Typography>

            {order.deliveryAddress && (
              <Typography variant="body2" color="textSecondary">
                Leveransadress: {order.deliveryAddress.address1},{" "}
                {order.deliveryAddress.city}
              </Typography>
            )}

            <div className="mt-4">
              {order.items.map((item) => (
                <div key={item.id} className="border-t pt-3 mt-3">
                  <Typography variant="subtitle1">{item.artist}</Typography>
                  <Typography variant="body2">
                    Antal: {item.quantity}
                  </Typography>
                  <Typography variant="body2">Pris: {item.price} kr</Typography>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
