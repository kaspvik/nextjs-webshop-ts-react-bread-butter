# Surf & Sound 📀

##Uppgiftsbeskrivning:

*Året är 1992, Waynes World och Charlie Moon
går på biograferna. Janne Kemi är en finsk ultramiljonär som bestämt sig för att satsa på en ny e-handeln. Han vill investera i nya hemsidor. Han har anlitat er för att ta fram dessa sidor. Han har vissa specifika krav från sin IT avdelning som han bifogat som en kravspecifikation. Förutom det har ni fria händer att ta fram en grym idé och tjäna sjuka pengar (åt Janne).*

#### För att möta uppdragsgivarens behov och krav har vi valt att utgå från en av våra befintliga webbplatser, Bread & Butter, och byta fokus från lyxbröd till en annan ikonisk produkt från det legendariska året 1992 – CD-skivor. Vi har utvecklat en webbshop-applikation med hjälp av Next.js, där applikationen hämtar och sparar data i en SQL-databas. 


## Kom igång med projektet:

#### Installera:

Kör

```bash
npm install
```

#### För att köra utvecklingsservern:

```bash
npm run dev
```

öppna sedan Localhost-porten med din webbläsare för att se resultatet.


### Använda Prisma och SQLite-databasen:

Så här synkroniserar du Prisma-schemat med databasschemat

```bash
npm run push
```

Define and pupulate the db with mock data

```bash
npm run seed
```

Öppna och visa data i Prisma Studio

```bash
npm run studio
```

## Läs mer

För att lära dig mer om Next.js, ta en titt på följande resurser:

- [Next.js-dokumentation](https://nextjs.org/docs) - lär dig mer om Next.js funktioner och API.
- [Lär dig Next.js](https://nextjs.org/learn) - en interaktiv Next.js-handledning.

## Distribution på Vercel:
[Klicka på mig!](https://nextjs-webshop-ts-react-bread-butter-illubht4h.vercel.app/)

## Betygskriterier samt kommentarer:

- [x] Alla sidor skall vara responsiva. - *Vi har använt MUI som har inbyggt stöd för responsiva komponenter.*

- [x] Arbetet ska implementeras med NextJS. - *Hela projektet är byggt i Next.js. Funktioner som Server Components, Server Actions och filbaserad routing.*

- [x] Backenden ska ha validering på samtliga endpoints (även Server Actions). - *Vi använder Zod för att validera data på backend, inklusive alla API-endpoints och Server Actions.*

- [x] Skapa ett ER diagram som ska ha visats vid idégodkännandet. - *Ett ER diagram presenteras och godkändes i samband med idegodkännandet. Diagrammet har även uppdaterats löpande.*

- [x] Beskriv er företagsidé i en kort textuell presentation, detta ska ha visats vid idégodkännandet. - *En presentation av vår ide presenteras och godkändes vid idegodkännandet.*

- [x] All data som programmet utnyttjar ska vara sparat i en SQL databas (produkter, beställningar, konton, mm) med undantaget av bilder. - *Vi använder Prisma ORM kopplat till en SQLite-databas där vi lagrar produkter, beställningar och användarkonton etc.*

- [x] Man ska kunna logga in som administratör i systemet. - *Man loggar in via Github-auth och sen får behörighet via db. Väl där har man åtkomst till admin sidan och kan göra ändringar etc.*

- [x] Inga Lösenord får sparas i klartext i databasen. - *Vi använder endast inlogg via Github.*

- [x] En besökare ska kunna beställa produkter från sidan, detta ska uppdatera lagersaldot i databasen. - *När user genomför beställning skapas en order i databasen. Samtidigt uppdateras lagersaldot automatiskt för varje produkt som ingår i beställningen, baserat på antalet beställda enheter.*

- [x] Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan. - *I adminsidan kan administratörer justera lagersaldo. Ändringarna uppdateras direkt i databasen och produktents saldo uppdateras.*

- [x] Administratörer ska kunna se en lista på alla gjorda beställningar. - *I admin finns en vy där admin kan se en översikt över alla kundbeställningar, inklusive information om produkter, kunduppgifter och orderstatus.*

- [x] Sidans produkter ska delas upp i kategorier, en produkt ska tillhöra minst en kategori, men kan tillhöra flera.
kategorisering där varje produkt kopplas till en kategori i databasen.

- [x] Från hemsidan ska man kunna se en lista över alla produkter, och man ska kunna lista bara dom produkter som tillhör en kategori. - *På produktsidan visas en fullständig lista över alla produkter. Användaren kan även filtrera produkterna för att endast visa de som hör till en specifik kategori.*

- [x] Besökare ska kunna lägga produkterna i en kundkorg, som är sparad i local-storage på klienten. - *Denna funktionen är mestadels intakt från förra projektet.*

- [x] En besökare som gör en beställning ska få möjligheten att registrera sig samt logga in och måste vara inloggad som kund innan beställningen skapas. - *Under checkout erbjuds måste besökaren logga in eller skapa ett konto. Endast inloggade kunder kan slutföra en beställning.*

- [x] Checkoutflödet i frontendapplikationen ska ha validering på samtliga fält. - *Checkoutflödet valideras med Zod.*

- [x] När man är inloggad som kund ska man kunna se sina gjorda beställning och om det är skickade eller inte. - *Inloggade användare kan se en lista över alla sina lagda ordrar. Skickade ordrar är markerade med "Shipped."*

- [x] Administratörer ska kunna redigera produkt. - *Admin kan redigera produktinformation som namn, pris, beskrivning, lagerantal och kategorier. Ändringarna sparas direkt i databasen.*

- [x] Administratörer ska kunna lägga till och ta bort produkter. - *I adminpanelen kan admin skapa nya produkter samt ta bort befintliga produkter från webbshopen. Alla ändringar uppdateras i databasen.*

- [x] Administratörer ska kunna markera beställningar som skickade. - *Administratören kan se en lista över alla ordrar och kan toggla dem mellan skickade och ej skickade.*
