const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  const searchQuery = document.getElementById("search-field").value;

  const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
  searchHistory.push(searchQuery);
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
});

const history = document.getElementById("history");

const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

searchHistory.map((item, index) => {
  const li = document.createElement("li");
  li.classList.add("list-item");
  li.style.display = "none";
  li.innerHTML = `<a href="https://google.com/search?q=${item}">${index} | <span style="color: var(--light)">${item}</span></a>`;
  history.appendChild(li);
});

const button = document.getElementById("search-history-button");

button.addEventListener("click", () => {
  const li = document.querySelectorAll(".list-item");

  if (li.length == 0) {
    alert("No search history, search something first!");
  } else {
    li.forEach((item) => {
      item.style.display = "block";
      button.style.display = "none";
    });
  }
});

const modalToogle = document.getElementById("modal-toogle");

const modal = document.getElementById("options-modal");
const close = document
  .getElementById("close-modal")
  .addEventListener("click", () => {
    modal.classList.add("hidden");
  });

modalToogle.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

const reset = document.getElementById("reset").addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});
const resetHistory = document
  .getElementById("reset-history")
  .addEventListener("click", () => {
    localStorage.removeItem("searchHistory");
    window.location.reload();
  });

const checkBox = document.getElementById("hideSearchHistory");

if (localStorage.getItem("hideSearchHistory") == "true") {
  document.getElementById("search-history-button").classList.add("hidden");
  checkBox.checked = true;
} else if (localStorage.getItem("hideSearchHistory") == "false") {
  document.getElementById("search-history-button").classList.remove("hidden");
  checkBox.checked = false;
} else {
  document.getElementById("search-history-button").classList.remove("hidden");
  checkBox.checked = false;
}

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    localStorage.setItem("hideSearchHistory", "true");
    document.getElementById("search-history-button").classList.add("hidden");
  } else {
    localStorage.setItem("hideSearchHistory", "false");
    document.getElementById("search-history-button").classList.remove("hidden");
  }
});

const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

if (localStorage.getItem("theme") == "dark") {
  darkButton.style = "display: block !important";
} else if (localStorage.getItem("theme") == "light") {
  lightButton.style = "display: block !important";
} else {
  darkButton.style = "display: block !important";
}

if (localStorage.getItem("theme") == "dark") {
  document.body.classList.remove("light-mode");
} else if (localStorage.getItem("theme") == "light") {
  document.body.classList.add("light-mode");
}

darkButton.addEventListener("click", () => {
  localStorage.setItem("theme", "light");
  window.location.reload();
});

lightButton.addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  window.location.reload();
});
