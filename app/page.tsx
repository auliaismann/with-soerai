import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MemberGallerySection from "@/components/MemberGallerySection";
import OrgStructureSection from "@/components/OrgStructureSection";
import ProgramSection from "@/components/ProgramSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import {
  absoluteUrl,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_LANGUAGE,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  SOCIAL_PROFILES,
} from "@/lib/seo";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: SITE_NAME,
      alternateName: "With Soerai",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}#logo`,
        url: absoluteUrl("/images/logo-withsoerai.png"),
        contentUrl: absoluteUrl("/images/logo-withsoerai.png"),
        width: 6000,
        height: 3375,
        caption: SITE_NAME,
      },
      image: {
        "@id": `${SITE_URL}#primaryimage`,
      },
      description: SITE_DESCRIPTION,
      email: SITE_EMAIL,
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Indonesia Timur",
      },
      sameAs: SOCIAL_PROFILES,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: "With Soerai",
      description: SITE_DESCRIPTION,
      publisher: {
        "@id": `${SITE_URL}#organization`,
      },
      inLanguage: [SITE_LANGUAGE, "en"],
    },
    {
      "@type": "ImageObject",
      "@id": `${SITE_URL}#primaryimage`,
      url: absoluteUrl("/opengraph-image"),
      contentUrl: absoluteUrl("/opengraph-image"),
      width: 1200,
      height: 630,
      caption: "Tim WITH SOERAI",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}#webpage`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      isPartOf: {
        "@id": `${SITE_URL}#website`,
      },
      about: {
        "@id": `${SITE_URL}#organization`,
      },
      primaryImageOfPage: {
        "@id": `${SITE_URL}#primaryimage`,
      },
      breadcrumb: {
        "@id": `${SITE_URL}#breadcrumb`,
      },
      inLanguage: SITE_LANGUAGE,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: SITE_URL,
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <div className="relative overflow-x-clip">
        <main className="relative overflow-x-clip">
          <HeroSection />
          <AboutSection />
          <VisionMissionSection />
          <ProgramSection />
          <OrgStructureSection />
          <MemberGallerySection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
