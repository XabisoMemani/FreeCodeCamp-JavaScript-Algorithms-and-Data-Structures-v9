// elements
const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let input = markdownInput.value;

  // headings - h3 first so ## doesnt match before ###
  input = input.replace(/^### (.+)$/gim, "<h3>$1</h3>");
  input = input.replace(/^## (.+)$/gim, "<h2>$1</h2>");
  input = input.replace(/^# (.+)$/gim, "<h1>$1</h1>");

  // bold
  input = input.replace(/\*\*(.+?)\*\*/gi, "<strong>$1</strong>");
  input = input.replace(/__(.+?)__/gi, "<strong>$1</strong>");

  // italic
  input = input.replace(/\*(.+?)\*/gi, "<em>$1</em>");
  input = input.replace(/_(.+?)_/gi, "<em>$1</em>");

  // images before links since ![ and [ overlap
  input = input.replace(/!\[(.+?)\]\((.+?)\)/gi, '<img alt="$1" src="$2">');

  // links
  input = input.replace(/\[(.+?)\]\((.+?)\)/gi, '<a href="$2">$1</a>');

  // blockquotes
  input = input.replace(/^> (.+)/gim, "<blockquote>$1</blockquote>");

  // strip newlines so output is clean joined HTML
  input = input.replace(/\n/g, "");

  return input;
}

markdownInput.addEventListener("input", () => {
  const result = convertMarkdown();
  htmlOutput.textContent = result;
  preview.innerHTML = result;
});
