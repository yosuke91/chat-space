$(function(){
  function buildHTML(message){
    if ( message.image ){
    var html =
    `<div class="message">
       <div class="upper-message">
         <div class="upper-message__user-name">
           ${message.user_name}
         </div>
         <div class="upper-message__date">
           ${message.created_at}
         </div>
       </div>
       <div class="lower-message">
         <p class="lower-message__content">
           ${message.content}
         </p>
       </div>
       <img src=${message.image} >
     </div>`
   return html;
 } else {
   var html =
    `<div class="message">
       <div class="upper-message">
         <div class="upper-message__user-name">
           ${message.user_name}
         </div>
         <div class="upper-message__date">
           ${message.created_at}
         </div>
       </div>
       <div class="lower-message">
         <p class="lower-message__content">
           ${message.content}
         </p>
       </div>
     </div>`
   return html;
 };

  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data);
      var html = buildHTML(data);
      $('.main-chat').append(html);
      $(".main-chat").animate({scrollTop: $('.main-chat')[0].scrollHeight});
      $('form')[0].reset();
      $(".submit-btn").prop("disabled", false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $(".submit-btn").prop("disabled", false);
    });
  })
});