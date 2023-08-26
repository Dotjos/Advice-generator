import { fetchData } from "./model.js";
import { dataRender } from "./view.js";
const diceImg = document.querySelector(".diceImg");
const adviceNo = document.querySelector(".adviceNo");
const advPara = document.querySelector(".advPara");

async function dataStuff() {
  try {
    fetchData().then((data) => {
      if (data) {
        const { advice, id } = data.slip;
        dataRender(adviceNo, id, advPara, advice);
      }
    });
  } catch {}
}

diceImg.addEventListener("click", dataStuff);
