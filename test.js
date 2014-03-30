
module.exports = function(cb) {
	console.log(process.env)
	setTimeout(function() {
		cb('done!...')
	}, 88)
}

x = process.hrtime()
module.exports(function() {
	console.log(process.hrtime(x))
})

