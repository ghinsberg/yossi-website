import { draft, ph } from "./site";

// Booking page, form, agent card and the notification email (read by Yossi and
// the agent, in Hebrew). Everything here is draft until Yossi approves it.
export const heBooking = {
  metaTitle: draft("הזמנת הרצאה"),
  metaDescription: draft("הזמנת הרצאה של יוסי גינסברג, בעברית."),
  title: ph("הזמנת הרצאה"),
  intro: ph("ספרו לנו על האירוע ונחזור אליכם."),
  agentCard: {
    title: draft("הפנייה תטופל על ידי"),
    phoneLabel: draft("טלפון"),
    emailLabel: draft("אימייל"),
  },
  form: {
    ariaLabel: draft("טופס הזמנת הרצאה"),
    requiredNote: draft("שדות המסומנים בכוכבית הם שדות חובה"),
    requiredMark: draft("שדה חובה"),
    optionalMark: draft("לא חובה"),
    submit: draft("שליחה"),
    sending: draft("שולחים..."),
    fields: {
      name: { label: draft("שם מלא"), placeholder: draft("שם פרטי ושם משפחה") },
      organisation: { label: draft("ארגון או חברה"), placeholder: draft("שם הארגון") },
      phone: { label: draft("טלפון"), placeholder: draft("050-0000000") },
      email: { label: draft("אימייל"), placeholder: draft("name@company.com") },
      eventDate: { label: draft("תאריך האירוע"), placeholder: draft("למשל: מרץ 2027") },
      eventLocation: { label: draft("מיקום האירוע"), placeholder: draft("עיר או אולם") },
      audienceSize: { label: draft("מספר משתתפים משוער"), placeholder: draft("למשל: 200") },
      message: { label: draft("ספרו לנו על האירוע"), placeholder: draft("מה האירוע, ומה חשוב לכם שיקרה בו") },
    },
    errors: {
      required: draft("שדה חובה"),
      invalidEmail: draft("כתובת האימייל לא תקינה"),
      submitFailed: draft("השליחה לא הצליחה. הפרטים שמילאתם עדיין בטופס, אפשר לנסות שוב."),
    },
  },
  email: {
    subjectLabel: draft("פנייה להרצאה"),
    title: draft("פנייה חדשה להזמנת הרצאה"),
    agentLabel: draft("נציג"),
    footer: draft("נשלח מטופס ההזמנה באתר העברי"),
    attributionTitle: draft("מאיפה הגיעו"),
    labels: {
      name: draft("שם"),
      email: draft("אימייל"),
      organisation: draft("ארגון"),
      phone: draft("טלפון"),
      eventDate: draft("תאריך האירוע"),
      eventLocation: draft("מיקום"),
      audienceSize: draft("גודל קהל"),
      message: draft("הודעה"),
      source: draft("מקור"),
      medium: draft("ערוץ"),
      campaign: draft("קמפיין"),
      content: draft("וריאנט"),
      term: draft("מונח"),
      referrer: draft("הגיעו מ"),
      landed: draft("עמוד נחיתה"),
    },
  },
};
