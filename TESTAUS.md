# Ohjelmistotestaus – Frontend-projekti

## Tehtävä 2 – Kirjautumistesti

---

### Testin tavoite

Tavoitteena oli toteuttaa automaattinen hyväksymistesti frontend-projektin kirjautumissivulle käyttäen **Robot Framework** -testaustyökalua ja **Browser Library** -kirjastoa. Testi varmistaa, että kirjautumissivu toimii oikein oikeilla tunnuksilla ja näyttää onnistumisesta kertovan viestin.

---

### Testitiedosto

```
tests/login_test.robot
```

Testi on kirjoitettu Robot Framework -syntaksilla ja se suoritetaan kehityspalvelimen ollessa käynnissä.

---

### Käytetyt testitunnukset

| Kenttä       | Arvo       |
|--------------|------------|
| Käyttäjänimi | `testuser` |
| Salasana     | `test123`  |

Kirjautumissivun osoite testissä: `http://127.0.0.1:5173/login.html`

---

### Testin suoritus

Testi suoritetaan seuraavalla komennolla frontendin juurihakemistossa:

```bash
python -m robot -d outputs tests/login_test.robot
```

Ennen testin ajamista Vite-kehityspalvelin tulee olla käynnissä (`npm run dev`).

---

### Testin vaiheet

1. Avaa kirjautumissivu (`http://127.0.0.1:5173/login.html`)
2. Täytä käyttäjänimi-kenttään `testuser`
3. Täytä salasana-kenttään `test123`
4. Klikkaa **Login**-painiketta
5. Tarkista, että sivulla näkyy teksti `Login successful`

---

### Havainnot

- Kirjautumissivu latautui oikein selaimessa
- Käyttäjänimi- ja salasanakentät löytyvät oikein HTML-tunnisteiden perusteella (`id="login-username"`, `id="login-password"`, `id="login-btn"`, `id="login-message"`)
- Oikeilla tunnuksilla kirjautuminen näyttää vihreän onnistumisviestin
- Testi läpäistiin onnistuneesti ilman virheitä

---

### Tulostiedostot

Testi generoi automaattisesti seuraavat tulostiedostot hakemistoon `outputs/`:

| Tiedosto      | Kuvaus                                         |
|---------------|------------------------------------------------|
| `output.xml`  | Konekielinen testiraportti (Robot Framework)   |
| `log.html`    | Yksityiskohtainen ajoloki selaimessa avattavaksi |
| `report.html` | Yhteenvetoraportti testien tuloksista          |

---

### Yhteenveto

Kirjautumistesti toteutettiin onnistuneesti Robot Framework Browser Library -kirjastolla. Testi kattaa kirjautumissivun perustoiminnallisuuden: kentät löytyvät, lomakkeen voi täyttää ja lähettää, ja onnistumisviestin tarkistus toimii. Kaikki testit menivät läpi ensimmäisellä ajolla.

---

## Tehtävä 3 – Web form -testi

---

### Testin tavoite

Tavoitteena oli testata Web form -esimerkkisivun eri syötekenttien toiminta Robot Frameworkin Browser Library -kirjastolla.

---

### Testisivu

Testissä käytettiin valmista esimerkkisivua:

https://www.selenium.dev/selenium/web/web-form.html

---

### Testin vaiheet

Testissä suoritettiin seuraavat toiminnot:

1. Avattiin Web form -sivu
2. Täytettiin tekstikenttä
3. Täytettiin salasana
4. Täytettiin textarea
5. Valittiin vaihtoehto dropdown (select)
6. Täytettiin datalist-kenttä
7. Valittiin checkbox
8. Valittiin radio button
9. Klikattiin Submit-painiketta

---

### Havainnot

- Kaikki kentät toimivat odotetusti
- Browser Library pystyi käsittelemään eri input-tyyppejä onnistuneesti
- Testi suoritettiin ilman virheitä

---

### Yhteenveto

Web form -testi onnistui ja kattoi useita eri syötekenttätyyppejä, kuten dropdownit, checkboxit ja radiobuttonit. Testi vahvistaa, että Browser Library soveltuu hyvin frontendin käyttöliittymätestaukseen.

---

