const input = document.querySelector("input");
      const btn = document.querySelector("button");

      btn.addEventListener("click", function (e) {
        if (input.value.trim() === "") {
          return;
        }

        const li = document.createElement("li");
        const textNode = document.createTextNode(input.value);
        const iconContainer = document.createElement("div");
        const i = document.createElement("i");
        const i2 = document.createElement("i");

        i.className = "ri-edit-box-fill";
        i2.className = "ri-delete-bin-line";
        iconContainer.className = "icon-container";

        i.addEventListener("click", function () {
          const newValue = prompt("Edit your task:", li.innerText);
          if (newValue !== null && newValue.trim() !== "") {
            li.childNodes[0].nodeValue = newValue;
          }
        });

        i2.addEventListener("click", function () {
          li.remove();
        });

        iconContainer.appendChild(i);
        iconContainer.appendChild(i2);
        li.appendChild(textNode);
        li.appendChild(iconContainer);
        document.querySelector("ul").appendChild(li);

        input.value = "";
      });