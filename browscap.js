var browsers = Array();

var inifile = "./browscap.ini";

exports.set_ini = function(filename) {
	inifile = filename;
}

function parse(filename) {

	var fs = require('fs');

	var data = fs.readFileSync(filename, 'ascii');
	var lines = data.split("\n");

	var browsers = Array();
	var current = "";

	var count = -1;

	for (var i = 0; i < lines.length; i++) {

		var line = lines[i];
		
		//Skip comments and blank lines
		if (line.substr(0,1) == ";" || line == "") {
			continue;
		}

		if (line.substr(0,1) == "[") {

			current = line.substr(1, line.length - 2);

			//Convert the pattern into a proper regular expression
			pattern = line.substr(1, line.length - 2);
			pattern = pattern.replace(/\./g, '\\.');
			pattern = pattern.replace(/\(/g, '\\(');
			pattern = pattern.replace(/\)/g, '\\)');
			pattern = pattern.replace(/\-/g, '\\-');
			pattern = pattern.replace(/\*/g, '.*');
			pattern = pattern.replace(/\?/g, '.?');

			count++;

			browsers[count] = Array();
			browsers[count]['browser_name_regex'] = new RegExp('^' + pattern + '$');
			browsers[count]['browser_name_pattern'] = current;

		} else {
			var parts = line.split("=");
			var propname = parts[0];
			var propvalue = parts[1];

			if (propname == "Browser" && propvalue.substr(0,1) == '"' && propvalue.substr(propvalue.length - 1, propvalue.length) == '"')
				propvalue = propvalue.substr(1, propvalue.length - 2);

			if (propname != 'Parent')
				browsers[count][propname] = propvalue;

			//Copies properties from the parent's entry into the current one
			if (propname == "Parent") {
				for (var j = 0; j < browsers.length; j++) {
					if (browsers[j]['browser_name_pattern'] == propvalue) {
						for (var key in browsers[j])
							if (key != 'browser_name_regex' && key != 'browser_name_pattern' && key != 'Parent')
								browsers[count][key] = browsers[j][key];
					}
				}

			}
		}

	}

	return browsers;

}

exports.get_browser = function(user_agent) {

	//If this is the first invocation, parse the ini file
	if (browsers.length == 0) {
		browsers = parse(inifile);
	}

	//Check user agent against each user agent pattern
	for (var i = 0; i < browsers.length; i++) {
		if (user_agent.match(browsers[i]['browser_name_regex'])) {
			return browsers[i];
		}
	}

}
