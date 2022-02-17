const cityName = document.querySelector("#cityName");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#city_name");

// For temprature and clound fonts
const temp = document.querySelector("#temp");
const temp_status = document.querySelector("#temp_status");
const middle_layer = document.querySelector(".middle_layer");

const getInfo = async (event) => {
	event.preventDefault();
	let cityVal = cityName.value;
	if (cityVal === "") {
		output.innerHTML = "Please enter the name before you search";
		middle_layer.classList.add("data_hide");
	} else {
		try {
			let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=0f64946b0c951b51a50f5b8375b3118c`;

			const response = await fetch(url);
			const data = await response.json();
			const arrData = [data];

			temp.innerHTML = arrData[0].main.temp;
			output.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;

			const tempMood = arrData[0].weather[0].main;

			if (tempMood == "Clear") {
				temp_status.innerHTML = `<i class="fa fa-sun" style="color:#eccc68;"></i>`;
			} else if (tempMood == "Clouds") {
				temp_status.innerHTML = `<i class="fa fa-cloud" style="color:#f1f2f6;"></i>`;
			} else if (tempMood == "Rain") {
				temp_status.innerHTML = `<i class="fa fa-rain" style="color:#a4b0be;"></i>`;
			} else {
				temp_status.innerHTML = `<i class="fa fa-cloud" style="color:#f1f2f6;"></i>`;
			}

			middle_layer.classList.remove("data_hide");
		} catch (error) {
			output.innerHTML = "Please enter the city name properly.";
			middle_layer.classList.add("data_hide");
		}
	}
};

submitBtn.addEventListener("click", getInfo);
