odoo.define('online_tracking.online_tracking_website',function(require)
{
$('select#transfer').select2({
           placeholder: "Search your transfer",
       });
    var publicWidget = require('web.public.widget');
    var rpc = require('web.rpc');
    $('#from_location').hide();
    $('#to_location').hide();
    $('#label_from').hide();
    $('#label_to').hide();
    publicWidget.registry.PublicWidgetEventBooking = publicWidget.Widget.extend({
     selector: '.website1',
     events : {
            'click #btn_track': '_onClickTrack',
//            'change #myInput' : '_onChangeInput'
     },
      _onClickTrack: function (ev) {
            $('#from_location').show();
            $('#to_location').show();
            $('#label_from').show();
            $('#label_to').show();
            var transfer_id = this.$("#transfer").val();
            console.log('ooo',transfer_id);
            rpc.query({
               model: 'stock.picking',
               method: 'get_transfer',
               args : [ , transfer_id]
            }).then(function (result) {
            console.log(result)

            var from_loc = Object.keys(result);
            var to_loc = Object.values(result);
            console.log(from_loc)
            console.log(to_loc)
            $('#from_location').val(from_loc);
            $('#to_location').val(to_loc);
        });
        },
//      _onChangeInput: function (ev) {
//            var input, filter, a, i;
//            filter = $("#myInput").val().toUpperCase();
//            input = this.$("#myInput").val();
//            console.log('in', filter)
//            div = document.getElementById("myDropdown");
//            a = div.getElementsByTagName("a");
//            for (i = 0; i < a.length; i++) {
//                txtValue = a[i].textContent || a[i].innerText;
//                if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                  a[i].style.display = "";
//                } else {
//                  a[i].style.display = "none";
//                }
//              }
//            }

    });
});
