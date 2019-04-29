/* controls "How large can I print my image" popup*/
function myPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

/* controls image preview after uploading */
var outImage="userImage";
function preview_2(obj)
{
    if (FileReader)
    {
      var reader = new FileReader();
      reader.readAsDataURL(obj.files[0]);
      reader.onload = function (e) {
        var image=new Image();
        image.src=e.target.result;
        image.onload = function () {
            document.getElementById(outImage).src=image.src;
        };
        }
    }
else{}
}

/*jquery to control order step viewing */ 
$('#button1').click(function()
{
    $('#upload').show();
    $('#size').hide();
    $('#mediums').hide();
    $('#paypal').hide();
});
$('#button2').click(function()
{
    $('#upload').hide();
    $('#size').show();
    $('#mediums').hide();
    $('#paypal').hide();
});
$('#button3').click(function()
{
    $('#upload').hide();
    $('#size').hide();
    $('#mediums').show();
    $('#paypal').hide();
});
$('#button4').click(function()
{
    $('#upload').hide();
    $('#size').hide();
    $('#mediums').hide();
    $('#paypal').show();
});
$('#backupload').click(function()
{
    $('#upload').show();
    $('#size').hide();
    $('#mediums').hide();
    $('#paypal').hide();
});
$('#showsize').click(function()
{
    $('#upload').hide();
    $('#size').show();
    $('#mediums').hide();
    $('#paypal').hide();
});
$('#backsize').click(function()
{
    $('#upload').hide();
    $('#size').show();
    $('#mediums').hide();
    $('#paypal').hide();
});
$('#showmedium').click(function()
{
    $('#upload').hide();
    $('#size').hide();
    $('#mediums').show();
    $('#paypal').hide();
});
$('#backmedium').click(function()
{
    $('#upload').hide();
    $('#size').hide();
    $('#mediums').show();
    $('#paypal').hide();
});
$('#showreview').click(function()
{
    $('#upload').hide();
    $('#size').hide();
    $('#mediums').hide();
    $('#paypal').show();
});