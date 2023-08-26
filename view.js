export function dataRender(div, id, advPara, advText) {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  while (advPara.firstChild) {
    advPara.removeChild(advPara.firstChild);
  }
  const advId = document.createElement("h1");
  const adviceText = document.createElement("p");
  advId.textContent = `ADVICE #${id}`;
  adviceText.textContent = `" ${advText} "`;
  div.appendChild(advId);
  advPara.appendChild(adviceText);
}
