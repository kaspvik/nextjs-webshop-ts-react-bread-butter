import { useParams } from "next/navigation";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Produkt {id}</h1>
      <p>Här kan du visa produktens detaljer baserat på ID: {id}</p>
    </div>
  );
};

export default ProductPage;
