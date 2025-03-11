import { Product } from "@/data";
import { Box, Button, Container } from "@mui/material";

export default function AdminItem(product: Product){
    return (
        <Container key={product.id} sx={{
            display:"flex",
            gap:"4",
            justifyContent:"space-between",
        }}>
            <Box>
                <img src={product.image}/>
            </Box>

            <Box>
                <h4>{product.title}</h4>
                <p>{product.articleNumber}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <p>{product.weight}</p>
                <textarea name="Beskrivning" id="Textbox" placeholder="Skriv information om produkten här"></textarea>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection:"column",
                gap:"2",
                justifyContent:"space-between"
            }}>
                
        <Button
            size="small"
            sx={{
              backgroundColor: "#9C8173",
              color: "#FAF2E9",
              mx: "auto",
              padding: 1,
              minWidth: "90px",
              
            }}
          >
            REDIGERA
        </Button>

        <Button
            size="small"
            sx={{
            backgroundColor: "#FAF2E9",
            color: "#9C8173",
            mx: "auto",
            padding: 1,
            minWidth: "90px",
            margin: 1,
            }}
            >
            TA BORT
        </Button>

            </Box>

            
        </Container>
    )
}