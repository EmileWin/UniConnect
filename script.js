function updateEvent(id) {
  const button = document.getElementById(id);

  if (button.textContent.trim() === "register") {
    button.textContent = "unregister";
  } else if (button.textContent.trim() === "unregister") {
    button.textContent = "register";
  }
}

function removeEvent(id) {
  const elementToRemove = document.getElementById(id);

  if (elementToRemove) {
    elementToRemove.remove();
  }
}

function restoreEvent(ev, id) {
  const parentElement = document.getElementById(ev);

  const newElement = document.createElement("p");
  newElement.textContent = "Will be restored soon";

  const existingElement = document.getElementById(id);

  parentElement.replaceChild(newElement, existingElement);
}

function changePage(pageId) {
  const pages = document.querySelectorAll(".page");
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.classList.remove("tab-selected");
  });

  const selectedTab = document.getElementById(pageId + "Tab");
  selectedTab.classList.add("tab-selected");

  pages.forEach((page) => {
    page.classList.add("hidden");
  });

  const selectedPage = document.getElementById(pageId);
  selectedPage.classList.remove("hidden");
}

function toggleSocial(toggleId) {
  const socialPages = document.querySelectorAll(".toggle-page");
  const toggles = document.querySelectorAll(".toggle-button");

  toggles.forEach((toggle) => {
    toggle.classList.remove("toggle-button-selected");
  });

  const selectedToggle = document.getElementById(toggleId + "Toggle");
  selectedToggle.classList.add("toggle-button-selected");

  socialPages.forEach((socialPage) => {
    socialPage.classList.add("hidden");
  });

  const selectedSocialPage = document.getElementById(toggleId);
  selectedSocialPage.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  changePage("home");
  toggleSocial("chats");
});
