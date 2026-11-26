// Simple content pages linked from the footer: About Us, Mission, Free
// resources, Roadmap and Privacy Policy. They share one layout in the site's
// look (warm off-white ground, DM Sans headings with the yellow full stop,
// Nunito body, the teal / orange / red / green accents).
//
// The copy here is a starting point, written from the home page's own words.
// Edit the PAGES object below to change it; no layout code needs touching.
import { useEffect, useRef, type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { AraLogo, Footer } from "@/app/components/site/Footer";

const ACCENTS = ["#00a193", "#fd9e11", "#f43e3c", "#79a200", "#0abded"] as const;

type Block =
  | { kind: "text"; heading?: string; body: string[] }
  | { kind: "cards"; heading?: string; cards: { title: string; body: string; tag?: string }[] }
  | { kind: "steps"; heading?: string; steps: { when: string; title: string; body: string }[] }
  | { kind: "note"; body: string };

type PageContent = { title: string; lead: string; blocks: Block[] };

export const PAGES: Record<string, PageContent> = {
  about: {
    title: "About us",
    lead:
      "Ara makes beautiful books, learning tools and cultural experiences for African families raising children abroad.",
    blocks: [
      {
        kind: "text",
        heading: "Why we started",
        body: [
          "Raising children far from home, it is easy for language and heritage to slip away. The songs, the stories and the everyday words grandparents use can start to feel distant.",
          "Ara exists to bring home closer: to give parents simple, joyful ways to pass on where their family comes from, one product at a time.",
        ],
      },
      {
        kind: "cards",
        heading: "What we make",
        cards: [
          { title: "Books", body: "Picture-led first word books, starting with My First 500 Yoruba Words." },
          { title: "Learning tools", body: "Flipcards and posters that bring everyday words into play." },
          { title: "Cultural experiences", body: "Stories, songs and rituals of home, made part of daily life." },
        ],
      },
      {
        kind: "text",
        heading: "Who it is for",
        body: [
          "Parents, grandparents, aunties and uncles of the diaspora who want children to know where they come from, and to grow up confident in it.",
        ],
      },
    ],
  },

  mission: {
    title: "Our mission",
    lead: "To bring home closer, one product at a time.",
    blocks: [
      {
        kind: "cards",
        cards: [
          {
            title: "Partnering with parents",
            body: "We stand with families at home, making it simple to pass on language and heritage every day.",
          },
          {
            title: "Raising confident, culturally grounded children",
            body: "Rooted in where they come from, children grow into their most confident selves, wherever life takes them.",
          },
          {
            title: "Providing complete learning resources",
            body: "From books to toys, games and more: everything your child needs to learn through play, all in one place.",
          },
          {
            title: "Supporting early language development",
            body: "The earlier a child hears their mother tongue, the deeper it takes root, in stories, songs and everyday play.",
          },
        ],
      },
      {
        kind: "text",
        heading: "Why language matters",
        body: [
          "Language is the bridge between your child and their grandparents, cousins and the community back home. When children grow up hearing their mother tongue, they carry that home with them, wherever they go.",
        ],
      },
    ],
  },

  "free-resources": {
    title: "Free resources",
    lead: "Printables and activities to bring your language into everyday play, free for every family.",
    blocks: [
      {
        kind: "cards",
        cards: [
          { title: "Yoruba alphabet sheet", body: "A printable alphabet with a picture for every letter.", tag: "Coming soon" },
          { title: "Colouring pages", body: "Everyday words to colour, name and say out loud together.", tag: "Coming soon" },
          { title: "Word of the week", body: "One new word each week, with a simple way to use it at home.", tag: "Coming soon" },
          { title: "Songs and rhymes", body: "Traditional songs with the words written out, to sing along.", tag: "Coming soon" },
        ],
      },
      {
        kind: "note",
        body: "Join the preorder list on the home page and we will let you know when new resources are ready.",
      },
    ],
  },

  roadmap: {
    title: "Roadmap",
    lead: "What we are making now, and what is coming next.",
    blocks: [
      {
        kind: "steps",
        steps: [
          {
            when: "Now",
            title: "My First 500 Yoruba Words",
            body: "Our first book: essential Yoruba vocabulary through simple words, clear visuals and everyday expressions, for children aged 2 to 8. Open for preorders.",
          },
          {
            when: "Next",
            title: "Flipcards and posters",
            body: "The same words as play: flipcards for little hands and posters for the bedroom wall.",
          },
          {
            when: "Later",
            title: "More languages and more ways to play",
            body: "New languages from across the continent, plus games, toys and stories.",
          },
        ],
      },
    ],
  },

  "privacy-policy": {
    title: "Privacy policy",
    lead: "How Ara collects, uses and protects your information.",
    blocks: [
      {
        kind: "note",
        body: "Draft for review. Please have this policy checked before the site goes live.",
      },
      {
        kind: "text",
        heading: "What we collect",
        body: [
          "When you join the preorder list or sign up to our newsletter, we collect the details you give us, such as your name, email address and the products you are interested in.",
        ],
      },
      {
        kind: "text",
        heading: "How we use it",
        body: [
          "We use your details to tell you about your preorder, product launches and news from Ara. We do not sell your information.",
        ],
      },
      {
        kind: "text",
        heading: "Who we share it with",
        body: [
          "Your details are stored with the services we use to run the site and our mailing list, such as Google Forms. They only process it on our behalf.",
        ],
      },
      {
        kind: "text",
        heading: "Your choices",
        body: [
          "You can unsubscribe from our emails at any time using the link in each email, or ask us to see, correct or delete the information we hold about you.",
        ],
      },
      {
        kind: "text",
        heading: "Contact us",
        body: ["Questions about this policy? Email us at araworld2025@gmail.com."],
      },
    ],
  },
};

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2
      className="font-['DM_Sans:Bold',sans-serif] font-bold text-[#2d251d] text-[length:var(--ara-text-heading-small)] md:text-[length:var(--ara-text-heading-medium)] leading-[1.1] tracking-[-0.04em]"
      style={{ fontVariationSettings: '"opsz" 14' }}
    >
      {children}
      <span className="text-[#ffbb1d]">.</span>
    </h2>
  );
}