## Tehtävä 4 – Päiväkirjamerkinnän lisääminen

---

### Testin tavoite

Tavoitteena oli testata uuden päiväkirjamerkinnän lisääminen frontend-projektin päiväkirjasivulla käyttäen **Robot Framework** -testaustyökalua ja **Browser Library** -kirjastoa. Testi varmistaa, että lomake toimii oikein ja uusi merkintä ilmestyy sivulle lisäyksen jälkeen.

---

### Testitiedosto

[tests/diary_entry_test.robot](tests/diary_entry_test.robot)

---

### Testisivu

`http://127.0.0.1:5173/entries.html`

---

### Testin suoritus

Testi suoritetaan seuraavalla komennolla frontendin juurihakemistossa:

```bash
python -m robot -d outputs tests/diary_entry_test.robot
```

Ennen testin ajamista Vite-kehityspalvelin tulee olla käynnissä (`npm run dev`).

---

### Testin vaiheet

1. Avaa päiväkirjasivu (`http://127.0.0.1:5173/entries.html`)
2. Täytä päivämäärä-kenttään testipäivämäärä
3. Täytä tekstikenttään päiväkirjateksti
4. Klikkaa **Add Entry** -painiketta
5. Tarkista, että uusi merkintä näkyy `#cards-container`-elementissä

---

### Havainnot

- Päiväkirjasivu latautui oikein selaimessa
- Päivämäärä- ja tekstikentät löytyvät oikein HTML-tunnisteiden perusteella (`id="entry-date"`, `id="entry-text"`, `id="add-entry-btn"`)
- Uusi päiväkirjamerkintä ilmestyi sivulle oikein lisäyksen jälkeen
- Testi läpäistiin onnistuneesti ilman virheitä

---

### Tulostiedostot

Testi generoi automaattisesti seuraavat tulostiedostot hakemistoon `outputs/`:

| Tiedosto      | Kuvaus                                           |
|---------------|--------------------------------------------------|
| `output.xml`  | Konekielinen testiraportti (Robot Framework)     |
| `log.html`    | Yksityiskohtainen ajoloki selaimessa avattavaksi |
| `report.html` | Yhteenvetoraportti testien tuloksista            |

---

### Yhteenveto

Päiväkirjamerkinnän lisäämistesti toteutettiin onnistuneesti Robot Framework Browser Library -kirjastolla. Testi kattaa päiväkirjasivun perustoiminnallisuuden: lomakkeen kentät löytyvät, merkinnän voi lisätä ja uusi kortti ilmestyy sivulle oikein. Kaikki testit menivät läpi onnistuneesti.

---

## Tehtävä 5 – Kirjautumistesti .env-tiedoilla

---

### Testin tavoite

Tavoitteena oli toteuttaa kirjautumistesti siten, että käyttäjätunnus ja salasana luetaan ympäristömuuttujista eikä niitä kirjoiteta suoraan testitiedostoon. Tämä on tietoturvallisempi tapa hallita testitunnuksia.

---

### Testitiedosto

[tests/login_env_test.robot](tests/login_env_test.robot)

---

### Käytetyt ympäristömuuttujat

| Muuttuja        | Kuvaus                      |
|-----------------|-----------------------------|
| `TEST_USERNAME` | Kirjautumiseen käytetty käyttäjätunnus |
| `TEST_PASSWORD` | Kirjautumiseen käytetty salasana       |

Muuttujat asetetaan ennen testin ajamista komentorivillä:

```powershell
$env:TEST_USERNAME="testuser"
$env:TEST_PASSWORD="test123"
```

---

### Testin suoritus

Testi suoritetaan seuraavalla komennolla frontendin juurihakemistossa:

```bash
python -m robot -d outputs tests/login_env_test.robot
```

Ennen testin ajamista Vite-kehityspalvelin tulee olla käynnissä (`npm run dev`).

---

### Testin vaiheet

1. Luetaan käyttäjätunnus ympäristömuuttujasta `TEST_USERNAME`
2. Luetaan salasana ympäristömuuttujasta `TEST_PASSWORD`
3. Avataan kirjautumissivu (`http://127.0.0.1:5173/login.html`)
4. Täytetään käyttäjätunnus-kenttään ympäristömuuttujasta luettu arvo
5. Täytetään salasana-kenttään ympäristömuuttujasta luettu arvo
6. Klikataan **Login**-painiketta
7. Tarkistetaan, että sivulla näkyy teksti `Login successful`

