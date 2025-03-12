import AddIcon from '@mui/icons-material/Add';
import { Container, Fab, Typography } from "@mui/material";

export default function AddProductButton(){
    return(
        <Container sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            width:"400px",
            border:"1px solid black",
            padding: 2,
            borderRadius:"4px",
            gap: 1,
            marginTop: 2,
        }}>
            <Fab >
                <AddIcon data-cy="admin-add-product"/>
            </Fab>
                <Typography>Lägg till produkt</Typography>
        </Container>
    )
}