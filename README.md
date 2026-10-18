# Simmerhûs

Website van [Simmerhûs](https://www.simmerhus.nl), vakantiehuis in Hoorn op Terschelling. Statische site in het Nederlands en Engels, gebouwd met [Eleventy](https://www.11ty.dev/). De uitvoer is platte HTML, CSS en een paar regels JavaScript.

## Structuur

| Map | Wat | Per site verschillend? |
| --- | --- | --- |
| `content/` | Teksten, foto's en instellingen van deze site | Ja |
| `content/_data/site.json` | Naam, adres, e-mail, socials, agenda-link, formulier | Ja |
| `content/nl/`, `content/en/` | De pagina's per taal; de tekst staat bovenaan elk bestand | Ja |
| `content/img/` | Foto's (WebP) | Ja |
| `theme/` | Layouts, CSS, JavaScript, lettertype, vertaalde knopteksten | Nee, identiek aan [silhus](https://github.com/mrossem/silhus) |

Een tekst aanpassen: open het bestand in `content/nl/` of `content/en/`, wijzig de tekst tussen de `---` regels en maak een pull request.

## Lokaal draaien

```sh
npm install
npm start          # http://localhost:8080 met live herladen
npm run build      # bouwt de site naar _site/
```

## Formulier

Het contactformulier verstuurt naar `formEndpoint` in `site.json` (bijvoorbeeld een Formspree-adres). Zolang dat leeg is, opent het formulier het e-mailprogramma van de bezoeker.
