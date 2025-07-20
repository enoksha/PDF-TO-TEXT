// Tesseract.js ইন্টিগ্রেশন (স্ক্যান করা PDF-এর জন্য)
Tesseract.recognize(
  'path/to/image.png',
  'ben',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
});
