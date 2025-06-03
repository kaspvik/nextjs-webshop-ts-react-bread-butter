# Surf & Sound

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

Vi använder Zod för att validera data på backend, inklusive alla API-endpoints och Server Actions.

- [x] Skapa ett ER diagram som ska ha visats vid idégodkännandet.

Ett ER diagram presenteras och godkändes i samband med idegodkännandet. Diagrammet har även uppdaterats löpande.

- [x] Beskriv er företagsidé i en kort textuell presentation, detta ska ha visats vid idégodkännandet.

En presentation av vår ide presenteras och godkändes vid idegodkännandet.

- [x] All data som programmet utnyttjar ska vara sparat i en SQL databas (produkter, beställningar, konton, mm) med undantaget av bilder.

Vi använder Prisma ORM kopplat till en SQLite-databas där vi lagrar produkter, beställningar och användarkonton etc.

- [x] Man ska kunna logga in som administratör i systemet.

Man loggar in via Github-auth och sen får behörighet via db. Väl där har man åtkomst till admin sidan och kan göra ändringar etc.

- [x] Inga Lösenord får sparas i klartext i databasen.

Vi använder endast inlogg via Github.

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

Denna funktionen är mestadels intakt från förra projektet.

- [x] En besökare som gör en beställning ska få möjligheten att registrera sig samt logga in och måste vara inloggad som kund innan beställningen skapas.

Under checkout erbjuds måste besökaren logga in eller skapa ett konto. Endast inloggade kunder kan slutföra en beställning.

- [x] Checkoutflödet i frontendapplikationen ska ha validering på samtliga fält.

Checkoutflödet valideras med Zod

- [?] När man är inloggad som kund ska man kunna se sina gjorda beställning och om det är skickade eller inte.

Inloggade användare kan se en lista över alla sina lagda ordrar. Skickade ordrar är markerade med "Shipped."

- [x] Administratörer ska kunna redigera produkt.

Admin kan redigera produktinformation som namn, pris, beskrivning, lagerantal och kategorier. Ändringarna sparas direkt i databasen.

- [x] Administratörer ska kunna lägga till och ta bort produkter.

I adminpanelen kan admin skapa nya produkter samt ta bort befintliga produkter från webbshopen. Alla ändringar uppdateras i databasen.

- [?] Administratörer ska kunna markera beställningar som skickade.

Administratören kan se en lista över alla ordrar och kan toggla dem mellan skickade och ej skickade.
