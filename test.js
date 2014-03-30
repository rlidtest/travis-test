
if (process.argv[1] === 'travis_after') {
	console.log(process.env.hello)
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

