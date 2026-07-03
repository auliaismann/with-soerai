export const SITE_URL = "https://with-soerai.dekatlokal.com/";
export const SITE_NAME = "WITH SOERAI";
export const SITE_TITLE =
  "WITH SOERAI | Komunitas Perempuan Muda Indonesia Timur";
export const SITE_DESCRIPTION =
  "WITH SOERAI adalah komunitas pemberdayaan perempuan muda Indonesia Timur melalui mentorship, pengembangan diri, kepemimpinan, dan proyek sosial.";
export const SITE_LOCALE = "id_ID";
export const SITE_LANGUAGE = "id-ID";
export const SITE_EMAIL = "withsoerai@gmail.com";

export const absoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();

export const SOCIAL_PROFILES = [
  "https://instagram.com/withsoerai",
  "https://tiktok.com/@withsoerai",
  "https://linkedin.com/in/withsoerai",
] as const;
