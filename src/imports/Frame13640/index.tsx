import { useState } from "react";
import svgPaths from "./svg-4bw8vxn8mh";
import familyPhoto from "../../assets/family-photo.png";
import eranKoProducts from "../../assets/eran-ko-products.png";
import yorubaBook from "../../assets/yoruba-book.png";
import yorubaFlipcards from "../../assets/yoruba-flipcards.png";
import childReading from "../../assets/child-reading.png";
import kidsReading from "../../assets/kids-reading.png";
import { activateFeaturedProduct, featuredProductStage } from "@/config/featuredProduct";
import { submitLead } from "@/services/leads";
import { AraButton } from "@/app/components/site/AraButton";
import { NewsletterField, NewsletterSubmitButton } from "@/app/components/site/NewsletterFormFields";
import { ParallaxRow } from "@/app/components/ParallaxRow";
import { ParallaxCard } from "@/app/components/ParallaxCard";
import { HeroParticleField } from "@/app/components/HeroParticleField";
import { HeroHeadline } from "@/app/components/HeroHeadline";
import { ScrollRevealGroup, ScrollRevealItem } from "@/app/components/ScrollRevealList";
import { AFRICAN_COUNTRIES } from "@/data/countries";
import { Footer } from "@/app/components/site/Footer";
const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23e8e4dc'/%3E%3Cpath d='M0 640 300 360l190 180 170-140 540 400H0Z' fill='%23c9c2b5'/%3E%3Ccircle cx='850' cy='230' r='90' fill='%23d6cfc3'/%3E%3C/svg%3E";
const imgImage75 = childReading;
const imgImage91 = placeholderImage;
const imgImage92 = placeholderImage;
const imgImage93 = placeholderImage;
const imgEllipse42 = placeholderImage;
const imgImage98 = yorubaBook;
const imgImage97 = eranKoProducts;
const imgImage99 = yorubaFlipcards;
const imgImage100 = familyPhoto;
const imgEllipse28 = placeholderImage;
const imgRectangle = kidsReading;

function HeroChildFigure() {
  return (
    <div className="absolute contents left-[53.28px] top-[43.51px]">
      <div className="ara-hero-child-figure absolute h-[464.11px] left-[53.28px] top-[43.51px] w-[309.897px]" data-name="image 75">
        <HeroParticleField />
        <img alt="Child reading a book" className="absolute inset-0 max-w-none object-contain object-center pointer-events-none size-full" src={imgImage75} />
      </div>
    </div>
  );
}

