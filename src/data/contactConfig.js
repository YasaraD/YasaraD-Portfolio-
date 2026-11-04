/**
 * =========================================================================
 * CONTACT & SOCIAL LINKS CONFIGURATION (SINGLE SOURCE OF TRUTH)
 * =========================================================================
 *
 * Change all your contact details, social URLs, and links in this ONE file.
 * Any update here will automatically reflect everywhere across your site:
 *  - Navbar (Header buttons & Mobile menu)
 *  - Hero Section (Direct Contact pills, Social icons, & CV button)
 *  - Contact Section (Interactive cards, Quick-copy email, Direct WhatsApp, Form)
 *  - Footer (Social links & direct reach-out)
 *  - Project Modal (Case study inquiries & GitHub links)
 * =========================================================================
 */

export const contactConfig = {
  // --- Personal Basic Details ---
  name: "Yasara Gayanaka Dissanayake",
  shortName: "Yasara",
  title: "Computer Science Graduate • AI & ML Engineer • Full-Stack Developer",
  status: "Available for Graduate & Full-Time Roles",
  location: {
    city: "Galle & Colombo",
    country: "Sri Lanka",
    relocation: "Open to Relocation & Remote",
    display: "Galle & Colombo, Sri Lanka",
  },

  // --- Primary Email ---
  email: {
    address: "yasaradissanayake2002@gmail.com",
    label: "Primary Email",
    mailto: "mailto:yasaradissanayake2002@gmail.com",
  },

  // --- Phone & Instant Messaging ---
  phone: {
    display: "+94 763 776 393",
    raw: "+94763776393",
    tel: "tel:+94763776393",
    whatsappNumber: "94763776393",
    whatsappUrl: "https://wa.me/94763776393?text=Hi%20Yasara,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!",
  },

  // --- Resume / CV ---
  // To link your PDF: place your file in the /public folder (e.g. /public/Yasara_Dissanayake_CV.pdf)
  // or put a Google Drive / cloud link in url.
  resume: {
    url: "/Yasara_Dissanayake_CV.pdf",
    label: "Download CV",
    available: false, // Set to true once you put Yasara_Dissanayake_CV.pdf into the /public folder
    requestSubject: "Request for Yasara Dissanayake's CV / Resume",
  },

  // --- Social Profiles & URLs ---
  // Simply edit the 'url' property below for any profile!
  socials: {
    github: {
      id: "github",
      name: "GitHub",
      url: "https://github.com/YasaraD",
      username: "YasaraD",
      handle: "@YasaraD",
      description: "Explore my open-source AI/ML research, transformers & codebases",
      primary: true,
    },
    linkedin: {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://linkedin.com/in/yasara-dissanayake",
      username: "Yasara Dissanayake",
      handle: "in/yasara-dissanayake",
      description: "Connect on LinkedIn for professional background & recommendations",
      primary: true,
    },
    whatsapp: {
      id: "whatsapp",
      name: "WhatsApp",
      url: "https://wa.me/94763776393?text=Hi%20Yasara,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!",
      username: "+94 763 776 393",
      handle: "Direct Chat",
      description: "Fast direct chat for urgent project discussions or quick syncs",
      primary: true,
    },
    kaggle: {
      id: "kaggle",
      name: "Kaggle",
      url: "https://www.kaggle.com",
      username: "YasaraD",
      handle: "Kaggle",
      description: "Data science competitions, EDA notebooks & benchmark experiments",
      primary: false,
    },
    huggingface: {
      id: "huggingface",
      name: "Hugging Face",
      url: "https://huggingface.co",
      username: "YasaraD",
      handle: "Hugging Face",
      description: "Pretrained NLP checkpoints, fine-tuned transformers & models",
      primary: false,
    },
  },
};

/**
 * Helper to generate pre-filled mailto URLs
 */
export function createMailtoLink(subject = "Portfolio Inquiry", body = "", name = "", senderEmail = "") {
  const fullBody = body
    ? `Hi ${contactConfig.shortName},\n\n${body}${name ? `\n\nFrom: ${name} (${senderEmail})` : ""}`
    : `Hi ${contactConfig.shortName},`;
  return `mailto:${contactConfig.email.address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
}

/**
 * Returns an array of primary social media links for quick rendering in UI
 */
export function getPrimarySocials() {
  return Object.values(contactConfig.socials).filter((s) => s.primary);
}

export default contactConfig;

