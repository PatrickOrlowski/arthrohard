# Zadanie: Strona responsywna z produktami

### Wytyczne

1. **Responsywność strony**: Strona musi być w pełni responsywna, z możliwością dostosowania do różnych rozdzielczości ekranów. Wykonanie zgodnie z dobrymi praktykami (wolna ręka w implementacji).

2. **Lista produktów**:

   - Na dole strony należy wyświetlić "produkty".
   - Dane produktów należy pobrać z API:

     ```
     https://brandstestowy.smallhost.pl/api/random
     ```

     API obsługuje parametry:

     - `pageNumber`
     - `pageSize`  
       **Przykład**:  
       `https://brandstestowy.smallhost.pl/api/random?pageNumber=3&pageSize=50`

   - Funkcja ładowania produktów powinna działać przy przewijaniu strony na dół (infinite scroll).

3. **Popup z detalami**:

   - Po kliknięciu w produkt należy wyświetlić na środku ekranu popup.
   - W popupie powinny znajdować się szczegóły wybranego produktu.

4. **Opcja wyboru ilości elementów na stronie**:

   - Przycisk "select" powinien pozwalać użytkownikowi wybrać ilość produktów na stronie.
   - Domyślna wartość: **20 elementów**.

5. **Projekt graficzny**:

   - Aby zobaczyć projekt graficzny, należy założyć konto na Figma.
   - Link do projektu:  
     [Figma - Arthrohard-TEST](https://www.figma.com/file/ZR8RRI5bqfYu6H4uRr0BPI/Arthrohard-TEST?type=design&node-id=0-1&mode=design)

6. **Technologia**:
   - Strona musi być zakodowana w czystym HTML/CSS/JavaScript.
   - Po rozpakowaniu paczki z zadaniem strona powinna działać od razu po otwarciu pliku.

### Uwagi

- Zastosować standardowe techniki frontendu dla responsywności oraz user experience.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
