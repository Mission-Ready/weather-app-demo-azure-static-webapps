const cityInput = document.getElementById("input");
const dispalySection = document.getElementById("display");


const API_KEY = "9a5015632956415bbb545450252502";

const handleClick = () => {
  let currentCity = cityInput.value;

  const getWeather = fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${
      currentCity || "Queenstown"
    }&aqi=no`
  )
    .then((res) => res.json())
    .then((data) => {
        dispalySection.innerHTML =
      ` <p>${data.location.name}'s temperature is ${data.current.temp_c}℃.</p>
        <p>It's ${data.current.condition.text}.</p>
        <img src="${data.current.condition.icon}" alt="icon"/>
      `;
    })
    .catch((err) => {
      console.log(err);
      dispalySection.innerText = `Please enter a vaild city.`;
    });
};

handleClick();
