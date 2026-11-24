# Hebrew content: source map

**Date:** 2026-11-24
**Branch:** `hebrew-site`
**Status:** DRAFT. Every string below is wrapped in `draft()` or `ph()` and counted by `scripts/check-he-launch.sh`. Nothing here is approved by Yossi.

Rule: every factual statement in Hebrew traces to a line of the English site in this worktree. The Hebrew is written from the facts, not translated line by line. Where two English sources disagree, the fact is left out and listed under "Conflicts".

Types: **fact** (rests on the English line), **phrasing only** (no factual content), **proposal** (Yossi's to decide), **interface** (labels, alt text, navigation), **translation** (an endorsement quote, translated faithfully).

Paths: `en/` = `app/(en)/`. Line numbers are from this worktree at commit time.

**Voice pass (2026-11-24).** Yossi's own Hebrew writing about himself was found and the draft was brought into his vocabulary and phrasing (18 rows; the exact before/after per row is `.superpowers/sdd/2026-11-23-hebrew-site-implementation/copydeck/changes.json`). Rows that draw on him say so with **his Hebrew:** in the last column. His documents, all read-only in his Drive, with plain-text copies in `.superpowers/sdd/2026-11-23-hebrew-site-implementation/yossi-hebrew-sources/`:
- **HE1** "אודות יוסי עבור גילת", speaker bio, 2023 (Drive `1m_pQAfCGJBUbg6tkQ_wxzNBUN1f9i9_VFiAAuBDmFBo`)
- **HE2** "דפים בעברית על יוסי הרצאות", two talk blurbs and bio, 2018 (`1-gUSY8A5sGK8fPlZj4M3v8x_DdQXvgZLG-uHOyMKgbU`)
- **HE3** "הרצאה בישראל - יוסי גינסברג.docx", talk and bio, 2018 (`1Us9sgWBiGS-WwpdvHZtwap0g8cxxMway`)
- **HE4** "קופי שיווקי להרצאה בישראל", marketing copy, 2019 (`1WGXsCrgp83EMMpNsQI91qFv_tVU3Iqd6vCMCCiBu-RA`)
- **HE5** "דף נחיתה להרצאה של יוסי גינסברג.docx", landing-page draft, 2020 (`10Ytq8kb42GbtUwo69UnDx89lwb3B6PvT`)

Rule for his texts: his vocabulary is used everywhere; his sentences are used where the facts allow; a fact found only in his Hebrew texts is used only if it conflicts with nothing, is concrete and checkable, and serves the reintroduction, and then it is stamped with `ph()` and listed under "Claims for Yossi to confirm". Boasting, rankings, where he lives, family and fees are not imported (see "From Yossi's own bios, not used, and why"). The lexicon is in `data/he/glossary.md`.

Known true facts allowed by the brief in addition to the English site (marked **brief**): the ordeal was in 1981 in Bolivia; the Hebrew title בחזרה מטואיצ'י; keynotes in Israel are in Hebrew; "more than forty years" since 1981.

---

## Home (`data/he/home.ts`)

| Key | Hebrew | English source | English text | Type |
|---|---|---|---|---|
| hero.title | מכירים את הסיפור. עכשיו תכירו את מה שבא אחריו. | design doc, line 121 | (direction line, kept exactly) | phrasing only |
| hero.sub | יוסי גינסברג מרצה לארגונים ולכנסים, בעברית ובאנגלית. הוא מדבר על מנהיגות כשאין ודאות, על חוסן ועל התמודדות עם מצבי לחץ ומשברים, מתוך מה שלמד בג'ונגל ובעשורים שאחריו. | en/page.tsx:33; en/keynotes/page.tsx:161; en/yossi/page.tsx:117 | "speaks on leadership under uncertainty, resilience, survival, stress management... draw directly from his 20 days alone in the Amazon and the philosophy he developed in the four decades since"; "Languages: English, Hebrew"; "Most of my work happens in corporate environments" | fact; **his Hebrew:** HE4 (2019), talk subtitle: "סודות הישרדות מהאמזונס להתמודדות עם מצבי לחץ ומשברים" |
| metaDescription | יוסי גינסברג מרצה לארגונים ולכנסים, בעברית ובאנגלית. ההרצאות, הסרטונים, ההמלצות והזמנת הרצאה. | en/keynotes/page.tsx:161; en/yossi/page.tsx:117 | "Languages: English, Hebrew"; "Most of my work happens in corporate environments" | fact |
| heProofClientNames | Google, Apple, Microsoft, Coca-Cola, BMW, American Express, Citibank, General Motors (logos) | en/faq/page.tsx:65; data/clients.ts:8-16 | "Google, Apple, Microsoft, BMW, American Express, Coca-Cola, Citibank, General Motors, and the Million Dollar Round Table (MDRT)" | fact, CLAIM (see below) |
| proof.title | ⟦טיוטה⟧ בין הארגונים שבהם הרצה | en/faq/page.tsx:64-65 | "What companies has Yossi spoken for?" | CLAIM |
| endorsement.title, .cta | מה אמרו עליו / לכל ההמלצות | none | | phrasing only |
| after.title | אחרי הספר | none | | phrasing only |
| after.body | הספר נגמר ביציאה מהג'ונגל. החיים לא. אחריו באו יותר מארבעים שנה: כפר נופש אקולוגי באמזונס, שהקים יחד עם בני השבט שהצילו את חייו, חברות בסיליקון ואלי שלא שינו את העולם, אלבום, ובמות ברחבי העולם. | brief (forty years); en/story/page.tsx:166-168; en/yossi/page.tsx:207, 219; en/story/page.tsx:431-433, 442; en/story/page.tsx:394; en/page.tsx:29 | "Kevin Gale... and the indigenous Uchupiamona hunters that accompanied him, found him alive"; "to thank them for saving him"; "For three years he lived with them and they built Chalalan together"; "building companies... Two ventures: Blinq and Headbox"; "The ventures did not change the world"; "In 2008, Yossi released an album"; "He speaks to audiences worldwide" | fact; **his Hebrew:** HE2/HE3 (2018), HE4 (2019): "כפר הנופש האקולוגי", "בני השבט שהצילו את חייו", "סיליקון ואלי" (lexicon) |
| keynotes.title | ההרצאות | none | | phrasing only |
| keynotes.body | שלוש הרצאות. כל אחת נבנית מחדש לקהל, לנושא האירוע ולמה שאתם רוצים שיקרה בו. | en/keynotes/page.tsx:53, 59-60 | "Three keynotes."; "Every keynote is tailored to your audience, your theme, and the outcome you need." | fact |
| keynotes.cta | לפירוט ההרצאות | none | | interface |
| keynotes.imageAlt | במה גדולה בכנס: על מסך ענק דיוקן של יוסי גינסברג, והוא עצמו עומד בקצה הבמה וידיו מורמות | image `stage/hero-2.jpg` (used by the English site in components/sections/Hero.tsx:8), viewed. Replaces `stage/hero-1.jpg`, removed by controller ruling (a man seen from behind, not identifiable) | (describes the picture) | interface |
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
| metaDescription | מה שבא אחרי הספר "בחזרה מטואיצ'י": הבמות, צ'אלאלאן באמזונס הבוליביאני, ומיזמים שלא שינו את העולם. | brief; en/yossi/page.tsx:151; en/story/page.tsx:442 | "helping to establish Chalalan Ecolodge... Bolivian Amazon"; "The ventures did not change the world" | fact; **his Hebrew:** lexicon: צ'אלאלאן (HE1-HE4); book title quoted as in HE2-HE5 |
| book.body | ב-1981, בגיל 22, יצא יוסי למסע באמזונס של בוליביה, מצא את עצמו לבד בנבכי הג'ונגל ושרד כנגד כל הסיכויים. את הסיפור כתב בספר "בחזרה מטואיצ'י", שיצא בעברית ב-1985 וקיבל בישראל מעמד של ספר קאלט. את החלק הזה אתם מכירים. העמוד הזה מתחיל איפה שהספר נגמר. | brief (1981, Bolivia, title); en/story/page.tsx:108, 111-112, 136-142, 194-195 | "Yossi Ghinsberg was 22"; "Yossi walked into the Bolivian Amazon"; "He was alone."; "The original Hebrew edition appeared in 1985: Back from Tuichi" | fact; **his Hebrew:** HE3 (2018): "הוא מצא את עצמו מבודד ... בנבכי הג׳ונגל ושרד כנגד כל הסיכויים"; HE1 (2023): "ספרו בחזרה מטואיצ׳י בעל מעמד קאלט בישראל" (cult status also in the design doc, line 9); "מסע" HE1/HE3/HE4. His "three weeks" left out (Conflicts). |
| book.film | ⟦טיוטה⟧ ב-2017 הספר הפך לסרט הוליוודי, Jungle, בכיכובו של דניאל רדקליף. | en/story/page.tsx:203-204 | "In 2017, director Greg McLean made it into a film starring Daniel Radcliffe." | PROPOSAL (film, see below); **his Hebrew:** HE5 (2020): "ספרו הראשון הפך בשנת 2017 לסרט הוליוודי, בכיכובו של דניאל רדקליף" |
| book.imageAlt | יוסי הצעיר, רזה ומזוקן, בחולצה משובצת ובמכנסיים קרועים, עומד על חול בשולי היער | image `adventure/rescue-1981.jpg`, viewed | (describes the picture) | interface |
| book.imageCaption | אחרי החילוץ, בוליביה, 1981 | en/story/page.tsx:182 | "After rescue, Bolivia, 1981" | fact |
| stage.body | רוב העבודה של יוסי היא בארגונים. הוא מרצה בכנסים, בימי הנהלה ובאירועי חברה, בעברית ובאנגלית. יוסי הוא מספר סיפורים: הוא מגולל סיפורי הרפתקאות אישיים המלווים במסרים, ולוקח את הקהל לא רק אל עמקי האמזונס אלא גם אל נבכי הנשמה. כל הרצאה נבנית מחדש לקהל, לנושא האירוע ולמה שהארגון רוצה שיקרה בו. | en/yossi/page.tsx:117; en/keynotes/page.tsx:161, 59-60; en/keynotes/page.tsx:238-239 | "Most of my work happens in corporate environments"; "Languages: English, Hebrew"; "Every keynote is tailored to your audience, your theme, and the outcome you need"; "Leadership offsites... Sales kickoffs" | fact; **his Hebrew:** HE2 (2018): "יוסי הוא מספר סיפורים"; HE2/HE3: "יוסי מגולל סיפורי הרפתקאות אישיים המלווים במסרים עמוקים"; HE3/HE4: "סוחף את הקהל לא רק אל עמקי האמזונס אלא גם אל נבכי הנשמה" ("עמוקים" dropped; "סוחף" softened to "לוקח") |
| stage.scale | ⟦טיוטה⟧ הוא מדבר מול אולמות של 10,000 איש, ומול חדר ישיבות של שנים עשר איש. ב-2025 עלה לבמה הראשית של כנס MDRT במיאמי ביץ', מול 6,000 משתתפים. | en/story/page.tsx:470-471, 480, 600 | "He speaks to audiences of 10,000. He speaks to boardrooms of twelve."; "6,000 / MDRT 2025, Miami Beach"; "MDRT Main Stage 2025, 6,000 Attendees" | CLAIM |
| stage.workshop | לארגונים שרוצים יותר מהרצאה, הוא מעצב ומוביל גם יום סדנה מלא. האורך, המקום והמבנה נקבעים יחד עם הארגון, אחרי תדריך מעמיק. | en/keynotes/page.tsx:175, 182 | "The full-day workshop."; "For organisations that want more than a talk, Yossi designs and leads a workshop... The length, the location, and the shape are decided with you, after a deep brief." | fact |
| stage.giveTitle | הרצאה אחת, ועוד אחת לקהילה | en/yossi/page.tsx:96 | "Buy One, Give One Free" | phrasing only |
| stage.give | ארגון שמזמין את יוסי מוזמן גם לתרום הרצאה נוספת שלו לכל מטרה קהילתית שיבחר. זה יכול להיות אולם הקולנוע של ארמוסיו שבמקסיקו, כשכל העיר מוזמנת, יוזמה לבני נוער באל סלבדור, בית ספר בשווייץ או בית אבות בתל אביב. | en/yossi/page.tsx:117, 120, 126 | "why not give one more talk to the community?"; "It could be in the cinema of Hermosillo, Mexico, with the whole town invited... a youth initiative in El Salvador... A private school in Switzerland. A senior citizens' home in Tel Aviv."; "The corporation that invites me is also invited to gift me to any community purpose they choose." | fact |
| stage.imageAlt | (as home hero.imageAlt) | image `stage/on-stage.jpg`, viewed | | interface |
| stage.imageCaption | ⟦טיוטה⟧ כנס ASPIRE, ICE קרקוב, 2017. 2,000 משתתפים | en/story/page.tsx:453-458 (the English site attaches exactly this caption to exactly `/images/stage/on-stage.jpg`) | "ASPIRE conference, ICE Krakow, 2017. 2,000 attendees" | CLAIM |
| chalalan.name | צ'אלאלאן | en/story/page.tsx:257 | "Chalalan Ecolodge" | fact; **his Hebrew:** his spelling, HE1 (2023), HE2/HE3 (2018), HE4 (2019) x6 (was צ'לאלן) |
| chalalan.body | יוסי חזר לאמזונס, לכפר של שבט האוצ'ופיאמונס, כדי להודות לבני השבט על שהצילו את חייו. הם ביקשו שיעזור להם להציל את שלהם. הכפר שלהם גסס, הצעירים עזבו ולא חזרו, והחלום של בני השבט היה להקים כפר נופש למטיילים על אגם קטן ונסתר בשם צ'אלאלאן. לא היה כסף, והמקום היה שש שעות שיט במעלה הנהר. הוא לא יכול היה לסרב. | en/yossi/page.tsx:207, 210, 213, 216 | "Yossi returned... upriver to the village of the Uchupiamona people, to thank them for saving him."; "they asked if he would help them save theirs. Their village was dying. The young people were leaving and not coming back. Their dream was to build a lodge for tourists on a small, hidden gem of a lake called Chalalan."; "There was no money. The location was six hours upriver"; "He could not say no." | fact (timing "ten years after" left out, see Conflicts); **his Hebrew:** lexicon from HE2-HE4: "שבט האוצ׳ופיאמונס", "בני השבט", "כפר נופש" |
| chalalan.built | שלוש שנים חי שם כבן לשבט, ויחד הם בנו את צ'אלאלאן, כפר נופש אקולוגי. הוא היה שותף גם להקמת הפארק הלאומי מאדידי. כפר הנופש שייך כולו לבני השבט ומנוהל על ידם. יוסי נושא בתואר דירקטור של צ'אלאלאן לכל החיים. | en/yossi/page.tsx:219, 225; en/story/page.tsx:257-260 | "For three years he lived with them and they built Chalalan together."; "helped establish the park itself. The lodge is owned and run entirely by the Uchupiamona people"; "Yossi is its lifetime director" | fact; **his Hebrew:** HE3/HE4: "חי שם שלוש שנים כבן לשבט האוצ׳ופיאמונס. יחד הם בנו את צ׳אלאלאן כפר נופש אקולוגי"; HE1: "המאדידי" |
| chalalan.recognition | ⟦טיוטה⟧ ב-2002 בחר המגזין National Geographic Traveler בצ'אלאלאן כאחד מעשרים יעדי התיירות החשובים בעולם. ב-2008 קיבל המקום את פרס Equator של UNDP. | en/story/page.tsx:269-275; components/StructuredData.tsx:51-52 | "National Geographic Traveler, 2002: Named one of the 20 most important tourist destinations in the world."; "Equator Prize, UNDP, 2008"; "Equator Prize, UNDP 2008, for Chalalan Ecolodge and Madidi National Park" | CLAIM; **his Hebrew:** lexicon: צ'אלאלאן |
| chalalan.ambassador | ב-2025 מינו אותו בני השבט, באופן רשמי, לשגריר שבט האוצ'ופיאמונס בעולם. | en/yossi/page.tsx:148 | "In 2025, the Uchupiamona Nation formally appointed Yossi Ghinsberg as their Ambassador to the World." | fact; **his Hebrew:** HE2/HE3 (2018): "שגריר שבט האוצ׳ופימונס בעולם" (date conflict, see Conflicts between his texts) |
| chalalan.imageAlt | אגם שקט מוקף יער גשם. השמיים והעננים משתקפים במים | image `yossi/chalalan/chalalan-lake.jpg`, viewed | (describes the picture; the alt does not name the lake, since the picture alone cannot show which lake it is) | interface |
| ventures.title | מיזמים | none | | phrasing only |
| ventures.siliconValley | בין 2013 ל-2017 היה יוסי בסיליקון ואלי והקים שתי חברות, Blinq ו-Headbox, סביב בינה מלאכותית וזהות דיגיטלית. הוא לא היה יזם טכנולוגי רגיל: אדם סקרן שפשוט הגיע, מוקף באנשים מנוסים ממנו בהרבה. | en/story/page.tsx:431-437 | "Between 2013 and 2017, he found himself in Silicon Valley, building companies around AI and digital identity [the clause "before either concept had a mainstream name" is omitted, see For Yossi to decide]. Two ventures: Blinq and Headbox. Not a conventional tech founder. A curious man who showed up, surrounded by people far more experienced" | fact; **his Hebrew:** lexicon: "סיליקון ואלי" HE1, HE2, HE3 |
| ventures.honest | המיזמים האלה לא שינו את העולם. נשארו לו מהם חבלות, שמוכיחות שניסה. ולכן, כשהוא מדבר על אומץ בעולם חדש, יש לזה משקל. | en/story/page.tsx:442-444 | "The ventures did not change the world. He has the bruises to prove he tried. That is why, when he speaks about being brave in a new world, it lands." | fact |
| ventures.cita | ⟦טיוטה⟧ במשך שש שנים כיהן כסגן נשיא של CITA, מרכז למחקר ולטיפול בהתמכרויות, שעסק בטיפול בנפגעי סמים אופיאטים. הוא עזר להקים שנים עשר מרכזי גמילה ושיקום, בשתים עשרה ערים בעולם. בישראל הקים את גלריית קולקטאקו לעיצוב פנים וחוץ. | en/story/page.tsx:321-323 | "He also served as Vice President of CITA, the Center for Research and Treatment of Addiction, helping establish twelve clinics in twelve cities around the world." | CLAIM; **his Hebrew:** NEW FACTS from his own Hebrew text, not on the English site: "שש שנים" HE1 (2023) "סגן נשיא ׳סיטא׳ במשך שש שנים"; opiates HE1 "מרכזי טיפול בנפגעי התמכרויות לסמים אופיאטים", HE4 (2019); "מרכזי גמילה ושיקום" HE2-HE4; Collectaco HE4 (2019) "גלריית קולקטאקו לעיצוב פנים וחוץ" (HE2/HE3 2018: "לעיצוב פנים ונוף") |
| ventures.album | ⟦טיוטה⟧ ב-2008 הוציא אלבום של מוזיקת עולם, Mr Sleep and the Flying Green Toad, עם המוזיקאים Avishai Barnatan ו-Amir Paiss. שלושה עשר שירים, את כל המילים כתב בעצמו. הוא כתב גם ספר שני, "חוקי הג'ונגל", ספר תובנות שיצא בהוצאת כנרת זמורה ביתן. | en/story/page.tsx:391, 394-396 | "Mr Sleep and the Flying Green Toad."; "In 2008, Yossi released an album of world music and global fusion with musicians Avishai Barnatan and Amir Paiss. Thirteen tracks. Every lyric written by him." | CLAIM (musicians' names kept in Latin: the English site gives no Hebrew spelling); **his Hebrew:** NEW FACT from his own Hebrew text: HE4 (2019) "פרסם ספר תובנות בשם ׳חוקי הג׳ונגל׳ בהוצאת כנרת זמורה ביתן"; HE5 (2020) names both books. The English site has the book in English only (data/posts.ts:265 "Eventually I wrote a book about it: Laws of the Jungle"). Now ph(). |
| ventures.linoCambi | ב-2024 רכשו יוסי ופול טמפלר חלקת אדמה בדרום כרתים, מול הים הלובי. שם הם בונים את Lino Cambi, מקום נסתר לאנשים שרוצים להתרחק מהרעש ולחזור למה שחשוב. | en/story/page.tsx:521-523, 541-545; en/yossi/page.tsx:265 | "In May 2024, Yossi and Paul Templer signed the deed on a piece of land in South Crete... overlooking the Libyan Sea."; "Lino Cambi, a hidden sanctuary... where people who are done with noise can come to remember what matters"; "Together, they are building"; en/yossi/page.tsx:274 "purchased from Agapitos and Dimitra Zeakis" | fact (land size left out, see Conflicts) |
| cta.* | ההרצאות / הזמנת הרצאה | none | | interface |

## Keynotes (`data/he/keynotes.ts`)

| Key | Hebrew | English source | English text | Type |
|---|---|---|---|---|
| [0].title | ⟦טיוטה⟧ המפה נגמרה | owner decision (rename to "The Map Has Run Out", commit e086114 on main); data/keynotes.ts:29, 34 | "From Survival to Legacy"; "The map has run out." | PROPOSAL |
| [0].forWhom | ארגונים שחיים בשינוי מתמיד: הייטק, פיננסים, שירותים מקצועיים, וכל ארגון שהוודאות של פעם כבר לא עובדת בו וחייב להתאים את עצמו לעולם החדש. | data/keynotes.ts:53, 34 | "Technology, financial services, professional services, any organisation navigating disruption"; "the quiet collapse of certainty as a management tool" | fact; **his Hebrew:** HE5 (2020): "כולנו חייבים לדייק ולהתאים את עצמנו לעולם החדש" |
| [0].takeaway | דרך חשיבה שעובדת כשאין ודאות. לחץ כאינסטינקט הישרדות שמופעל במקום הלא נכון. גמישות במקום אשליית השליטה, ויצירתיות תחת לחץ. אחרי ההרצאה מנהלים מקבלים החלטות מהר יותר וסומכים על שיקול הדעת שלהם, וצוותים מפסיקים לחכות שהמפה תחזור ומתחילים לנווט בשטח שלפניהם. | data/keynotes.ts:34, 39, 42-44, 47-49, 61 | "A way of thinking that works when nothing is certain. Leaders leave making faster decisions and trusting their own judgment. Teams stop waiting for the map to reappear and start navigating the terrain in front of them."; "Redefining stress as a misdirected survival instinct"; "The Illusion of Control: Why adaptability beats certainty"; "Innovation Under Pressure" | fact |
| [1].title | ⟦טיוטה⟧ חוקי הג'ונגל | data/keynotes.ts:75 | "The Laws of the Jungle" | PROPOSAL |
| [1].forWhom | כל קהל ארגוני: פיננסים, ביטוח, הייטק, בריאות, ארגונים מקצועיים. במיוחד צוותים שחוקים, צוותים שעובדים תחת לחץ קיצוני, ומקומות שהמורל בהם נמוך. | data/keynotes.ts:99, 101-105 | "All corporate audiences. Financial services, insurance, technology, healthcare, professional associations."; solves: "Low morale", "Burnout", "Teams facing extreme pressure" | fact |
| [1].takeaway | ההבדל בין כאב לסבל. למה התנגדות גדולה היא סימן שאתם בדרך הנכונה. איך עוברים משיתוק לתועלת. צוותים שחוקים מוצאים מחדש טעם ומניע, אנשים מפסיקים להתחמק משיחות קשות ומהחלטות קשות, וחוסן מנטלי הופך למיומנות ולא לתכונת אופי. | data/keynotes.ts:83-95, 108-110 | takeaways "The Bigger Your Goal, The More Resistance You Face... the signal you're on the right path", "Pain Doesn't Mean Suffering", "From paralysis to usefulness"; outcomes "Burned-out teams rediscover purpose and drive", "People stop avoiding hard conversations and hard decisions", "Resilience becomes a skill, not a personality trait" | fact; **his Hebrew:** HE4 (2019), talk benefits: "איך מייצרים חוסן מנטלי כדי לעמוד בכל משימה" |
| [2].title | ⟦טיוטה⟧ הישרדות אמיתית, הישרדות מדומיינת | data/keynotes.ts:122 | "Real Survival vs Imaginary Survival" | PROPOSAL |
| [2].forWhom | כל קהל ארגוני, ובמיוחד צוותי הנהלה, ארגוני מכירות, אנשי מקצועות הבריאות, וכל צוות שעובד על טורים גבוהים כבר יותר מדי זמן. | data/keynotes.ts:146 | "All corporate audiences. Especially leadership teams, sales organisations, healthcare professionals, and any group running too hot for too long." | fact |
| [2].takeaway | ההבחנה בין סכנה אמיתית לבין הלחץ היומיומי שהגוף מפרש כסכנה. כלים מעשיים להתמודדות עם מצבי לחץ: לכבות את תגובת הלחץ בזמן אמת, דרך הגוף ולא דרך המחשבה, כולל שתי טכניקות שיוסי מלמד רק בהרצאה הזו ובסדנה. מנהלים מורידים עומס מהצוות בלי לוותר על ביצועים, והארגון מקבל שפה משותפת להבין מה זה לחץ באמת. | data/keynotes.ts:127, 155-157; en/faq/page.tsx:78 | "The body cannot tell the difference... This keynote gives audiences the tools to switch the system off. Not through the mind... Through the body... in real time... the discernment between real and imaginary survival"; outcomes; "taught in the 'Real Survival vs Imaginary Survival' keynote and the full-day workshop. Yossi teaches them nowhere else." | fact; **his Hebrew:** HE2-HE4 talk subtitle: "להתמודדות עם מצבי לחץ ומשברים" |
| [n].titleEn | The Map Has Run Out / The Laws of the Jungle / Real Survival vs Imaginary Survival | data/keynotes.ts:75, 122; owner rename for [0] | | fact (English names) |
| page.intro | שלוש הרצאות. כל אחת נבנית מחדש לקהל, לנושא האירוע ולמה שאתם רוצים שיקרה בו. בישראל ההרצאות בעברית. | en/keynotes/page.tsx:53, 59-60; brief | "Three keynotes."; "Every keynote is tailored..."; Hebrew in Israel | fact |
| page.metaDescription | שלוש ההרצאות של יוסי גינסברג: על מנהיגות כשאין ודאות, על חוסן ועל לחץ. למי כל הרצאה מתאימה ומה הקהל לוקח ממנה. | en/page.tsx:33 | "leadership under uncertainty, resilience... stress management" | fact |
| page labels | הרצאות / למי זה מתאים / מה לוקחים מזה / השם באנגלית: / הזמנת הרצאה | none | | interface |

## Videos (`data/he/videos.ts`)

All twelve ids are from `data/videos.ts` (a test compares them). Titles are Hebrew renderings of the English titles; `titleEn` is the English title unchanged.

| Key (youtubeId) | Hebrew title | Context | English source | Type |
|---|---|---|---|---|
| BDGQx1V1MK0 | סיפורים ולקחים | מהבמה. | data/videos.ts:10; en/videos/VideosPageClient.tsx:95 ("From the Stage") | fact |
| RS3p_8di8WA | חדשנות היא המפתח | מהבמה. | data/videos.ts:11 | fact |
| FINMVryLQmw | הטבע הוא התשובה | מהבמה. | data/videos.ts:12 | fact |
| _QyWIuCarUc | חולמים | מהבמה. | data/videos.ts:13 | fact |
| ebBx8fFMCSY | העכשיו כבר כאן | מהבמה. | data/videos.ts:14 | fact |
| hDQWgqtuGUw | להיות חולם ולהגשים חלומות | מהבמה. | data/videos.ts:15 | fact |
| UepK6QniFgA | מה אנחנו באמת מחפשים | מהבמה. | data/videos.ts:16 | fact |
| hZqjdbmyJKI | לשרוד את הבלתי אפשרי | יוסי מספר את הסיפור מהאמזונס הבוליביאני. | data/videos.ts:19; en/videos/page.tsx:47 ("recounts surviving 20 days alone in the Bolivian Amazon") | fact |
| N1ADswxJdVU | פעם בחיים: מסע לאמזונס | מתוך הסיפור. | data/videos.ts:21; en/videos/VideosPageClient.tsx:105 ("The Story") | fact |
| bjfqeAGa7cg | להיות קורבן זו בחירה | קליפ קצר. | data/videos.ts:26; VideosPageClient.tsx:118 ("Quick Clips") | fact |
| R1-QtfpBxqI | לתת השראה לגיבורים | קליפ קצר. | data/videos.ts:27 | fact |
| Jc6-JiOZw1Q | להציל את האמזונס | קליפ קצר. | data/videos.ts:28 | fact |
| page.intro | הסרטונים כאן באנגלית, רובם מבמות בחו"ל. סרטונים בעברית יתווספו בהמשך. | data/videos.ts:9-28 (7 of 12 are "keynote") | | fact |
| page.englishHeading / englishNote / metaDescription | באנגלית / מהבמות בחו"ל, מהסיפור, וקליפים קצרים. / קטעים מהרצאות של יוסי גינסברג על במות בעולם. הסרטונים באנגלית. | VideosPageClient.tsx:95, 105, 118 | | fact |

Left out: the three film clips (`Zlztb8QXGTg`, `Tn-lbqRLdcE`, `HruuP7Q90vg`), so the film is mentioned once only; `LCRjBVnQ5JM` (`siteConfig.speakerReelId`), which `data/videos.ts:9` says was removed as "bureau-branded".

## Endorsements (`data/he/endorsements.ts`)

All `translatedFrom: "en"`. Quotes are from the `testimonials` list. Names and organizations are the English spellings (a test compares them).

| Name, organization | Hebrew quote | Hebrew role | English source | English text | Type |
|---|---|---|---|---|---|
| John Zaharakis, American Express (also featured on home) | מרהיב, מעורר השראה, מרגש, עוצר נשימה. אמליץ על יוסי כמרצה מרכזי בכל מקום ובכל פעם שאוכל. | מנהל כללי, כנסים ואירועים | data/testimonials.ts:122-125 | "Spectacular, inspiring, emotional, breathtaking. I will be recommending Yossi for keynotes wherever and whenever possible." / "General Manager, Conferences & Events" | translation |
| Chris Varelas, Citibank | בניסיון שלי, יוסי גינסברג במקום הראשון. | (shown in English: `Head of National Investment Bank`, field `roleEn`, controller ruling) | data/testimonials.ts:71-73 | "Yossi Ghinsberg ranks number one in my experience." / "Head of National Investment Bank" | translation |
| John Hennessey, Microsoft | כל מי שדיברתי איתו היה מרותק ושבוי. התובנות של יוסי יעזרו לנו לבנות את מערך השותפים שלנו. | מנהל כללי, עסקים קטנים, בינוניים ותאגידים | data/testimonials.ts:129-132 | "Every person I spoke with was enthralled and captivated. Yossi's insights will help us build our partner ecosystem." | translation |
| Ron Yariv, Hilton International | לא פחות מקוסם. יוסי יצר באולם תחושת התרוממות רוח עצומה. | מנהל כללי, מכירות בינלאומיות | data/testimonials.ts:143-146 | "Nothing short of a magician. Yossi created an enormous sense of exhilaration in the room." / "Managing Director, International Sales" | translation |
| Abe Peled, NDS | הסיפור של יוסי מעורר השראה ומלא בלקחים עסקיים מעשיים. | יו"ר ומנכ"ל | data/testimonials.ts:85-88 | "Yossi's story is inspirational and full of practical business lessons." / "Chairman and CEO" | translation |
| Bob Fuller, IBM | בכל שנות הקריירה שלי לא ראיתי אולם מלא כל כך מרותק במושב של כנס. | בכיר בתמיכה טכנית | data/testimonials.ts:164-167 | "I have never seen a packed room so totally absorbed at a convention session in my career." / "Tech Support Executive" | translation |
| Elmo de Alwis, Sigma Pharmaceuticals | התרשמנו כל כך, שהזמנו את יוסי להרצאה נוספת למחרת. הוא מרצה בקליבר יוצא דופן. | מנכ"ל ומנהל כללי | data/testimonials.ts:92-95 | "We were so impressed that we invited Yossi for a second presentation the following day. He is a speaker of exceptional caliber." / "CEO and Managing Director" | translation |
| Kerry McWhinnie, RE/MAX | המשובים מהמשתתפים היו פנטסטיים. הם היו מרותקים ולא רצו שיפסיק. המלצה בלי הסתייגות. | הפקת אירועים | data/testimonials.ts:232-235 | "Delegate feedback was fantastic, captivating — they didn't want him to stop. I give my unreserved recommendation." / "Event Organizer" (role written without gender, since the English site does not say) | translation |
| Gilbert Enoka, New Zealand All Blacks | הרגשתי שנלקחתי לעולם אחר. זה היה אישי מאוד ומרגש עמוקות. | מאמן מנטלי | data/testimonials.ts:283-286 | "I was transported to another world. It was deeply personal and profoundly moving." / "Mental Skills Coach" | translation |
| page.intro | מה אמרו מי שהזמינו אותו, ומי שישבו באולם. | none | | | phrasing only |
| page.metaDescription | מה אמרו על הרצאות של יוסי גינסברג מנהלים ומארגני אירועים ב-American Express, Citibank, Microsoft, IBM ועוד. | data/testimonials.ts:122-169 | the endorsers above | | fact |
| page.translatedNote | תורגם מאנגלית | none | | | interface |

## Media (`data/he/media.ts`)

| Key | Hebrew | English source | English text | Type |
|---|---|---|---|---|
| [0] outlet, titleEn, year, url | Discovery Channel / Animal Planet · 2005 · I Shouldn't Be Alive · https://www.youtube.com/watch?v=myPx-zAA_1Q | en/media/page.tsx:235-242, 255; en/story/page.tsx:339, 345-348 | "Discovery Channel / Animal Planet", "I Shouldn't Be Alive", "Season 1, Episode 3 — Escape from the Amazon (2005)", watch link | fact |
| [0].title | שחזור דרמטי של הסיפור לסדרת התעודה. עונה 1, פרק 3, "Escape from the Amazon". | en/media/page.tsx:241-246; en/story/page.tsx:351 | "Season 1, Episode 3"; "dramatised for the hit Discovery Channel series"; "The 20 days dramatised for television" | fact |
| [1] outlet, titleEn, year, url | Wondery / Amazon Podcasts · 2023 · Against The Odds — Season 32 (shown with a comma) · https://wondery.com/shows/against-the-odds/season/32/ | en/story/page.tsx:361, 367, 370 | "Wondery / Amazon Podcasts, 2023", "Against The Odds — Season 32" | fact |
| [1].title | "Lost in the Rainforest", סדרת פודקאסט עלילתית בארבעה פרקים. | en/story/page.tsx:373-374 | "Lost in the Rainforest — a four-episode narrative series" | fact |
| heAsSeenIn | The Washington Post, Newsweek, Variety, The Hollywood Reporter, CNN, Los Angeles Times, Discovery Channel, BBC, National Geographic | data/clients.ts:23-31; en/media/page.tsx:54-57 | "As Seen In" (TechCrunch left out per CLAUDE.md "No TechCrunch mentions") | CLAIM |
| asSeenInTitle | ⟦טיוטה⟧ סיקרו את הסיפור: | en/media/page.tsx:54 | "As Seen In" | CLAIM |
| intro | יותר מארבעים שנה אחרי, הסיפור עדיין מסופר: בטלוויזיה ובעיתונות. | en/story/page.tsx:334; brief; en/media/page.tsx:228 (Television), 54 (As Seen In: press) | "Forty years. The story still travels." Podcasts dropped from the line: the English media page has no podcast (Wondery is on the story page only) | fact |
| israelTitle, israelPlaceholder, worldTitle, readCta, metaDescription | בישראל / כתבות וראיונות מהתקשורת הישראלית יופיעו כאן... / בעולם / לפריט המקורי / יוסי גינסברג בטלוויזיה, בפודקאסטים ובעיתונות בעולם. | none (the English site names no Israeli outlet) | | interface / phrasing only |

## FAQ (`data/he/faq.ts`)

| Question | Hebrew answer | English source | English text | Type |
|---|---|---|---|---|
| על מה יוסי מרצה? | על מנהיגות כשאין ודאות, על חוסן, על הישרדות, על התמודדות עם מצבי לחץ ומשברים ועל הפוטנציאל האנושי. ההרצאות בנויות מסיפורי הרפתקאות אישיים, מהג'ונגל ומהעשורים שאחריו, המלווים במסרים מעשיים. יש שלוש הרצאות, והפירוט בעמוד ההרצאות. | en/page.tsx:33 | "speaks on leadership under uncertainty, resilience, survival, stress management, and human potential... the philosophy he developed in the four decades since. His three keynote programs" | fact; **his Hebrew:** HE2/HE3 (2018): "סיפורי הרפתקאות אישיים המלווים במסרים"; HE1 (2023): "הידע ... הוא מעשי ושימושי"; HE4 talk subtitle "מצבי לחץ ומשברים" |
| באיזו שפה ההרצאה? | בישראל, בעברית. יוסי מרצה גם באנגלית. | brief; en/keynotes/page.tsx:161 | "Languages: English, Hebrew" | fact |
| כמה זמן נמשכת הרצאה? | הרצאה רגילה נמשכת 60 דקות. אפשר גם הרצאה ואחריה שיחה מונחית של 20 עד 30 דקות, ולארגונים שרוצים חוויה עמוקה יותר יש יום סדנה מלא. | en/faq/page.tsx:44 | "The standard keynote is 60 minutes. Yossi also delivers a Keynote + Fireside Chat format (60 + 20–30 minutes) and a full-day workshop for organisations that want a deeper experience." | fact |
| אפשר להתאים את ההרצאה לאירוע שלנו? | כן. כל הזמנה מתחילה בתדריך לפני האירוע, וההרצאה נבנית סביב הקהל שלכם, נושא האירוע והתוצאה שאתם רוצים. אין שתי הרצאות זהות. | en/faq/page.tsx:48 | "Yes. Every engagement begins with a pre-event brief... shaped around your audience, your theme, and the outcome you need. No two performances are identical." | fact |
| ההרצאה רק פרונטלית? | לא. יוסי מרצה באולם, מרחוק, ובשילוב של השניים. כל פורמט מותאם לקהל ולמטרה, ולא מדובר בהרצאה מוקלטת. | en/faq/page.tsx:31 | "Yossi delivers keynotes in-person, virtually, and in hybrid formats. All three formats are tailored to the audience and outcome, not simply recorded presentations." | fact |
| לאיזה גודל קהל? | ⟦טיוטה⟧ ממפגשי הנהלה קטנים ועד במות ראשיות מול אלפי אנשים, כולל הבמה הראשית של כנס MDRT ב-2025. | en/faq/page.tsx:52 | "Yossi has delivered to intimate executive gatherings and to main-stage audiences of thousands — including the MDRT Main Stage 2025." (numbers left out, see Conflicts) | CLAIM |
| מה זה יום הסדנה? | יום שלם שיוסי מעצב ומוביל סביב התוצאה שהארגון מחפש, במשרדים או מחוץ להם. האורך, המקום והמבנה נקבעים יחד אחרי תדריך מעמיק. יוסי מוביל את כל היום ומעביר בעצמו את שתי הטכניקות שהוא מלמד רק בסדנה ובהרצאה '{heKeynoteNames.realVsImaginary}'. לחלקים שמתאימים לכך הוא מצרף מנחים מהשורה הראשונה. (the talk's name is built from data/he/keynotes.ts) | en/keynotes/page.tsx:182, 206; en/faq/page.tsx:78 | "designs and leads a workshop built around the outcome you are after. On premises or off-site. The length, the location, and the shape are decided with you, after a deep brief."; "Yossi runs the entire program and personally delivers the two signature techniques"; "Top facilitators for the modules that fit"; "Yossi teaches them nowhere else" | fact |
| איך מזמינים? | ממלאים את טופס ההזמנה באתר. הפנייה מגיעה לנציגים של יוסי בישראל, ונחזור אליכם. | design doc, lines 125-127, 176-178 (Hebrew form routes to the Israeli agent) | | fact (project design, not the English site) |
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
| 3 | story `stage.imageCaption`: "כנס ASPIRE, ICE קרקוב, 2017. 2,000 משתתפים" | en/story/page.tsx:453-458 | Event and audience size. The picture shows no event branding; the caption is kept because the English site attaches exactly this caption to exactly this file. |
| 4 | story `chalalan.recognition`: National Geographic Traveler 2002, Equator Prize UNDP 2008 | en/story/page.tsx:269-276; components/StructuredData.tsx:51-52 | Awards by name. Consistent across sources. |
| 5 | story `ventures.cita`: Vice President of CITA, twelve clinics in twelve cities | en/story/page.tsx:321-323 | Title and number. The English site says "Work that rarely appears in the speaker biography"; worth confirming before it is public in Israel. |
| 6 | FAQ "לאיזה גודל קהל?": "...במות ראשיות מול אלפי אנשים, כולל הבמה הראשית של כנס MDRT ב-2025." | en/faq/page.tsx:52 | Audience size, without numbers (sources disagree). |
| 7 | media `asSeenInTitle` "סיקרו את הסיפור:" + `heAsSeenIn` (nine outlet names) | data/clients.ts:23-31; en/media/page.tsx:54 | "As Seen In" names with no links on the English site. Several (Variety, The Hollywood Reporter) are likely film coverage; if the film is struck, these may go too. |
| 8 | story `ventures.cita`: "במשך שש שנים" | HE1 (2023): "הוא היה סגן נשיא ׳סיטא׳ במשך שש שנים" | From his own Hebrew text, not on the English site. HE4 (2019) dates the start to 1995; the year is not used. |
| 9 | story `ventures.cita`: "שעסק בטיפול בנפגעי סמים אופיאטים" | HE1 (2023): "מרכזי טיפול בנפגעי התמכרויות לסמים אופיאטים"; HE2/HE3 (2018), HE4 (2019): "הטיפול בנפגעי סמים אופיאטים (הרואין, מטדון וכו׳)" | From his own Hebrew text, not on the English site (which says addiction in general). His "מחלוצי/מחלוצות הטיפול" (pioneers) is not used. The English verb "helping establish" is kept over his "הקים" / "פתח". |
| 10 | story `ventures.cita`: "בישראל הקים את גלריית קולקטאקו לעיצוב פנים וחוץ." | HE4 (2019): "הקים את גלריית קולקטאקו לעיצוב פנים וחוץ" (HE2/HE3 2018: "גלריית קולקטאקו החדשנית לעיצוב פנים ונוף") | From his own Hebrew text, not on the English site. "החדשנית" dropped. The year and "returned with his family" (HE4) are left out. Is the gallery still open, and is this the spelling he wants? |
| 11 | story `ventures.album`: "הוא כתב גם ספר שני, "חוקי הג'ונגל", ספר תובנות שיצא בהוצאת כנרת זמורה ביתן." | HE4 (2019): "פרסם ספר תובנות בשם ׳חוקי הג׳ונגל׳ בהוצאת כנרת זמורה ביתן"; HE5 (2020) | From his own Hebrew text, not on the English site (which mentions the book in English only, data/posts.ts:265). HE5's "רבי מכר בארץ ובעולם" is not used. The `album` line moved from `draft()` to `ph()` for this. |

## Proposals (Yossi's to decide)

| # | Item | Where | Note |
|---|---|---|---|
| 1 | The film sentence: "ב-2017 הספר הפך לסרט הוליוודי, Jungle, בכיכובו של דניאל רדקליף." | `data/he/story.ts` book.film | The only mention of the film on the Hebrew site. Strike it and the film is gone (a test checks it appears exactly once). |
| 2 | Keynote title "המפה נגמרה" for "The Map Has Run Out" | `data/he/keynotes.ts` [0].title | Based on the owner's new English name, not "From Survival to Legacy". The English data file still has the old title. |
| 3 | Keynote title "חוקי הג'ונגל" for "The Laws of the Jungle" | `data/he/keynotes.ts` [1].title | Also the name of his second book. Update 2026-11-24: his own Hebrew texts say a Hebrew edition exists, "ספר תובנות בשם ׳חוקי הג׳ונגל׳ בהוצאת כנרת זמורה ביתן" (HE4, 2019), and HE5 (2020) already used "״חוקי הג׳ונגל״" as a Hebrew talk title. That makes the name a strong fit in Israel. Note: in Hebrew "חוק הג'ונגל" is an idiom for lawlessness, the opposite of the talk's meaning. |
| 4 | Keynote title "הישרדות אמיתית, הישרדות מדומיינת" for "Real Survival vs Imaginary Survival" | `data/he/keynotes.ts` [2].title | A comma instead of "מול" reads more naturally in Hebrew. |
| 5 | Featured endorsement on the home page: John Zaharakis, American Express | `data/he/endorsements.ts` heFeaturedEndorsement | Chosen because he runs conferences and events, the same job as the reader. |
| 6 | His earlier Hebrew talk names, as material when he names the current three in Hebrew (the site keeps the three current keynotes; none of these replaces one) | `data/he/keynotes.ts` titles | From his own texts: **"הכוח לשרוד ולשגשג"**, subtitle "סודות הישרדות מהאמזונס להתמודדות עם מצבי לחץ ומשברים" (HE2, HE3 2018; HE4 2019), close to "Real Survival vs Imaginary Survival" and to the English "Power to Survive" framework page; **"הישרדות כפלטפורמה לשגשוג"** (HE4 2019, same talk); **"סודות יערות האמזונס להצלחה בעסקים"** / **"סודות מהאמזונס להצלחה בעסקים"**, subtitle "המעבר מחסך ותחרות לשפע וחדשנות" (HE2 2018; HE4 2019); **"מהישרדות לביצועי שיא"**, **"חוקי הטבע לשינויים מהירים במצבי משבר"**, **"ללמוד מהטבע איך להתאים את עצמנו לעולם החדש"** (HE5 2020, title options), the last close to "The Map Has Run Out"; **"״חוקי הג׳ונגל״: ממצבי הישרדות לביצועי שיא"** (HE5 2020), the name already proposed for keynote 2. |
| 7 | Talk benefits he wrote in Hebrew that could become keynote lines | `data/he/keynotes.ts` takeaways | HE4 (2019): "איך לאמן את המוח לצאת ממשברים", "איך מייצרים חוסן מנטלי כדי לעמוד בכל משימה" (used, keynote 2), "מינוף משאבים קיימים", "על אמונה כמקור כח". HE5 (2020): "למה דרווין טעה כשאמר שרק החזק שורד?", "מה עושים כשכולם ב-freeze", "2 הטעויות המרכזיות שבני אדם פועלים לפיהן (אין מספיק משאבים וצריך להתחרות)", "3 עקרונות לאדפטציה לעולם החדש". Not used where the English keynote does not carry the same point. |

## Conflicts on the English site (facts left out)

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
| Book languages, three ways | "20 Languages" (en/story/page.tsx:215) | "20+ languages" (en/media/page.tsx:115); "four languages" (en/amazon-survival-speaker/page.tsx:170) | Not stated. |
| Years on stage | "25 years of standing in front of people" (data/keynotes.ts:80) | "the four decades since" (en/page.tsx:33) | No count of years on stage. |
| Length of the relationship with the Uchupiamona | "a relationship built over four decades" (en/yossi/page.tsx:148) | first return "Ten years after the ordeal" (en/yossi/page.tsx:207) | No length given. |
| Flagship keynote name | "From Survival to Legacy" (data/keynotes.ts:29; en/page.tsx:33; en/faq/page.tsx:40) | owner's new name "The Map Has Run Out" (blog rename e086114) | Hebrew proposal follows the new name. |
| Keynote length | "Duration: 45-90 min" (en/keynotes/page.tsx:160) | "The standard keynote is 60 minutes" (en/faq/page.tsx:44) | FAQ uses the FAQ's 60 minutes as the standard. |
| Birth date | `birthDate: "1959-04-05"` (components/StructuredData.tsx:41) | Yossi's records: 25 April 1959 | Not used in Hebrew; the English structured data needs checking. |

## For Yossi to decide

| # | Item | Where | Note |
|---|---|---|---|
| 1 | "Before either concept had a mainstream name" | en/story/page.tsx:431-433; omitted from `data/he/story.ts` ventures.siliconValley | Controller ruling: artificial intelligence had a name long before 2013 and Israeli tech readers would catch it. The English site still makes the claim. |
| 2 | The free extra community talk ("Buy One, Give One") offered in Israel too | `data/he/story.ts` stage.give | Written as an offer to any organization that books him. Confirm it applies to Israeli bookings. |
| 3 | The Lino Cambi / South Crete passage | `data/he/story.ts` ventures.linoCambi | Whether a venture in progress belongs on the Israeli page. |
| 4 | Abe Peled (NDS) and Ron Yariv are Israeli | `data/he/endorsements.ts` | They could supply their own Hebrew wording instead of a translation. |
| 5 | Hebrew spellings for the musicians Avishai Barnatan and Amir Paiss | `data/he/story.ts` ventures.album | Kept in Latin until Yossi gives the spellings. |
| 6 | The endorsements page intro "מה אמרו מי שהזמינו אותו, ומי שישבו באולם." | `data/he/endorsements.ts` heEndorsementsPage.intro | It asserts that every endorser booked him or sat in the hall. Confirm, or soften. |
| 7 | Chris Varelas's title shown in English | `data/he/endorsements.ts` (roleEn) | Controller ruling; a Hebrew rendering needs Yossi's knowledge of the role. |

## From Yossi's own bios, not used, and why

His own words, verbatim (typos as in the original). Any of them can be overruled by Yossi. The design rule they hit is "show, do not claim; nothing that brags" unless another reason is given.

| # | His line | Doc | Why not used |
|---|---|---|---|
| 1 | "יוסי גינסברג הוא מרצה עסקי מצליח ובעל פרסום עולמי." | HE1 2023 | Self-description by reputation; the logos and endorsements say it. |
| 2 | "יוסי מרתק קהלים כבר למעלה מ20 שנה ברחבי העולם, בתאגידים והחברות המובילות בשוק." | HE1 2023 | Claim of effect, and the year count conflicts (see Conflicts). |
| 3 | "ההרצאות שלו מעוררות השראה ומחוללות שינוי עומק במנהיגות וצוותי חברות המשתמשות בשירותיו." | HE1 2023 | Claim of effect; the endorsements carry this. |
| 4 | "ליוסי שילוב של תכונות כמו כריזמה, היכולת לרתק קהל דרך סיפורים, הנגשת תובנות עומק ומתן השראה שאורכת חיים שלמים." | HE1 2023 | Self-praise. The storytelling point is used, in plainer words (story `stage.body`). |
| 5 | "סיפור חייו המרתק של יוסי גינסברג כולל את מסעו האפי באמזונאס." | HE1 2023 | "מרתק", "האפי": grandeur. "מסע" is kept. |
| 6 | "הוא בנה את כפר הנופש האקולוגי עטור הפרסים" / "עתיר הפרסים" | HE1 2023; HE2, HE3 2018; HE4 2019 | The awards are named instead (story `chalalan.recognition`). |
| 7 | "ובכך עזר להפוך את המאדידי לשמורת טבע העשירה בעולם ולהשפיע על חיים של מאות אלפי אנשים." | HE1 2023 | Ranking and an uncountable impact claim. His spelling מאדידי is kept. |
| 8 | "יוסי הוא יזם המתמחה בפרוייקטים אקולוגיים בעלי אימפקט חברתי." | HE1 2023 | Vague; the site names the projects instead. |
| 9 | "כאחד המרצים המבוקשים בעולם התאגידי" | HE1 2023 | Ranking (anti-goal in the design doc). |
| 10 | "יוסי חלק במה עם הגדולים בשמות כמו ביל קלינטון, ריצ׳ארד ברנסון, מלכת ירדן המלכה נור, סטיב באלמר מנכ׳ל מיקרוסופט, דר׳ ווין דייר, ועוד שמות רבים." | HE1 2023 | Name list of famous people; borrowed standing. |
| 11 | "יוסי עמד על במות תאגידיות גדולות מול 5 אלפים אנשים עבור בוקינג דוט קום, 3 איש עבור YPO" | HE1 2023 | Audience sizes for named companies, not on the English site; "3 איש" is a typo whose number is unknown. Could return as checked proof if Yossi confirms the numbers and the right to name them. |
| 12 | "הוא הרצה על במות טד מסםפר פעמים." | HE1 2023 | Not on the English site, no event named, not checkable as written. |
| 13 | "היחוד של יוסי היא יכולתו הממופלאה לרתק קהל ולהחזיק בהם כמכושפים" | HE1 2023 | Self-praise. |
| 14 | "יכולת זאת הפכה אותו בשנת 2019 למרצה שזכה בתואר ׳המרצה הכי בלתי נשכח בתעשיה׳." | HE1 2023 | Ranking, and the title's source and wording conflict on the English site (see Conflicts). |
| 15 | "הדרך האוטנתית הבלתי אמצעית שלו ממגנטת קהל ויוצרת אווירה של פתיחות ואמון, התמסרות והעצמה." | HE1 2023 | Claim of effect. |
| 16 | "מעט אנשים בעולם המערבי מכירים את יערות האמזונס כמו יוסי גינסברג" (and "כה עמוקות") | HE2, HE3 2018; HE4 2019 | Comparative claim about himself. |
| 17 | "בהרצאה עוצרת נשימה" / "עותקת נשימה" | HE2, HE3 2018; HE4 2019 | Praises his own talk. |
| 18 | "שלעיתים קרובות מניעים תהליכים מחוללי תפנית ואף משני חיים אצל קהל השומעים" / "למסע בלתי נשכח ואף משנה חיים" | HE2, HE3 2018; HE4 2019 | Claim of effect ("life-changing"). |
| 19 | "והקהל נישא על כנפי המילים שלו למסע חוויתי שלעולם לא יישכח." | HE2 2018 | Claim of effect. "יוסי הוא מספר סיפורים", the first half, is used. |
| 20 | "הקהל שמגיע לשמוע את יוסי לעולם לא שוכח את האירוע ואת החוויה." / "לא אחת אנשים חווים חוויה מכוננת ואף משנת חיים." | HE2 2018 | Claim of effect. |
| 21 | "כיון שיוסי מדבר מהלב דברים נכנסים אל הלב" / "יוסי חש את הקהל ויודע להעביר בהתאם את המסרים הנכונים" | HE2 2018 | Not boastful, and close to his voice; left out only to keep `stage.body` short. A good candidate for him to bring back. |
| 22 | "במהלך שלוש שנים של חיים בלב היער, יוסי חקר ולמד את סודות ההשרדות האמזוניים והתובנות שלו מהפכניות." | HE2 2018; HE4 2019 | "מהפכניות" (revolutionary) brags. |
| 23 | "חברות ענק ברחבי העולם הם חוג הלקוחות של יוסי." / "תאגידי ענק ברחבי העולם מארחים את יוסי" / "בין לקוחותיו החברות הגדולות והמובילות בעולם" | HE2, HE3 2018; HE4 2019 | Claim; the named logos say it. |
| 24 | "כמרצה בינלאומי הוא נחשב בין החמישה המובילים בעולם היום" | HE2, HE3 2018 | Ranking. |
| 25 | "בסקר שנערך לאחרונה על ידי אחד ממשרדי המרצים המובילים בצפון אמריקה דורג יוסי בין חמשת המרצים העסקיים הנזכרים ביותר. ההרצאות של יוסי הופכות לשיחת היום של הכנס." | HE4 2019 | Ranking with an unnamed source; the English site's versions conflict (see Conflicts). |
| 26 | "סיפור ההשרדות שלו הפך לקלסיקה ואף לתופעת קאלט בארץ ובעולם." | HE2, HE3 2018; HE4 2019 | "בעולם" overreaches; the Israeli cult status is used (story `book.body`). |
| 27 | "וזכה למעמד רב מכר בינלאומי" / "שני ספרים שהיו לרבי מכר בארץ ובעולם" | HE2, HE3 2018; HE4 2019; HE5 2020 | Sales claim; and the English site's copies figure is not used either. |
| 28 | "יחד הם בנו את צ׳אלאלאן כפר נופש אקולוגי ששינה את מודעת השבטים באמזונס ונתן השראה לעולם כולו." | HE3 2018; HE4 2019 | The first half is used; the second is grandeur. |
| 29 | "מתוך תחושת הישרדות אמיתית נולד מיזם משגשג שהפך למודל עסקי והשראה לפיתוח קהילות אקולוגיות שגדלות גם היום ברחבי העולם." | HE4 2019 | Unverified claim of influence. |
| 30 | "הוא איש עסקים בינלאומי בעל חזון" / "יוסי חי חיים עשירים מחוץ לאמזונס" / "איש בעל חיים מרתקים ועשירים הרבה יותר מסיפורו המפורסם" | HE2, HE3 2018 | Self-praise. The site shows the ventures instead. |
| 31 | "הוא מחלוצי הטיפול בנפגעי סמים אופיאטים" / "מחלוצות הטיפול הרפואי" | HE2, HE3 2018; HE4 2019 | "Pioneer" is a claim; the opiate focus itself is used (stamped). |
| 32 | "גלריית קולקטאקו החדשנית" | HE2, HE3 2018 | "חדשנית" is on the never-use list. The gallery is used (stamped). |
| 33 | "בשנת 2013 יוסי הקים מיזם טכנולוגי תחת השם בלינק שזכה להערכה רבה בסיליקון וואלי" (link to TechCrunch) | HE4 2019 | Acclaim claim; CLAUDE.md: no TechCrunch mentions. 2013 matches the English site and is already there. |
| 34 | "יוסי גינסברג, אחד מהמרצים המפורסמים והמבוקשים ביותר בעולם, ... האיש שסיפורו כבש את הוליווד" | HE5 2020 | Ranking. |
| 35 | "אשר פיתח תאוריות מוכחות וכלים" | HE5 2020 | "Proven" is unverified. |
| 36 | "בשנים האחרונות יוסי הרצה על הבמות הגדולות בעולם" | HE5 2020 | Claim, unfinished in his draft ("להשלים"). |
| 37 | "רוב האנשים היו מייחסים למסע שכזה תיוג של אירוע טראומטי, בעוד שיוסי מצא את הדרך להבין שהמסע הזה הוא רק ההקדמה לשליחות שלו." | HE4 2019 | Not boastful, and on-message for a reintroduction; not used because no existing string carries this idea. Listed under Suggested additions in the voice report. |
| 38 | "יוסי ... נאלץ לפתח יכולות שלעיתים נדמה שאפילו הצליחו לעקוף את חוקי הטבע." | HE4 2019 | Grandeur. |
| 39 | Where he lives: "הוא מחלק את חייו בין אוסטרליה לישראל" / "כיום הוא מחלק את חייו בין אוסטרליה לישראל" / "בשנת 2008 חזר עם משפחתו לישראל" | HE2, HE3 2018; HE4 2019 | Stale and private; the site says nothing about where he lives. |
| 40 | Family: "אב לילדה עם צרכים מיוחדים בעצמו וכן לעוד שתי בנות ובן" / "אב לארבעה ילדים" | HE2, HE3 2018; HE4 2019 | Family is private. |
| 41 | "הוא גם שגריר של רצון טוב של ארגון שלווה שעוזר לילדים עם מוגבלויות." | HE2, HE3 2018 | Not on the English site, may be out of date (2018), and tied to the family line above. Yossi's call. |
| 42 | "הוא יזם טכנולוגי שפעל בסיליקון ואלי, רמאללה ותל אביב בפיתוח אפלקציות מתקדמות." | HE2, HE3 2018 | Ramallah and Tel Aviv are not on the English site and nothing names what was built; not concrete enough. |
| 43 | "ספרו ׳בחזרה מטואיצ׳י׳ מעולם לא יצא מדפוס בישראל במשך למעלה משלושים שנה" / "עדיין מודפס ונמכר" | HE2, HE3 2018; HE4 2019 | True as of 2018 by his account, but about the book rather than what came after, and needs a current check. The cult-status line is used instead. |
| 44 | "הדיסקברי צ׳אנל הפיק סרט דוקומנטרי מצליח המבוסס על הספר" | HE2, HE3 2018; HE4 2019 | "מצליח" brags; and the English site calls it a dramatised series episode, not a documentary film (see Conflicts). The media page keeps the English description. |
| 45 | "יוסי ... שם התמודד עם הישרדות אישית במהלך טיול שאחרי הצבא" | HE5 2020 | Not boastful and very Israeli; left out because it is about the book's time, which the site keeps to one paragraph. Yossi may want it in `book.body`. |
| 46 | "ספרו ... תורגם ל20 שפות" / "לעשרים שפות" | HE1 2023; HE2, HE3 2018; HE4 2019 | Languages conflict on the English site (see Conflicts). |
| 47 | Talk-mechanics lines: "איך נלחם בנמרים ובנמלים טורפות" / "בנחשים ובנמלים טורפות", "איך חייו נצלו בזכות הזיות", "ניסים של ממש שהתרחשו בגלוי" | HE3 2018; HE4 2019 | Content of the old talk, and his two versions disagree (tigers vs snakes); the English site has a jaguar. |

## Conflicts between Yossi's Hebrew texts and the English site

None of these is used on the Hebrew site. Both sides quoted.

| Fact | His Hebrew texts | English site | What the Hebrew does |
|---|---|---|---|
| Number of albums | "הוציא שני תקליטים" (HE1 2023); "הפיק שני אלבומי מוסיקה" (HE2, HE3 2018) | One album: "In 2008, Yossi released an album of world music" (en/story/page.tsx:394) | Keeps the one album the English site names; no count. |
| Years on stage | "כבר למעלה מ20 שנה", "למעלה מעשרים שנות נסיון" (HE1 2023) | "25 years of standing in front of people" (data/keynotes.ts:80); "the four decades since" (en/page.tsx:33) | No count of years on stage. |
| Length of the ordeal | "שלושה שבועות" (HE3 2018, HE4 2019); "21 ימים" (HE5 2020) | "20 days" (data/keynotes.ts:34 and many); "Three weeks alone" (en/story/page.tsx:93); "21 Days" (en/story/page.tsx:41) | No number of days. |
| Book languages | "תורגם ל20 שפות" (HE1 2023), "לעשרים שפות" (HE2-HE4) | "20 Languages" (en/story/page.tsx:215); "20+ languages" (en/media/page.tsx:115); "more than 30 languages" (data/posts.ts); "four languages" (en/amazon-survival-speaker/page.tsx:170) | Not stated. |
| "Most unforgettable speaker" | "בשנת 2019 ... ׳המרצה הכי בלתי נשכח בתעשיה׳" (HE1 2023); "דורג ... בין חמשת המרצים העסקיים הנזכרים ביותר" (HE4 2019); "בין החמישה המובילים בעולם" (HE2, HE3 2018) | "#1 Most Unforgettable Speaker" (en/story/page.tsx:481); "TOP 5 LIST OF UNFORGETTABLE SPEAKERS" (data/testimonials.ts:194); "#2 Highest Rated Inspirational Speaker for Business, The Sweeney Agency, 2017" (StructuredData.tsx:55) | Left out entirely. |
| When he returned to the Amazon | "בשנת 1992 יוסי חזר לאמזונס" (HE4 2019) | "Ten years after the ordeal" (en/yossi/page.tsx:207), i.e. about 1991; "worked alongside them since the 1980s" (en/yossi/page.tsx:151) | No timing given. |
| Ambassador of the tribe | "והוא שגריר שבט האוצ׳ופימונס בעולם כיום" (HE2, HE3 2018); "ומכהן עד היום כשגריר השבט בעולם" (HE4 2019) | "In 2025, the Uchupiamona Nation formally appointed Yossi Ghinsberg as their Ambassador to the World." (en/yossi/page.tsx:148) | Keeps the English 2025 formal appointment, in his words ("שגריר שבט האוצ'ופיאמונס בעולם"). Yossi to say whether the title was informal before 2025. |
| What the Discovery Channel made | "הדיסקברי צ׳אנל הפיק סרט דוקומנטרי ... המבוסס על הספר" (HE2-HE4), linked to youtu.be/vkRpxW78Zic (HE4) | "I Shouldn't Be Alive", "Season 1, Episode 3", "dramatised" (en/media/page.tsx:235-246), linked to youtube.com/watch?v=myPx-zAA_1Q | Keeps the English description and link. |
| CITA's role in the clinics | "הקים 12 מרכזי טיפול" (HE1 2023); "פתח שנים עשר מרכזי גמילה ושיקום ברחבי העולם" (HE2-HE4) | "helping establish twelve clinics in twelve cities" (en/story/page.tsx:321-323) | Uses the English "עזר להקים", his "מרכזי גמילה ושיקום". |
| CITA, spelled | "׳סיטא׳" (HE1 2023); "חברת סיטה" (HE4 2019) | "CITA, the Center for Research and Treatment of Addiction" | Kept in Latin, CITA. |
| Collectaco, what it designs | "לעיצוב פנים ונוף" (HE2, HE3 2018) | "לעיצוב פנים וחוץ" (HE4 2019); not on the English site | Uses his newer wording, stamped. |
| His age and the trip | "במהלך טיול שאחרי הצבא" (HE5 2020) | "Yossi Ghinsberg was 22" (en/story/page.tsx:108) | Not a conflict; noted only because the site does not use the army detail. |
