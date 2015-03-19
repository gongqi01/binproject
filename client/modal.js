
  Template.editModal.helpers({
    binname: function () {
	var out = "binname";
	var doc = getDoc();
	if (doc)
		out = doc.binname;
      return out;
    },
    bincap : function () {
	var out = "bincap";
	var doc = getDoc();
	if (doc)
		out = doc.bincap;
      return out;
    },
    binbrand : function () {
	var out = "binbrand";
	var doc = getDoc();
	if (doc)
		out = doc.binbrand;
      return out;
    }
  });

  Template.editModal.events({
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
