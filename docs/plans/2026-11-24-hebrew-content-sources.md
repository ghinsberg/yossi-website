# Hebrew content: source map

**Date:** 2026-11-24
**Branch:** `hebrew-site`
**Status:** DRAFT. Every string below is wrapped in `draft()` or `ph()` and counted by `scripts/check-he-launch.sh`. Nothing here is approved by Yossi.

Rule: every factual statement in Hebrew traces to a line of the English site in this worktree. The Hebrew is written from the facts, not translated line by line. Where two English sources disagree, the fact is left out and listed under "Conflicts".

Types: **fact** (rests on the English line), **phrasing only** (no factual content), **proposal** (Yossi's to decide), **interface** (labels, alt text, navigation), **translation** (an endorsement quote, translated faithfully).

Paths: `en/` = `app/(en)/`. Line numbers are from this worktree at commit time.

Known true facts allowed by the brief in addition to the English site (marked **brief**): the ordeal was in 1981 in Bolivia; the Hebrew title בחזרה מטואיצ'י; keynotes in Israel are in Hebrew; "more than forty years" since 1981.

---

## Home (`data/he/home.ts`)

| Key | Hebrew | English source | English text | Type |
|---|---|---|---|---|
| hero.title | מכירים את הסיפור. עכשיו תכירו את מה שבא אחריו. | design doc, line 121 | (direction line, kept exactly) | phrasing only |
| hero.sub | יוסי גינסברג מרצה לארגונים ולכנסים, בעברית ובאנגלית. הוא מדבר על מנהיגות כשאין ודאות, על חוסן ועל לחץ, מתוך מה שלמד בג'ונגל ובעשורים שאחריו. | en/page.tsx:33; en/keynotes/page.tsx:161; en/yossi/page.tsx:117 | "speaks on leadership under uncertainty, resilience, survival, stress management... draw directly from his 20 days alone in the Amazon and the philosophy he developed in the four decades since"; "Languages: English, Hebrew"; "Most of my work happens in corporate environments" | fact |
| metaDescription | יוסי גינסברג מרצה לארגונים ולכנסים, בעברית ובאנגלית. ההרצאות, הסרטונים, ההמלצות והזמנת הרצאה. | en/keynotes/page.tsx:161; en/yossi/page.tsx:117 | "Languages: English, Hebrew"; "Most of my work happens in corporate environments" | fact |
| heProofClientNames | Google, Apple, Microsoft, Coca-Cola, BMW, American Express, Citibank, General Motors (logos) | en/faq/page.tsx:65; data/clients.ts:8-16 | "Google, Apple, Microsoft, BMW, American Express, Coca-Cola, Citibank, General Motors, and the Million Dollar Round Table (MDRT)" | fact, CLAIM (see below) |
| proof.title | ⟦טיוטה⟧ בין הארגונים שבהם הרצה | en/faq/page.tsx:64-65 | "What companies has Yossi spoken for?" | CLAIM |
| endorsement.title, .cta | מה אמרו עליו / לכל ההמלצות | none | | phrasing only |
| after.title | אחרי הספר | none | | phrasing only |
| after.body | הספר נגמר ביציאה מהג'ונגל. החיים לא. אחריו באו יותר מארבעים שנה: אכסניה באמזונס שהקים יחד עם הקהילה שהצילה אותו, חברות בעמק הסיליקון שלא שינו את העולם, אלבום, ובמות ברחבי העולם. | brief (forty years); en/story/page.tsx:166-168; en/yossi/page.tsx:207, 219; en/story/page.tsx:431-433, 442; en/story/page.tsx:394; en/page.tsx:29 | "the indigenous Uchupiamona hunters... found him alive"; "to thank them for saving him"; "For three years he lived with them and they built Chalalan together"; "building companies... Two ventures: Blinq and Headbox"; "The ventures did not change the world"; "In 2008, Yossi released an album"; "He speaks to audiences worldwide" | fact |
| keynotes.title | ההרצאות | none | | phrasing only |
| keynotes.body | שלוש הרצאות. כל אחת נבנית מחדש לקהל, לנושא האירוע ולמה שאתם רוצים שיקרה בו. | en/keynotes/page.tsx:53, 59-60 | "Three keynotes."; "Every keynote is tailored to your audience, your theme, and the outcome you need." | fact |
| keynotes.cta | לפירוט ההרצאות | none | | interface |
| keynotes.imageAlt | יוסי גינסברג על במה גדולה, בגבו למצלמה וידיו מורמות, מול אולם מלא. אלומות אור כחולות מעליו | image `stage/hero-1.jpg`, viewed | (describes the picture) | interface |
| hero.imageAlt | יוסי גינסברג על במה חשוכה, במקטורן חום, מדבר בידיים פתוחות. בקדמת התמונה צלליות של הקהל | image `stage/on-stage.jpg`, viewed | (describes the picture) | interface |
| hero.footagePlaceholder | כאן יופיע סרטון הרצאה בעברית | none (Hebrew film not located) | | interface |
| reel.title | מהבמות בעולם | none | | phrasing only |
| reel.caption | קטעים מהרצאות של יוסי על במות בחו"ל. הסרטון באנגלית. | components/sections/DemoReel.tsx:15-24 (the English home's speaker reel, `/videos/speaker-reel.mp4`); frames viewed: stage footage only | "Speaker reel — self-hosted" | fact |
| reel.videoLabel | סרטון קטעים מהרצאות של יוסי גינסברג, באנגלית | as above | | interface |
| booking.* | מתכננים אירוע? / ספרו לנו על האירוע ונחזור אליכם. / הזמנת הרצאה | none | | phrasing only |

## Story (`data/he/story.ts`)

| Key | Hebrew | English source | English text | Type |
|---|---|---|---|---|
| title | הסיפור אחרי הספר | none | | phrasing only |
| metaDescription | מה שבא אחרי הספר בחזרה מטואיצ'י: הבמות, צ'לאלן באמזונס הבוליביאני, ומיזמים שהצליחו ושלא. | brief; en/yossi/page.tsx:151; en/story/page.tsx:442 | "helping to establish Chalalan Ecolodge... Bolivian Amazon"; "The ventures did not change the world" | fact |
| book.body | ב-1981, בגיל 22, יוסי נכנס לג'ונגל של האמזונס בבוליביה ומצא את עצמו לבד. את מה שעבר שם כתב בספר בחזרה מטואיצ'י, שיצא בעברית ב-1985. את החלק הזה אתם מכירים. העמוד הזה מתחיל איפה שהספר נגמר. | brief (1981, Bolivia, title); en/story/page.tsx:108, 111-112, 136-142, 194-195 | "Yossi Ghinsberg was 22"; "Yossi walked into the Bolivian Amazon"; "He was alone."; "The original Hebrew edition appeared in 1985: Back from Tuichi" | fact |
| book.film | ⟦טיוטה⟧ ב-2017 הסיפור הפך לסרט קולנוע, Jungle, בכיכובו של דניאל רדקליף. | en/story/page.tsx:203-204 | "In 2017, director Greg McLean made it into a film starring Daniel Radcliffe." | PROPOSAL (film, see below) |
| book.imageAlt | יוסי הצעיר, רזה ומזוקן, בחולצה משובצת ובמכנסיים קרועים, עומד על חול בשולי היער | image `adventure/rescue-1981.jpg`, viewed | (describes the picture) | interface |
| book.imageCaption | אחרי החילוץ, בוליביה, 1981 | en/story/page.tsx:182 | "After rescue, Bolivia, 1981" | fact |
| stage.body | רוב העבודה של יוסי היא בארגונים. הוא מרצה בכנסים, בימי הנהלה ובאירועי חברה, בעברית ובאנגלית. כל הרצאה נבנית מחדש לקהל, לנושא האירוע ולמה שהארגון רוצה שיקרה בו. | en/yossi/page.tsx:117; en/keynotes/page.tsx:161, 59-60; en/keynotes/page.tsx:238-239 | "Most of my work happens in corporate environments"; "Languages: English, Hebrew"; "Every keynote is tailored to your audience, your theme, and the outcome you need"; "Leadership offsites... Sales kickoffs" | fact |
| stage.scale | ⟦טיוטה⟧ הוא מדבר מול אולמות של 10,000 איש, ומול חדרי ישיבות של שנים-עשר. ב-2025 עלה לבמה הראשית של כנס MDRT במיאמי ביץ', מול 6,000 משתתפים. | en/story/page.tsx:470-471, 480, 600 | "He speaks to audiences of 10,000. He speaks to boardrooms of twelve."; "6,000 / MDRT 2025, Miami Beach"; "MDRT Main Stage 2025, 6,000 Attendees" | CLAIM |
| stage.workshop | לארגונים שרוצים יותר מהרצאה, הוא מעצב ומוביל גם יום סדנה מלא. האורך, המקום והמבנה נקבעים יחד עם הארגון, אחרי תדריך מעמיק. | en/keynotes/page.tsx:175, 182 | "The full-day workshop."; "For organisations that want more than a talk, Yossi designs and leads a workshop... The length, the location, and the shape are decided with you, after a deep brief." | fact |
| stage.giveTitle | הרצאה אחת, ועוד אחת לקהילה | en/yossi/page.tsx:96 | "Buy One, Give One Free" | phrasing only |
| stage.give | ארגון שמזמין את יוסי מוזמן גם לתרום הרצאה נוספת שלו לכל מטרה קהילתית שיבחר. זה היה אולם קולנוע בהרמוסיו שבמקסיקו שכל העיר הוזמנה אליו, יוזמה לבני נוער באל סלבדור, בית ספר בשווייץ, ובית אבות בתל אביב. | en/yossi/page.tsx:117, 120, 126 | "why not give one more talk to the community?"; "the cinema of Hermosillo, Mexico, with the whole town invited... a youth initiative in El Salvador... A private school in Switzerland. A senior citizens' home in Tel Aviv."; "The corporation that invites me is also invited to gift me to any community purpose they choose." | fact |
| stage.imageAlt | (as home hero.imageAlt) | image `stage/on-stage.jpg`, viewed | | interface |
| stage.imageCaption | ⟦טיוטה⟧ כנס ASPIRE, ICE קרקוב, 2017. 2,000 משתתפים | en/story/page.tsx:454, 458 | "ASPIRE conference, ICE Krakow, 2017. 2,000 attendees" | CLAIM |
| chalalan.name | צ'לאלן | en/story/page.tsx:257 | "Chalalan Ecolodge" (Hebrew spelling per brief) | fact |
| chalalan.body | יוסי חזר לאמזונס, לכפר של בני העם אוצ'ופיאמונה, כדי להודות להם על שהצילו את חייו. הם ביקשו שיעזור להם להציל את שלהם. הכפר שלהם גסס, הצעירים עזבו ולא חזרו, והחלום של הקהילה היה להקים אכסניה למטיילים על אגם קטן ונסתר בשם צ'לאלן. לא היה כסף, והמקום היה שש שעות שיט במעלה הנהר. הוא לא יכול היה לסרב. | en/yossi/page.tsx:207, 210, 213, 216 | "Yossi returned... upriver to the village of the Uchupiamona people, to thank them for saving him."; "they asked if he would help them save theirs. Their village was dying. The young people were leaving and not coming back. Their dream was to build a lodge for tourists on a small, hidden gem of a lake called Chalalan."; "There was no money. The location was six hours upriver"; "He could not say no." | fact (timing "ten years after" left out, see Conflicts) |
| chalalan.built | שלוש שנים הוא חי איתם, ויחד הם בנו את צ'לאלן. הוא היה שותף גם להקמת הפארק הלאומי מדידי. האכסניה שייכת כולה לבני אוצ'ופיאמונה ומנוהלת על ידם, ויוסי הוא המנהל שלה לכל החיים. | en/yossi/page.tsx:219, 225; en/story/page.tsx:257-260 | "For three years he lived with them and they built Chalalan together."; "helped establish the park itself. The lodge is owned and run entirely by the Uchupiamona people"; "Yossi is its lifetime director" | fact |
| chalalan.recognition | ⟦טיוטה⟧ ב-2002 בחר בצ'לאלן המגזין National Geographic Traveler כאחד מעשרים יעדי התיירות החשובים בעולם. ב-2008 קיבל המקום את פרס Equator של UNDP. | en/story/page.tsx:269-275; components/StructuredData.tsx:51-52 | "National Geographic Traveler, 2002: Named one of the 20 most important tourist destinations in the world."; "Equator Prize, UNDP, 2008"; "Equator Prize, UNDP 2008, for Chalalan Ecolodge and Madidi National Park" | CLAIM |
| chalalan.ambassador | ב-2025 מינה אותו העם אוצ'ופיאמונה לשגריר שלו בעולם. | en/yossi/page.tsx:148 | "In 2025, the Uchupiamona Nation formally appointed Yossi Ghinsberg as their Ambassador to the World." | fact |
| chalalan.imageAlt | אגם שקט מוקף יער גשם. השמיים והעננים משתקפים במים | image `yossi/chalalan/chalalan-lake.jpg`, viewed | (describes the picture; the alt does not name the lake, since the picture alone cannot show which lake it is) | interface |
| ventures.title | מיזמים | none | | phrasing only |
| ventures.siliconValley | בין 2013 ל-2017 היה יוסי בעמק הסיליקון והקים שתי חברות, Blinq ו-Headbox, סביב בינה מלאכותית וזהות דיגיטלית, עוד לפני שלשני התחומים היה שם מוכר. הוא לא היה יזם טכנולוגי רגיל. הוא הגיע, מוקף באנשים מנוסים ממנו בהרבה. | en/story/page.tsx:431-437 | "Between 2013 and 2017, he found himself in Silicon Valley, building companies around AI and digital identity before either concept had a mainstream name. Two ventures: Blinq and Headbox. Not a conventional tech founder. A curious man who showed up, surrounded by people far more experienced" | fact |
| ventures.honest | המיזמים האלה לא שינו את העולם. נשארו לו מהם חבלות, וההוכחה שניסה. בגלל זה, כשהוא מדבר על אומץ בעולם חדש, זה נשמע אחרת. | en/story/page.tsx:442-444 | "The ventures did not change the world. He has the bruises to prove he tried. That is why, when he speaks about being brave in a new world, it lands." | fact |
| ventures.cita | ⟦טיוטה⟧ הוא כיהן כסגן נשיא של CITA, מרכז למחקר ולטיפול בהתמכרויות, ועזר להקים שתים-עשרה מרפאות בשתים-עשרה ערים בעולם. | en/story/page.tsx:321-323 | "He also served as Vice President of CITA, the Center for Research and Treatment of Addiction, helping establish twelve clinics in twelve cities around the world." | CLAIM |
| ventures.album | ב-2008 הוציא אלבום של מוזיקת עולם, Mr Sleep and the Flying Green Toad, עם המוזיקאים Avishai Barnatan ו-Amir Paiss. שלושה-עשר שירים, ואת כל המילים כתב הוא. | en/story/page.tsx:391, 394-396 | "Mr Sleep and the Flying Green Toad."; "In 2008, Yossi released an album of world music and global fusion with musicians Avishai Barnatan and Amir Paiss. Thirteen tracks. Every lyric written by him." | fact (musicians' names kept in Latin: the English site gives no Hebrew spelling) |
| ventures.linoCambi | ב-2024 חתמו יוסי ופול טמפלר על קרקע בדרום כרתים, מול הים הלובי. שם הם בונים את Lino Cambi, מקום מפלט נסתר לאנשים שרוצים להתרחק מהרעש ולחזור למה שחשוב. | en/story/page.tsx:521-523, 541-545; en/yossi/page.tsx:265 | "In May 2024, Yossi and Paul Templer signed the deed on a piece of land in South Crete... overlooking the Libyan Sea."; "Lino Cambi, a hidden sanctuary... where people who are done with noise can come to remember what matters"; "Together, they are building" | fact (land size left out, see Conflicts) |
| cta.* | ההרצאות / הזמנת הרצאה | none | | interface |

## Keynotes (`data/he/keynotes.ts`)

| Key | Hebrew | English source | English text | Type |
|---|---|---|---|---|
| [0].title | ⟦טיוטה⟧ המפה נגמרה | owner decision (rename to "The Map Has Run Out", commit e086114 on main); data/keynotes.ts:29, 34 | "From Survival to Legacy"; "The map has run out." | PROPOSAL |
| [0].forWhom | ארגונים שמנווטים בשינוי מתמיד: הייטק, פיננסים, שירותים מקצועיים, וכל ארגון שהוודאות של פעם כבר לא עובדת בו. | data/keynotes.ts:53, 34 | "Technology, financial services, professional services, any organisation navigating disruption"; "the quiet collapse of certainty as a management tool" | fact |
| [0].takeaway | דרך חשיבה שעובדת כשאין ודאות. לחץ כאינסטינקט הישרדות שפשוט מכוון למקום הלא נכון. גמישות במקום אשליית השליטה, ויצירתיות תחת לחץ. מנהלים יוצאים מקבלים החלטות מהר יותר וסומכים על שיקול הדעת שלהם, וצוותים מפסיקים לחכות שהמפה תחזור ומתחילים לנווט בשטח שלפניהם. | data/keynotes.ts:34, 39, 42-44, 47-49, 61 | "A way of thinking that works when nothing is certain. Leaders leave making faster decisions and trusting their own judgment. Teams stop waiting for the map to reappear and start navigating the terrain in front of them."; "Redefining stress as a misdirected survival instinct"; "The Illusion of Control: Why adaptability beats certainty"; "Innovation Under Pressure" | fact |
| [1].title | ⟦טיוטה⟧ חוקי הג'ונגל | data/keynotes.ts:75 | "The Laws of the Jungle" | PROPOSAL |
| [1].forWhom | כל קהל ארגוני: פיננסים, ביטוח, הייטק, בריאות, ארגונים מקצועיים. במיוחד צוותים שחוקים, צוותים שעובדים תחת לחץ קיצוני, ומקומות שהמורל בהם נמוך. | data/keynotes.ts:99, 101-105 | "All corporate audiences. Financial services, insurance, technology, healthcare, professional associations."; solves: "Low morale", "Burnout", "Teams facing extreme pressure" | fact |
| [1].takeaway | ההבדל בין כאב לסבל. למה התנגדות גדולה היא סימן שאתם בדרך הנכונה. איך עוברים משיתוק לעשייה. צוותים שחוקים מוצאים מחדש טעם ומניע, אנשים מפסיקים להתחמק משיחות קשות ומהחלטות קשות, וחוסן הופך למיומנות ולא לתכונת אופי. | data/keynotes.ts:83-95, 108-110 | takeaways "The Bigger Your Goal, The More Resistance You Face... the signal you're on the right path", "Pain Doesn't Mean Suffering", "From paralysis to usefulness"; outcomes "Burned-out teams rediscover purpose and drive", "People stop avoiding hard conversations and hard decisions", "Resilience becomes a skill, not a personality trait" | fact |
| [2].title | ⟦טיוטה⟧ הישרדות אמיתית, הישרדות מדומיינת | data/keynotes.ts:122 | "Real Survival vs Imaginary Survival" | PROPOSAL |
| [2].forWhom | כל קהל ארגוני, ובמיוחד צוותי הנהלה, ארגוני מכירות, אנשי מקצועות הבריאות, וכל קבוצה שרצה חם מדי כבר יותר מדי זמן. | data/keynotes.ts:146 | "All corporate audiences. Especially leadership teams, sales organisations, healthcare professionals, and any group running too hot for too long." | fact |
| [2].takeaway | ההבחנה בין סכנה אמיתית לבין הלחץ היומיומי שהגוף מפרש כסכנה. כלים מעשיים לכבות את תגובת הלחץ בזמן אמת, דרך הגוף ולא דרך המחשבה, כולל שתי טכניקות שיוסי מלמד רק בהרצאה הזו ובסדנה. מנהלים מורידים עומס מהצוות בלי לוותר על ביצועים, והארגון מקבל שפה משותפת למה שלחץ הוא באמת. | data/keynotes.ts:127, 155-157; en/faq/page.tsx:78 | "The body cannot tell the difference... This keynote gives audiences the tools to switch the system off. Not through the mind... Through the body... in real time... the discernment between real and imaginary survival"; outcomes; "taught in the 'Real Survival vs Imaginary Survival' keynote and the full-day workshop. Yossi teaches them nowhere else." | fact |
| [n].titleEn | The Map Has Run Out / The Laws of the Jungle / Real Survival vs Imaginary Survival | data/keynotes.ts:75, 122; owner rename for [0] | | fact (English names) |
| page.intro | שלוש הרצאות. כל אחת נבנית מחדש לקהל, לנושא האירוע ולמה שאתם רוצים שיקרה בו. בישראל ההרצאות בעברית. | en/keynotes/page.tsx:53, 59-60; brief | "Three keynotes."; "Every keynote is tailored..."; Hebrew in Israel | fact |
| page.metaDescription | שלוש ההרצאות של יוסי גינסברג: על מנהיגות כשאין ודאות, על חוסן ועל לחץ. למי כל הרצאה מתאימה ומה הקהל לוקח ממנה. | en/page.tsx:33 | "leadership under uncertainty, resilience... stress management" | fact |
| page labels | הרצאות / למי זה מתאים / מה לוקחים מזה / השם באנגלית: / הזמנת הרצאה | none | | interface |

## Videos (`data/he/videos.ts`)

All twelve ids are from `data/videos.ts` (a test compares them). Titles are Hebrew renderings of the English titles; `titleEn` is the English title unchanged.

| Key (youtubeId) | Hebrew title | Context | English source | Type |
|---|---|---|---|---|
| BDGQx1V1MK0 | סיפורים ולקחים | מהבמה. | data/videos.ts:10; en/videos/VideosPageClient.tsx:95 ("From the Stage") | fact |
| RS3p_8di8WA | החדשנות היא המפתח | מהבמה. | data/videos.ts:11 | fact |
| FINMVryLQmw | הטבע הוא התשובה | מהבמה. | data/videos.ts:12 | fact |
| _QyWIuCarUc | חולמים | מהבמה. | data/videos.ts:13 | fact |
| ebBx8fFMCSY | העכשיו כבר כאן | מהבמה. | data/videos.ts:14 | fact |
| hDQWgqtuGUw | להיות חולם, ולהגשים חלומות | מהבמה. | data/videos.ts:15 | fact |
| UepK6QniFgA | מה אנחנו באמת מחפשים | מהבמה. | data/videos.ts:16 | fact |
| hZqjdbmyJKI | לשרוד את הבלתי אפשרי | יוסי מספר את הסיפור מהאמזונס הבוליביאני. | data/videos.ts:19; en/videos/page.tsx:47 ("recounts surviving 20 days alone in the Bolivian Amazon") | fact |
| N1ADswxJdVU | פעם בחיים: מסע לאמזונס | מתוך הסיפור. | data/videos.ts:21; en/videos/VideosPageClient.tsx:105 ("The Story") | fact |
| bjfqeAGa7cg | קורבן זו בחירה | קליפ קצר. | data/videos.ts:26; VideosPageClient.tsx:118 ("Quick Clips") | fact |
| R1-QtfpBxqI | לתת השראה לגיבורים | קליפ קצר. | data/videos.ts:27 | fact |
| Jc6-JiOZw1Q | להציל את האמזונס | קליפ קצר. | data/videos.ts:28 | fact |
| page.intro | הסרטונים כאן באנגלית, רובם מבמות בחו"ל. סרטונים בעברית יתווספו בהמשך. | data/videos.ts:9-28 (7 of 12 are "keynote") | | fact |
| page.englishHeading / englishNote / metaDescription | באנגלית / מהבמות בחו"ל, מהסיפור, וקליפים קצרים. / קטעים מהרצאות של יוסי גינסברג על במות בעולם. הסרטונים באנגלית. | VideosPageClient.tsx:95, 105, 118 | | fact |

Left out: the three film clips (`Zlztb8QXGTg`, `Tn-lbqRLdcE`, `HruuP7Q90vg`), so the film is mentioned once only; `LCRjBVnQ5JM` (`siteConfig.speakerReelId`), which `data/videos.ts:9` says was removed as "bureau-branded".

## Endorsements (`data/he/endorsements.ts`)

All `translatedFrom: "en"`. Quotes are from the `testimonials` list. Names and organizations are the English spellings (a test compares them).

| Name, organization | Hebrew quote | Hebrew role | English source | English text | Type |
|---|---|---|---|---|---|
| John Zaharakis, American Express (also featured on home) | מרהיב, מעורר השראה, מרגש, עוצר נשימה. אמליץ על יוסי כמרצה מרכזי בכל מקום ובכל הזדמנות. | מנהל כללי, כנסים ואירועים | data/testimonials.ts:122-125 | "Spectacular, inspiring, emotional, breathtaking. I will be recommending Yossi for keynotes wherever and whenever possible." / "General Manager, Conferences & Events" | translation |
| Chris Varelas, Citibank | בניסיון שלי, יוסי גינסברג במקום הראשון. | ראש בנקאות ההשקעות הארצית | data/testimonials.ts:71-73 | "Yossi Ghinsberg ranks number one in my experience." / "Head of National Investment Bank" | translation (the role is an interpretation; Yossi to confirm) |
| John Hennessey, Microsoft | כל מי שדיברתי איתו היה מרותק ושבוי. התובנות של יוסי יעזרו לנו לבנות את מערך השותפים שלנו. | מנהל כללי, עסקים קטנים, בינוניים ותאגידים | data/testimonials.ts:129-132 | "Every person I spoke with was enthralled and captivated. Yossi's insights will help us build our partner ecosystem." | translation |
| Ron Yariv, Hilton International | לא פחות מקוסם. יוסי יצר באולם תחושת התרוממות רוח עצומה. | מנהל מכירות בינלאומיות | data/testimonials.ts:143-146 | "Nothing short of a magician. Yossi created an enormous sense of exhilaration in the room." / "Managing Director, International Sales" | translation |
| Abe Peled, NDS | הסיפור של יוסי מעורר השראה ומלא בלקחים עסקיים מעשיים. | יו"ר ומנכ"ל | data/testimonials.ts:85-88 | "Yossi's story is inspirational and full of practical business lessons." / "Chairman and CEO" | translation |
| Bob Fuller, IBM | בכל הקריירה שלי לא ראיתי אולם מלא ששקוע כל כך לגמרי במושב של כנס. | בכיר בתמיכה טכנית | data/testimonials.ts:164-167 | "I have never seen a packed room so totally absorbed at a convention session in my career." / "Tech Support Executive" | translation |
| Elmo de Alwis, Sigma Pharmaceuticals | התרשמנו כל כך, שהזמנו את יוסי להרצאה נוספת למחרת. הוא מרצה בקליבר יוצא דופן. | מנכ"ל ומנהל כללי | data/testimonials.ts:92-95 | "We were so impressed that we invited Yossi for a second presentation the following day. He is a speaker of exceptional caliber." / "CEO and Managing Director" | translation |
| Kerry McWhinnie, RE/MAX | המשובים מהמשתתפים היו פנטסטיים. הם היו מרותקים ולא רצו שיפסיק. ההמלצה שלי עליו היא בלי שום הסתייגות. | ארגון אירועים | data/testimonials.ts:232-235 | "Delegate feedback was fantastic, captivating — they didn't want him to stop. I give my unreserved recommendation." / "Event Organizer" (role written without gender, since the English site does not say) | translation |
| Gilbert Enoka, New Zealand All Blacks | הרגשתי שנלקחתי לעולם אחר. זה היה אישי מאוד ומרגש עמוקות. | מאמן מנטלי | data/testimonials.ts:283-286 | "I was transported to another world. It was deeply personal and profoundly moving." / "Mental Skills Coach" | translation |
| page.intro | מה אמרו מי שהזמינו אותו, ומי שישבו באולם. | none | | | phrasing only |
| page.metaDescription | מה אמרו על הרצאות של יוסי גינסברג מנהלים ומארגני אירועים ב-American Express, Citibank, Microsoft, IBM ועוד. | data/testimonials.ts:122-169 | the endorsers above | | fact |
| page.translatedNote | תורגם מאנגלית | none | | | interface |

## Media (`data/he/media.ts`)

| Key | Hebrew | English source | English text | Type |
|---|---|---|---|---|
| [0] outlet, titleEn, year, url | Discovery Channel / Animal Planet · 2005 · I Shouldn't Be Alive · https://www.youtube.com/watch?v=myPx-zAA_1Q | en/media/page.tsx:235-242, 255; en/story/page.tsx:339, 345-348 | "Discovery Channel / Animal Planet", "I Shouldn't Be Alive", "Season 1, Episode 3 — Escape from the Amazon (2005)", watch link | fact |
| [0].title | שחזור דרמטי של הסיפור לסדרת התעודה. עונה 1, פרק 3, "Escape from the Amazon". | en/media/page.tsx:241-246; en/story/page.tsx:351 | "Season 1, Episode 3"; "dramatised for the hit Discovery Channel series"; "The 20 days dramatised for television" | fact |
| [1] outlet, titleEn, year, url | Wondery / Amazon Podcasts · 2023 · Against The Odds, Season 32 · https://wondery.com/shows/against-the-odds/season/32/ | en/story/page.tsx:361, 367, 370 | "Wondery / Amazon Podcasts, 2023", "Against The Odds — Season 32" | fact |
| [1].title | "Lost in the Rainforest", סדרת פודקאסט עלילתית בארבעה פרקים. | en/story/page.tsx:373-374 | "Lost in the Rainforest — a four-episode narrative series" | fact |
| heAsSeenIn | The Washington Post, Newsweek, Variety, The Hollywood Reporter, CNN, Los Angeles Times, Discovery Channel, BBC, National Geographic | data/clients.ts:23-31; en/media/page.tsx:54-57 | "As Seen In" (TechCrunch left out per CLAUDE.md "No TechCrunch mentions") | CLAIM |
| asSeenInTitle | ⟦טיוטה⟧ הסיפור הופיע גם ב: | en/media/page.tsx:54 | "As Seen In" | CLAIM |
| intro | ארבעים שנה אחרי, הסיפור עדיין עובר הלאה: בטלוויזיה, בפודקאסטים ובעיתונות. | en/story/page.tsx:334; brief | "Forty years. The story still travels." | fact |
| israelTitle, israelPlaceholder, worldTitle, readCta, metaDescription | בישראל / כתבות וראיונות מהתקשורת הישראלית יופיעו כאן... / בעולם / לפריט המקורי / יוסי גינסברג בטלוויזיה, בפודקאסטים ובעיתונות בעולם. | none (the English site names no Israeli outlet) | | interface / phrasing only |

## FAQ (`data/he/faq.ts`)

| Question | Hebrew answer | English source | English text | Type |
|---|---|---|---|---|
| על מה יוסי מרצה? | על מנהיגות כשאין ודאות, על חוסן, על הישרדות, על ניהול לחץ ועל הפוטנציאל האנושי. ההרצאות נשענות על מה שעבר בג'ונגל ועל מה שפיתח בעשורים שאחריו. יש שלוש הרצאות, והפירוט בעמוד ההרצאות. | en/page.tsx:33 | "speaks on leadership under uncertainty, resilience, survival, stress management, and human potential... the philosophy he developed in the four decades since. His three keynote programs" | fact |
| באיזו שפה ההרצאה? | בישראל, בעברית. בחו"ל יוסי מרצה באנגלית. | brief; en/keynotes/page.tsx:161 | "Languages: English, Hebrew" | fact |
| כמה זמן נמשכת הרצאה? | הרצאה רגילה נמשכת 60 דקות. אפשר גם הרצאה ואחריה שיחה מונחית של 20 עד 30 דקות, ולארגונים שרוצים חוויה עמוקה יותר יש יום סדנה מלא. | en/faq/page.tsx:44 | "The standard keynote is 60 minutes. Yossi also delivers a Keynote + Fireside Chat format (60 + 20–30 minutes) and a full-day workshop for organisations that want a deeper experience." | fact |
| אפשר להתאים את ההרצאה לאירוע שלנו? | כן. כל הזמנה מתחילה בתדריך לפני האירוע, וההרצאה נבנית סביב הקהל שלכם, נושא האירוע והתוצאה שאתם רוצים. אין שתי הרצאות זהות. | en/faq/page.tsx:48 | "Yes. Every engagement begins with a pre-event brief... shaped around your audience, your theme, and the outcome you need. No two performances are identical." | fact |
| ההרצאה רק פרונטלית? | לא. יוסי מרצה באולם, מרחוק, ובשילוב של השניים. כל פורמט מותאם לקהל ולמטרה, ולא מדובר בהרצאה מוקלטת. | en/faq/page.tsx:31 | "Yossi delivers keynotes in-person, virtually, and in hybrid formats. All three formats are tailored to the audience and outcome, not simply recorded presentations." | fact |
| לאיזה גודל קהל? | ⟦טיוטה⟧ מכנסי הנהלה אינטימיים ועד במות ראשיות מול אלפי אנשים, כולל הבמה הראשית של כנס MDRT ב-2025. | en/faq/page.tsx:52 | "Yossi has delivered to intimate executive gatherings and to main-stage audiences of thousands — including the MDRT Main Stage 2025." (numbers left out, see Conflicts) | CLAIM |
| מה זה יום הסדנה? | יום שלם שיוסי מעצב ומוביל סביב התוצאה שהארגון מחפש, במשרדים או מחוץ להם. האורך, המקום והמבנה נקבעים יחד אחרי תדריך מעמיק. יוסי מעביר בעצמו את שתי הטכניקות שהוא מלמד רק שם ובהרצאה על הישרדות אמיתית ומדומיינת, ומנחים מנוסים מעבירים את שאר החלקים. | en/keynotes/page.tsx:182, 206; en/faq/page.tsx:78 | "designs and leads a workshop built around the outcome you are after. On premises or off-site. The length, the location, and the shape are decided with you, after a deep brief."; "Top facilitators for the modules that fit... personally delivers the two signature techniques"; "Yossi teaches them nowhere else" | fact |
| איך מזמינים? | ממלאים את טופס ההזמנה באתר. הפנייה מגיעה לנציג של יוסי בישראל, והוא חוזר אליכם. | design doc, lines 125-127, 176-178 (Hebrew form routes to the Israeli agent) | | fact (project design, not the English site) |
| page metaDescription | שפה, אורך, פורמטים והתאמה לאירוע: מה שמארגנים שואלים לפני שמזמינים הרצאה של יוסי גינסברג. | none | | phrasing only |

Left out of the FAQ: fees, currency, the foreign bureaus, "travels from California", response time (24 vs 48 hours, see Conflicts), technical needs (the English FAQ has none), how far ahead to book ("in high demand" is a claim the brief steers away from).

## Site chrome, booking, thanks, legal

| Key | Hebrew | English source | Type |
|---|---|---|---|
| `data/he/site.ts` draftBanner.text | גרסת טיוטה לבדיקה. התוכן עוד לא אושר. | none | interface |
| `data/he/site.ts` draftBanner.label | הודעה על גרסת טיוטה | none | interface |
| `data/he/site.ts` footer.rights, notFound.title, notFound.body | unchanged text, `ph()` switched to `draft()` | none | phrasing only |
| `data/he/booking.ts`, `data/he/thanks.ts`, `data/he/legal.ts` | unchanged text, every `ph()` switched to `draft()` (stamp rule). Form fields, validation, the contact route and the counsel placeholders are unchanged. | none | phrasing only / interface |

---

## Claims for Yossi to confirm

Each line keeps `ph()` so it shows a visible ⟦טיוטה⟧ stamp on the page.

| # | Hebrew line | English source | Note |
|---|---|---|---|
| 1 | home `proof.title` "בין הארגונים שבהם הרצה" + logos: Google, Apple, Microsoft, Coca-Cola, BMW, American Express, Citibank, General Motors | en/faq/page.tsx:65; data/clients.ts:8-16 | Named client companies. The English FAQ lists these eight as companies he has spoken for. BP is on the English logo wall but not in that FAQ line, so it is left out. Each logo file was viewed and shows the named company (American Express is the centurion mark only, no wordmark). |
| 2 | story `stage.scale`: "אולמות של 10,000 איש... חדרי ישיבות של שנים-עשר. ב-2025... MDRT במיאמי ביץ', מול 6,000 משתתפים." | en/story/page.tsx:470, 480, 600 | Audience sizes. The English site gives three different ranges elsewhere (see Conflicts); this line uses only the story page's own wording. |
| 3 | story `stage.imageCaption`: "כנס ASPIRE, ICE קרקוב, 2017. 2,000 משתתפים" | en/story/page.tsx:454, 458 | Audience size. |
| 4 | story `chalalan.recognition`: National Geographic Traveler 2002, Equator Prize UNDP 2008 | en/story/page.tsx:269-276; components/StructuredData.tsx:51-52 | Awards by name. Consistent across sources. |
| 5 | story `ventures.cita`: Vice President of CITA, twelve clinics in twelve cities | en/story/page.tsx:321-323 | Title and number. The English site says "Work that rarely appears in the speaker biography"; worth confirming before it is public in Israel. |
| 6 | FAQ "לאיזה גודל קהל?": "...במות ראשיות מול אלפי אנשים, כולל הבמה הראשית של כנס MDRT ב-2025." | en/faq/page.tsx:52 | Audience size, without numbers (sources disagree). |
| 7 | media `asSeenInTitle` + `heAsSeenIn` (nine outlet names) | data/clients.ts:23-31; en/media/page.tsx:54 | "As Seen In" names with no links on the English site. Several (Variety, The Hollywood Reporter) are likely film coverage; if the film is struck, these may go too. |

## Proposals (Yossi's to decide)

| # | Item | Where | Note |
|---|---|---|---|
| 1 | The film sentence: "ב-2017 הסיפור הפך לסרט קולנוע, Jungle, בכיכובו של דניאל רדקליף." | `data/he/story.ts` book.film | The only mention of the film on the Hebrew site. Strike it and the film is gone (a test checks it appears exactly once). |
| 2 | Keynote title "המפה נגמרה" for "The Map Has Run Out" | `data/he/keynotes.ts` [0].title | Based on the owner's new English name, not "From Survival to Legacy". The English data file still has the old title. |
| 3 | Keynote title "חוקי הג'ונגל" for "The Laws of the Jungle" | `data/he/keynotes.ts` [1].title | Also the name of his second book in English. Whether a Hebrew edition exists is unknown. |
| 4 | Keynote title "הישרדות אמיתית, הישרדות מדומיינת" for "Real Survival vs Imaginary Survival" | `data/he/keynotes.ts` [2].title | A comma instead of "מול" reads more naturally in Hebrew. |
| 5 | Featured endorsement on the home page: John Zaharakis, American Express | `data/he/endorsements.ts` heFeaturedEndorsement | Chosen because he runs conferences and events, the same job as the reader. |

## Conflicts between English sources (facts left out)

| Fact | Source A | Source B | What the Hebrew does |
|---|---|---|---|
| Length of the ordeal | "20 days" (data/keynotes.ts:34; en/faq/page.tsx:61 and many others) | "Three weeks alone" (en/story/page.tsx:93); "21 Days" (en/story/page.tsx:41); "21-day survival" (en/media/page.tsx:204) | No number of days anywhere in Hebrew. |
| Number of countries | "55+ Countries" (components/sections/DemoReel.tsx:35) | "more than 30 countries" (en/faq/page.tsx:65); "six continents" (en/faq/page.tsx:61) | No country count. |
| Audience range | "500 to 10,000" (en/page.tsx:37; en/keynotes/page.tsx:29) | "50 to 10,000+" (en/keynotes/page.tsx:162; en/faq/page.tsx:52) | FAQ uses the wording without numbers. |
| "Most Unforgettable Speaker" | "Voted Most Unforgettable Speaker" with no source (siteConfig.ts:39; en/story/page.tsx:576); "#1 Most Unforgettable Speaker" (en/story/page.tsx:481); "Most Unforgettable Speaker, The Sweeney Agency" (DemoReel.tsx:32); MDRT quote label "Most Unforgettable Speaker" (data/testimonials.ts:18) | Derek Sweeney: "TOP 5 LIST OF UNFORGETTABLE SPEAKERS" (data/testimonials.ts:194); "#2 Highest Rated Inspirational Speaker for Business, The Sweeney Agency, 2017" (StructuredData.tsx:55) vs "Top 10 Highest-Rated Inspirational Speakers" (DemoReel.tsx:33) | Left out entirely. |
| Response time to an enquiry | "within 24 hours" (en/faq/page.tsx:19; en/book-yossi) | "a proposal is returned within 48 hours" (en/faq/page.tsx:23) | No response time promised. |
| Book copies and languages | "1M+ / 20 Languages" (en/story/page.tsx:214-215) | "Published in 20+ languages" (en/media/page.tsx:115); "Millions of people worldwide read it" (en/story/page.tsx:191) | Not stated (the Israeli reader knows the book; brief keeps it short). |
| When he returned to the Amazon | "Ten years after the ordeal" (en/yossi/page.tsx:207) | "worked alongside them since the 1980s" (en/yossi/page.tsx:151) | No timing given for the return. |
| Lino Cambi land size | "Ten thousand square metres" (en/story/page.tsx:522) | "15,000 square meters" (en/yossi/page.tsx:274) | No size given. |
| Same endorser, two quote versions | Dee Knopp (data/keynotes.ts:67 vs data/testimonials.ts:260); Bert Wong, John Hennessey, Elmo de Alwis, Mark Wang (resultTestimonials vs testimonials) | | The Hebrew uses only the `testimonials` list version, and leaves out Dee Knopp and Bert Wong. |
| The speaker reel | `siteConfig.speakerReelId` "LCRjBVnQ5JM" (siteConfig.ts:85) | "bureau-branded reel (LCRjBVnQ5JM) removed" (data/videos.ts:9); the English home plays `/videos/speaker-reel.mp4` (DemoReel.tsx:24) | The Hebrew home plays the self-hosted reel; the YouTube id is not used. |
