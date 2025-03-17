"use client"

import { Container } from "@mui/material";
import AddProductButton from "./buttons/add-product-button";


export default function AdminLayout({ children }: { children: React.ReactNode }){
  
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bgcolor: "background.paper",
        marginTop: 2,
      }}
    > 

    
    <AddProductButton/>
    
    
    
    
      {children}
    </Container>
  );
}