const bodyText =
  "font-['Nunito:Regular',sans-serif] text-[#554739] text-[length:var(--ara-text-body)] md:text-[length:var(--ara-text-body-large)] leading-[1.6]";

/** Renders text with any email address turned into a mailto link. */
function Linkified({ text }: { text: string }) {
  const parts = text.split(/([\w.+-]+@[\w-]+\.[\w.]+[a-z])/i);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <a key={i} href={`mailto:${part}`} className="text-[#00a193] underline underline-offset-2 hover:text-[#006057]">
            {part}
          </a>
        ) : (
          part
        )
      )}
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "text":
      return (
        <section className="flex flex-col gap-[16px]">
          {block.heading && <Heading>{block.heading}</Heading>}
          {block.body.map((p) => (
            <p key={p} className={bodyText}>
              <Linkified text={p} />
            </p>
          ))}
        </section>
      );
    case "cards":
      return (
        <section className="flex flex-col gap-[24px]">
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            {block.cards.map((c, i) => (
              <div key={c.title} className="bg-white rounded-[16px] p-[24px] flex flex-col gap-[12px] shadow-[0_1px_2px_rgba(45,37,29,0.06)]">
                <span className="block size-[12px] rounded-full" style={{ background: ACCENTS[i % ACCENTS.length] }} />
                <div className="flex items-start justify-between gap-[12px]">
                  <h3 className="font-['DM_Sans:Bold',sans-serif] font-bold text-[#2d251d] text-[length:var(--ara-text-lead)] leading-[1.2] tracking-[-0.02em]">
                    {c.title}
                  </h3>
                  {c.tag && (
                    <span className="shrink-0 rounded-full bg-[#dcfe58] px-[10px] py-[4px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#2d251d] text-[length:var(--ara-text-caption)] whitespace-nowrap">
                      {c.tag}
                    </span>
                  )}
                </div>
                <p className="font-['Nunito:Regular',sans-serif] text-[#554739] text-[length:var(--ara-text-body)] leading-[1.5]">{c.body}</p>
              </div>
            ))}
          </div>
        </section>
      );
    case "steps":
      return (
        <section className="flex flex-col gap-[24px]">
          {block.heading && <Heading>{block.heading}</Heading>}
          <ol className="flex flex-col gap-[16px]">
            {block.steps.map((s, i) => (
              <li key={s.title} className="bg-white rounded-[16px] p-[24px] flex flex-col sm:flex-row gap-[12px] sm:gap-[24px]">
                <span
                  className="shrink-0 self-start rounded-full px-[14px] py-[6px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[length:var(--ara-text-small)] min-w-[72px] text-center"
                  style={{ background: ACCENTS[i % ACCENTS.length] }}
                >
                  {s.when}
                </span>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-['DM_Sans:Bold',sans-serif] font-bold text-[#2d251d] text-[length:var(--ara-text-lead)] leading-[1.2] tracking-[-0.02em]">
                    {s.title}
                  </h3>
                  <p className="font-['Nunito:Regular',sans-serif] text-[#554739] text-[length:var(--ara-text-body)] leading-[1.5]">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      );
    case "note":
      return (
        <p className="rounded-[12px] bg-[#fcffe5] border border-[#dcfe58] px-[20px] py-[16px] font-['Nunito:SemiBold',sans-serif] font-semibold text-[#554739] text-[length:var(--ara-text-body)] leading-[1.5]">
          {block.body}
        </p>
      );
  }
}

export function InfoPage({ slug }: { slug: string }) {
  const page = PAGES[slug];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The site locks html/body scrolling (see index.css), so each page
    // scrolls inside its own full-height container, like App does.
    scrollRef.current?.scrollTo(0, 0);
    document.title = page ? `${page.title} · ara` : "ara";
  }, [page]);

  if (!page) return null;

  return (
    <div ref={scrollRef} className="size-full bg-[#f8f7f3] overflow-x-hidden overflow-y-auto" data-name={`page-${slug}`}>
      <header className="max-w-[880px] mx-auto px-[24px] pt-[32px] grid grid-cols-[1fr_auto_1fr] items-center">
        <a
          href="#"
          className="justify-self-start inline-flex items-center gap-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#2d251d] text-[length:var(--ara-text-small)] hover:text-[#00a193] transition-colors"
        >
          <ArrowLeft className="size-[16px]" />
          Home
        </a>
        <AraLogo />
      </header>

      <main className="max-w-[880px] mx-auto px-[24px] pt-[64px] md:pt-[96px] pb-[100px] flex flex-col gap-[56px]">
        <div className="flex flex-col gap-[20px]">
          <h1
            className="font-['DM_Sans:Bold',sans-serif] font-bold text-[#2d251d] text-[length:var(--ara-text-heading-large)] md:text-[length:var(--ara-text-display)] leading-none tracking-[-0.0733em]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            {page.title}
            <span className="text-[#ffbb1d]">.</span>
          </h1>
          <p className={`${bodyText} md:text-[length:var(--ara-text-lead)] max-w-[640px]`}>{page.lead}</p>
        </div>
        {page.blocks.map((b, i) => (
          <BlockView key={i} block={b} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
