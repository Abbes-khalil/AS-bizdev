/**
 * analytics-static.js — version sans build du kit analytics (source canonique).
 *
 * Pour les sites servis en HTML statique, qui n'ont ni bundler ni framework et
 * ne peuvent donc pas importer `analytics-core.ts`. Même comportement, mêmes
 * clés de stockage, mêmes règles CNIL : bandeau bloquant, refus aussi visible
 * que l'acceptation, choix réversible, expiration à un an, et rien de chargé
 * avant acceptation explicite.
 *
 * ⚠️ Les deux pièges de l'incident du 03/08/2026 (règle 0quadragies) valent ici
 * aussi : `dataLayer.push(arguments)` — jamais un tableau — et, si le site sert
 * une CSP, `connect-src` doit autoriser `https://*.google-analytics.com`
 * (les hits UE partent sur `region1.`, pas sur le domaine du script).
 *
 * Rendu aligné sur <CookieBanner /> (refonte du 11/08/2026, #870) depuis le 28/10/2026 :
 * jusque-là le kit statique avait gardé l'ancienne barre, « Accepter » en avant.
 *
 * Pose sur chaque page HTML, juste avant </body> :
 *   <script defer src="/analytics.js" data-ga4="G-XXXXXXXXXX" data-clarity="xxxxxxxxxx"
 *           data-privacy-href="/confidentialite.html" data-site-name="…"></script>
 *
 * `data-clarity` est OPTIONNEL : Microsoft Clarity (enregistrements de session,
 * cartes de chaleur) se déploie site par site. Même doctrine que GA4 — rien
 * n'est chargé avant acceptation, et le consentement est transmis au
 * fournisseur via `clarity('consentv2', …)` (API vérifiée le 05/08/2026 ;
 * l'ancienne `clarity('consent')` est en voie de dépréciation). Si le site sert
 * une CSP, elle doit autoriser `https://*.clarity.ms` en script-src ET connect-src.
 *
 * Sans NI `data-ga4` NI `data-clarity`, le script ne fait rien du tout (pas même
 * le bandeau) : un site pas encore déclaré peut le poser sans effet de bord.
 */
