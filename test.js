
if (process.argv[2] === 'travis_after') {
	return console.log(process.env.hello)
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

