if (Meteor.isClient) {

  Template.binsmonitor.helpers({
    binnames: function () { 
      return QueryBins();
    },
    sensorbins: function(){
	return QuerySensorbins();
    }
  });

  Template.binsmonitor.events({
    //insert a new monior record for a bin
    'click #submitBRbutton': function () {
	var userid = $("#selectedbinid").find("option:selected").val(); //should be transfered to int
	var binname = $("#selectedbinid").find("option:selected").text();
	var location = $("#locationinput").val();
	var time = $("#timeinput").val();
	var level = $("#levelinput").val();
	
        if(!userid || !location || !time || !level)
          $('#message3').replaceWith(GetMsg("Please fill all blanks.",2));
        else
	{
	  var id = InsertSensorbin(parseInt(userid),location, time, level);
          
	  $("#addnewmonitorform")[0].reset();
	  $('#message3').replaceWith(GetMsg("Another Record of <b>"+binname +"</b> is added.",1));
	  Session.set("selectedID", userid);
        }
    },
	//delete an existing bin monitor records
    'click a[name=deletebutton]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	DeleteSensorbin(id);
    },
	//edit the information of a selected bin monitor record
    'click a[name=editbutton]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	id = id.substr(0, id.length-4)
	Session.set("selectedID", id);
	Modal.show('editMonitorModal');
    }
  });

  Template.binsmonitor.rendered=function(){
	$('#timeinput').datepicker();
	}

}

