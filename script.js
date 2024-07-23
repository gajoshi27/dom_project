document.body.style.backgroundColor = "#00008B";

// let heading = document.querySelector("body");
// let color = "yellow";
// heading.style["background-color"] = color;

document.querySelector("h2").innerHTML =
  "Here are Pokemon's incredible Gen 1 starters!";

let paragraphs = document.querySelectorAll("img");
paragraphs.forEach((p) => (p.style.borderColor = "#9b870c"));

paragraphs = document.querySelectorAll("img");
paragraphs.forEach((p) => (p.style.borderStyle = "dotted"));

let header = document.querySelectorAll("h3");
for (let i = 0; i < header.length; i++) {
  header[i].style["color"] = "yellow";
}

let footer = document.querySelector("footer");
footer.innerHTML = "All Star Code - DOM Project";

let footer_styles = document.querySelector("footer");
footer_styles.style["font-size"] = "26px";

footer_styles = document.querySelector("footer");
footer_styles.style["font-style"] = "italic";

footer_styles = document.querySelector("footer");
footer_styles.style["text-decoration"] = "underline overline";
