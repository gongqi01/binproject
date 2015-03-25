//Database Operations
//Binnames
QueryBins = function () {
	//alert(Binnames.find().count());
	return Binnames.find();
}


InsertBins = function (binname, bincap, binbrand) {

	var currentdate = new Date();
	var day = currentdate.getDate();
	var month = currentdate.getMonth() + 1;
	var year = currentdate.getFullYear();
	var hours = currentdate.getHours();
	var minutes = currentdate.getMinutes();
	var cdate = year+"/"+month+"/"+day+" "+hours+":"+minutes;
	//var cdate = currentdate.toJSON();
	//alert(cdate);
	var allbins = Binnames.find().fetch();
	var lastid = allbins[allbins.length-1].binid;
	
	var binidlist = [];
	var maxid = 0;
	for(var i=0;i<allbins.length;i++)
	{
		binidlist[i] = allbins[i].binid;
		if(maxid < allbins[i].binid)
			maxid = allbins[i].binid;
	}
	
	var binnum = maxid + 1;
	for(var i=0;i<maxid;i++)
	{
		if(!IsInList(i+1, binidlist))
		{
			binnum = i+1;
			break;
		}
	}

	var doc = {
		binname : binname,
		binid : binnum,
		bincap : bincap,
		binbrand : binbrand,
		regdate : cdate
	};
	return Binnames.insert(doc);
}

function IsInList(num, list){
	for(i in list)
	{
		if(list[i] == num)
		{
			
			return true;
		}
	}
	//alert(num);
	return false;	
}

UpdateBins = function (id, binname, binid, bincap, binbrand, regdate) {
	var doc = {
		binname : binname,
		binid: binid,
		bincap : bincap,
		binbrand : binbrand,
		regdate: regdate
	};
	Binnames.update({
		_id:id
	}, doc);
}

//delete binID in Binnames and its related details in SensorBIns
DeleteBin = function (id) {
	var bid = Binnames.findOne({_id:id}).binid;
	var myCursor = Sensorbins.find({userid: bid}).fetch();
	for(var i=0;i<myCursor.length;i++)
	{
		Sensorbins.remove({_id: myCursor[i]._id});	
	}
	Binnames.remove({_id:id});
}

//Sensorbins
QuerySensorbinsById = function (binid) {
	//alert(Binnames.find().count());
	return Sensorbins.find({userid: binid});
}

QuerySensorbins = function () {
	/*
	var doc = [];
	var myCursor = Sensorbins.find().fetch();
	alert("QB - "+myCursor.length);
	for(var i=0;i<myCursor.length;i++)
	{
		var uid = myCursor[i].userid;
		var uname = Binnames.findOne({binid: uid}).binname;
		//alert(uname);
		doc[i] ={
			username: uname,
			location: myCursor[i].location,
			time: myCursor[i].time,
			level: myCursor[i].level
		}
	}
	*/
	//return doc;
	return Sensorbins.find();
}


InsertSensorbin = function (userid, location, time, level) {

	var doc = {
		userid: userid,
		location: location,
		time: time,
		level: level
	};
	return Sensorbins.insert(doc);
}

UpdateSensorbin = function (id, userid, location, time, level) {
	var doc = {
		userid: userid,
		location: location,
		time: time,
		level: level
	};
	Sensorbins.update({
		_id:id
	}, doc);
}

DeleteSensorbin = function (id) {

	Sensorbins.remove({_id:id});
}

GetMsg = function (msg,type) {
	var out = "<div id='message' class='alert alert-";
	switch (type) {
		case 1 : out = out + "success'>" + msg + "</div>";break;
		case 2 : out = out + "danger'>" + msg + "</div>"; break;
		default: out = "<div id='message'></div>";
	}
	return out;
}
