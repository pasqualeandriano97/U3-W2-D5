const API_KEY = "1ce74b03cc8f24817f6eac89c297aa6a";
const BASE_URL = "https://api.openweathermap.org/data/2.5/find";

async function searchAPI(city) {
  let url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    let response = await fetch(url);

    return await response.json();
  } catch (err) {
    console.log("error", err);
  }
}

export default searchAPI;
