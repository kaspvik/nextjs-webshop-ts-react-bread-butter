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

Cart aside with cart summary; proceed to checkout or continue shopping

<img width="500" alt="zod" src="https://github.com/user-attachments/assets/c2581382-5dfb-40c0-9f79-f18392f21c6f" />

Using Zod validation on customer delivery form; products overview and continue to payment option

<img width="500" alt="confirmation" src="https://github.com/user-attachments/assets/8a8f2dff-49dd-46a1-9cd6-8c3216838c04" />

Confirmation page with delivery- and order details

<img width="500" alt="admin" src="https://github.com/user-attachments/assets/aecc0e54-737a-4059-8485-a8aee499eacf" />

Admin page where you can edit, add and delete products from the web shop.

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

- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil
- [x] Uppgiften lämnas in i tid!
- [x] Ett designsystem används som exempelvis Shadcn eller MUI

**Home**

- [x] Ska ha en övergripande layout med header, main & footer.
- [x] Startsidan ska lista samtliga produkter..
- [x] Det ska gå att lägga till produkter i kundvagnen (header + toast).
- [x] Det ska gå att klicka på en produkt och komma till en detaljsida.
- [x] Sidan ska vara responsiv och gå att använda på mobil, tablet & desktop.

**Produkt**

- [x] Ska ha en övergripande layout med header, main & footer.
- [x] Detaljsidan ska visa all info om en produkt.
- [x] Det ska gå att lägga till produkten i kundvagnen (header + toast).
- [x] Sidan ska vara responsiv och gå att använda på mobil, tablet & desktop.

**Kundvagn & Checkout**

- [x] Ska ha en övergripande layout med header, main & footer.
- [x] Det ska gå att gå till checkoutsidan och se innehållet i kundvagnen (knapp & url).
- [x] Det ska gå att se det totala priset i kundvagnen.
- [x] Det ska gå att ändra produkterna i kundvagnen (header + vyn + pris).
- [x] Det ska gå att ange leveransuppgifter i ett formulär.
- [x] Samtliga fält för checkoutsidans formulär ska ha valideringsregler.
- [x] Formulären vid utcheckningen ska gå att automatiskt fyllas i.
- [x] Bekräftelsesidan ska visa orderdetaljer och leveransuppgifter

**Admin**

- [x] Det finns en admin-sida för produkthantering
- [x] Det ska gå att se alla produkter på admin sidan
- [x] Det går att lägga till produkter via admin sidan
- [x] Det går att ta bort produkter via admin sidan
- [x] Det går att redigera produkter via admin sidan
- [x] Samtliga fält för adminsidans formulär ska ha valideringsregler
