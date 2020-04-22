/*--*----1----*----2----*----3----*----4----*----5----*----6----*----7----*----8
================================================================================
                          Classification: UNCLASSIFIED
================================================================================
                      Copyright, Booz Allen Hamilton, 2020
                        Unpublished, All Rights Reserved
================================================================================
----*----|----*----|----*----|----*----|----*----|----*----|----*----|----*---*/

/*--*----1----*----2----*----3----*----4----*----5----*----6----*----7----*----8

https://github.com/oracle/node-oracledb/blob/master/examples/example.js#L32

----*----|----*----|----*----|----*----|----*----|----*----|----*----|----*---*/

'use strict';

var oracledb	= require('oracledb');
var dbConfig	= require('./dbconfig.js');

const http		= require('http');

const hostname	= 'localhost';
const port 		= 3000;

const server = http.createServer((req, res) => {
	console.log(req.header);
	res.statusCode = 200;
	res.setHeader('Content-typpe', 'text/html'); 
	res.end('<html>')
})

var chartData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    data: [589, 445, 483, 503, 689, 692, 634],
  },
  {
    data: [639, 465, 493, 478, 589, 632, 674],
  }]
};

// async function run() {
	// let connect01;
	
	// try {
		// let sql, binds, options, result;
		
		// connect01 = await oracledb.getConnection(dbConfig);
	// } catch (err) {
		// console.err(err);
	// } finally {
		// if (connect01) {
			// try {
				// await connection.close(); 
			// } catch (err) {
				// console.err(err);
			// }
		// }
	// }
	
// } 

// run();
try {
oracledb.getConnection(
	{
	user : dbConfig.user,
	password : dbConfig.password,
	connectString : dbConfig.connectString
	},
	
	function(err, connection) {
		if (err) {
			console.log('');
			console.log('ERROR:   ----*----1----*----2----*----3----*----4');
			console.log('');
			console.error(err.message);
			return;
		}
		
	console.log('');
	    console.log('SUCCESS: ----*----1----*----2----*----3----*----4');
	console.log('');
	console.log('Connection was successful!');

	connection.close(
		function(err)
		{
			if (err) {
			console.error(err.message);
			return;
		}
	});
	
	var chLine = document.getElementById("chLine");
	if (chLine) {
	  new Chart(chLine, {
	  type: 'line',
	  data: chartData,
	  options: {
		scales: {
		  yAxes: [{
			ticks: {
			  beginAtZero: false
			}
		  }]
		},
		legend: {
		  display: false
		}
	  }
	  });
	}
});
} catch(error) {
      console.log("Unexpected error: " + error);
      //res.status(500);
      //res.render('error', { error: err });
    }
