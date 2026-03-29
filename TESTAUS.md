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

*Dokumentoinnin tukena on hyödynnetty tekoälyä, mutta testin toteutus, suoritus ja tarkistus on tehty itse.*

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