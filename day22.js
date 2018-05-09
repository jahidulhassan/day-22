$('#btn').click(function(){
    var firstName=$('#firstName').val();
    var lastName=$('#lastName').val();
    var middleName=$('#middleName').val();
    var fullName=firstName+' ' +middleName+' '+lastName;
    $('#fullName').val(fullName);
});

$('#firstName').keyup(function () {
    var firstName=$('#firstName').val();
    $('#res1').text(firstName);

})
$('#lastName').keyup(function () {
    var firstName=$('#lastName').val();
    $('#res2').text(firstName);

})
$('#lastName').keyup(function () {
    var firstName=$('#firstName').val();
    var lastName=$('#lastName').val();
    var fullName=firstName+' '+lastName;
    $('#res3').text(fullName);

});

var firstScrollPosition=0;

$('#scrolDiv').scroll(function () {
  // $('#h2').css('display','block').fadeOut('3000')
  var scrollPosition=$('#scrolDiv').scrollTop();
  $('#h2').text(scrollPosition);
  if(scrollPosition>firstScrollPosition){
      $('#h2').text('you are scrolling Down');
  }
  else{
      $('#h2').text('you are scrolling up');
  }
  firstScrollPosition=scrollPosition;
});

var scrollDivPosition=$('#scrolDiv').position();
alert(scrollDivPosition.left);





$('#btn2').click(function () {
 $('ul').toggle('2000');
});



$(window).scroll(function () {
        var windowScrollPosition=$('window').scrollTop();
        var stikyDiv=$('#stikyDiv').position();
        if()
    });