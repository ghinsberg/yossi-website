"""
Yossi Ghinsberg — Speaker One-Sheet Generator
Outputs: public/yossi-ghinsberg-speaker-onesheet.pdf
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm, cm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, Image as RLImage
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.pdfgen import canvas
from reportlab.platypus.flowables import Flowable
import os

# ── Colours ──────────────────────────────────────────────────────────────
DARK       = colors.HexColor("#0A0A0A")
GOLD       = colors.HexColor("#C9A84C")
GOLD_LIGHT = colors.HexColor("#E8C96A")
WHITE      = colors.white
GREY       = colors.HexColor("#888888")
LIGHT_GREY = colors.HexColor("#F5F5F5")
MID_GREY   = colors.HexColor("#CCCCCC")

W, H = A4
MARGIN = 18 * mm
INNER_W = W - 2 * MARGIN

OUTPUT = os.path.join(os.path.dirname(__file__), "..", "public", "yossi-ghinsberg-speaker-onesheet.pdf")
HEADSHOT = os.path.join(os.path.dirname(__file__), "..", "public", "images", "headshots", "yossi-headshot-1.jpg")

# ── Styles ────────────────────────────────────────────────────────────────
def style(name, **kw):
    defaults = dict(fontName="Helvetica", fontSize=10, textColor=DARK, leading=14, spaceAfter=0)
    defaults.update(kw)
    return ParagraphStyle(name, **defaults)

S = {
    "name":      style("name",      fontName="Helvetica-Bold", fontSize=26, textColor=DARK, leading=30),
    "title":     style("title",     fontName="Helvetica",      fontSize=12, textColor=GOLD, leading=16, spaceAfter=2*mm),
    "label":     style("label",     fontName="Helvetica-Bold", fontSize=7,  textColor=GOLD, leading=10, spaceAfter=1*mm),
    "body":      style("body",      fontName="Helvetica",      fontSize=9,  textColor=colors.HexColor("#333333"), leading=13, spaceAfter=0),
    "kn_title":  style("kn_title",  fontName="Helvetica-Bold", fontSize=10, textColor=DARK, leading=13),
    "kn_sub":    style("kn_sub",    fontName="Helvetica",      fontSize=8,  textColor=GREY, leading=12),
    "outcome":   style("outcome",   fontName="Helvetica",      fontSize=8,  textColor=colors.HexColor("#444444"), leading=12),
    "quote":     style("quote",     fontName="Helvetica-Oblique", fontSize=8.5, textColor=colors.HexColor("#333333"), leading=13),
    "attr":      style("attr",      fontName="Helvetica-Bold", fontSize=8,  textColor=DARK, leading=11),
    "attr_sub":  style("attr_sub",  fontName="Helvetica",      fontSize=7.5, textColor=GREY, leading=10),
    "contact_h": style("contact_h", fontName="Helvetica-Bold", fontSize=8,  textColor=WHITE, leading=11),
    "contact_b": style("contact_b", fontName="Helvetica",      fontSize=7.5, textColor=colors.HexColor("#CCCCCC"), leading=11),
    "tag":       style("tag",       fontName="Helvetica-Bold", fontSize=7,  textColor=DARK, leading=9),
    "section_h": style("section_h", fontName="Helvetica-Bold", fontSize=11, textColor=DARK, leading=14),
    "footer":    style("footer",    fontName="Helvetica",      fontSize=7,  textColor=GREY, alignment=TA_CENTER, leading=10),
}

keynotes = [
    {
        "title": "Be Brave in a New World",
        "sub": "Flagship keynote — AI disruption, leadership under uncertainty",
        "outcomes": [
            "Leaders make faster, bolder decisions under uncertainty",
            "Teams shift from reactive to adaptive",
            "Creative confidence returns to risk-averse cultures",
        ],
    },
    {
        "title": "Made, Not Broken",
        "sub": "21 days alone in the Amazon — what human beings are truly capable of",
        "outcomes": [
            "Burned-out teams rediscover purpose and drive",
            "Resilience becomes a skill, not a personality trait",
            "People stop avoiding hard conversations",
        ],
    },
    {
        "title": "Laws of the Jungle",
        "sub": "Nature's principles for leadership, culture and legacy",
        "outcomes": [
            "Senior leaders leave with a sharper sense of their own legacy",
            "Culture shifts from compliance to ownership",
            "Teams align around purpose, not just process",
        ],
    },
]

testimonials = [
    {
        "quote": "Yossi's keynote was an injection of much needed oxygen for our sales and management teams. I have seen a measurable change in attitude and performance.",
        "author": "Bert Wong",
        "role": "CEO, Fuji Xerox",
    },
    {
        "quote": "Every person I spoke with was enthralled. Yossi's insights will directly help us build our partner ecosystem and drive the outcomes we need.",
        "author": "John Hennessey",
        "role": "GM, Microsoft",
    },
    {
        "quote": "Max scores in every evaluation category. The highest-impact session in our chapter's history.",
        "author": "Juan Federico Salaverria Q.",
        "role": "Education Chair, YPO El Salvador",
    },
]

clients = ["Google", "Apple", "Microsoft", "BMW", "Coca-Cola", "American Express",
           "Citibank", "General Motors", "MDRT", "Singularity University", "All Blacks", "BP"]

# ── Canvas background ─────────────────────────────────────────────────────
class BackgroundCanvas:
    def __call__(self, c, doc):
        c.saveState()
        # Full white base
        c.setFillColor(WHITE)
        c.rect(0, 0, W, H, fill=1, stroke=0)

        # Dark header band
        HEADER_H = 58 * mm
        c.setFillColor(DARK)
        c.rect(0, H - HEADER_H, W, HEADER_H, fill=1, stroke=0)

        # Gold accent line under header
        c.setFillColor(GOLD)
        c.rect(0, H - HEADER_H - 1.5*mm, W, 1.5*mm, fill=1, stroke=0)

        # Dark footer band
        FOOTER_H = 20 * mm
        c.setFillColor(DARK)
        c.rect(0, 0, W, FOOTER_H, fill=1, stroke=0)

        c.restoreState()

# ── Build ─────────────────────────────────────────────────────────────────
def build():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=A4,
        leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=62*mm,   # below dark header
        bottomMargin=24*mm,
    )

    story = []

    # ── BIO ROW ──────────────────────────────────────────────────────────
    # Headshot
    img_w = 36 * mm
    img_h = 44 * mm
    headshot = RLImage(HEADSHOT, width=img_w, height=img_h)

    bio_text = [
        Paragraph("KEYNOTE SPEAKER", S["label"]),
        Spacer(1, 1*mm),
        Paragraph(
            "Yossi Ghinsberg survived 21 days alone in the Bolivian Amazon with no food, no map, and no certainty of survival. "
            "His story became a bestselling book — over one million copies sold — and a Hollywood film starring Daniel Radcliffe. "
            "Between 2013 and 2017 he was building AI companies in Silicon Valley, a decade before the world caught up. "
            "He speaks to audiences of up to 10,000. C-suite leaders have wept. Teams walk out permanently changed.",
            S["body"]
        ),
        Spacer(1, 2*mm),
        Paragraph("BEST FOR", S["label"]),
        Spacer(1, 1*mm),
        Paragraph("Technology · Financial Services · Healthcare · Professional Services · C-Suite Summits · YPO / EO", S["body"]),
    ]

    bio_col = [item for item in bio_text]

    bio_table = Table(
        [[headshot, bio_col]],
        colWidths=[img_w + 5*mm, INNER_W - img_w - 5*mm],
    )
    bio_table.setStyle(TableStyle([
        ("VALIGN",     (0,0), (-1,-1), "TOP"),
        ("LEFTPADDING",  (1,0), (1,0), 5*mm),
        ("RIGHTPADDING", (0,0), (-1,-1), 0),
        ("TOPPADDING",   (0,0), (-1,-1), 0),
        ("BOTTOMPADDING",(0,0), (-1,-1), 0),
    ]))
    story.append(bio_table)
    story.append(Spacer(1, 5*mm))
    story.append(HRFlowable(width=INNER_W, thickness=0.5, color=MID_GREY))
    story.append(Spacer(1, 4*mm))

    # ── KEYNOTES ──────────────────────────────────────────────────────────
    story.append(Paragraph("KEYNOTES", S["label"]))
    story.append(Spacer(1, 2*mm))

    kn_cols = []
    for kn in keynotes:
        cell = [
            Paragraph(kn["title"], S["kn_title"]),
            Spacer(1, 1*mm),
            Paragraph(kn["sub"], S["kn_sub"]),
            Spacer(1, 2*mm),
            Paragraph("Your team walks away with:", S["label"]),
            Spacer(1, 1*mm),
        ]
        for o in kn["outcomes"]:
            cell.append(Paragraph(f"→  {o}", S["outcome"]))
            cell.append(Spacer(1, 1*mm))
        kn_cols.append(cell)

    col_w = (INNER_W - 4*mm) / 3
    kn_table = Table([kn_cols], colWidths=[col_w, col_w, col_w])
    kn_table.setStyle(TableStyle([
        ("VALIGN",       (0,0), (-1,-1), "TOP"),
        ("LEFTPADDING",  (0,0), (-1,-1), 0),
        ("RIGHTPADDING", (0,0), (-1,-1), 4*mm),
        ("TOPPADDING",   (0,0), (-1,-1), 0),
        ("BOTTOMPADDING",(0,0), (-1,-1), 0),
        ("LINEAFTER",    (0,0), (1,-1), 0.5, MID_GREY),
        ("LEFTPADDING",  (1,0), (1,-1), 4*mm),
        ("LEFTPADDING",  (2,0), (2,-1), 4*mm),
    ]))
    story.append(kn_table)
    story.append(Spacer(1, 4*mm))
    story.append(HRFlowable(width=INNER_W, thickness=0.5, color=MID_GREY))
    story.append(Spacer(1, 4*mm))

    # ── TESTIMONIALS ──────────────────────────────────────────────────────
    story.append(Paragraph("WHAT THEY SAY", S["label"]))
    story.append(Spacer(1, 2*mm))

    tm_cells = []
    for t in testimonials:
        cell = [
            Paragraph(f"\u201c{t['quote']}\u201d", S["quote"]),
            Spacer(1, 2*mm),
            Paragraph(t["author"], S["attr"]),
            Paragraph(t["role"], S["attr_sub"]),
        ]
        tm_cells.append(cell)

    t_col_w = (INNER_W - 4*mm) / 3
    tm_table = Table([tm_cells], colWidths=[t_col_w, t_col_w, t_col_w])
    tm_table.setStyle(TableStyle([
        ("VALIGN",       (0,0), (-1,-1), "TOP"),
        ("LEFTPADDING",  (0,0), (-1,-1), 0),
        ("RIGHTPADDING", (0,0), (-1,-1), 4*mm),
        ("TOPPADDING",   (0,0), (-1,-1), 0),
        ("BOTTOMPADDING",(0,0), (-1,-1), 0),
        ("LINEAFTER",    (0,0), (1,-1), 0.5, MID_GREY),
        ("LEFTPADDING",  (1,0), (1,-1), 4*mm),
        ("LEFTPADDING",  (2,0), (2,-1), 4*mm),
    ]))
    story.append(tm_table)
    story.append(Spacer(1, 4*mm))
    story.append(HRFlowable(width=INNER_W, thickness=0.5, color=MID_GREY))
    story.append(Spacer(1, 4*mm))

    # ── CLIENTS ───────────────────────────────────────────────────────────
    story.append(Paragraph("TRUSTED BY", S["label"]))
    story.append(Spacer(1, 2*mm))
    clients_text = "  ·  ".join(clients)
    story.append(Paragraph(clients_text, S["body"]))

    # ── FOOTER (drawn via canvas) ─────────────────────────────────────────
    def draw_header_footer(c, doc):
        BackgroundCanvas()(c, doc)
        c.saveState()

        # Name & title in header
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 24)
        c.drawString(MARGIN, H - 28*mm, "YOSSI GHINSBERG")
        c.setFillColor(GOLD)
        c.setFont("Helvetica", 11)
        c.drawString(MARGIN, H - 36*mm, "Keynote Speaker  |  Author  |  Jungle Survivor")
        c.setFillColor(colors.HexColor("#888888"))
        c.setFont("Helvetica", 8)
        c.drawString(MARGIN, H - 43*mm, "Voted Most Unforgettable Speaker  ·  1M+ copies sold  ·  Hollywood film  ·  Google · Apple · Microsoft · BMW")

        # Gold line in header (already drawn by background)

        # Footer — contact
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(MARGIN, 11*mm, "NORTH AMERICA")
        c.setFillColor(colors.HexColor("#AAAAAA"))
        c.setFont("Helvetica", 7.5)
        c.drawString(MARGIN, 6*mm, "Michelle Carter  |  Michelle@carterglobalspeakers.com  |  +1 703 819 2511")

        col2 = W / 3
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(col2, 11*mm, "EUROPE & AUSTRALASIA")
        c.setFillColor(colors.HexColor("#AAAAAA"))
        c.setFont("Helvetica", 7.5)
        c.drawString(col2, 6*mm, "Michael Arnot  |  michael@encorespeakers.com  |  +61 422 002 685")

        col3 = 2 * W / 3
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(col3, 11*mm, "LATIN AMERICA")
        c.setFillColor(colors.HexColor("#AAAAAA"))
        c.setFont("Helvetica", 7.5)
        c.drawString(col3, 6*mm, "Juanita Cortes  |  juanita.cortes@smartspeakers.co  |  +57 313 8985266")

        # Website right
        c.setFillColor(GOLD)
        c.setFont("Helvetica-Bold", 8)
        c.drawRightString(W - MARGIN, 1.5*mm, "ghinsberg.com")

        c.restoreState()

    doc.build(story, onFirstPage=draw_header_footer, onLaterPages=draw_header_footer)
    print(f"✓ One-sheet saved to: {OUTPUT}")

build()
