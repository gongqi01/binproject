if (Meteor.isClient) {

  Template.binsinfo.helpers({
    binnames: function () {
      return QueryBins();
    },
    sensorbins: function(){
	return QuerySensorbins();
    }
  });

  Template.binsinfo.events({
    //insert a new bins
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
    
    
    //delete an existing bins
    'click button[name=deletebutton]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	DeleteBin(id);
    },
 

    //display details of a selected bin
    'click td[name=details]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	var oldId = Session.get("selectedID");
	if (oldId != id)
		Session.set("selectedID", id);
	else
		Session.set("selectedID", "");
    },

    //edit the information of a selected bin
    'click button[name=editbutton]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	id = id.substr(0, id.length-4)
	Session.set("selectedID", id);
	Modal.show('editModal');
    },
    
    //display the monitor information of a selected bin
    'click button[name=detailbutton]':function (event) {
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

