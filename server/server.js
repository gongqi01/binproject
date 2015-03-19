if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
	Sensorbins.remove({});
	Binnames.remove({});

	var bnsData = [
		{
			binname: 'John Bin',
			binid: 1,
			bincap: 4.0,
			binbrand: 'BIS4',
			regdate: '2015-03-19T05:41:25.503Z'
		},
		{
			binname: 'bin2',
			binid: 2,
			bincap: 5.0,
			binbrand: 'Alinta',
			regdate: '2015-03-19T05:41:25.503Z'		
		},
		{
			binname: 'David bin3',
			binid: 3,
			bincap: 6.0,
			binbrand: 'Energy',
			regdate: '2015-03-19T05:41:25.503Z'
		},
		{
			binname: 'Crown',
			binid: 4,
			bincap: 4.0,
			binbrand: 'BIS4',
			regdate: '2015-03-19T05:41:25.503Z'
		}
	];

	for(var i=0; i<bnsData.length; i++)
		Binnames.insert(bnsData[i]);

	var sbsData = [
		{
			userid: 1,
			location: 'Bently',
			time: '2015-03-18T05:41:25.503Z',
			level: 3.5
		},
		{
			userid: 2,
			location: 'Hammond Park',
			time: '2015-03-18T05:41:25.503Z',
			level: 3.2		
		},
		{
			userid: 1,
			location: 'Bently',
			time: '2015-03-19T05:41:25.503Z',
			level: 4.0
		},
		{
			userid: 3,
			location: 'Cockburn',
			time: '2015-03-18T05:41:25.503Z',
			level: 2.5
		},
		{
			userid: 2,
			location: 'Bently',
			time: '2015-03-19T05:41:25.503Z',
			level: 3.8		
		},
		{
			userid: 3,
			location: 'Bently',
			time: '2015-03-19T05:41:25.503Z',
			level: 4.0
		},
		{
			userid: 4,
			location: 'Canning Vale',
			time: '2015-03-18T05:41:25.503Z',
			level: 3.3
		}
	];

	for(var i=0; i<sbsData.length; i++)
		Sensorbins.insert(sbsData[i]);
  });
}
