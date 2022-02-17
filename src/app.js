// Error page Image: https://cdn.pixabay.com/photo/2021/02/26/16/29/error-404-6052476_960_720.png
// logo image: https://www.clipartmax.com/png/full/237-2372176_weather-app-weather-app-logo.png
// API: "https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&appid=0f64946b0c951b51a50f5b8375b3118c"

const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;

// Public static path
// console.log(path.join(__dirname, "../public"));
// const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

// Path for CSS file
app.use(express.static("public"));

// Routing
app.get("/", (req, res) => {
	res.render("index");
});

app.get("/about", (req, res) => {
	res.render("about");
});

app.get("/weather", (req, res) => {
	res.render("weather");
});

app.get("*", (req, res) => {
	res.render("error", {
		errorMsg: "Oops Page Not Found",
	});
});

app.listen(port, () => {
	console.log(`Website is running on ${port}`);
});
