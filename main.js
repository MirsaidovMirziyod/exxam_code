function generateCard(data) {
  return `<div class="card">
          <img class="image__flag" src="${data.flag}" alt="">
          <div class="card__text">
            <h3>${data.name}</h3>
            <p>population: ${data.population}</p>
            <p>Region: ${data.region}</p>
            <p>Capital: ${data.capital}</p>
          </div>
          </div>`;
}

const defaultData = [
  {
    flag: "https://flagcdn.com/w320/de.png",
    name: "Germany",
    population: 83240525,
    region: "Europe",
    capital: "Berlin",
  },
  {
    flag: "https://flagcdn.com/w320/us.png",
    name: "United States of America",
    population: 329484123,
    region: "Amerikas",
    capital: "Washington, D.C.",
  },
  {
    flag: "https://flagcdn.com/w320/br.png",
    name: "Brazil",
    population: 212559409,
    region: "Amerikas",
    capital: "Brasília",
  },
  {
    flag: "https://flagcdn.com/w320/is.png",
    name: "Iceland",
    population: 366425,
    region: "Europe",
    capital: "Reykjavík",
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
    name: "Afghanistan",
    population: 40218234,
    region: "Asia",
    capital: "Kabul",
  },
  {
    flag: "https://flagcdn.com/w320/ax.png",
    name: "Åland Islands",
    population: 28875,
    region: "Europe",
    capital: "Mariehamn",
  },
  {
    flag: "https://flagcdn.com/w320/al.png",
    name: "Albania",
    population: 2837743,
    region: "Europe",
    capital: "Tirana",
  },
  {
    flag: "https://flagcdn.com/w320/dz.png",
    name: "Algeria",
    population: 44700000,
    region: "Afrika",
    capital: "Algeris",
  },
  // Добавьте здесь еще данные по умолчанию
];

let filteredData = [];

function displayCards() {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";

  if (filteredData.length === 0) {
    // Нет соответствующих данных, не отображать ничего
    cardContainer.innerHTML = "<p>Нет результатов</p>";
  } else {
    filteredData.forEach((data) => {
      const card = generateCard(data);
      cardContainer.innerHTML += card;
    });
  }
}

function applyFilters() {
  const ageFilterSelect = document.getElementById("ageFilter");
  const searchInput = document.getElementById("searchInput");
  const selectedAge = ageFilterSelect.value;
  const searchQuery = searchInput.value.toLowerCase().trim();

  if (selectedAge === "default") {
    filteredData = defaultData;
  } else {
    filteredData = countries.filter((data) => {
      return data.region.toString() === selectedAge;
    });
  }

  if (searchQuery !== "") {
    filteredData = filteredData.filter((data) => {
      const name = data.name.toLowerCase();
      return name.includes(searchQuery);
    });
  }

  displayCards();
}

document.addEventListener("DOMContentLoaded", function () {
  applyFilters(); // Применение фильтров при загрузке страницы

  const ageFilterSelect = document.getElementById("ageFilter");
  const searchInput = document.getElementById("searchInput");

  ageFilterSelect.addEventListener("change", applyFilters);

  searchInput.addEventListener("input", function () {
    const selectedAge = ageFilterSelect.value;
    const searchQuery = searchInput.value.toLowerCase().trim();

    if (selectedAge === "default") {
      filteredData = defaultData;
    } else {
      filteredData = filteredData.filter((data) => {
        return data.region.toString() === selectedAge;
      });
    }

    if (searchQuery !== "") {
      filteredData = countries.filter((data) => {
        const name = data.name.toLowerCase();
        return name.includes(searchQuery);
      });
    }

    displayCards();
  });
});

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (event) => {
  const query = event.target.value;
  displayCards(query);
});