function HeroChildFigureLayer() {
  return (
    <div className="absolute contents left-[53.28px] top-[43.51px]">
      <HeroChildFigure />
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="ara-hero-visual relative shrink-0 z-[1]" style={{ marginBottom: "-197px" }}>
      <div className="ara-hero-visual-canvas absolute h-[507.911px] w-[417.339px]">
        <div className="ara-hero-circle absolute inset-[0_10.64%_37.76%_13.62%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 316.112 316.112">
            <circle cx="158.056" cy="158.056" fill="var(--fill-0, #FFBB1D)" id="Ellipse 16" r="158.056" />
          </svg>
        </div>
      <div className="ara-hero-origin-particle ara-hero-origin-particle--1 absolute flex items-center justify-center left-[252.18px] size-[104.9px] top-[169.6px]">
        <div className="flex-none rotate-[111.31deg]">
          <div className="relative size-[81.004px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81.0039 81.0039">
              <circle cx="40.502" cy="40.502" id="Ellipse 18" r="29.6486" stroke="var(--stroke-0, #C8F526)" strokeWidth="21.7068" />
            </svg>
          </div>
        </div>
      </div>
      <HeroChildFigureLayer />
      <div className="ara-hero-origin-particle ara-hero-origin-particle--2 absolute flex h-[6.637px] items-center justify-center left-[308.47px] top-[293.88px] w-[50.43px]">
        <div className="flex-none rotate-[175.15deg]">
          <div className="h-[2.387px] relative w-[50.408px]">
            <div className="absolute inset-[-311.71%_-1.84%_-314.11%_-1.59%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.1376 17.3235">
                <path d={svgPaths.p2e557480} id="Line 7" stroke="var(--stroke-0, #F4C58F)" strokeWidth="14.9949" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="ara-hero-origin-particle ara-hero-origin-particle--3 absolute flex h-[30.609px] items-center justify-center left-[105.91px] top-[240.19px] w-[42.835px]">
        <div className="flex-none rotate-[145.37deg]">
          <div className="h-[2.387px] relative w-[50.408px]">
            <div className="absolute inset-[-311.71%_-1.84%_-314.11%_-1.59%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.1376 17.3235">
                <path d={svgPaths.p2e557480} id="Line 8" stroke="var(--stroke-0, #34D1FC)" strokeWidth="14.9949" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="ara-hero-origin-particle ara-hero-origin-particle--4 absolute flex items-center justify-center left-[48.84px] size-[53.419px] top-[195.35px]">
        <div className="flex-none rotate-[111.31deg]">
          <div className="relative size-[41.25px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.2505 41.2505">
              <circle cx="20.6252" cy="20.6252" fill="var(--fill-0, #64CB52)" id="Ellipse 25" r="20.6252" />
            </svg>
          </div>
        </div>
      </div>
      <div className="ara-hero-origin-particle ara-hero-origin-particle--5 absolute flex h-[8.261px] items-center justify-center left-[188.25px] top-[331.21px] w-[26.775px]">
        <div className="flex-none rotate-[-14.85deg]">
          <div className="h-[1.295px] relative w-[27.356px]">
            <div className="absolute inset-[-311.71%_-1.84%_-314.11%_-1.59%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.2949 9.4014">
                <path d={svgPaths.pf6fac80} id="Line 13" stroke="var(--stroke-0, #0096C0)" strokeWidth="8.13769" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="ara-hero-origin-particle ara-hero-origin-particle--6 absolute flex h-[63.992px] items-center justify-center left-[-40.84px] top-[158.05px] w-[41.129px]">
        <div className="flex-none rotate-[58.45deg]">
          <div className="h-[3.455px] relative w-[72.972px]">
            <div className="absolute inset-[-311.71%_-1.84%_-314.11%_-1.59%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.475 25.0777">
                <path d={svgPaths.p2c1e7080} id="Line 9" stroke="var(--stroke-0, #FC6F6D)" strokeWidth="21.7068" />
              </svg>
            </div>
          </div>
        </div>
      </div>
        <div className="ara-hero-origin-particle ara-hero-origin-particle--7 absolute flex h-[36.494px] items-center justify-center left-[14.21px] top-[146.51px] w-[39.162px]">
          <div className="flex-none rotate-[-31.55deg]">
            <div className="h-[23.447px] relative w-[31.558px]">
              <div className="absolute inset-[-35.03%_-9.08%_0_-26.02%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.6354 31.6596">
                  <path d={svgPaths.p797fac0} id="Ellipse 26" stroke="var(--stroke-0, #1DE4CB)" strokeWidth="16.426" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroCtaButton() {
  return (
    <AraButton color="teal" onClick={activateFeaturedProduct} className="ara-hero-cta w-full">
      {featuredProductStage.cta}
    </AraButton>
  );
}

function HeroCopy() {
  return (
    <div className="ara-hero-copy content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <HeroHeadline
        className="ara-hero-headline [word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#2d251d] text-[length:var(--ara-text-display)] text-center tracking-[var(--ara-tracking-display)] w-full whitespace-pre-wrap"
        style={{ fontVariationSettings: '"opsz" 14' }}
        ariaLabel="Bring home closer to your child."
        lines={[
          [{ text: "Bring home closer" }],
          [{ text: "to your child" }, { text: ".", className: "text-[#ffbb1d]" }],
        ]}
      />
      <p className="ara-hero-subcopy [word-break:break-word] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#554739] text-[length:var(--ara-text-body)] text-center w-full">Beautiful books, learning tools, and cultural experiences designed for African families raising children abroad.</p>
      <div className="ara-hero-cta-reveal flex w-full">
        <HeroCtaButton />
      </div>
    </div>
  );
}

function HeroCopyShell() {
  return (
    <div className="ara-hero-copy-shell content-stretch flex flex-col items-start max-w-[600px] relative shrink-0 w-full">
      <HeroCopy />
    </div>
  );
}

function HeroStack() {
  return (
    <div className="ara-hero-stack content-stretch flex flex-col gap-x-[20px] gap-y-0 h-fit items-center justify-center pt-[100px] pb-[100px] relative shrink-0 w-full">
      <HeroVisual />
      <HeroCopyShell />
    </div>
  );
}

function HeroShell() {
  return (
    <div className="ara-hero-shell content-stretch flex flex-col items-center justify-center max-w-[1240px] pb-[150px] pt-[150px] relative shrink-0 w-full">
      <HeroStack />
    </div>
  );
}

function HeroLogoShapeRight() {
  return (
    <div className="absolute contents inset-[22.37%_20.79%_21.41%_53.08%]">
      <div className="absolute inset-[22.37%_23.47%_22.26%_53.08%]" data-name="Ellipse 10 (Stroke)">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.2927 33.2927">
          <path d={svgPaths.p2c7c7a00} fill="var(--fill-0, #6B9000)" id="Ellipse 10 (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[28.83%_23.34%_29.45%_69.09%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7422 25.0797">
          <g id="Vector 12" style={{ mixBlendMode: "plus-darker" }}>
            <path d={svgPaths.p14501480} fill="url(#paint0_linear_88_3401)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_88_3401" x1="9.52678" x2="1.99863" y1="-0.370091" y2="19.8827">
              <stop stopOpacity="0.25" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex inset-[26.99%_20.79%_21.41%_71.95%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="relative size-full" data-name="Line 4 (Stroke)">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.0204 10.3069">
              <path d={svgPaths.p29578e00} fill="var(--fill-0, #78A100)" id="Line 4 (Stroke)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroLogoShapeLeft() {
  return (
    <div className="absolute contents inset-[22.37%_64.33%_21.49%_9.61%]">
      <div className="absolute inset-[22.37%_66.94%_22.26%_9.61%]" data-name="Ellipse 7 (Stroke)">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.2927 33.2927">
          <path d={svgPaths.p112f6600} fill="var(--fill-0, #0085B3)" id="Ellipse 7 (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[29.45%_66.98%_28.84%_25.45%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7422 25.0797">
          <g id="Vector 12" style={{ mixBlendMode: "plus-darker" }}>
            <path d={svgPaths.p14501480} fill="url(#paint0_linear_88_3401)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_88_3401" x1="9.52678" x2="1.99863" y1="-0.370091" y2="19.8827">
              <stop stopOpacity="0.25" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex inset-[26.91%_64.32%_21.49%_28.42%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="relative size-full" data-name="Line 1 (Stroke)">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.0204 10.3069">
              <path d={svgPaths.p29578e00} fill="var(--fill-0, #0099CB)" id="Line 1 (Stroke)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroLogoShapeMiddle() {
  return (
    <div className="absolute inset-[21.47%_45.77%_21.49%_37.92%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.1568 34.2895">
        <g id="Group 15">
          <path d={svgPaths.p16315600} fill="var(--fill-0, #008B7F)" id="Line 5 (Stroke)" />
          <path d={svgPaths.pfd06d00} fill="var(--fill-0, #00A193)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function HeroLogoMark() {
  return (
    <div className="absolute contents inset-[21.47%_9.12%_21.41%_9.61%]" data-name="logo-group">
      <HeroLogoShapeRight />
      <div className="absolute inset-[56.11%_9.12%_22.5%_81.82%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8631 12.8631">
          <circle cx="6.43156" cy="6.43156" fill="var(--fill-0, #FD9E11)" id="Ellipse 16" r="6.43156" />
        </svg>
      </div>
      <HeroLogoShapeLeft />
      <HeroLogoShapeMiddle />
    </div>
  );
}

function HeroLogoBar() {
  return (
    <div className="ara-hero-logo-wrap absolute content-stretch flex flex-col items-center justify-center left-0 py-[15px] right-0 top-0">
      <div className="ara-hero-logo h-[60.119px] overflow-clip relative shrink-0 w-[142px]" data-name="ara-logo-base">
        <HeroLogoMark />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-[#f8f7f3] from-[72.585%] relative shrink-0 to-[95.893%] to-white w-full z-[8]" data-name="hero-section">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
          <HeroShell />
          <HeroLogoBar />
        </div>
      </div>
    </div>
  );
}


function CountryTag({ code, name }: { code: string; name: string }) {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center px-[24px] relative shrink-0" data-name="country-tag">
      <div className="relative shrink-0 size-[36px] rounded-full overflow-hidden bg-gray-100 flex items-center justify-center" data-name="Component 1">
        <img
          src={`https://flagcdn.com/w160/${code.toLowerCase()}.png`}
          alt={`${name} flag`}
          loading="lazy"
          className="absolute inset-0 size-full object-cover pointer-events-none"
        />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="text">
        <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[27px] relative shrink-0 text-[#344054] text-[length:var(--ara-text-lead)] whitespace-nowrap">{name}</p>
      </div>
    </div>
  );
}

function FlagStack() {
  return (
    <div className="content-stretch flex gap-[4px] h-[101px] items-center relative shrink-0 w-max" data-name="flag-stack">
      {AFRICAN_COUNTRIES.map((country) => (
        <CountryTag key={country.code} code={country.code} name={country.name} />
      ))}
    </div>
  );
}

function FlagSwipeSection() {
  return (
    <div className="flex flex-row items-center self-stretch overflow-hidden">
      <div className="flex h-[101px] items-center w-max" data-name="flag-swipe-section">
        <FlagStack />
        <FlagStack />
      </div>
    </div>
  );
}

function FlagMarqueeContainer() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center justify-center max-w-[1240px] overflow-clip relative shrink-0 w-full" data-name="max-out">
      <FlagSwipeSection />
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[267px]" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="bg-gradient-to-r from-white relative size-full to-[rgba(255,255,255,0)]" data-name="right-blur" />
        </div>
      </div>
      <div className="absolute bg-gradient-to-r bottom-0 from-white left-0 to-[rgba(255,255,255,0)] top-0 w-[267px]" data-name="left-blur" />
    </div>
  );
}

function FlagMarqueeSection() {
  return (
    <div className="relative shrink-0 w-full z-[7]" data-name="flag-marquee-section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[24px] relative size-full">
          <FlagMarqueeContainer />
        </div>
      </div>
    </div>
  );
}

function ValueCardPartner() {
  return (
    <div className="content-stretch flex grow-0 basis-auto w-[505px] flex-col gap-x-[33px] gap-y-[16px] md:gap-y-[33px] items-start min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[80px]" data-name="icon / partner">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-2.65px)] size-[75px] top-[calc(50%+2.5px)]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 75">
            <circle cx="37.5" cy="37.5" fill="var(--fill-0, #64CB52)" id="Ellipse 49" r="37.5" />
          </svg>
        </div>
        <div className="absolute h-[43.125px] left-[16.85px] top-[5px] w-[45.395px]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.3947 43.125">
            <path d={svgPaths.pd09ff00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute flex h-[13.586px] items-center justify-center left-[64.85px] top-0 w-[15.295px]">
          <div className="flex-none rotate-[2.47deg]">
            <div className="h-[12.963px] relative w-[14.75px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.7502 12.9632">
                <path d={svgPaths.pc7c8fb8} fill="var(--fill-0, #64CB52)" id="Ellipse 44" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#2d251d] text-[length:var(--ara-text-heading-medium)] tracking-[var(--ara-tracking-heading-medium)] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <span className="leading-none">{`Partnering with `}</span>
        <span className="leading-none text-[#628506]">parents</span>
      </p>
      <p className="[word-break:break-word] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#554739] text-[length:var(--ara-text-body)] w-[min-content]">We stand with families at home, making it simple to pass on language and heritage every day.</p>
    </div>
  );
}

function ValueCardConfidence() {
  return (
    <div className="content-stretch flex grow-0 basis-auto w-[505px] flex-col gap-x-[33px] gap-y-[16px] md:gap-y-[33px] items-start min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[80px]" data-name="icon / bloosom">
        <div className="absolute left-0 size-[75px] top-[5px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 75">
            <circle cx="37.5" cy="37.5" fill="var(--fill-0, #FD9E11)" id="Ellipse 49" r="37.5" />
          </svg>
        </div>
        <div className="absolute inset-[9.38%_23.44%_34.38%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.7499 45">
            <path d={svgPaths.p14d6000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[1.25%_2.5%_81.25%_80%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <circle cx="7" cy="7" fill="var(--fill-0, #FD9E11)" id="Ellipse 44" r="7" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#2d251d] text-[length:var(--ara-text-heading-medium)] tracking-[var(--ara-tracking-heading-medium)] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <span className="leading-none">{`Raising confident, `}</span>
        <span className="leading-none text-[#e07100]">{`culturally grounded `}</span>
        <span className="leading-none">children</span>
      </p>
      <p className="[word-break:break-word] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#554739] text-[length:var(--ara-text-body)] w-[min-content]">Rooted in where they come from, children grow into their most confident selves - wherever life takes them.</p>
    </div>
  );
}

function ValueCardResources() {
  return (
    <div className="content-stretch flex grow-0 basis-auto w-[505px] flex-col gap-x-[33px] gap-y-[16px] md:gap-y-[33px] items-start min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[80px]" data-name="icon / star">
        <div className="absolute left-0 size-[75px] top-[5.01px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 75">
            <circle cx="37.5" cy="37.5" fill="var(--fill-0, #04C8B2)" id="Ellipse 52" r="37.5" />
          </svg>
        </div>
        <div className="absolute flex inset-[-1.25%_4.52%_33.05%_22.69%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(-14.8827cqw,82.5096cqh)] rotate-[10.9deg] w-[hypot(85.1173cqw,17.4904cqh)]">
            <div className="relative size-full" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.4762 45.8427">
                <path d={svgPaths.p35e37a00} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[5%_0.14%_82.61%_87.5%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(7.16143cqw,7.12433cqh)] rotate-[-45.07deg] w-[hypot(100cqw,-100cqh)]">
            <div className="relative size-full">
              <div className="absolute inset-[-4px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 4">
                  <line id="Line 16" stroke="var(--stroke-0, #04C8B2)" strokeWidth="4" x2="14" y1="2" y2="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#2d251d] text-[length:var(--ara-text-heading-medium)] tracking-[var(--ara-tracking-heading-medium)] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <span className="leading-none">{`Providing complete `}</span>
        <span className="leading-none text-[#058076]">learning resources</span>
      </p>
      <p className="[word-break:break-word] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#554739] text-[length:var(--ara-text-body)] w-[min-content]">From books to toys, games, and more - everything your child needs to learn through play, all in one place.</p>
    </div>
  );
}

function ValueCardLanguage() {
  return (
    <div className="content-stretch flex grow-0 basis-auto w-[505px] flex-col gap-x-[33px] gap-y-[16px] md:gap-y-[33px] items-start min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[80px]" data-name="icon / speech">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-2.5px)] size-[75px] top-[calc(50%+2.5px)]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 75">
            <circle cx="37.5" cy="37.5" fill="var(--fill-0, #F43E3C)" id="Ellipse 52" r="37.5" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[52.201px] items-center justify-center left-[calc(50%+2.33px)] top-[calc(50%-10.76px)] w-[46.762px]">
          <div className="flex-none rotate-[-21.27deg]">
            <div className="h-[42.998px] relative w-[33.443px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.4432 42.9983">
                <path d={svgPaths.p3eb23280} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[23.195px] items-center justify-center left-[calc(50%+29.11px)] top-[calc(50%-29.4px)] w-[20.23px]">
          <div className="flex-none rotate-[16.35deg]">
            <div className="h-[19.681px] relative w-[15.308px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3078 19.6815">
                <path d={svgPaths.p3927ee80} fill="var(--fill-0, #F43E3C)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#2d251d] text-[length:var(--ara-text-heading-medium)] tracking-[var(--ara-tracking-heading-medium)] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <span className="leading-none">{`Supporting early `}</span>
        <span className="leading-none text-[#f43e3c]">language development</span>
      </p>
      <p className="[word-break:break-word] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#554739] text-[length:var(--ara-text-body)] w-[min-content]">The earlier a child hears their mother tongue, the deeper it takes root - in stories, songs, and everyday play.</p>
    </div>
  );
}

function ValueCardsRow() {
  return (
    <ParallaxRow
      className="content-stretch flex gap-y-[100px] gap-x-[48px] items-start justify-center relative shrink-0 w-full"
      itemClassName="flex min-w-px shrink"
    >
      <ValueCardPartner />
      <ValueCardConfidence />
      <ValueCardResources />
      <ValueCardLanguage />
    </ParallaxRow>
  );
}

function MissionBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center relative shrink-0 w-full">
      <p data-noreveal className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-none max-w-[800px] relative shrink-0 text-[#2d251d] text-[length:var(--ara-text-display)] text-center tracking-[var(--ara-tracking-display)]" style={{ fontVariationSettings: '"opsz" 14' }}><span>On a mission to bring home closer, one product at a time</span><span className="text-[#ffbb1d]">.</span></p>
      <ValueCardsRow />
    </div>
  );
}

function MissionContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[1240px] py-[200px] relative shrink-0 w-full" data-name="max-out">
      <MissionBlock />
    </div>
  );
}

function MissionSection() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[6]" data-name="mission-section">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
          <MissionContainer />
        </div>
      </div>
    </div>
  );
}

