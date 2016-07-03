$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();

    var formData = new FormData(document.getElementById('analysis-form'));

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/analysis');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        $('#size').text('Size of uploaded file : ' + xhr.response);
      }
    };
    xhr.send(formData);
  });
});