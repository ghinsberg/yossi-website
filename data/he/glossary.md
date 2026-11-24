# Hebrew glossary (recurring terms)

Chosen so far, DRAFT until Yossi approves. Keep wording consistent across pages. Every Hebrew string on the site is traced in docs/plans/2026-11-24-hebrew-content-sources.md.

The geresh is the plain apostrophe (') everywhere in `data/he/`, as in ג'ונגל and טואיצ'י. Yossi's own documents use the Hebrew geresh (׳); the site keeps one form.

## Yossi's own lexicon (from his Hebrew bios, 2018 to 2023)

Added 2026-11-24. His documents (read-only, in his Drive; plain-text copies in `.superpowers/sdd/2026-11-23-hebrew-site-implementation/yossi-hebrew-sources/`):
1 = "אודות יוסי עבור גילת" (2023); 2 = "דפים בעברית על יוסי הרצאות" (2018); 3 = "הרצאה בישראל - יוסי גינסברג.docx" (2018); 4 = "קופי שיווקי להרצאה בישראל" (2019); 5 = "דף נחיתה להרצאה של יוסי גינסברג.docx" (2020).

| Term | His form (used on the site now) | Where he writes it | Draft used before | Note |
|---|---|---|---|---|
| Chalalan (the lodge) | צ'אלאלאן | 1 (x1), 2 (x1), 3 (x2), 4 (x6) | צ'לאלן | Once he writes צ׳ללן (2). His most frequent form wins. |
| What Chalalan is | כפר נופש אקולוגי (once introduced; then "כפר הנופש") | 1, 2, 3, 4 | אכסניה | |
| The Uchupiamona | שבט האוצ'ופיאמונס; בני השבט | 2, 3, 4 (most often "כבן לשבט האוצ׳ופיאמונס") | בני העם אוצ'ופיאמונה; הקהילה | He also writes אוצ׳ופימונס (2, 3) and אוצ׳ופייאמונס (4); האוצ'ופיאמונס is his most frequent. |
| Living with them | חי שם שלוש שנים כבן לשבט | 2, 3, 4 | שלוש שנים הוא חי איתם | |
| Those who saved him | בני השבט שהצילו את חייו | 2, 3, 4 | הקהילה שבניה השתתפו בחילוץ שלו | Supported by the English site ("to thank them for saving him"). |
| Madidi | מאדידי (הפארק הלאומי מאדידי) | 1 ("המאדידי") | מדידי | The English site says Madidi National Park; his "richest nature reserve in the world" is not used. |
| Ambassador | שגריר שבט האוצ'ופיאמונס בעולם | 2, 3 ("שגריר שבט האוצ׳ופימונס בעולם"); 4 ("כשגריר השבט בעולם") | שגריר שלהם בעולם | Date conflict, see the source map. |
| The Amazon | האמזונס | all | האמזונס (unchanged) | 1 has the typo "אמזונאס". |
| Bolivian Amazon | האמזונס הבוליביאני | 1 ("הבולביני", typo) | unchanged | |
| The ordeal | מסע; "מצא את עצמו ... בנבכי הג'ונגל ושרד כנגד כל הסיכויים" | 1 ("מסעו"), 3, 4 | "נכנס לג'ונגל ... ומצא את עצמו לבד" | No number of days (his texts say three weeks and 21 days; the English site disagrees with itself). |
| Cult book | מעמד קאלט; ספר קאלט | 1 ("בעל מעמד קאלט בישראל"), 2, 3, 4 ("תופעת קאלט") | not used | Also stated in the design doc. |
| The book's title in running text | "בחזרה מטואיצ'י" (in double quotes) | 2, 3, 4 (in ׳...׳), 5 (in ״...״) | unquoted | The structured-data `bookTitle` stays unquoted (a value, not prose). |
| The second book | "חוקי הג'ונגל", ספר תובנות, הוצאת כנרת זמורה ביתן | 4, 5 | not mentioned | Same name as the keynote proposal. |
| The film | סרט הוליוודי, בכיכובו של דניאל רדקליף | 1, 2, 3, 4, 5 | סרט קולנוע | Still mentioned once only (test). |
| Addiction treatment | טיפול בנפגעי סמים אופיאטים; מרכזי גמילה ושיקום | 1, 2, 3, 4 | מרפאות | CITA kept in Latin: he spells it ׳סיטא׳ (1) and סיטה (4). |
| Silicon Valley | סיליקון ואלי | 1, 2, 3 (4 has "סיליקון וואלי") | עמק הסיליקון | |
| Tech founder | יזם טכנולוגי | 2, 3 | יזם טכנולוגי (unchanged) | |
| His storytelling | מספר סיפורים; מגולל סיפורי הרפתקאות אישיים המלווים במסרים | 2, 3, 4 | not used | "עמוקים" dropped. |
| Where the talk takes you | לא רק אל עמקי האמזונס אלא גם אל נבכי הנשמה | 2, 3, 4 | not used | His verb is "סוחף"; the site says "לוקח" (content, not a claim about effect). |
| Stress and crisis | התמודדות עם מצבי לחץ ומשברים | 2, 3, 4 (talk subtitle) | "לחץ", "ניהול לחץ" | |
| Mental resilience | חוסן מנטלי | 4 | חוסן | Used once, in a keynote takeaway. |
| Adapting to the new world | להתאים את עצמנו לעולם החדש | 5 | not used | |
| Speaker | מרצה (he also writes "מרצה בינלאומי") | 1, 4, 5 | מרצה | "מרצה עסקי מצליח ובעל פרסום עולמי" is not used. |

## Site terms

| English | Hebrew | Note |
|---|---|---|
| keynote (talk) | הרצאה | Not "כנס" and not a transliteration |
| keynote speaker | מרצה | Plain; no "מרצה מוביל" style superlatives |
| the book | בחזרה מטואיצ'י | Hebrew book title, written with the geresh |
| the story | הסיפור | Used for the page about the book and what followed |
| booking | הזמנת הרצאה | CTA label everywhere |
| endorsements | המלצות | |
| in the media | בתקשורת | |
| FAQ | שאלות ותשובות | |
| accessibility statement | הצהרת נגישות | |
| privacy policy | מדיניות פרטיות | |
| the agents | הנציגים | Names confirmed with each agent before use |
| The Map Has Run Out (flagship keynote, formerly From Survival to Legacy) | המפה נגמרה | PROPOSAL |
| The Laws of the Jungle (keynote) | חוקי הג'ונגל | PROPOSAL; also his second book's Hebrew title |
| Real Survival vs Imaginary Survival (keynote) | הישרדות אמיתית, הישרדות מדומיינת | PROPOSAL |
| Chalalan | צ'אלאלאן | His spelling (was צ'לאלן) |
| Uchupiamona | שבט האוצ'ופיאמונס | His form (was אוצ'ופיאמונה) |
| Madidi National Park | הפארק הלאומי מאדידי | His spelling (was מדידי) |
| Silicon Valley | סיליקון ואלי | His form (was עמק הסיליקון) |
| full-day workshop | יום סדנה מלא | |
| translated from English (endorsement note) | תורגם מאנגלית | |

Never used: Hebrew equivalents of "comeback", "one of the top speakers in the world", "world-class", "transformative", "innovative". From his own bios, also never: "מרצה עסקי מצליח ובעל פרסום עולמי", "אחד המרצים המבוקשים", "בין החמישה המובילים", "מהפכניות" (full list in the source map).

Page slugs (Latin letters, so they survive WhatsApp and email):
/ home, /hasipur story, /hartzaot keynotes, /video videos, /hamlatzot endorsements, /tikshoret media, /sheelot FAQ, /hazmana booking, /toda thank you, /negishut accessibility, /pratiyut privacy.