function NewProductWordmark() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.5px)] p-[10px] top-[-42px] w-[1437px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1437 268' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(110.8 1.0836e-13 -1.7766e-13 46.656 690 338.09)'><stop stop-color='rgba(233,233,233,1)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='0.66341'/></radialGradient></defs></svg>\")" }}>
      <p className="ara-new-product-wordmark [word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#f8f7f3] text-center tracking-[var(--ara-tracking-wordmark)] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        New Product!
      </p>
    </div>
  );
}

function NewProductBanner() {
  return (
    <div className="h-[226px] mb-[-133px] overflow-clip relative shrink-0 w-[1680px]" data-name="top-section">
      <NewProductWordmark />
    </div>
  );
}

function FeaturedBookCtaButton() {
  return (
    <AraButton color="blue" onClick={activateFeaturedProduct} className="col-1 max-w-[396px] ml-0 mt-0 row-1">
      {featuredProductStage.cta}
    </AraButton>
  );
}

function FeaturedBookCtaCell() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <FeaturedBookCtaButton />
    </div>
  );
}

function FeaturedBookCtaGrid() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <FeaturedBookCtaCell />
    </div>
  );
}

function FeaturedBookInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[23px] items-start max-w-[400px] min-w-[340px] relative">
      <p className="[word-break:break-word] font-['DM_Sans:Black',sans-serif] font-black leading-[0] min-w-full relative shrink-0 text-[#07364a] text-[length:var(--ara-text-heading-xlarge)] tracking-[var(--ara-tracking-heading-xlarge)] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <span className="leading-none">{`My first 500 yoruba `}</span>
        <span className="leading-none text-[#0099cb]">Book</span>
      </p>
      <p className="[word-break:break-word] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#554739] text-[length:var(--ara-text-small)] w-[min-content]">A comprehensive introduction to essential Yoruba vocabulary through simple words, clear visuals, and everyday expressions. Crafted for children aged 2–8.</p>
      <FeaturedBookCtaGrid />
    </div>
  );
}

