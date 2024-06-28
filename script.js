let left = document.getElementById("left");
let right = document.getElementById("right");
let justify = document.getElementById("justify");
let center = document.getElementById("center");
let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");
let area = document.getElementById("area");

left.addEventListener("click", () => {
    area.style.textAlign = "left";
});

right.addEventListener("click", () => {
    area.style.textAlign = "right";
});

justify.addEventListener("click", () => {
    area.style.textAlign = "justify";
});

center.addEventListener("click", () => {
    area.style.textAlign = "center";
});
bold.addEventListener("click", () => {
    area.style.fontWeight = "bold";
});
bold.addEventListener("dblclick", () => {
    area.style.fontWeight = "normal";
});
italic.addEventListener("click", () => {
    area.style.fontStyle = "italic";
});
italic.addEventListener("dblclick", () => {
    area.style.fontStyle = "normal";
});
underline.addEventListener("click", () => {
    area.style.textDecoration = "underline";
});
underline.addEventListener("dblclick", () => {
    area.style.textDecoration = "none";
});