# Instrukcje dotyczące zdjęć (Assets)

Aby strona wyglądała profesjonalnie, podmień domyślne placeholdery na własne zdjęcia.

## 1. Zdjęcie Główne (Hero)
- **Lokalizacja:** `styles.css` (linia ok. 145)
- **Co zrobić:** Znajdź sekcję `.hero` i podmień `url('...')` na ścieżkę do swojego zdjęcia, np. `url('assets/hero.jpg')`.
- **Sugerowane zdjęcie:** Dzieci na nartach, widok na góry w Brennej, szkoła w zimowej scenerii.
- **Wymiary:** ok. 1920x1080px (zoptymalizowane, max 200-300KB).

## 2. Open Graph Image (Facebook)
- **Lokalizacja:** `assets/og-image.jpg`
- **Co zrobić:** Wrzuć do folderu `assets` zdjęcie o nazwie `og-image.jpg`.
- **Wymiary:** 1200x630px.
- **Cel:** To zdjęcie wyświetli się, gdy ktoś udostępni link na Facebooku.

## 3. Logotypy Partnerów
- Możesz dodać pliki .png/.svg do folderu `assets` i zamienić `div.logo-placeholder` w `index.html` na tagi `<img>`.
