const createError = require('http-errors'),
	express = require('express'),
	path = require('path'),
	cookieParser = require('cookie-parser'),
	logger = require('morgan'),
	rootPath = path.normalize(__dirname + '/..'),
	app = express(),
	http = require('http');

const server = http.createServer(app);
server.listen(3003);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('../routes'));


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	// res.locals.message = err.message;
	// res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.sendStatus(err.status || 500);
});

module.exports = app;
