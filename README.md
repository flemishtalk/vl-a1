# 🇧🇪 Niderlandzki A1 — Kurs flamandzki

Darmowy, interaktywny kurs języka niderlandzkiego w wersji belgijskiej (flamandzkiej) dla zupełnych początkujących (poziom A1).

**Działaj bez instalacji** — wszystko w HTML/CSS/JS, zero zależności, zero serwera.

🔗 **[Otwórz kurs online](https://TWOJ-USERNAME.github.io/vlaams-a1/)**

---

## 📚 Zawartość kursu

| Lekcja | Temat | Ćwiczenia |
|--------|-------|-----------|
| 1 | Powitania i przedstawianie się | Dopasowanie, quiz, uzupełnianie |
| 2 | Liczby i dane osobowe | Wpisywanie liczb, mini dialog, quiz |
| 3 | Zakupy i kawiarnia | Dopasowanie, quiz sytuacyjny |
| 4 | Transport i miasto | Dopasowanie, quiz |
| 5 | Praca i codzienne życie | Uzupełnianie, quiz końcowy |

### Narzędzia do nauki
- **Fiszki – Czasowniki** (`flashcards-werkwoorden.html`) — 47 czasowników z perfectum, tłumaczeniami PL/EN i zdaniami przykładowymi
- **Fiszki – Słownictwo** (`flashcards-woordenschat.html`) — wyrażenia i zdania z lekcji 2
- **Test interaktywny** (`test.html`) — meerkeuze + invullen, wszystkie materiały, pełne wyniki

---

## 🗂️ Struktura plików

```
vlaams-a1/
├── index.html                     ← strona główna / landing page
├── flashcards-werkwoorden.html    ← fiszki czasowniki
├── flashcards-woordenschat.html   ← fiszki słownictwo
├── test.html                      ← interaktywny test
├── assets/
│   ├── style.css                  ← wspólne style
│   └── shared.js                  ← wspólne funkcje JS
└── lessons/
    ├── les-1.html                 ← Lekcja 1
    ├── les-2.html                 ← Lekcja 2
    ├── les-3.html                 ← Lekcja 3
    ├── les-4.html                 ← Lekcja 4
    └── les-5.html                 ← Lekcja 5
```

---

## 🚀 Uruchomienie lokalnie

Nie wymaga żadnej instalacji. Wystarczy otworzyć `index.html` w przeglądarce:

```bash
git clone https://github.com/TWOJ-USERNAME/vlaams-a1.git
cd vlaams-a1
# otwórz index.html w przeglądarce
```

Lub z prostym lokalnym serwerem (opcjonalnie):
```bash
python3 -m http.server 8000
# otwórz http://localhost:8000
```

---

## 🌐 Publikacja na GitHub Pages

1. Wejdź na **github.com** i zaloguj się
2. Utwórz nowe repozytorium o nazwie `vlaams-a1`
3. Wgraj wszystkie pliki (patrz instrukcja poniżej)
4. Wejdź w **Settings → Pages → Source: main branch / root**
5. Kurs będzie dostępny pod: `https://TWOJ-USERNAME.github.io/vlaams-a1/`

---

## ✨ Funkcje

- ✅ Działa w pełni offline (po załadowaniu strony)
- ✅ Responsywny design — działa na telefonie i komputerze
- ✅ Ćwiczenia interaktywne z natychmiastowym feedbackiem
- ✅ Fiszki z możliwością oznaczania "do nauki" (zapisywane lokalnie)
- ✅ Test z meerkeuze i invullen, wyniki ze szczegółami
- ✅ Weryfikacja odpowiedzi ignoruje polskie i niderlandzkie znaki diakrytyczne oraz interpunkcję

---

## 📄 Licencja

MIT — możesz swobodnie używać, modyfikować i udostępniać.
