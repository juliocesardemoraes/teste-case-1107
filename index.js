import { bartenders } from "./mock.js";

console.log(bartenders);

const bartendersSection = document.getElementById("bartenders");

for (let i = 0; i < bartenders.length; i++) {
  const bartenderContainer = document.createElement("div");
  bartenderContainer.classList.add("bartender");

  const bartenderImage = document.createElement("img");
  bartenderImage.src = bartenders[i].image;
  bartenderContainer.appendChild(bartenderImage);

  const bartenderInfo = document.createElement("div");
  bartenderInfo.classList.add("p__1", "info");

  const bartenderInfoPersonal = document.createElement("div");
  bartenderInfoPersonal.classList.add("info__personal");

  const bartenderName = document.createElement("h3");
  const bartenderState = document.createElement("h3");
  bartenderName.textContent = bartenders[i].name;
  bartenderState.textContent = bartenders[i].state;

  bartenderInfoPersonal.append(bartenderName, bartenderState);
  bartenderInfo.append(bartenderInfoPersonal);

  const bartenderDescription = document.createElement("p");
  bartenderDescription.textContent = bartenders[i].description;
  bartenderInfo.appendChild(bartenderDescription);

  const bartenderPricing = document.createElement("div");
  bartenderPricing.classList.add("info__personal");

  const bartenderReview = document.createElement("h3");
  const bartenderPrice = document.createElement("h3");
  bartenderReview.classList.add("review");
  bartenderReview.textContent = bartenders[i].review;
  bartenderPrice.textContent = bartenders[i].price;

  bartenderPricing.append(bartenderReview, bartenderPrice);
  bartenderInfo.append(bartenderPricing);

  const buttonContact = document.createElement("a");
  buttonContact.classList.add("button__contact");
  buttonContact.setAttribute("target", "_blank");
  buttonContact.href = bartenders[i].wpp;
  buttonContact.textContent = "Contato";

  bartenderInfo.append(buttonContact);

  bartenderContainer.appendChild(bartenderInfo);

  bartendersSection.append(bartenderContainer);
}

/*
        <div class="bartender">
          <img src="images/bartender1.jpg" />
          <div class="p__1 info">
            <div class="info__personal">
              <h3>Rafael</h3>
              <h3>RJ</h3>
            </div>
            <p>Bartender que atende festas de luxo.</p>
            <div class="info__personal">
              <h3 class="review">5/5</h3>
              <h3>45.97R$</h3>
            </div>
            <button class="button__contact">Contato</button>
          </div>
        </div>


          <div class="p__1 info">
            <div class="info__personal">
              <h3>Rafael</h3>
              <h3>RJ</h3>
            </div>
            <p>Bartender que atende festas de luxo.</p>
            <div class="info__personal">
              <h3 class="review">5/5</h3>
              <h3>45.97R$</h3>
            </div>
          </div>
*/
