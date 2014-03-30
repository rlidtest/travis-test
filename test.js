
if (process.argv[2] === 'travis_after') {
	var data = '{"state": "success","target_url": "https://travis-ci.org/rlidwka/travis-test/builds/21883335","description": "test... test... test...","context": "travis stuff"}'
	var x = require('https').request({
		path: '/repos/rlidwka/travis-test/statuses/'+process.env.TRAVIS_COMMIT,
		host: 'api.github.com',
		port: 443,
		method: 'POST',
		headers: {
			Authorization: 'Basic '+process.env.GITHUB_AUTH,
			'Content-length': data.length,
			'User-Agent': 'node.js',
			'Accept': '*/*',
			'Content-type': 'application/json',
		},
	})
	x.end(data)
	x.on('response', function(x){x.pipe(process.stdout)})
	return
}

module.exports = function(cb) {
	setTimeout(function() {
		cb('done!...')
	}, 88)
}

x = process.hrtime()
module.exports(function() {
	console.log(process.hrtime(x))
})

