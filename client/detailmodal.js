
  Template.detailModal.helpers({
    binname: function () {
	var out = "binname";
	var doc = getDoc();
	if (doc)
		out = doc.binname;
      return out;
    },
    sensorbinsID : function () {
	var out = 1;
	var doc = getDoc();
	if (doc)
		out = doc.binid;
      return QuerySensorbinsById(out);
    }
  });

  Template.detailModal.events({
    'click #submitbutton': function () {
	var name = $("#nameinputm").val();
	var cap = $("#capinputm").val();
	var brand = $("#brandinputm").val();
	var doc = getDoc();
	var binid = doc.binid;
	var regdate= doc.regdate;
	var id = Session.get("selectedID");
	UpdateBins(id, name,binid, cap,brand, regdate);
	$("#addnewschoolform")[0].reset();
    }
  });

function getDoc() {
	var id = Session.get("selectedID");
	return Binnames.findOne({_id:id});
}
