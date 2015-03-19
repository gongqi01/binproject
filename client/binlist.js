if (Meteor.isClient) {

  Template.binlist.helpers({
    binnames: function () {
      //display all schools
	//alert("Yes"); 
      return QueryBins();
    },
    sensorbins: function(){
	return QuerySensorbins();
    }
  });

  Template.binlist.events({
    //insert a new school
    'click #submitbutton': function () {
	var name = $("#nameinput").val();
	var brand = $("#brandinput").val();
	var cap = $("#capinput").val();
	
        if(!name || !brand || !cap)
          $('#message').replaceWith(GetMsg("Please fill all blanks.",2));
        else
	{
	  var id = InsertBins(name,cap, brand);
          
	  $("#addnewschoolform")[0].reset();
	  $('#message').replaceWith(GetMsg("<b>"+name+"</b> is added.",1));
	  Session.set("selectedID", id);
        }
    },
    
    'click #submitBRbutton': function () {
	var userid = $("#selectedbinid").find("option:selected").val(); //should be transfered to int
	var binname = $("#selectedbinid").find("option:selected").text();
	var location = $("#locationinput").val();
	var time = $("#timeinput").val();
	var level = $("#levelinput").val();
	
//alert(userid);
        if(!userid || !location || !time || !level)
          $('#message2').replaceWith(GetMsg("Please fill all blanks.",2));
        else
	{
	  var id = InsertSensorbin(parseInt(userid),location, time, level);
          
	  $("#addnewBinform")[0].reset();
	  $('#message2').replaceWith(GetMsg("Another Record of <b>"+binname +"</b> is added.",1));
	  Session.set("selectedID", userid);
        }
    },
    
    //delete an existing school
    'click a[name=deletebutton]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	DeleteBin(id);
    },
 

    //display details of a selected school
    'click td[name=details]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	var oldId = Session.get("selectedID");
	if (oldId != id)
		Session.set("selectedID", id);
	else
		Session.set("selectedID", "");
    },

    //edit the information of a selected school
    'click a[name=editbutton]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	id = id.substr(0, id.length-4)
	Session.set("selectedID", id);
	Modal.show('editModal');
    },
    
    //edit the information of a selected school
    'click a[name=detailbutton]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	id = id.substr(0, id.length-6)
	Session.set("selectedID", id);
	Modal.show('detailModal');
    }
  });


Handlebars.registerHelper("display", function(id) {
	return id == Session.get("selectedID");
});

Handlebars.registerHelper("displayname", function(userid, binid) {
	return userid == binid;
});

}

