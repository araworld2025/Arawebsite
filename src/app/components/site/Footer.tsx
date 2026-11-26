// Shared site footer — logo wordmark, social links, and link columns.
// Extracted from the Figma desktop/mobile frames (identical apart from the
// responsive link-column layout below) so both frames render one source of truth.
import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import svgPaths from "./footerSvgPaths";

function Group11() {
  return (
    <div className="absolute contents inset-[22.37%_20.79%_21.41%_53.08%]">
      <div className="absolute inset-[22.37%_23.47%_22.26%_53.08%]" data-name="Ellipse 10 (Stroke)">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.2633 30.2633">
          <path d={svgPaths.p32edf300} fill="var(--fill-0, #6B9000)" id="Ellipse 10 (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[28.83%_23.34%_29.45%_69.09%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.76468 22.7976">
          <g id="Vector 12" style={{ mixBlendMode: "plus-darker" }}>
            <path d={svgPaths.p8381c00} fill="url(#paint0_linear_88_3425)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_88_3425" x1="8.6599" x2="1.81676" y1="-0.336415" y2="18.0734">
              <stop stopOpacity="0.25" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex inset-[26.99%_20.79%_21.41%_71.95%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="relative size-full" data-name="Line 4 (Stroke)">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.1977 9.36905">
              <path d={svgPaths.p2b7d0b40} fill="var(--fill-0, #78A100)" id="Line 4 (Stroke)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[22.37%_64.32%_21.49%_9.61%]">
      <div className="absolute inset-[22.37%_66.94%_22.26%_9.61%]" data-name="Ellipse 7 (Stroke)">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.2633 30.2633">
          <path d={svgPaths.p32edf300} fill="var(--fill-0, #0085B3)" id="Ellipse 7 (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[29.45%_66.98%_28.84%_25.45%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.76468 22.7976">
          <g id="Vector 12" style={{ mixBlendMode: "plus-darker" }}>
            <path d={svgPaths.p8381c00} fill="url(#paint0_linear_88_3425)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_88_3425" x1="8.6599" x2="1.81676" y1="-0.336415" y2="18.0734">
              <stop stopOpacity="0.25" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex inset-[26.91%_64.32%_21.49%_28.42%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="relative size-full" data-name="Line 1 (Stroke)">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.1977 9.36905">
              <path d={svgPaths.p2b7d0b40} fill="var(--fill-0, #0099CB)" id="Line 1 (Stroke)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[21.47%_45.77%_21.49%_37.92%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0496 31.1694">
        <g id="Group 15">
          <path d={svgPaths.p308e3b80} fill="var(--fill-0, #008B7F)" id="Line 5 (Stroke)" />
          <path d={svgPaths.p16a97180} fill="var(--fill-0, #00A193)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function LogoGroup2() {
  return (
    <div className="absolute contents inset-[21.47%_9.12%_21.41%_9.61%]" data-name="logo-group">
      <Group11 />
      <div className="absolute inset-[56.11%_9.12%_22.5%_81.82%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6927 11.6927">
          <circle cx="5.84633" cy="5.84633" fill="var(--fill-0, #FD9E11)" id="Ellipse 16" r="5.84633" />
        </svg>
      </div>
      <Group12 />
      <Group13 />
    </div>
  );
}

function XLogo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[23.98px]" data-name="X Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.98 24">
        <g id="X Logo">
          <path d={svgPaths.p16d01100} fill="var(--fill-0, #1E1E1E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LogoInstagram() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Logo Instagram">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_88_3318)" id="Logo Instagram">
          <path d={svgPaths.p3c382d72} fill="var(--fill-0, #1E1E1E)" id="Icon" />
        </g>
        <defs>
          <clipPath id="clip0_88_3318">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

/** One link in a footer column. Pages are reached by hash (`#about` etc.), see main.tsx. */
function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic text-[#1e1e1e] text-[length:var(--ara-text-body)] whitespace-nowrap hover:text-[#00a193] transition-colors"
    >
      {children}
    </a>
  );
}

/** The ara wordmark at its natural footer size (129 × 55), linking home. */
export function AraLogo() {
  return (
    <a href="#" aria-label="ara home" className="block h-[54.649px] overflow-clip relative shrink-0 w-[129.079px]" data-name="ara-logo-base">
      <LogoGroup2 />
    </a>
  );
}

/** A social icon; web accounts open in a new tab, the email link does not. */
function SocialLink({
  href,
  label,
  newTab = true,
  children,
}: {
  href: string;
  label: string;
  newTab?: boolean;
  children: ReactNode;
}) {
  return (
    <a href={href} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} aria-label={label} className="flex hover:opacity-70 transition-opacity">
      {children}
    </a>
  );
}

function ButtonList() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Button List">
      <SocialLink href="https://x.com/araworlddotkids" label="ara on X">
        <XLogo />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/araworld.kids/" label="ara on Instagram">
        <LogoInstagram />
      </SocialLink>
      <SocialLink href="mailto:araworld2025@gmail.com" label="Email ara" newTab={false}>
        <Mail className="size-[24px] text-[#1e1e1e]" strokeWidth={1.75} />
      </SocialLink>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center min-w-[240px] relative shrink-0 w-[262px]" data-name="Title">
      <AraLogo />
      <ButtonList />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[16px] relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Text Strong">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[length:var(--ara-text-body)] whitespace-nowrap">About Us</p>
      </div>
    </div>
  );
}

function TextLinkList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-[262px]" data-name="Text Link List">
      <Title1 />
      <FooterLink href="#about">About Us</FooterLink>
      <FooterLink href="#mission">Mission</FooterLink>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[16px] relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Text Strong">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[length:var(--ara-text-body)] whitespace-nowrap">Explore</p>
      </div>
    </div>
  );
}

function TextLinkList1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-[262px]" data-name="Text Link List">
      <Title2 />
      <FooterLink href="#free-resources">Free resources</FooterLink>
      <FooterLink href="#roadmap">Roadmap</FooterLink>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[16px] relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Text Strong">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[length:var(--ara-text-body)] whitespace-nowrap">Resources</p>
      </div>
    </div>
  );
}

function TextLinkList2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-[262px]" data-name="Text Link List">
      <Title3 />
      <FooterLink href="#privacy-policy">Privacy Policy</FooterLink>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[16px] items-center md:items-start justify-center relative shrink-0">
      <TextLinkList />
      <TextLinkList1 />
      <TextLinkList2 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0">
      <Title />
      <Frame46 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[1240px] py-[100px] relative shrink-0 w-full">
      <Frame56 />
    </div>
  );
}

export function Footer() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[1]" data-name="Footer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

export default Footer;
