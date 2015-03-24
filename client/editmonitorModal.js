
  Template.editMonitorModal.helpers({
    location: function () {
	var out = "location";
	var doc = getDoc();
	if (doc)
		out = doc.location;
      return out;
    },
    time : function () {
	var time = "time";
	var doc = getDoc();
	if (doc)
		out = doc.time;
      return out;
    },
    level : function () {
	var out = "level";
	var doc = getDoc();
	if (doc)
		out = doc.level;
      return out;
    }
  });

  Template.editMonitorModal.events({
    'click #submitbutton': function () {
	var location = $("#locationinputm").val();
	var time = $("#timeinputm").val();
	var level = $("#levelinputm").val();
	var doc = getDoc();
	var userid = doc.userid;
	var id = Session.get("selectedID");
	UpdateSensorbin(id, userid, location,time, level);
	$("#addnewmonitorform")[0].reset();
    }
  });

function getDoc() {
	var id = Session.get("selectedID");
	return Sensorbins.findOne({_id:id});
}
