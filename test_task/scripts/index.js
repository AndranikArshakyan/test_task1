const exportButton = document.querySelector(".button-export");
const exportList = document.querySelector(".export-list");
const settingsButton = document.querySelector(".button-settings");
const settingsForm = document.querySelector(".settings-form");
const customSelect = document.querySelector(".custom-select");
const selectButton = document.querySelector(".select-button");
const paginationWrapper = document.querySelector(".pagination__wrapper");
const checkbox = document.querySelector(
  ".table__label > .settings-form__checkbox"
);
const checkboxes = document.querySelectorAll(".table__label > .checkbox");
const deleteItem = document.querySelector(".delete-item");
const tableHead = document.querySelector(".table__head");
const filterPopups = document.querySelectorAll(".filter-popup");
const svgFilters = document.querySelectorAll(".svg_filter");
const buttonResetFilter = document.querySelector(".button-reset-filter");

exportButton.addEventListener("click", () => {
  exportList.classList.toggle("export-list_show");
  exportButton.classList.toggle("button-export_reverse");
});

const selectToggler = () => {
  customSelect.classList.toggle("settings-form_show");
};

settingsButton.addEventListener("click", () => {
  settingsForm.classList.toggle("settings-form_show");
});

selectButton.addEventListener("click", (evt) => {
  selectToggler();
});

customSelect.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("custom-select__item")) {
    selectButton.textContent = evt.target.textContent;
    selectToggler();
  }
});

const checkAllCheckboxes = () => {
  for (let i = 1; i < checkboxes.length; i++) {
    checkboxes[i].checked = true;
  }
};

const uncheckAllCheckboxes = () => {
  for (let i = 1; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
};

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    checkAllCheckboxes();
  } else {
    uncheckAllCheckboxes();
  }
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      paginationWrapper.style.marginLeft = "auto";
      deleteItem.classList.add("settings-form_show");
    } else {
      paginationWrapper.style.marginLeft = "initial";
      deleteItem.classList.remove("settings-form_show");
    }
  });
});

for (let i = 0; i < svgFilters.length; i++) {
  svgFilters[i].addEventListener("click", () => {
    filterPopups[i].classList.toggle("settings-form_show");
    if (filterPopups[i].classList.contains("settings-form_show")) {
      const openedPopup = document.querySelector(".filter-popup.settings-form_show");
      openedPopup.addEventListener("click", (evt) => {
        if (evt.target.classList.contains("filter-popup__item")) {
          evt.target.closest(".table__heading_has-filter").classList.toggle("table__heading_is-filtered");
          buttonResetFilter.classList.add("settings-form_show");
          openedPopup.classList.remove("settings-form_show");
        }
      })
    }
  });
}

buttonResetFilter.addEventListener("click", () => {
  buttonResetFilter.classList.remove("settings-form_show");
  const filteredHeadings = document.querySelectorAll(".table__heading_is-filtered");
  for (let i = 0; i < filteredHeadings.length; i++) {
    filteredHeadings[i].classList.remove("table__heading_is-filtered");
  }
})