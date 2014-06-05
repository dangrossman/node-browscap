var browsers = []
  , inifile = './browscap.ini'

exports.setIni = function(filename) {
  inifile = filename
  
  // Re-parse if parsed before
  if (browsers.length) {
    browsers = parse(filename)
  }
}

function parse(filename) {
  var current = {}
    , browserArray = []
    , patternIndex = []
  
  require('fs')
    .readFileSync(filename, 'ascii')
    .split(/[\r\n]+/)
    .forEach(function(line) {
      // Skip comments and blank lines
      if (/^\s*(;|$)/.test(line)) {
        return
      }
      
      if (line[0] == '[') {
        var pattern = line.slice(1, -1)
        
        // Convert the pattern into a proper regex
        current = {
          __regex__: new RegExp('^'
            + pattern.replace(/\./g, '\\.')
                     .replace(/\(/g, '\\(')
                     .replace(/\)/g, '\\)')
                     .replace(/\//g, '\\/')
                     .replace(/\-/g, '\\-')
                     .replace(/\*/g, '.*')
                     .replace(/\?/g, '.?')
                     .replace(/\+/g, '\\+')
            + '$'),
          __pattern__: pattern
        }
        
        browserArray.push(current) // Push new browser object onto array
        patternIndex.push(pattern) // Push pattern onto pattern index
      } else {
        var parts = line.split('=')
          , name = parts[0]
          , value = parts[1]
        
        if (value[0] == '"' && value.slice(-1) == '"') {
          value = value.slice(1, -1)
        }

        current[name] = value
      }
    })

  for (var i = 0; i < browserArray.length; i++) {
    var current = browserArray[i]
    if (current.hasOwnProperty('Parent')) {
      var j = patternIndex.lastIndexOf(current['Parent'])
      for (var key in browserArray[j]) {
        if (key != '__regex__' && key != 'Parent' && typeof browserArray[i][key] == 'undefined') {
          browserArray[i][key] = browserArray[j][key]
        }
      }
    }
  }

  return browserArray
}

exports.getBrowser = function(userAgent) {
  if (!browsers.length) {
    browsers = parse(inifile)
  }

  // Test user agent against each browser regex
  for (var i = 0; i < browsers.length; i++) {
    if (browsers[i].__regex__.test(userAgent)) {
      return browsers[i]
    }
  }
}
