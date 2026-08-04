# Rapport — asbizdev.com (origin) vs src/pages/Home.jsx (current)

Date : 2026-07-30
Sources : https://asbizdev.com/ (origin) ; `src/pages/Home.jsx` (current).

---

## 1. Sections côté origin (asbizdev.com)

| # | Section | Notes |
|---|---|---|
| 1 | Header / Nav | Logo + menu (Accueil, Who is Who, Nos valeurs, Notre savoir-faire, Nos solutions, Nos partenaires, News, Contact) + switch FR/EN |
| 2 | Hero | Heading "Accélérez et consolidez votre développement en France, Afrique et Moyen-Orient" + intro + CTA Contactez-Nous |
| 3 | Packs (3 cartes) | Découverte / Conquête / Développement — heading "Transformez vos ambitions en succès durable !" |
| 4 | Services (3 piliers) | La gestion de projet / Le développement commercial / L'accompagnement — heading d'intro + 3 cards "Voir plus" |
| 5 | About "Accélérateur de particules" | Bloc positionnement + photo accela-scaled.jpg |
| 6 | Nos valeurs | Heading + intro + 3 cartes Loyauté / Engagement / Responsabilité |
| 7 | Footer | Politique de confidentialité, Facebook, LinkedIn, Retour en haut, logo |

---

## 2. Sections côté Home.jsx (actuel)

| # | Section | Commentaire |
|---|---|---|
| 1 | Hero | Présent, avec image maps.webp + badge "Cap opérationnel" |
| 2 | Manifesto | Présent — bloc "Une ambition, une méthode / Votre relais opérationnel" — introduit le positionnement |
| 3 | Packs (navy band) | Présent, 3 packs numérotés 01/02/03 |
| 4 | Solutions (3 cards) | Présent — La gestion de projet / Le développement commercial / L'accompagnement |
| 5 | Values (split layout) | Présent — heading collant à gauche + 3 cartes empilées à droite |
| 6 | CTA strip | Présent — bloc "Construisons votre prochain territoire de croissance" |

Footer : géré dans `src/components/Footer.jsx`. Nav : `src/components/Navbar.jsx`.

---

## 3. Ce que Home.jsx AJOUTE par rapport à l'origin

- **Manifesto section** (block "Une ambition, une méthode / Votre relais opérationnel") — pas présent tel quel sur l'origin. L'origin a un bloc "Accélérateur de particules" plus court.
- **CTA strip** ("Construisons votre prochain territoire de croissance") — l'origin n'a pas de bandeau CTA de fin.
- **Stats row dans le hero** (Années 7+ / Entreprises 30+ / Décideurs Qualifiés 7000+) — pas présent sur l'origin.
- **Décorations hero** : dot grid, diagonal lines accent, floating circles, decorative offset square (en cours de suppression par l'utilisateur).
- **Background dark band** pour les packs avec grid-bg-dark et blur halo — l'origin a une section blanche simple.
- **Image hero maps.webp** avec overlays (badge "Live ops" retiré, "Cap opérationnel" gardé).
- **Image cards interactives** avec `number` (01/02/03) pour les solutions.

---

## 4. Ce que Home.jsx N'INTÈGRE PAS vs l'origin

### 4.1 Switch de langue FR / EN
- Origin : sélecteur de langue visible dans la nav.
- Current : absent. Pas de i18n. Si multilingue souhaité → nécessite une solution i18n (react-i18next) + routing localisé.

### 4.2 Heading hero
- Origin : **"Accélérez et consolidez votre développement en France, Afrique et Moyen-Orient"** (phrase pleine).
- Current : **"Votre relais opérationnel sur trois continents."** + sous-ligne "France · Afrique · Moyen-Orient".
- → Le wording actuel est plus punchy mais diverge du messaging origin.

### 4.3 Photo "Accélérateur de particules"
- Origin : section dédiée avec photo `accela-scaled.jpg` + texte de positionnement.
- Current : partiellement absorbé dans la section Manifesto, mais sans photo d'équipe / sans le mot-clé "Accélérateur de particules".

### 4.4 Photos des 3 services / 3 valeurs
- Origin : chaque carte service/valeur a sa propre image (`meeting-of-project-management@2x.png`, etc.).
- Current : les services utilisent `ImageCard` (cf. `src/components/Card.jsx`) avec `nosolutions/*.webp`. Les valeurs utilisent uniquement des images `nosvaleurs/*.webp`. → Assets à vérifier pour cohérence visuelle.

### 4.5 Heading "Transformez vos ambitions en succès durable !"
- Origin : heading de la section packs.
- Current : pas de heading équivalent — les packs ont juste "Notre offre" en eyebrow + "Accompagner votre croissance".

### 4.6 Section "Nos partenaires" en homepage
- Origin : "Nos partenaires" est dans la nav mais la home n'a pas (forcément) de bandeau partenaires visible.
- Current : pas de section partenaires sur Home.jsx (c'est une page dédiée `src/pages/Partners.jsx`).

### 4.7 Section "News" / "Actualités" en homepage
- Origin : pas d'extrait news sur la home selon la capture.
- Current : pas non plus.

### 4.8 Footer
- Origin : minimaliste (politique, FB, LinkedIn, retour en haut, logo).
- Current : `src/components/Footer.jsx` à comparer — probablement plus étoffé.

---

## 5. Recommandations (ordre de priorité)

1. **Aligner le wording hero** avec l'origin si la fidélité à la marque prime → ajuster `h1` et le sous-texte dans Home.jsx.
2. **Ajouter / ajuster le heading packs** pour reproduire "Transformez vos ambitions en succès durable !".
3. **Photos des services** : vérifier que `public/brand_assets/nossolutions/*.webp` existent et correspondent aux images de l'origin.
4. **Bout "Accélérateur de particules"** : décider si on garde la formulation actuelle (Manifesto) ou si on aligne avec l'origin (section dédiée + photo).
5. **i18n FR/EN** : décision produit — pas une priorité UI, mais à clarifier.
6. **Footer** : comparer `Footer.jsx` avec la liste de l'origin.

---

## 6. Conclusion courte

Home.jsx **couvre toutes les grandes sections** de l'origin (hero, packs, services, valeurs, CTA) mais avec :
- un **Manifesto** et une **CTA strip** en plus,
- un **stats row** dans le hero,
- un **wording hero différent**,
- des **décorations** absentes de l'origin,
- et l'absence de **i18n**.

Aucun contenu majeur de l'origin ne manque côté structure. Les écarts sont surtout éditoriaux (wording) et cosmétiques (décorations / dark band).