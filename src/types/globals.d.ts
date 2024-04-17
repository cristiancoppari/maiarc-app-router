// https://www.totaltypescript.com/how-to-strongly-type-process-env

declare namespace NodeJS {
  interface ProcessEnv {
    API_URL: string;
    STRAPI_URL: string;
    ZOHO_USER: string;
    ZOHO_PASS: string;
    ZOHO_APP_PASS: string;
    INSTAGRAM_TOKEN: string;
    RESEND_API_KEY: string;
    MAIL_TO: string;
    MAIL_TO: string;
    NEXT_PUBLIC_SEND_MAIL_URL: string;
  }
}
