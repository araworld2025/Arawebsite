import { useState } from "react";
import { AraButton, ARA_BUTTON_COLORS } from "@/app/components/site/AraButton";
import {
  NewsletterField,
  NewsletterSelectField,
  NewsletterSubmitButton,
} from "@/app/components/site/NewsletterFormFields";
import { NewsletterForm } from "@/app/components/NewsletterForm";
import { ProductInterestDialog } from "@/app/components/ProductInterestDialog";
import { activateFeaturedProduct, featuredProductStage } from "@/config/featuredProduct";
import { childAgeRanges, countries, desiredLanguages, submitLead } from "@/services/leads";
import { InteractiveCard, ShimmerEffect, TiltCard, FloatingElement } from "@/app/components/InteractiveCard";

/**
 * Components Overview
 * -------------------
 * A single, self-contained catalogue page listing every reusable component on
 * the Ara Kids site, with live previews. The "Forms" section renders the real
 * form instances used across the site so they can be edited in one place and
 * update everywhere.
 *
 * This page is a read-only showcase — it imports the existing components as-is
 * and does not alter their logic, naming, or identifiers. View it by pointing
 * the browser at the site URL with `#components` on the end.
 */

// ---------------------------------------------------------------------------
// Small presentational helpers used only by this catalogue page.
// ---------------------------------------------------------------------------

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-[#e7e2d3] py-12">
      <h2 className="mb-6 font-['DM_Sans:Bold',sans-serif] text-3xl font-bold tracking-tight text-[#2d251d]">
        {title}
      </h2>
      <div className="flex flex-col gap-8">{children}</div>
    </section>
  );
}

function ComponentCard({
  name,
  description,
  source,
  preview,
}: {
  name: string;
  description: string;
  source: string;
  preview?: React.ReactNode;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#e7e2d3] bg-white shadow-sm">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#f0ecdf] bg-[#fdfaf5] px-6 py-4">
        <h3 className="font-['DM_Sans:SemiBold',sans-serif] text-lg font-semibold text-[#2d251d]">{name}</h3>
        <code className="font-mono text-xs text-[#7f694f]">{source}</code>
      </div>
      <p className="px-6 pt-4 font-['Nunito:Regular',sans-serif] text-[15px] leading-relaxed text-[#554739]">
        {description}
      </p>
      {preview && <div className="px-6 py-6">{preview}</div>}
    </article>
  );
}

// A live newsletter-footer form instance, built from the shared
// NewsletterField / NewsletterSubmitButton primitives — the same building
// blocks used by the desktop and mobile footers. Editing NewsletterFormFields
// updates this preview and both footers together.
function FooterNewsletterInstance() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    if (email && email.includes("@")) {
      try {
        await submitLead({ email, source: "newsletter-footer", newsletterConsent: true });
        setSubscribed(true);
        setTimeout(() => {
          setEmail("");
          setSubscribed(false);
        }, 3000);
      } catch {
        setSubscribed(false);
      }
    }
  };

  return (
    <div className="relative w-full max-w-[800px] rounded-[16px] bg-white">
      <div className="relative flex flex-col items-center justify-center overflow-clip rounded-[inherit]">
        <div className="z-[2] w-full">
          <NewsletterField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            placeholder="Type your email address here"
          />
        </div>
        <div className="z-[1] w-full">
          <NewsletterSubmitButton onClick={handleSubscribe} tone={subscribed ? "success" : "default"}>
            {subscribed ? "SUBSCRIBED ✓" : "SUBSCRIBE"}
          </NewsletterSubmitButton>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[16px] border-2 border-[rgba(203,194,166,0.3)]"
      />
    </div>
  );
}

