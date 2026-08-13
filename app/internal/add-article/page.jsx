"use client";

import { useState } from "react";

import CheckboxGroup from "@/components/forms/CheckboxGroup";
import Field from "@/components/forms/Field";
import FormStatus from "@/components/forms/FormStatus";
import Select from "@/components/forms/Select";
import { THEMES, ZONES } from "@/lib/i18n/content/news/taxonomy";

const REQUIRED_ARIA = "requis";
const INITIAL_STATUS = { state: "idle", message: "" };

const LANG_OPTIONS = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
];
const THEME_OPTIONS = THEMES.map((theme) => ({ value: theme.key, label: theme.label.fr }));
const ZONE_OPTIONS = ZONES.map((zone) => ({ value: zone.key, label: zone.label.fr }));

/**
 * Manual fallback for LinkedIn article ingestion (§24) — same job as the
 * former public/internal/add-article.html, rebuilt as a real page reusing
 * the shared form components. Not linked anywhere public; its URL is
 * treated as a secret the same way the access token is (see robots below
 * and the token field, which is never persisted — typed fresh each visit
 * and sent only as the x-ingest-token header on submit).
 */
export default function AddArticlePage() {
  const [status, setStatus] = useState(INITIAL_STATUS);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus({ state: "submitting", message: "Traitement en cours…" });

    try {
      const res = await fetch("/api/ingest-article", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-ingest-token": data.get("token"),
        },
        body: JSON.stringify({
          url: data.get("url"),
          lang: data.get("lang"),
          themes: data.getAll("themes"),
          zones: data.getAll("zones"),
        }),
      });
      const result = await res.json();

      if (!res.ok) throw new Error(result.error || "Échec de la requête");

      setStatus({
        state: "success",
        message: result.skipped
          ? `Déjà ingéré — aucun doublon créé (slug : ${result.slug}).`
          : `Publié et en ligne immédiatement (slug : ${result.slug}).`,
      });
    } catch (error) {
      setStatus({ state: "error", message: error.message });
    }
  };

  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <h1 className="font-display text-2xl font-semibold text-navy">
        Ajouter un article LinkedIn
      </h1>
      <p className="mt-3 text-[0.9rem] text-gray-500">
        Colle l&apos;URL d&apos;une publication LinkedIn publique. Le titre, le résumé et
        l&apos;image sont récupérés automatiquement et l&apos;article est publié immédiatement
        (aucun déploiement nécessaire) — usage manuel de secours ; le flux normal passe par le
        pipeline n8n automatisé.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-6">
        <Field
          name="token"
          type="password"
          label="Jeton d'accès"
          autoComplete="off"
          requiredAria={REQUIRED_ARIA}
        />
        <Field
          name="url"
          type="url"
          label="URL LinkedIn"
          placeholder="https://www.linkedin.com/..."
          requiredAria={REQUIRED_ARIA}
        />
        <Select
          name="lang"
          label="Langue de la publication"
          options={LANG_OPTIONS}
          placeholder="Choisir une langue"
          requiredAria={REQUIRED_ARIA}
        />
        <CheckboxGroup
          name="themes"
          label="Thèmes"
          options={THEME_OPTIONS}
          required={false}
          requiredAria={REQUIRED_ARIA}
        />
        <CheckboxGroup
          name="zones"
          label="Zones"
          options={ZONE_OPTIONS}
          required={false}
          requiredAria={REQUIRED_ARIA}
        />

        <button type="submit" className="btn-primary" disabled={status.state === "submitting"}>
          Récupérer et publier
        </button>
      </form>

      {status.state !== "idle" && <FormStatus status={status} />}
    </main>
  );
}