function FeaturedBookRow() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-center flex flex-wrap gap-y-[48px] gap-x-[24px] items-center justify-center px-[24px] py-[62px] relative size-full">
          <FeaturedBookInfo />
          <img alt="" className="ara-featured-book-image max-w-none object-cover pointer-events-none w-[500px]" src={imgImage98} />
        </div>
      </div>
    </div>
  );
}

function FlipcardHeading() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Black',sans-serif] font-black leading-[0] relative shrink-0 text-[#79a200] text-[length:var(--ara-text-zero)] tracking-[var(--ara-tracking-stat)] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <span className="leading-none text-[length:var(--ara-text-heading-large)]">Flipcard</span>
        <span className="leading-none text-[#fd9e11] text-[length:var(--ara-text-heading-large)]">.</span>
      </p>
    </div>
  );
}

function FlipcardInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
      <FlipcardHeading />
      <p className="[word-break:break-word] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#554739] text-[length:var(--ara-text-small)] w-[min-content]">My First 500 Yoruba Words introduces children to essential Yoruba vocabulary through simple words.</p>
    </div>
  );
}

function FlipcardCard() {
  return (
    <div className="content-stretch flex flex-col h-[260px] items-start p-[24px] relative shrink-0 w-[313px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 313 260' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(8.2 13.45 -17.561 10.706 128 115.96)'><stop stop-color='rgba(252,255,229,1)' offset='0.61058'/><stop stop-color='rgba(252,255,229,0)' offset='1'/></radialGradient></defs></svg>\")" }}>
      <FlipcardInfo />
    </div>
  );
}