// A live, standalone copy of the product-interest form fields, using the same
// shared field primitives as the real ProductInterestDialog. Rendered inline
// (not as a modal) so the whole field set is visible for editing.
function ProductInterestInstance() {
  const [language, setLanguage] = useState(desiredLanguages[0]);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-[680px] overflow-hidden rounded-2xl border border-[#e7e2d3]"
    >
      <NewsletterField align="left" name="email" type="email" placeholder="Type your email address here" />
      <NewsletterSelectField align="left" name="residenceCountry" defaultValue="">
        <option value="" disabled>
          What&apos;s your Country of Residence
        </option>
        {countries.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </NewsletterSelectField>
      <NewsletterSelectField
        align="left"
        name="desiredLanguage"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {desiredLanguages.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </NewsletterSelectField>
      {language === "Other" && (
        <NewsletterField align="left" name="otherLanguage" placeholder="Which language?" />
      )}
      <NewsletterSelectField align="left" name="childAgeRange" defaultValue="">
        <option value="" disabled>
          What&apos;s your Child age range
        </option>
        {childAgeRanges.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </NewsletterSelectField>
      <NewsletterSubmitButton type="submit">{featuredProductStage.cta}</NewsletterSubmitButton>
    </form>
  );
}

export function ComponentsOverview() {
  // Smooth-scroll to a section without touching the URL hash — changing the
  // hash would flip the router back to the main site.
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // `overflow-y-auto` makes this its own scroll container, since the global
    // stylesheet locks `html, body, #root` to `overflow: hidden`.
    <div className="h-full overflow-y-auto bg-[#faf7f0] text-[#2d251d]">
      {/* The real product-interest dialog lives here so the "open" trigger below
          shows the exact instance used on the live site. */}
      <ProductInterestDialog />

      <div className="mx-auto w-full max-w-[960px] px-6 pb-24 pt-16">
        {/* Header */}
        <header className="mb-8">
          <button
            type="button"
            onClick={() => {
              window.location.hash = "";
            }}
            className="mb-6 inline-block cursor-pointer font-['Nunito:SemiBold',sans-serif] text-sm font-semibold text-[#00a193] hover:underline"
          >
            ← Back to the website
          </button>
          <h1 className="font-['DM_Sans:Bold',sans-serif] text-5xl font-bold tracking-tight">
            Components Overview
          </h1>
          <p className="mt-4 max-w-[640px] font-['Nunito:Regular',sans-serif] text-lg leading-relaxed text-[#554739]">
            Every reusable component on the Ara Kids website, in one place. The{" "}
            <button
              type="button"
              onClick={scrollTo("forms")}
              className="cursor-pointer font-semibold text-[#00a193] hover:underline"
            >
              Forms
            </button>{" "}
            section shows the live form instances — edit the underlying component once and every
            instance updates together.
          </p>
        </header>

        {/* Table of contents */}
        <nav className="mb-4 flex flex-wrap gap-2">
          {[
            ["forms", "Forms ★"],
            ["buttons", "Buttons"],
            ["interaction", "Interaction & Motion"],
            ["structure", "Structure & Layout"],
            ["primitives", "UI Primitives"],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={scrollTo(id)}
              className="cursor-pointer rounded-full border border-[#e7e2d3] bg-white px-4 py-2 font-['Nunito:SemiBold',sans-serif] text-sm font-semibold text-[#554739] transition-colors hover:border-[#00a193] hover:text-[#00a193]"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* ---------------------------------------------------------------- */}
        {/* FORMS — the focus of this page                                    */}
        {/* ---------------------------------------------------------------- */}
        <Section id="forms" title="Forms">
          <div className="rounded-2xl border-2 border-dashed border-[#00a193]/40 bg-[#eaf8f5]/50 p-6">
            <p className="font-['Nunito:Regular',sans-serif] text-[15px] leading-relaxed text-[#006057]">
              <strong>Edit once, update everywhere.</strong> The newsletter forms all share their
              styling and behaviour from{" "}
              <code className="font-mono text-sm">NewsletterFormFields.tsx</code>. Change a field
              there — colour, spacing, placeholder style — and every instance below (plus the real
              desktop &amp; mobile footers) updates automatically.
            </p>
          </div>

          <ComponentCard
            name="Form Instance 1 — Newsletter footer form"
            source="src/imports/Frame13640 + Frame13641 (via NewsletterFormFields.tsx)"
            description="The subscribe box in the site footer. The same form appears in both the desktop and mobile footers, built from the shared NewsletterField and NewsletterSubmitButton primitives. This is a live instance — type an email and submit."
            preview={<FooterNewsletterInstance />}
          />

          <ComponentCard
            name="Form Instance 2 — Product interest dialog"
            source="src/app/components/ProductInterestDialog.tsx"
            description="The lead-capture form that opens as a pop-up when a product call-to-action is clicked. It collects email, country, desired language, and child age range. Both the live pop-up and the inline preview below use the same shared field components."
            preview={
              <div className="flex flex-col gap-6">
                <div>
                  <p className="mb-3 font-['Nunito:SemiBold',sans-serif] text-sm font-semibold text-[#7f694f]">
                    Open the real dialog (exactly as it appears on the site):
                  </p>
                  <AraButton showIcon={false} onClick={() => activateFeaturedProduct()}>
                    Open product interest form
                  </AraButton>
                </div>
                <div>
                  <p className="mb-3 font-['Nunito:SemiBold',sans-serif] text-sm font-semibold text-[#7f694f]">
                    Inline preview of the same fields:
                  </p>
                  <ProductInterestInstance />
                </div>
              </div>
            }
          />

          <ComponentCard
            name="Form Instance 3 — Standalone NewsletterForm"
            source="src/app/components/NewsletterForm.tsx"
            description="A self-contained animated subscribe form (email input + submit) with its own loading, success, and error states. A live instance is shown below."
            preview={
              <div className="rounded-2xl bg-[#fdfaf5] p-8">
                <NewsletterForm />
              </div>
            }
          />
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* BUTTONS                                                           */}
        {/* ---------------------------------------------------------------- */}
        <Section id="buttons" title="Buttons">
          <ComponentCard
            name="AraButton"
            source="src/app/components/site/AraButton.tsx"
            description="The single call-to-action button used across the whole site. One style, one interaction — only the colour varies. Supports an optional trailing arrow icon."
            preview={
              <div className="flex flex-wrap items-center gap-4">
                {Object.keys(ARA_BUTTON_COLORS).map((color) => (
                  <AraButton key={color} color={color as keyof typeof ARA_BUTTON_COLORS}>
                    {color} button
                  </AraButton>
                ))}
                <AraButton showIcon={false}>No icon</AraButton>
              </div>
            }
          />
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* INTERACTION & MOTION                                              */}
        {/* ---------------------------------------------------------------- */}
        <Section id="interaction" title="Interaction & Motion">
          <ComponentCard
            name="InteractiveCard"
            source="src/app/components/InteractiveCard.tsx"
            description="A card wrapper that lifts and scales on hover with a soft teal glow. Hover the card below to see it."
            preview={
              <InteractiveCard className="relative inline-block rounded-2xl bg-white p-8 shadow">
                <span className="font-['DM_Sans:SemiBold',sans-serif] font-semibold">Hover me</span>
              </InteractiveCard>
            }
          />
          <ComponentCard
            name="TiltCard"
            source="src/app/components/InteractiveCard.tsx"
            description="A card that tilts in 3D toward the cursor for a tactile, physical feel."
            preview={
              <TiltCard className="inline-block rounded-2xl bg-white p-8 shadow">
                <span className="font-['DM_Sans:SemiBold',sans-serif] font-semibold">Move your cursor over me</span>
              </TiltCard>
            }
          />
          <ComponentCard
            name="FloatingElement"
            source="src/app/components/InteractiveCard.tsx"
            description="Gently floats its children up and down on a loop — used for playful accents."
            preview={
              <FloatingElement>
                <div className="inline-grid size-16 place-items-center rounded-full bg-[#fd9e11] text-2xl">🎈</div>
              </FloatingElement>
            }
          />
          <ComponentCard
            name="ShimmerEffect"
            source="src/app/components/InteractiveCard.tsx"
            description="A looping shimmer highlight overlay for drawing attention to a surface."
            preview={
              <div className="relative h-16 w-64 overflow-hidden rounded-lg bg-[#e7e2d3]">
                <ShimmerEffect />
              </div>
            }
          />
          <ComponentCard
            name="SectionReveal / ScrollAnimations / ScrollReveal"
            source="src/app/components/ScrollReveal.tsx · ScrollAnimations.tsx"
            description="Scroll-driven reveal engines that breeze in headings character-by-character, rise body text line-by-line, and fade in images as they enter the viewport. These run against the live page, so they are best seen on the site itself rather than in isolation. Respect prefers-reduced-motion."
          />
          <ComponentCard
            name="ParallaxRow"
            source="src/app/components/ParallaxRow.tsx"
            description="Scroll-bound staggered rise for a row of cards — each child translates up as the row scrolls through the viewport, left-to-right. Best viewed on the live site."
          />
          <ComponentCard
            name="EnhancedCarousel"
            source="src/app/components/EnhancedCarousel.tsx"
            description="An auto-advancing carousel used for rotating featured content."
          />
          <ComponentCard
            name="HeroHeadline"
            source="src/app/components/HeroHeadline.tsx"
            description="Renders the hero headline split into per-character spans so the intro can animate the copy in one letter at a time, with an accessible plain-text label."
          />
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* STRUCTURE & LAYOUT                                                */}
        {/* ---------------------------------------------------------------- */}
        <Section id="structure" title="Structure & Layout">
          <ComponentCard
            name="Footer"
            source="src/app/components/site/Footer.tsx"
            description="The site footer: navigation links, brand, and the newsletter subscribe form. Rendered as part of the desktop and mobile page frames."
          />
          <ComponentCard
            name="ResponsiveWrapper"
            source="src/app/components/ResponsiveWrapper.tsx"
            description="A layout wrapper that adapts its children responsively across breakpoints."
          />
          <ComponentCard
            name="InteractiveLanding"
            source="src/app/components/InteractiveLanding.tsx"
            description="The interactive landing/hero experience composition used at the top of the page."
          />
          <ComponentCard
            name="Desktop & Mobile page frames"
            source="src/imports/Frame13640 (desktop) · Frame13641 (mobile)"
            description="The full generated page layouts. App renders the desktop frame at md and up, and the mobile frame below md. Both embed the newsletter footer form instance."
          />
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* UI PRIMITIVES                                                     */}
        {/* ---------------------------------------------------------------- */}
        <Section id="primitives" title="UI Primitives (shadcn/ui)">
          <p className="font-['Nunito:Regular',sans-serif] text-[15px] leading-relaxed text-[#554739]">
            The project also includes the full shadcn/ui primitive library in{" "}
            <code className="font-mono text-sm">src/app/components/ui/</code>. These are low-level
            building blocks (not Ara-specific). Available primitives:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "accordion","alert","alert-dialog","aspect-ratio","avatar","badge","breadcrumb",
              "button","calendar","card","carousel","chart","checkbox","collapsible","command",
              "context-menu","dialog","drawer","dropdown-menu","form","hover-card","input","input-otp",
              "label","menubar","navigation-menu","pagination","popover","progress","radio-group",
              "resizable","scroll-area","select","separator","sheet","sidebar","skeleton","slider",
              "sonner","switch","table","tabs","textarea","toggle","toggle-group","tooltip",
            ].map((name) => (
              <code
                key={name}
                className="rounded-md border border-[#e7e2d3] bg-white px-2.5 py-1 font-mono text-xs text-[#554739]"
              >
                {name}
              </code>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
