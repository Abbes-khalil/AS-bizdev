/**
 * Who is Who — hero copy + team roster.
 * Photos are shared across languages; only role and bio are localised.
 */
const PHOTOS = {
  stephane: "employe/stephane.webp",
  wafa: "employe/wafa.webp",
  khalil: "employe/khalil.webp",
  kaouther: "employe/kaouther.webp",
  taher: "employe/taher.webp",
  Achwek: "employe/Achwek.jpeg",
};

const team = {
  fr: {
    hero: {
      eyebrow: "L'équipe",
      titleLead: "Who is",
      titleAccent: "Who.",
      intro:
        "Les talents qui accompagnent vos projets internationaux, de la réflexion stratégique au déploiement opérationnel.",
    },
    sectionTitle: "L'équipe AS Biz Dev",
    sectionDescription:
      "Des profils opérationnels au service de votre développement commercial en Afrique et au Moyen-Orient.",
    portraitAlt: "Portrait de {name}, {role}",
    members: [
      {
        photo: PHOTOS.stephane,
        name: "Stéphane Allain",
        role: "Fondateur",
        bio: "20 ans d'expérience dans l'analyse et le développement des marchés internationaux pour le compte de grands groupes.",
      },
      {
        photo: PHOTOS.wafa,
        name: "Wafa Zouaoui",
        role: "Responsable des Opérations",
        bio: "19 ans d'expérience dans le management opérationnel et fonctionnel dans le secteur B2B (Tourisme).",
      },
      {
        name: "Achwek Kefifi",
        photo: PHOTOS.Achwek,
        bio: "10 ans d’expérience dans le commerce B2B notamment sur le grand Maghreb.",
      },
      {
        photo: PHOTOS.khalil,
        name: "Khalil Abbes",
        role: "Chargé junior d'efficacité commerciale et IA",
      },
      {
        photo: PHOTOS.kaouther,
        name: "Kaouther Bousaidi",
        role: "Assistante Administrative",
      },
      {
        photo: PHOTOS.taher,
        name: "Taher Kassem",
        role: "Comptabilité & Finance",
      },
    ],
  },

  en: {
    hero: {
      eyebrow: "The team",
      titleLead: "Who is",
      titleAccent: "Who.",
      intro:
        "The people behind your international projects — from strategic thinking to operational delivery.",
    },
    sectionTitle: "The AS Biz Dev team",
    sectionDescription:
      "Hands-on profiles at the service of your business development across Africa and the Middle East.",
    portraitAlt: "Portrait of {name}, {role}",
    members: [
      {
        photo: PHOTOS.stephane,
        name: "Stéphane Allain",
        role: "Founder",
        bio: "20 years of experience analysing and developing international markets for large corporate groups.",
      },
      {
        photo: PHOTOS.wafa,
        name: "Wafa Zouaoui",
        role: "Head of Operations",
        bio: "19 years of experience in operational and functional management in the B2B sector (Tourism).",
      },
      {
        photo: PHOTOS.chekib,
        name: "Chekib Yeger",
        role: "Sales — French-speaking Africa",
        bio: "13 years in sales, mainly with the world leader in corrective lenses and ophthalmic optical equipment.",
      },
      {
        photo: PHOTOS.bechir,
        name: "Béchir Zouaoui",
        role: "Senior Graphic Designer",
        bio: "Over 13 years of experience in design and web development.",
      },
      {
        photo: PHOTOS.khalil,
        name: "Khalil Abbes",
        role: "Junior Sales Efficiency & AI Officer",
      },
      {
        photo: PHOTOS.kaouther,
        name: "Kaouther Bousaidi",
        role: "Administrative Assistant",
      },
      {
        photo: PHOTOS.taher,
        name: "Taher Kassem",
        role: "Accounting & Finance",
      },
    ],
  },
};

export default team;