function PosterHeading() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Black',sans-serif] font-black leading-[0] relative shrink-0 text-[#79a200] text-[length:var(--ara-text-zero)] tracking-[var(--ara-tracking-stat)] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <span className="leading-none text-[length:var(--ara-text-heading-large)]">Poster</span>
        <span className="leading-none text-[#fd9e11] text-[length:var(--ara-text-heading-large)]">.</span>
      </p>
    </div>
  );
}

function PosterInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
      <PosterHeading />
      <p className="[word-break:break-word] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#554739] text-[length:var(--ara-text-small)] w-[min-content]">My First 500 Yoruba Words introduces children to essential Yoruba vocabulary through simple words.</p>
    </div>
  );
}

function PosterCard() {
  return (
    <div className="content-stretch flex flex-col h-[260px] items-start p-[24px] relative shrink-0 w-[313px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 313 260' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(8.2 13.45 -17.561 10.706 128 115.96)'><stop stop-color='rgba(239,254,251,1)' offset='0.61058'/><stop stop-color='rgba(239,254,251,0)' offset='1'/></radialGradient></defs></svg>\")" }}>
      <PosterInfo />
    </div>
  );
}

function SeriesCardsRow() {
  return (
    <ParallaxRow
      className="content-center flex flex-wrap gap-[24px] items-center relative shrink-0 w-full"
      itemClassName="flex flex-[1_0_0] min-w-[350px]"
    >
      <div className="bg-[#fcffe5] content-stretch flex gap-[11px] items-start overflow-clip relative rounded-[8px] w-full">
        <div className="absolute bottom-0 h-[260px] right-0 w-[400px]" data-name="image 97">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage97} />
        </div>
        <FlipcardCard />
        <p className="-translate-x-1/2 [word-break:break-word] absolute bottom-[3592.5%] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] left-[calc(50%+685px)] not-italic text-[length:var(--ara-text-lead)] text-center text-white top-[-3503.13%] w-[81px]">Explore</p>
      </div>
      <div className="bg-[#effefb] content-stretch flex gap-[11px] items-start overflow-clip relative rounded-[8px] w-full">
        <div className="absolute bottom-0 h-[260px] right-0 w-[400px]" data-name="image 97">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage99} />
        </div>
        <PosterCard />
        <p className="-translate-x-1/2 [word-break:break-word] absolute bottom-[3592.5%] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] left-[calc(50%+685px)] not-italic text-[length:var(--ara-text-lead)] text-center text-white top-[-3503.13%] w-[81px]">Explore</p>
      </div>
    </ParallaxRow>
  );
}

