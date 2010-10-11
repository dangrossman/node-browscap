var browscap = require('./browscap');

console.log("Running tests...");
var passed = 0;
var failed = 0;

var browser = browscap.get_browser("Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; WinTSI 05.11.2009)");
if (browser['Browser'] == 'IE' && browser['Version'] == '8.0') {
        console.log(browser['Browser'] + " " + browser['Version']);
        passed++;
} else {
        console.log("Failed to identify IE 8.0");
        console.log(browser['Browser'] + " " + browser['Version']);
        failed++;
}

var browser = browscap.get_browser("Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13");
if (browser['Browser'] == 'Firefox' && browser['Version'] == '3.5') {
        console.log(browser['Browser'] + " " + browser['Version']);
        passed++;
} else {
        console.log("Failed to identify Firefox 3.5");
        console.log(browser['Browser'] + " " + browser['Version']);
        failed++;
}

var browser = browscap.get_browser("Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10");
if (browser['Browser'] == 'Firefox' && browser['Version'] == '3.6') {
        console.log(browser['Browser'] + " " + browser['Version']);
        passed++;
} else {
        console.log("Failed to identify Firefox 3.6");
        console.log(browser['Browser'] + " " + browser['Version']);
        failed++;
}

var browser = browscap.get_browser("Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.5) Gecko/20060127 Netscape/8.1");
if (browser['Browser'] == 'Netscape' && browser['Version'] == '8.1') {
        console.log(browser['Browser'] + " " + browser['Version']);
        passed++;
} else {
        console.log("Failed to identify Netscape 8.1");
        console.log(browser['Browser'] + " " + browser['Version']);
        failed++;
}

var browser = browscap.get_browser("Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.3 (KHTML, like Gecko) Chrome/6.0.472.63 Safari/534.3");
if (browser['Browser'] == 'Chrome' && browser['Version'] == '6.0') {
        console.log(browser['Browser'] + " " + browser['Version']);
        passed++;
} else {
        console.log("Failed to identify Chrome 6.0");
        console.log(browser['Browser'] + " " + browser['Version']);
        failed++;
}

console.log("Passed " + passed + "/" + (passed + failed) + " tests");

