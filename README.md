# Petit ciel bleu (site météo)
Petit ciel bleu est un simple site météo responsive developpé en html/css/JS pur, la récupération des informations météos sont récupérés par l'API Open-Weather-Map.

## Visiter le site
Le site est accessible à l'url : ?

## Installation
Pour déployer le site internet en local vous devez dans un premier temps récupérer une clef API Open weather map, une fois cela fait vous devez la coller dans le config.js. 
Ensuite il ne reste plus qu'à déployer le site à l'aide de docker compose en rentrant la commande suivante : 
```bash
docker compose up -d
```
Vous pouvez ensuite y accéder via l'url : http://localhost:8080

## Struture du projet
En cas de contribution merci de bien vouloir respecter l'architecture suivante :
- assets : dossier contenant la liste des images / vidéos / musique du site internet / css global
- src/nom_de_la_page : représente une page du site internet, à l'interieur on doit y retrouver tout le JS utilisé, le css et la page html