function SeriesSubsection() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[17px] items-start px-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Nunito:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#554739] text-[length:var(--ara-text-small)] tracking-[var(--ara-tracking-eyebrow)] w-full">{`MORE ON THESE SERIES >>`}</p>
        <SeriesCardsRow />
      </div>
    </div>
  );
}

function NewReleaseBadge() {
  return (
    <div className="absolute bg-[#dcfe58] h-[29px] left-[48px] max-w-[396px] rounded-[11px] top-[-12px] w-[150px]">
      <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-w-[inherit] px-[43px] py-[23px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4f690b] text-[length:var(--ara-text-body)] whitespace-nowrap">NEW RELEASE!</p>
        </div>
      </div>
    </div>
  );
}

function ProductShowcaseWrapper() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="wrapper">
      <NewProductBanner />
      <ParallaxCard className="bg-gradient-to-b content-stretch flex flex-col from-[#f0faff] from-[86.417%] items-start max-w-[1240px] pb-[24px] relative rounded-[16px] shrink-0 to-[101.87%] to-white w-full">
        <FeaturedBookRow />
        <SeriesSubsection />
        <NewReleaseBadge />
      </ParallaxCard>
    </div>
  );
}

function ProductShowcaseContainer() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1240px] relative shrink-0 w-full" data-name="max-out">
      <ProductShowcaseWrapper />
    </div>
  );
}

function ProductShowcaseSection() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[5]" data-name="product-showcase-section">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
          <ProductShowcaseContainer />
        </div>
      </div>
    </div>
  );
}

function RootsHeading() {
  return (
    <ScrollRevealGroup className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <ScrollRevealItem index={0} count={2}>
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#2d251d] text-[length:var(--ara-text-display)] tracking-[var(--ara-tracking-display)] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          {`Raise children who know where they come from`}
          <span className="text-[#ffbb1d]">.</span>
        </p>
      </ScrollRevealItem>
      <ScrollRevealItem index={1} count={2}>
        <p className="font-['Nunito:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#554739] text-[length:var(--ara-text-heading-small)] w-full">When children grow up hearing their mother tongue - in stories, songs, and play - they carry that home with them, wherever they go.</p>
      </ScrollRevealItem>
    </ScrollRevealGroup>
  );
}

function RootsBulletMarker1() {
  return (
    <div className="relative self-stretch shrink-0">
      <div className="content-stretch flex items-start py-[9px] relative size-full">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]">
          <div className="flex-none rotate-90">
            <div className="relative size-[12px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <ellipse cx="6" cy="6" fill="var(--fill-0, #FFBB1D)" id="Ellipse 28" rx="6" ry="6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RootsBullet1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <RootsBulletMarker1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#554739] text-[length:var(--ara-text-body)]">Every word in their mother tongue is a thread connecting them to who they are and where they come from.</p>
    </div>
  );
}

function RootsBulletMarker2() {
  return (
    <div className="relative self-stretch shrink-0">
      <div className="content-stretch flex items-start py-[9px] relative size-full">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]">
          <div className="flex-none rotate-90">
            <div className="relative size-[12px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <ellipse cx="6" cy="6" fill="var(--fill-0, #FFBB1D)" id="Ellipse 28" rx="6" ry="6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RootsBullet2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <RootsBulletMarker2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#554739] text-[length:var(--ara-text-body)]">Children who know their roots grow up with a deeper sense of self - and that confidence shows everywhere.</p>
    </div>
  );
}

