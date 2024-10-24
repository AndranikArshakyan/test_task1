const picker = new Litepicker({
  element: document.getElementById("litepicker"),
  numberOfColumns: 3,
  numberOfMonths: 3,
  lang: "ru",
  format: "DD.MM.YYYY",
  startDate: "01.10.2024",
  endDate: "01.11.2024",
  singleMode: false,
  autoApply: false,
  showTooltip: false,
  position: "bottom left",
  buttonText: {
    apply: "Применить",
    cancel: "Отменить",
  },
  setup: (picker) => {
    picker.on("show", () => {
      let date = picker.getDate();
      if (date) {
        date.setMonth(date.getMonth() - 1);
        picker.gotoDate(date);
      }
    });
  },
  plugins: ["ranges"],
  ranges: {
    customRanges: {
      Сегодня: [new Date(), new Date()],
      Вчера: [
        new Date(new Date().setDate(new Date().getDate() - 1)),
        new Date(new Date().setDate(new Date().getDate() - 1)),
      ],
      "Последние 7 дней": [
        new Date(new Date().setDate(new Date().getDate() - 6)),
        new Date(),
      ],
      "Последние 30 дней": [
        new Date(new Date().setDate(new Date().getDate() - 29)),
        new Date(),
      ],
      "Последние 90 дней": [
        new Date(new Date().setDate(new Date().getDate() - 89)),
        new Date(),
      ],
      "От начала работы": [new Date(2024, 9, 1), new Date()],
    },
  },
});
