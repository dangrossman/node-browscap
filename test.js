var browscap = require('./browscap');
//browscap.setIni('php_browscap.ini');

console.log("Running tests...");
var passed = 0, failed = 0, i = 1;

var tests = [
  { ua: 'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.2; Trident/4.0; Media Center PC 4.0; SLCC1; .NET CLR 3.0.04320)', browser: 'IE', version: '8.0' },
  { ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13', browser: 'Firefox', version: '3.5' },
  { ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10', browser: 'Firefox', version: '3.6' },
  { ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.3; WOW64; Trident/7.0; Touch; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; Tablet PC 2.0; IPH 1.1.21.4019; ASU2JS)', browser: 'IE', version: '11.0' },
  { ua: 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.114 Safari/537.36', browser: 'Chrome', version: '35.0' }
]


for (var j in tests) {
  var test = tests[j];
  var browser = browscap.getBrowser(test.ua);
  if (browser['Browser'] == test['browser'] && browser['Version'] == test['version']) {
    console.log("PASSED test " + i + ":");
    passed++;
  } else {
    console.log("FAILED test " + i + " (expected " + test['browser'] + " " + test['version'] + "):");
    failed++;
  }
  i++;
  console.log(browser);
  console.log("\n=====\n");
}

console.log("Passed " + passed + "/" + (passed + failed) + " tests");