function RootsBulletMarker3() {
  return (
    <div className="relative self-stretch shrink-0">
      <div className="content-stretch flex items-start py-[9px] relative size-full">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]">
          <div className="flex-none rotate-90">
            <div className="relative size-[12px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <ellipse cx="6" cy="6" fill="var(--fill-0, #FFBB1D)" id="Ellipse 28" rx="6" ry="6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RootsBullet3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <RootsBulletMarker3 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#554739] text-[length:var(--ara-text-body)]">Language is the bridge between your child and their grandparents, cousins, and the community back home.</p>
    </div>
  );
}

function RootsBulletMarker4() {
  return (
    <div className="relative self-stretch shrink-0">
      <div className="content-stretch flex items-start py-[9px] relative size-full">
        <div className="flex items-center justify-center relative shrink-0 size-[12px]">
          <div className="flex-none rotate-90">
            <div className="relative size-[12px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <ellipse cx="6" cy="6" fill="var(--fill-0, #FFBB1D)" id="Ellipse 28" rx="6" ry="6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RootsBullet4() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <RootsBulletMarker4 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#554739] text-[length:var(--ara-text-body)]">ara brings the songs, stories, and rituals of home into daily life - making culture something they live, not just learn.</p>
    </div>
  );
}

function RootsBulletList() {
  return (
    <ScrollRevealGroup className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <ScrollRevealItem index={0} count={4}>
        <RootsBullet1 />
      </ScrollRevealItem>
      <ScrollRevealItem index={1} count={4}>
        <RootsBullet2 />
      </ScrollRevealItem>
      <ScrollRevealItem index={2} count={4}>
        <RootsBullet3 />
      </ScrollRevealItem>
      <ScrollRevealItem index={3} count={4}>
        <RootsBullet4 />
      </ScrollRevealItem>
    </ScrollRevealGroup>
  );
}

function RootsTextColumn() {
  return (
    <div className="grow-0 basis-auto w-[505px] min-w-px relative">
      <div className="content-stretch flex flex-col gap-[48px] items-start px-[24px] relative size-full">
        <RootsHeading />
        <RootsBulletList />
      </div>
    </div>
  );
}

function RootsRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center max-w-[1250px] relative shrink-0 w-full">
      <div className="ara-family-photo aspect-[1170/1456] flex-[1_0_0] w-[505px] min-w-px relative" data-name="image 99">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage100} />
      </div>
      <RootsTextColumn />
    </div>
  );
}

function RootsContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[1240px] py-[150px] relative shrink-0 w-full">
      <RootsRow />
    </div>
  );
}

function RootsSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full z-[4]">
      <RootsContainer />
    </div>
  );
}

function TestimonialImage() {
  return (
    <div className="h-[350.2px] relative shrink-0 w-[350.2px]">
      <img alt="Mother reading with her child" className="absolute inset-0 object-contain size-full" src={imgRectangle} />
    </div>
  );
}

function TestimonialAttribution() {
  return (
    <div data-reveal-sequence="after-heading" className="content-stretch flex flex-wrap gap-y-[17px] gap-x-[11px] items-center justify-center relative shrink-0 w-full">
      <div className="flex h-[35px] items-center justify-center relative shrink-0 w-[34px]">
        <div className="flex-none rotate-90">
          <div className="h-[34px] relative w-[35px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 34">
              <ellipse cx="17.5" cy="17" fill="var(--fill-0, #FFBB1D)" id="Ellipse 28" rx="17.5" ry="17" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] grow-0 basis-auto w-fit font-['Nunito:Regular',sans-serif] font-normal leading-[1.5] min-w-[220px] relative text-[#554739] text-[length:var(--ara-text-body)] text-center whitespace-normal">Prof. Jim Cummins — University of Toronto</p>
    </div>
  );
}

function TestimonialQuote() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-center max-w-[634px] relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3] min-w-full relative shrink-0 text-[#2d251d] text-[length:var(--ara-text-heading-medium)] text-center w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>{`"Children with a strong foundation in their mother tongue develop stronger literacy abilities in every language they learn."`}</p>
      <div className="w-full">
        <TestimonialAttribution />
      </div>
    </div>
  );
}

function TestimonialContent() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center relative shrink-0 w-full">
      <div>
        <TestimonialImage />
      </div>
      <TestimonialQuote />
    </div>
  );
}

function TestimonialInner() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[960px] relative shrink-0 w-full">
      <TestimonialContent />
    </div>
  );
}

function TestimonialContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[1240px] py-[120px] relative shrink-0 w-full">
      <TestimonialInner />
    </div>
  );
}

function TestimonialSection() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[3]">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
          <TestimonialContainer />
        </div>
      </div>
    </div>
  );
}

