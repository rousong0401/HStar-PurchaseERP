$(document).ready(function () {

  // sidebar
  $('.sidebar__title').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('is-active');
  })

  // sidebar 收合
  $('.sidebar__btn').on('click', function () {
    $('.sidebar').toggleClass('is-active');
    $('.view').toggleClass('is-active');
  });

  // sidebar 裡面的 dropdown 收合
  $('.sidebar__dropdown-link').on('click', function () {
    $(this).toggleClass('is-active');
    $(this).siblings().slideToggle();
  });

  // 點擊漢堡選單
  $('.header__burger').on('click', function () {
    $('.header__burger').toggleClass('is-active');
    $('.sidebar').toggleClass('is-active');
  });

  // 點選編輯按鈕顯示modal
  $('.edit').on('click', function () {
    $('.modal').addClass('is-active');
    $('body').addClass('overflow-hidden');
  });

  $('.return').on('click', function () {
    $('.modal').removeClass('is-active');
    $('body').removeClass('overflow-hidden');
  });

});

// c3.js
let donutChart = c3.generate({
  bindto: ".donutChart",
  data: {
    columns: [
      ['待核銷', 1],
      ['未使用', 3]
    ],
    type: 'donut',
    colors: {
      "待核銷": "#EF547E",
      "未使用": "#E85110"
    }
  },
  donut: {
    width: 40,
    label: {
      show: false //標籤不顯示
    },
  }
});

let pieChart = c3.generate({
  bindto: ".pieChart",
  data: {
    columns: [
      ['文具類', 2],
      ['大型器具', 2],
      ['原物料ˇ', 2],
      ['消耗品', 6]
    ],
    type: 'pie',
    colors: {
      "文具類": "#E2E2E2",
      "大型器具": "#4F5D75",
      "原物料ˇ": "#FCA311",
      "消耗品": "#EF547E"
    }
  },
  pie: {
    label: {
      show: false //標籤不顯示
    },
  }
});

// flatpickr rangeDate
flatpickr(".range", {
  mode: "range",
  dateFormat: "Y-m-d",
});