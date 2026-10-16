import { jsPDF } from 'jspdf';
import { companyInfo, courses, stats, whyChooseUs } from '../data/siteData';

const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const MARGIN = 16;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const EMERALD = [5, 150, 105];
const SLATE_900 = [15, 23, 42];
const SLATE_500 = [100, 116, 139];

// jsPDF's built-in fonts (WinAnsi encoding) have no ₹ or en-dash glyph, they render as
// garbled or missing characters, so swap them for plain-text equivalents before any text
// reaches the PDF.
const sanitizePdfText = (text) => String(text).replace(/₹/g, 'Rs. ').replace(/–/g, '-');

function createDoc() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  let y = MARGIN;

  const ensureSpace = (needed) => {
    if (y + needed > PAGE_HEIGHT - MARGIN) {
      doc.addPage();
      y = MARGIN;
    }
  };

  const addHeading = (text, size = 14) => {
    ensureSpace(size / 2 + 6);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(size);
    doc.setTextColor(...SLATE_900);
    doc.text(sanitizePdfText(text), MARGIN, y);
    y += size / 2 + 3;
  };

  const addSubheading = (text, size = 11) => {
    ensureSpace(size / 2 + 4);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(size);
    doc.setTextColor(...EMERALD);
    doc.text(sanitizePdfText(text), MARGIN, y);
    y += size / 2 + 2.5;
  };

  const addParagraph = (text, size = 9.5) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(size);
    doc.setTextColor(...SLATE_500);
    const lines = doc.splitTextToSize(sanitizePdfText(text), CONTENT_WIDTH);
    lines.forEach((line) => {
      ensureSpace(5);
      doc.text(line, MARGIN, y);
      y += 5;
    });
    y += 1.5;
  };

  const addBulletList = (items, size = 9.5) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(size);
    doc.setTextColor(...SLATE_900);
    items.forEach((item) => {
      const lines = doc.splitTextToSize(sanitizePdfText(`•  ${item}`), CONTENT_WIDTH - 2);
      lines.forEach((line, idx) => {
        ensureSpace(5);
        doc.text(line, MARGIN + (idx === 0 ? 0 : 4), y);
        y += 5;
      });
    });
    y += 1.5;
  };

  const addDivider = () => {
    ensureSpace(6);
    doc.setDrawColor(226, 232, 240);
    doc.line(MARGIN, y, PAGE_WIDTH - MARGIN, y);
    y += 6;
  };

  const addKeyValueRow = (pairs, size = 9) => {
    ensureSpace(6);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(size);
    let x = MARGIN;
    const colWidth = CONTENT_WIDTH / pairs.length;
    pairs.forEach(([label, value]) => {
      doc.setTextColor(...SLATE_500);
      doc.text(sanitizePdfText(label), x, y);
      doc.setTextColor(...SLATE_900);
      doc.text(sanitizePdfText(String(value)), x, y + 4.5);
      x += colWidth;
    });
    y += 11;
  };

  const addStatsRow = (items, size = 14) => {
    ensureSpace(size / 2 + 9);
    const colWidth = CONTENT_WIDTH / items.length;
    let x = MARGIN;
    items.forEach((item) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(size);
      doc.setTextColor(...EMERALD);
      doc.text(sanitizePdfText(item.value), x, y);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(...SLATE_500);
      doc.text(sanitizePdfText(item.label), x, y + 5);
      x += colWidth;
    });
    y += size / 2 + 9;
  };

  // Quick-reference table: course name, duration, fee, mode, and the page it
  // starts on (courses render in the same order they're passed, one per page).
  const addCourseOverviewTable = (list, startPage) => {
    const cols = [
      { label: 'Course', width: 55 },
      { label: 'Duration', width: 35 },
      { label: 'Fee', width: 32 },
      { label: 'Mode', width: 40 },
      { label: 'Page', width: 16 },
    ];

    ensureSpace(9);
    let x = MARGIN;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(...SLATE_500);
    cols.forEach((c) => {
      doc.text(sanitizePdfText(c.label.toUpperCase()), x, y);
      x += c.width;
    });
    y += 3.5;
    doc.setDrawColor(226, 232, 240);
    doc.line(MARGIN, y, PAGE_WIDTH - MARGIN, y);
    y += 5;

    list.forEach((course, idx) => {
      ensureSpace(7);
      x = MARGIN;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(...SLATE_900);
      doc.text(sanitizePdfText(course.shortTitle || course.title), x, y);
      x += cols[0].width;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(...SLATE_500);
      doc.text(sanitizePdfText(course.duration), x, y);
      x += cols[1].width;
      doc.text(sanitizePdfText(course.fee), x, y);
      x += cols[2].width;
      doc.text(sanitizePdfText(course.mode), x, y);
      x += cols[3].width;
      doc.setTextColor(...SLATE_900);
      doc.text(String(startPage + idx), x, y);

      y += 7;
    });
    y += 2;
  };

  // ---- Cover / Company section ----
  doc.setFillColor(...EMERALD);
  doc.rect(0, 0, PAGE_WIDTH, 28, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(255, 255, 255);
  doc.text(sanitizePdfText(companyInfo.name), MARGIN, 17);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(sanitizePdfText(companyInfo.tagline), MARGIN, 23.5);
  y = 38;

  addHeading('Complete Course Details Guide', 16);
  addParagraph(companyInfo.description);
  addDivider();

  addSubheading('Contact & Admissions');
  addParagraph(`Phone: ${companyInfo.phone}   |   Email: ${companyInfo.email}`);
  addParagraph(`Address: ${companyInfo.address}`);
  addDivider();

  if (stats?.length) {
    addStatsRow(stats.map((s) => ({ value: s.value, label: s.label })));
    addDivider();
  }

  if (whyChooseUs?.length) {
    addSubheading('Why Choose Sky9 India');
    addBulletList(whyChooseUs.map((w) => w.title));
    addDivider();
  }

  addSubheading('Courses in This Guide');
  addCourseOverviewTable(courses, 2);
  addDivider();

  // ---- Course sections ----
  courses.forEach((course) => {
    doc.addPage();
    y = MARGIN;

    addHeading(course.title, 15);
    addSubheading(course.subtitle, 10.5);
    addKeyValueRow([
      ['Duration', course.duration],
      ['Fee', course.fee],
      ['Mode', course.mode],
    ]);
    addKeyValueRow([
      ['Certification', course.certification],
      ['Internship', course.internship],
    ]);
    addDivider();

    addSubheading('Overview');
    addParagraph(course.overview);

    if (course.benefits?.length) {
      addSubheading('Key Benefits');
      addBulletList(course.benefits);
    }

    if (course.modules?.length) {
      addSubheading('Course Modules');
      course.modules.forEach((mod) => {
        ensureSpace(6);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(...SLATE_900);
        doc.text(sanitizePdfText(mod.title), MARGIN, y);
        y += 4.5;
        addParagraph(mod.topics.join(', '), 8.5);
      });
    }

    if (course.careerOpportunities?.length) {
      addSubheading('Career Opportunities');
      addBulletList(course.careerOpportunities);
    }
  });

  // ---- Footer page numbers ----
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i += 1) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...SLATE_500);
    doc.text(`${companyInfo.name}, Course Details Guide`, MARGIN, PAGE_HEIGHT - 8);
    doc.text(`Page ${i} of ${pageCount}`, PAGE_WIDTH - MARGIN - 20, PAGE_HEIGHT - 8);
  }

  return doc;
}

export function downloadCourseDetailsPDF(fileName = 'Sky9-India-Course-Details.pdf') {
  const doc = createDoc();
  doc.save(fileName);
}
