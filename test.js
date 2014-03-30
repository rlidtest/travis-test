
module.exports = function(cb) {
	setTimeout(function() {
		cb('done!')
	}, 77)
}

x = process.hrtime()
module.exports(function() {
	console.log(process.hrtime(x))
})