---

### Havainnot

- Kirjautumistunnus ja salasana luettiin onnistuneesti ympäristömuuttujista
- Tunnuksia ei ole kirjoitettu näkyviin testitiedostoon
- Testi läpäistiin onnistuneesti ilman virheitä

---

### Tulostiedostot

Testi generoi automaattisesti seuraavat tulostiedostot hakemistoon `outputs/`:

| Tiedosto      | Kuvaus                                           |
|---------------|--------------------------------------------------|
| `output.xml`  | Konekielinen testiraportti (Robot Framework)     |
| `log.html`    | Yksityiskohtainen ajoloki selaimessa avattavaksi |
| `report.html` | Yhteenvetoraportti testien tuloksista            |

---

### Yhteenveto

Kirjautumistesti ympäristömuuttujilla toteutettiin onnistuneesti. Tunnuksia ei tallenneta suoraan testitiedostoon, mikä parantaa tietoturvaa. Testi läpäistiin onnistuneesti.

---

## Tehtävä 6 – Kirjautumistesti salatuilla tunnuksilla

---

### Testin tavoite

Tavoitteena oli toteuttaa kirjautumistesti, jossa käyttäjätunnus ja salasana on salattu **CryptoLibrary**-kirjaston avulla. Salatut arvot tallennetaan testitiedostoon `crypt:`-muodossa, ja CryptoLibrary purkaa salauksen automaattisesti testin suorituksen aikana.

---

### Testitiedosto

[tests/login_crypto_test.robot](tests/login_crypto_test.robot)

---

### Käytetty salausmenetelmä

- Kirjasto: **CryptoLibrary** (`robotframework-crypto`)
- Tunnukset salataan komennolla `python -m CryptoLibrary encrypt <arvo>`
- Salatut arvot tallennetaan testitiedostoon muodossa `crypt:xxxxxx`
- Salaus puretaan automaattisesti ajon aikana yksityisellä avaimella (`private_key.json`)

---

### Testin suoritus

Testi suoritetaan seuraavalla komennolla frontendin juurihakemistossa:

```bash
python -m robot -d outputs tests/login_crypto_test.robot
```

Ennen ajoa tarvitaan:
- `private_key.json` juurihakemistossa
- Vite-kehityspalvelin käynnissä (`npm run dev`)

---

### Testin vaiheet

1. CryptoLibrary purkaa salatut tunnukset automaattisesti
2. Avataan kirjautumissivu (`http://127.0.0.1:5173/login.html`)
3. Täytetään käyttäjätunnus-kenttään purettu arvo
4. Täytetään salasana-kenttään purettu arvo
5. Klikataan **Login**-painiketta
6. Tarkistetaan, että sivulla näkyy teksti `Login successful`

---

### Havainnot

- Salatut tunnukset tallennettiin testitiedostoon `crypt:`-muodossa
- CryptoLibrary purki salauksen onnistuneesti ajon aikana
- Selkokieliset tunnukset eivät näy testitiedostossa
- Testi läpäistiin onnistuneesti ilman virheitä

---

### Tulostiedostot

Testi generoi automaattisesti seuraavat tulostiedostot hakemistoon `outputs/`:

| Tiedosto      | Kuvaus                                           |
|---------------|--------------------------------------------------|
| `output.xml`  | Konekielinen testiraportti (Robot Framework)     |
| `log.html`    | Yksityiskohtainen ajoloki selaimessa avattavaksi |
| `report.html` | Yhteenvetoraportti testien tuloksista            |

---

### Yhteenveto

Kirjautumistesti salatuilla tunnuksilla toteutettiin onnistuneesti CryptoLibrary-kirjaston avulla. Tunnuksia ei tallenneta selkokielisinä testitiedostoon, mikä parantaa merkittävästi tietoturvaa. Testi läpäistiin onnistuneesti.

---

*Tekoälyä on käytetty tekstin jäsentelyyn ja muotoiluun. Testien toteutus, suoritus ja tarkistus on tehty itse.*