(function () {
  'use strict'

  var script = document.currentScript
  if (!script) return
  var MEASUREMENT_ID = script.getAttribute('data-ga4')
  var CLARITY_ID = script.getAttribute('data-clarity')
  // On ne sort que si AUCUN traceur n'est déclaré : un site peut n'avoir que
  // Clarity, ou n'avoir que GA4. Sortir sur le seul `data-ga4` absent aurait
  // rendu Clarity impossible à poser seul.
  if (!MEASUREMENT_ID && !CLARITY_ID) return
  var PRIVACY_HREF = script.getAttribute('data-privacy-href') || '/confidentialite.html'
  var SITE_NAME = script.getAttribute('data-site-name') || ''

  // Langue du bandeau : celle de la page (`<html lang>`), lue au moment de
  // l'afficher, car un site multilingue la change sans recharger le script.
  // Français par défaut. Une page de confidentialité par langue se déclare par
  // `data-privacy-href-en`, `data-privacy-href-ar`… ; sans elle, `data-privacy-href`.
  // Mêmes libellés que <CookieBanner /> (CookieBanner.tsx, LIBELLES), plus l'arabe.
  // Une correction de texte se fait aux deux endroits, dans le même commit.
  var TEXTES = {
    fr: { dialogue: "Consentement à la mesure d'audience", titre: "Cookies et mesure d'audience",
      mesure: function (nom) { return (nom || 'Ce site') + " mesure son audience pour savoir ce qui est consulté. Rien n'est mesuré sans votre accord." },
      plus: 'En savoir plus', refuser: 'Refuser', accepter: 'Accepter' },
    en: { dialogue: 'Consent to audience measurement', titre: 'Cookies and audience measurement',
      mesure: function (nom) { return (nom || 'This site') + ' measures its audience to know what gets read. Nothing is measured without your consent.' },
      plus: 'Learn more', refuser: 'Decline', accepter: 'Accept' },
    es: { dialogue: 'Consentimiento para la medición de audiencia', titre: 'Cookies y medición de audiencia',
      mesure: function (nom) { return (nom || 'Este sitio') + ' mide su audiencia para saber qué se lee. No se mide nada sin su consentimiento.' },
      plus: 'Más información', refuser: 'Rechazar', accepter: 'Aceptar' },
    de: { dialogue: 'Einwilligung in die Reichweitenmessung', titre: 'Cookies und Reichweitenmessung',
      mesure: function (nom) { return (nom || 'Diese Website') + ' misst die Reichweite, um zu wissen, was gelesen wird. Ohne Ihre Einwilligung wird nichts gemessen.' },
      plus: 'Mehr erfahren', refuser: 'Ablehnen', accepter: 'Annehmen' },
    it: { dialogue: 'Consenso alla misurazione del pubblico', titre: 'Cookie e misurazione del pubblico',
      mesure: function (nom) { return (nom || 'Questo sito') + ' misura il proprio pubblico per sapere che cosa viene letto. Senza il tuo consenso non viene misurato nulla.' },
      plus: 'Maggiori informazioni', refuser: 'Rifiuta', accepter: 'Accetta' },
    ar: { dialogue: 'الموافقة على قياس عدد الزوار', titre: 'ملفات تعريف الارتباط وقياس عدد الزوار',
      mesure: function (nom) { return (nom ? 'يقيس موقع ' + nom : 'يقيس هذا الموقع') + ' عدد زواره لمعرفة ما تتم قراءته. لا يتم أي قياس دون موافقتك.' },
      plus: 'اعرف المزيد', refuser: 'رفض', accepter: 'قبول' },
  }
  function langueCourante() {
    var l = (document.documentElement.getAttribute('lang') || 'fr').slice(0, 2).toLowerCase()
    return TEXTES[l] ? l : 'fr'
  }
  function lienConfidentialite(l) {
    return (l !== 'fr' && script.getAttribute('data-privacy-href-' + l)) || PRIVACY_HREF
  }

  var STORAGE_KEY = 'pilotone_cookie_consent'
  var STORAGE_TIMESTAMP_KEY = 'pilotone_cookie_consent_at'
  // UN AN, décision de Jérémy du 13/09/2026. La CNIL donne six mois comme bonne
  // pratique et précise que la durée « devra être appréciée au cas par cas »
  // (cnil.fr, questions-réponses « cookies et autres traceurs », relu le
  // 13/09/2026) : un site vitrine local dont le visiteur revient deux fois par
  // an est précisément ce cas. Les 13 mois, eux, concernent la durée de vie des
  // traceurs de mesure d'audience, jamais la conservation du choix.
  //
  // ⚠️ Sur un site STATIQUE il n'y a aucune route serveur, donc rien ne peut
  // échapper au plafond de sept jours que Safari applique aux cookies écrits
  // par `document.cookie` (ITP 2.1). L'échéance y est repoussée à chaque visite,
  // pas tenue d'un bloc : un visiteur Safari absent plus de sept jours revoit le
  // bandeau. C'est une limite du navigateur, et elle est écrite ici plutôt que
  // passée sous silence.
  var CONSENT_TTL_MS = 365 * 24 * 3600 * 1000
  var COOKIE_MAX_AGE = 365 * 24 * 3600

  // Le choix vit dans un COOKIE, pas seulement en localStorage : WebKit efface
  // tout le stockage écrit par script après 7 jours d'utilisation de Safari sans
  // interaction sur le site, alors que « cookies and HTTP cache are currently
  // not subject to [that] policy » (webkit.org/blog/14403, lu le 06/09/2026).
  // localStorage reste en repli, et chaque support répare l'autre.
  // Miroir exact de packages/analytics-kit/analytics-core.ts — même règle, deux
  // langages ; toute correction se fait dans les DEUX.
  function readCookie() {
    try {
      var parts = document.cookie.split(';')
      for (var i = 0; i < parts.length; i++) {
        var eq = parts[i].indexOf('=')
        if (eq === -1) continue
        if (parts[i].slice(0, eq).replace(/^\s+|\s+$/g, '') !== STORAGE_KEY) continue
        var v = parts[i].slice(eq + 1).replace(/^\s+|\s+$/g, '')
        return v === 'accepted' || v === 'declined' ? v : null
      }
    } catch (e) {
      /* document.cookie inaccessible */
    }
    return null
  }

  function writeCookie(value) {
    try {
      var secure = location.protocol === 'https:' ? '; Secure' : ''
      var age = value === null ? '; Max-Age=0' : '; Max-Age=' + COOKIE_MAX_AGE
      document.cookie = STORAGE_KEY + '=' + (value === null ? '' : value) +
        '; Path=/; SameSite=Lax' + secure + age
    } catch (e) {
      /* écriture refusée : le repli localStorage reste en place */
    }
  }

  function readStorage() {
    try {
      var value = window.localStorage.getItem(STORAGE_KEY)
      if (value !== 'accepted' && value !== 'declined') return null
      var at = window.localStorage.getItem(STORAGE_TIMESTAMP_KEY)
      if (at && Date.now() - parseInt(at, 10) > CONSENT_TTL_MS) return null
      return value
    } catch (e) {
      return null
    }
  }

  function writeStorage(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
      window.localStorage.setItem(STORAGE_TIMESTAMP_KEY, String(Date.now()))
    } catch (e) {
      /* mode privé / quota */
    }
  }

  var cookieRafraichi = false

  function getConsent() {
    var parCookie = readCookie()
    if (parCookie) {
      if (readStorage() !== parCookie) writeStorage(parCookie)
      if (!cookieRafraichi) {
        cookieRafraichi = true
        writeCookie(parCookie)
      }
      return parCookie
    }
    var parStockage = readStorage()
    if (parStockage) {
      writeCookie(parStockage)
      cookieRafraichi = true
      return parStockage
    }
    return null
  }

  function setConsent(value) {
    writeCookie(value)
    cookieRafraichi = true
    writeStorage(value)
  }

  /**
   * Snippet officiel Microsoft, COPIÉ TEL QUEL. Le `function(){…push(arguments)}`
   * est la partie critique : réécrit en fonction fléchée, la file reçoit un
   * tableau au lieu de l'objet `arguments` et les commandes passées avant le
   * chargement du script distant sont perdues. Même piège que gtag.
   */
  function loadClarity() {
    if (!CLARITY_ID) return
    if (window.clarity) {
      window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' })
      return
    }
    ;(function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) }
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i
      y = l.getElementsByTagName(r)[0]
      if (y && y.parentNode) y.parentNode.insertBefore(t, y)
      else l.head.appendChild(t)
    })(window, document, 'clarity', 'script', CLARITY_ID)
    // Le consentement part tout de suite : la file `.q` retient les appels
    // reçus avant que le script distant soit prêt, c'est son rôle.
    window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' })
  }

  /** Refus ou retrait : Clarity efface ses cookies et repart sans consentement. */
  function revoquerClarity() {
    if (!window.clarity) return
    window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'denied' })
    window.clarity('consent', false)
  }

  function loadGa4() {
    if (!MEASUREMENT_ID) return
    if (window.gtag) return
    var s = document.createElement('script')
    s.async = true
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID
    document.head.appendChild(s)
    window.dataLayer = window.dataLayer || []
    // ⚠️ `arguments`, jamais un tableau : gtag.js reconnaît une commande à ça.
    function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', MEASUREMENT_ID, { page_path: location.pathname + location.search })
  }

  /**
   * Envoie un événement GA4 seulement après consentement et sans donnée
   * personnelle. Les appels faits avant le chargement distant restent dans la
   * file gtag officielle.
   */
  function trackEvent(name, params) {
    if (!window.gtag || !/^[a-z][a-z0-9_]{0,39}$/.test(name)) return false
    var payload = { page_path: location.pathname + location.search }
    var details = params || {}
    for (var key in details) {
      if (Object.prototype.hasOwnProperty.call(details, key)) payload[key] = details[key]
    }
    window.gtag('event', name, payload)
    return true
  }

  window.pilotoneTrack = trackEvent

  // Les clics de contact sont des intentions, pas des leads confirmés. Aucun
  // numéro ni adresse e-mail n'est transmis à GA4.
  document.addEventListener('click', function (e) {
    var link = e.target && e.target.closest
      ? e.target.closest('a[href^="tel:"],a[href^="mailto:"]')
      : null
    if (!link) return
    var href = link.getAttribute('href') || ''
    var phone = href.indexOf('tel:') === 0
    trackEvent(phone ? 'contact_phone_click' : 'contact_email_click', {
      contact_method: phone ? 'phone' : 'email',
    })
  })

  // Même rendu que <CookieBanner /> depuis sa refonte du 11/08/2026 (#870) :
  // carte détachée, titre, deux boutons PLEINS et STRICTEMENT identiques, refus
  // en premier (recommandation CNIL ; l'étude CNIL/DITP/BIT mesure 18 % de refus
  // que l'acceptation soit mise en avant ou non). Le pourquoi complet est en tête
  // de CookieBanner.tsx. Thème : --pk-banner-bg, --pk-banner-fg, --pk-banner-accent,
  // --pk-banner-accent-fg ; l'accent porte les DEUX boutons.
  var BOUTON = [
    'flex:1 1 0', 'min-width:8rem', 'padding:.7rem 1.4rem', 'border-radius:.5rem',
    'border:1px solid transparent', 'background:var(--pk-banner-accent,#2563eb)',
    'color:var(--pk-banner-accent-fg,#ffffff)', 'font:inherit', 'font-size:.95rem',
    'font-weight:600', 'line-height:1.2', 'cursor:pointer', 'text-align:center',
    'letter-spacing:normal', 'text-transform:none',
  ].join(';')

  function showBanner() {
    var lang = langueCourante()
    var t = TEXTES[lang]
    var bar = document.createElement('div')
    bar.id = 'pk-cookie-banner'
    bar.setAttribute('role', 'dialog')
    bar.setAttribute('lang', lang)
    bar.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    bar.setAttribute('aria-label', t.dialogue)
    // Le conteneur ne capte pas le clic : seule la carte est interactive.
    bar.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:9999;display:flex;' +
      'justify-content:center;padding:clamp(.75rem,2vw,1.25rem);pointer-events:none;' +
      'font-family:system-ui,-apple-system,"Segoe UI",sans-serif'

    var carte = document.createElement('div')
    carte.style.cssText = [
      'pointer-events:auto', 'width:100%', 'max-width:46rem', 'box-sizing:border-box',
      'display:flex', 'flex-wrap:wrap', 'align-items:center', 'justify-content:space-between',
      'gap:1.1rem clamp(1rem,3vw,1.75rem)',
      'padding:clamp(1.4rem,3vw,1.75rem) clamp(1.3rem,3vw,1.75rem)', 'border-radius:.85rem',
      'background:var(--pk-banner-bg,#10131a)', 'color:var(--pk-banner-fg,#f4f5f7)',
      'border:1px solid rgba(255,255,255,.14)',
      'box-shadow:0 18px 48px rgba(0,0,0,.34),0 2px 8px rgba(0,0,0,.2)', 'line-height:1.5',
    ].join(';')

    var bloc = document.createElement('div')
    bloc.style.cssText = 'flex:1 1 17rem'
    var titre = document.createElement('p')
    titre.style.cssText = 'margin:0 0 .35rem;font-size:1.05rem;font-weight:700;line-height:1.3'
    titre.textContent = t.titre
    var text = document.createElement('p')
    text.style.cssText = 'margin:0;font-size:.95rem;opacity:.88'
    text.textContent = t.mesure(SITE_NAME) + ' '
    var link = document.createElement('a')
    link.href = lienConfidentialite(lang)
    link.textContent = t.plus
    link.style.cssText = 'color:inherit;text-decoration:underline;text-underline-offset:2px;white-space:nowrap'
    text.appendChild(link)
    bloc.appendChild(titre)
    bloc.appendChild(text)

    var actions = document.createElement('div')
    actions.style.cssText = 'display:flex;gap:.6rem;flex:1 1 18rem'

    function makeButton(label, onClick) {
      var b = document.createElement('button')
      b.type = 'button'
      b.textContent = label
      b.style.cssText = BOUTON
      b.addEventListener('click', onClick)
      return b
    }

    actions.appendChild(makeButton(t.refuser, function () {
      setConsent('declined')
      bar.remove()
    }))
    actions.appendChild(makeButton(t.accepter, function () {
      setConsent('accepted')
      bar.remove()
      loadGa4()
      loadClarity()
    }))

    carte.appendChild(bloc)
    carte.appendChild(actions)
    bar.appendChild(carte)
    document.body.appendChild(bar)
  }

  /**
   * Retrait du consentement — exigence CNIL : le choix se retire « avec la même
   * simplicité » qu'il a été accordé. Le bandeau ayant disparu après le premier
   * clic, le point d'entrée doit vivre DANS le site : un lien de pied de page
   *
   *   <a href="#gerer-cookies" data-pilotone-manage-cookies>Gérer mes cookies</a>
   *
   * Écoute déléguée sur document : le lien peut être injecté à tout moment, et
   * un site statique n'a rien à câbler d'autre que l'attribut.
   */
  function resetConsent() {
    writeCookie(null)
    cookieRafraichi = false
    try {
      window.localStorage.removeItem(STORAGE_KEY)
      window.localStorage.removeItem(STORAGE_TIMESTAMP_KEY)
    } catch (e) {
      /* localStorage indisponible */
    }
    revoquerClarity()
    var existant = document.getElementById('pk-cookie-banner')
    if (existant) existant.remove()
    showBanner()
  }

  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('[data-pilotone-manage-cookies]') : null
    if (!el) return
    e.preventDefault()
    resetConsent()
  })

  function start() {
    var consent = getConsent()
    if (consent === 'accepted') {
      loadGa4()
      loadClarity()
    } else if (consent === null) showBanner()
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start)
  else start()
})()
