# Szkoła Górska SP1 Brenna Leśnica - Landing Page

Strona lądowania dla klasy sportowej o profilu narciarskim. Szybka, lekka, bez backendu.

## 🚀 Jak wdrożyć na GitHub Pages

1. **Utwórz repozytorium**
   - Zaloguj się na GitHub i utwórz nowe publiczne repozytorium o nazwie np. `szkola-gorska`.
   - Nie dodawaj na razie pliku README ani .gitignore (masz je tutaj).

2. **Wrzuć pliki**
   - Jeśli korzystasz z terminala:
     ```bash
     git init
     git add .
     git commit -m "Pierwsza wersja strony"
     git branch -M main
     git remote add origin https://github.com/TWOJA-NAZWA-UZYTKOWNIKA/szkola-gorska.git
     git push -u origin main
     ```
   - Jeśli korzystasz z przeglądarki (Upload files):
     - Przeciągnij wszystkie pliki (`index.html`, `styles.css`, `script.js`, folder `assets`) do repozytorium.

3. **Uruchom stronę**
   - Wejdź w zakładkę **Settings** (Ustawienia) w swoim repozytorium.
   - W menu po lewej wybierz **Pages**.
   - W sekcji **Build and deployment** -> **Branch** wybierz `main` oraz folder `/ (root)`.
   - Kliknij **Save**.

4. **Gotowe!**
   - Po kilkudziesięciu sekundach odśwież stronę. Na górze pojawi się link, np. `https://twoj-login.github.io/szkola-gorska/`.

## ⚙️ Konfiguracja

### Edycja licznika rekrutacji
Otwórz plik `script.js` i edytuj zmienne na samej górze:
```javascript
const GOAL = 14;              // Cel (ilość dzieci)
const CURRENT_DECLARATIONS = 0; // Ile już macie zgłoszeń
```
Pasek postępu przeliczy się automatycznie.

### Formularz
Obecnie formularz tylko "udaje" wysyłanie. Aby zbierać dane:
1. Utwórz **Google Form**.
2. Podepnij go pod formularz lub zostaw obecne rozwiązanie (symulacja + prośba o kontakt).
3. Możesz też zmienić działanie w `script.js`, np. odkomentowując linię z `mailto`.

## 🎨 Dostosowanie wyglądu
Wszystkie kolory i fonty są zdefiniowane w `styles.css` w sekcji `:root` na górze pliku.
