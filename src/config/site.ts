export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Firefighting Sim Wiki",
  shortName: "Firefighting Sim",
  logoText: "FS",
  tagline: "Missions, Equipment & Fire Rescue Strategy Guide",
  description: "Explore Firefighting Sim Wiki with detailed mission guides, firefighter equipment information, rescue strategies, gameplay tips, and everything players need.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://firefightingsimguide.top",
  supportEmail: "support@firefightingsimguide.top",
  gameUrl: "https://www.firefighting-simulator.com/",
  heroVideoId: "oXq9EenmWbQ",
  social: {
    discord: "https://discord.com/invite/astragon",
    youtube: "https://www.youtube.com/@astragon",
  },
  locales: ["en", "de", "fr", "es"],
  defaultLocale: "en",
};
