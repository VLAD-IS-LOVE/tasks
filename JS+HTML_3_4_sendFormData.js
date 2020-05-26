$(function() {

  let form = $('.form');

  let formMessages = $('#form-messages');

  $(form).submit(function(event) {

    event.preventDefault();

    let formData = $(form).serialize();
    console.log(formData);
    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
      })
      .done(function(response) {

        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        $(formMessages).text(response);

        $('#last-name').val('');
        $('#first-name').val('');
        $('#patronymic').val('');
        $('.phone-number').val('');
        $('#comment').val('');
      })
      .fail(function(data) {

        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text('Oops! An error occured and your message could not besent.');
        }
      });
  });
});
