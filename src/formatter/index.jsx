export default function Formatter(s) {
  const newS = s
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\n/g, "<br>")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&atilde;/g, "ã")
    .replace(/&aring;/g, "å")
    .replace(/&auml;/g, "ä")
    .replace(/&ouml;/g, "ö")
  return newS;
}
