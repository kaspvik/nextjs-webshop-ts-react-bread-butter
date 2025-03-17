"use client"

import { Container, Link } from "@mui/material";
import AddProductButton from "./add-product-button";


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

    <Link href="/product/new">
    <AddProductButton/>
    </Link>
    
    
    
      {children}
    </Container>
  );
}
