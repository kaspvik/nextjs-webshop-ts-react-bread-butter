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

- [x] Alla sidor skall vara responsiva.

Vi har använt MUI som har inbyggt stöd för responsiva komponenter.

- [x] Arbetet ska implementeras med NextJS.

Hela projektet är byggt i Next.js. Funktioner som Server Components, Server Actions och filbaserad routing

- [x] Backenden ska ha validering på samtliga endpoints (även Server Actions).

Vi använder Zod för att validera all data på backend, inklusive alla API-endpoints och Server Actions.

- [x] Skapa ett ER diagram som ska ha visats vid idégodkännandet.

Ett ER diagram presenteras och godkändes i samband med idegodkännandet.

- [x] Beskriv er företagsidé i en kort textuell presentation, detta ska ha visats vid idégodkännandet.

En presentation av vår ide presenteras och godkändes vid idegodkännandet.

- [x] All data som programmet utnyttjar ska vara sparat i en SQL databas (produkter, beställningar, konton, mm) med undantaget av bilder.

Vi använder Prisma ORM kopplat till en SQLite-databas där vi lagrar produkter, beställningar och användarkonton etc. bilder??

- [x] Man ska kunna logga in som administratör i systemet.

Man loggar in via Github-auth och sen får behörighet via db. Väl där har man åtkomst till admin sidan och kan göra ändringar etc. 

- [x] Inga Lösenord får sparas i klartext i databasen.

??

- [x] En besökare ska kunna beställa produkter från sidan, detta ska uppdatera lagersaldot i databasen.

När user genomför beställning skapas en order i databasen. Samtidigt uppdateras lagersaldot automatiskt för varje produkt som ingår i beställningen, baserat på antalet beställda enheter.

- [x] Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan.

I adminsidan kan administratörer justera lagersaldo. Ändringarna uppdateras direkt i databasen och produktents saldo uppdateras.

- [x] Administratörer ska kunna se en lista på alla gjorda beställningar.

I admin finns en vy där admin kan se en översikt över alla kundbeställningar, inklusive information om produkter, kunduppgifter och orderstatus.

- [x] Sidans produkter ska delas upp i kategorier, en produkt ska tillhöra minst en kategori, men kan tillhöra flera.

kategorisering där varje produkt kopplas till en kategori i databasen. 

- [x] Från hemsidan ska man kunna se en lista över alla produkter, och man ska kunna lista bara dom produkter som tillhör en kategori.

På produktsidan visas en fullständig lista över alla produkter. Användaren kan även filtrera produkterna för att endast visa de som hör till en specifik kategori.

- [x] Besökare ska kunna lägga produkterna i en kundkorg, som är sparad i local-storage på klienten.

????

- [x] En besökare som gör en beställning ska få möjligheten att registrera sig samt logga in och måste vara inloggad som kund innan beställningen skapas.

Under checkout erbjuds måste besökaren logga in eller skapa ett konto. Endast inloggade kunder kan slutföra en beställning.

- [x] Checkoutflödet i frontendapplikationen ska ha validering på samtliga fält.


- [?] När man är inloggad som kund ska man kunna se sina gjorda beställning och om det är skickade eller inte.

- [x] Administratörer ska kunna redigera produkt.

Admin kan redigera produktinformation som namn, pris, beskrivning, lagerantal och kategorier. Ändringarna sparas direkt i databasen.


- [x] Administratörer ska kunna lägga till och ta bort produkter.

I adminpanelen kan admin skapa nya produkter samt ta bort befintliga produkter från webbshopen. Alla ändringar uppdateras i databasen.

- [?] Administratörer ska kunna markera beställningar som skickade.
