class Person {
  constructor(lastName, firstName, patronymic, phoneNumber, comment) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.patronymic = patronymic;
    this.phoneNumber = phoneNumber;
    this.comment = comment;
  }
  setData() {
    document.getElementById('last-name').value = this.lastName;
    document.getElementById('first-name').value = this.firstName;
    document.getElementById('patronymic').value = this.patronymic;
    document.getElementById('phone-number').value = this.phoneNumber;
    document.getElementById('comment').value = this.comment;
  }
  send() {

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
  }
}

let person = new Person('Petrov', 'Petr', 'Petrovic', '689465', 'This is a comment');
person.setData();
person.send();
