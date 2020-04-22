/*--*----1----*----2----*----3----*----4----*----5----*----6----*----7----*----8
================================================================================
                          Classification: UNCLASSIFIED
================================================================================
                      Copyright, Booz Allen Hamilton, 2020
                        Unpublished, All Rights Reserved
================================================================================
----*----|----*----|----*----|----*----|----*----|----*----|----*----|----*---*/

'use strict';

module.exports = {
	user : process.env.NODE_ORACLEDB_USER || "PingService",

	password : process.env.NODE_ORACLEDB_PASSWORD || "pingservice",

	connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost:1521/vbms.lan",

	externalAuth : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};