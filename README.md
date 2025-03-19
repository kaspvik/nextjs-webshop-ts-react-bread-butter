# Bread & Butter
### A webshop project in Next.js using App Router. We're also using MUI, Prisma with sqlight and Zod.
<img width="1000" alt="hero2" align="center" src="https://github.com/user-attachments/assets/fbb8dbe9-55d8-4c16-84b8-e85e04787365" />


## Features
Some of the features presented in images below: 

<img width="500" alt="products" src="https://github.com/user-attachments/assets/983f03a8-040d-4557-ad34-e406197bc08e" />

Shop products overview; add to cart or read more about the products


<img width="500" alt="product-details" src="https://github.com/user-attachments/assets/aed14f46-4c83-4450-83b2-57a0cede5823" />

Product details page; add to cart or go back to browse


<img width="500" alt="cart" src="https://github.com/user-attachments/assets/1fc4f73d-ddd1-4bf2-90f5-c4cc95386623" />

Cart aside with cart summary; proceed to checkout or continue shoppping


<img width="500" alt="zod" src="https://github.com/user-attachments/assets/c2581382-5dfb-40c0-9f79-f18392f21c6f" />

Using Zod validation on customer delivery form; products overview and continue to payment option


<img width="500" alt="confirmation" src="https://github.com/user-attachments/assets/8a8f2dff-49dd-46a1-9cd6-8c3216838c04" />

Confirmation page with delivery- and order details

## Run and test the project

#### Install 
Run
```bash
npm install
```



#### To run the development server:

```bash
npm run dev
```
then open the Localhost port with your browser to see the result.

#### Running the tests with Cypress:
```bash
npm test
```
### Using Prisma and sqlight db
To synchronize the Prisma schema with the database schema
```bash
npm run push
```
Define and pupulate the db with mock data
```bash
npm run seed
```
Open and view the data in Prisma Studio
```bash
npm run studio
```



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

We haven't deployed our project on Vercel yet because the sqlight database is not supported on Vercel.

## Criteria for grading

- [X] Git & GitHub har använts
- [X] Projektmappen innehåller en README.md fil
- [X] Uppgiften lämnas in i tid!
- [X] Ett designsystem används som exempelvis Shadcn eller MUI

**Home**

- [X] Ska ha en övergripande layout med header, main & footer.
- [X] Startsidan ska lista samtliga produkter.
- [X] Det ska gå att lägga till produkter i kundvagnen (header + toast).
- [X] Det ska gå att klicka på en produkt och komma till en detaljsida.
- [X] Sidan ska vara responsiv och gå att använda på mobil, tablet & desktop.

**Produkt**

- [X] Ska ha en övergripande layout med header, main & footer.
- [X] Detaljsidan ska visa all info om en produkt.
- [X] Det ska gå att lägga till produkten i kundvagnen (header + toast).
- [X] Sidan ska vara responsiv och gå att använda på mobil, tablet & desktop.

**Kundvagn & Checkout**

- [X] Ska ha en övergripande layout med header, main & footer.
- [X] Det ska gå att gå till checkoutsidan och se innehållet i kundvagnen (knapp & url).
- [X] Det ska gå att se det totala priset i kundvagnen.
- [X] Det ska gå att ändra produkterna i kundvagnen (header + vyn + pris).
- [X] Det ska gå att ange leveransuppgifter i ett formulär.
- [X] Samtliga fält för checkoutsidans formulär ska ha valideringsregler.
- [X] Formulären vid utcheckningen ska gå att automatiskt fyllas i.
- [X] Bekräftelsesidan ska visa orderdetaljer och leveransuppgifter

**Admin**

- [X] Det finns en admin-sida för produkthantering
- [X] Det ska gå att se alla produkter på admin sidan
- [X] Det går att lägga till produkter via admin sidan
- [X] Det går att ta bort produkter via admin sidan
- [X] Det går att redigera produkter via admin sidan
- [X] Samtliga fält för adminsidans formulär ska ha valideringsregler