function FooterLogoShapeRight() {
  return (
    <div className="absolute contents inset-[22.37%_20.79%_21.41%_53.08%]">
      <div className="absolute inset-[22.37%_23.47%_22.26%_53.08%]" data-name="Ellipse 10 (Stroke)">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5078 22.5078">
          <path d={svgPaths.p13511800} fill="var(--fill-0, #6B9000)" id="Ellipse 10 (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[28.83%_23.34%_29.45%_69.09%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.26231 16.9553">
          <g id="Vector 12" style={{ mixBlendMode: "plus-darker" }}>
            <path d={svgPaths.p28b62a00} fill="url(#paint0_linear_88_3316)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_88_3316" x1="6.44064" x2="1.35118" y1="-0.250202" y2="13.4418">
              <stop stopOpacity="0.25" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex inset-[26.99%_20.79%_21.41%_71.95%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="relative size-full" data-name="Line 4 (Stroke)">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9715 6.96807">
              <path d={svgPaths.p3d687b80} fill="var(--fill-0, #78A100)" id="Line 4 (Stroke)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterLogoShapeLeft() {
  return (
    <div className="absolute contents inset-[22.37%_64.32%_21.49%_9.61%]">
      <div className="absolute inset-[22.37%_66.94%_22.26%_9.61%]" data-name="Ellipse 7 (Stroke)">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5078 22.5078">
          <path d={svgPaths.p13511800} fill="var(--fill-0, #0085B3)" id="Ellipse 7 (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[29.45%_66.98%_28.84%_25.45%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.26231 16.9553">
          <g id="Vector 12" style={{ mixBlendMode: "plus-darker" }}>
            <path d={svgPaths.p28b62a00} fill="url(#paint0_linear_88_3316)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_88_3316" x1="6.44064" x2="1.35118" y1="-0.250202" y2="13.4418">
              <stop stopOpacity="0.25" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex inset-[26.91%_64.32%_21.49%_28.42%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="relative size-full" data-name="Line 1 (Stroke)">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9715 6.96807">
              <path d={svgPaths.p3d687b80} fill="var(--fill-0, #0099CB)" id="Line 1 (Stroke)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterLogoShapeMiddle() {
  return (
    <div className="absolute inset-[21.47%_45.77%_21.49%_37.92%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6553 23.1816">
        <g id="Group 15">
          <path d={svgPaths.p136e7040} fill="var(--fill-0, #008B7F)" id="Line 5 (Stroke)" />
          <path d={svgPaths.p266a8300} fill="var(--fill-0, #00A193)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function NewsletterLogoMark() {
  return (
    <div className="absolute contents inset-[21.47%_9.12%_21.41%_9.61%]" data-name="logo-group">
      <FooterLogoShapeRight />
      <div className="absolute inset-[56.11%_9.12%_22.5%_81.82%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.6962 8.6962">
          <circle cx="4.3481" cy="4.3481" fill="var(--fill-0, #FD9E11)" id="Ellipse 16" r="4.3481" />
        </svg>
      </div>
      <FooterLogoShapeLeft />
      <FooterLogoShapeMiddle />
    </div>
  );
}

function NewsletterHeading() {
  return (
    <div className="relative shrink-0 w-full z-[3]">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[19px] items-center justify-center pb-[54px] pt-[46px] px-[16px] md:px-[97px] relative size-full">
          <div className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#554739] text-[length:var(--ara-text-heading-medium)] text-center tracking-[var(--ara-tracking-heading-medium)] max-w-[560px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
            Connect with us to get a dooze of{" "}
            <span className="inline-flex h-[40.644px] overflow-clip relative align-middle w-[96px]" data-name="ara-logo-base"><NewsletterLogoMark /></span>{" "}
            to connect with your child
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsletterSignupForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    if (email && email.includes("@")) {
      try {
        await submitLead({ email, source: "newsletter-footer", newsletterConsent: true });
        setSubscribed(true);
        setTimeout(() => { setEmail(""); setSubscribed(false); }, 3000);
      } catch {
        setSubscribed(false);
      }
    }
  };

  return (
    <div className="bg-white max-w-[800px] relative rounded-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col isolate items-center justify-center max-w-[inherit] relative rounded-[inherit] size-full">
        <NewsletterHeading />
        {/* Email input row */}
        <div className="relative w-full z-[2]">
          <NewsletterField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            placeholder="Type your email address here"
          />
        </div>
        {/* Subscribe button row */}
        <div className="relative w-full z-[1] overflow-hidden rounded-b-[16px]">
          <NewsletterSubmitButton onClick={handleSubscribe} tone={subscribed ? "success" : "default"}>
            {subscribed ? "SUBSCRIBED ✓" : "SUBSCRIBE"}
          </NewsletterSubmitButton>
        </div>
      </div>
      <div aria-hidden className="absolute border-2 border-[rgba(203,194,166,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function NewsletterInner() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[1240px] py-[150px] relative shrink-0 w-full">
      <NewsletterSignupForm />
    </div>
  );
}

function NewsletterSection() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.78)] relative shrink-0 to-[rgba(255,255,255,0.78)] via-[45.203%] via-[rgba(240,238,228,0.78)] w-full z-[2]">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[441px] items-center justify-center left-1/2 top-[calc(50%+0.47px)] w-[426px]">
            <div className="flex-none rotate-90">
              <div className="h-[426px] relative w-[441px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 441 426">
                  <ellipse cx="220.5" cy="213" fill="var(--fill-0, #F8F7F3)" id="Ellipse 28" rx="220.5" ry="213" />
                </svg>
              </div>
            </div>
          </div>
          <NewsletterInner />
        </div>
      </div>
    </div>
  );
}


export default function AraLandingPage() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center relative size-full">
      <HeroSection />
      <FlagMarqueeSection />
      <MissionSection />
      <ProductShowcaseSection />
      <RootsSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
