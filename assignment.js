//Task 1
const userData = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};

//optional chaining-safer access of key and nullish coh is for default value
function getUserAge(userData) {
  return userData?.user?.profile?.age ?? "Age not provided";
}
console.log(getUserAge(userData)); // Should print: Age not provided
console.log(getUserAge({ user: { profile: { age: 25 } } })); // Should print: 25
console.log(getUserAge({ user: {} })); // Should print: Age not provided

//Write a function that returns a new array with an additional skill for each employee
//Task 2
const employees = [
  {
    id: 1,
    name: "Alice",
    position: "Developer",
    skills: ["JavaScript", "React"],
  },
  {
    id: 2,
    name: "Bob",
    position: "Manager",
    skills: ["Leadership", "Communication"],
  },
  { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision"] },
];

function addSkill(employees, adding) {
  return employees.map((chiku) => ({
    ...chiku,
    skills: [chiku.skills, adding],
  }));
}
console.log(addSkill(employees, "Problem Solving"));
//Find the total price of all products using arrow functions and array methods - Implement getTotalPrice
//Task-3
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];

function getTotalPrice(products) {
  return products.map((m) => m.price).reduce((first, second) => first + second);
}
console.log(getTotalPrice(products)); //2200

//Write a function that extracts the user's name and theme, providing default values if they are missing
//Task 4

const userProfile = {
  id: 1,
  name: "Eve",
  settings: {
    theme: "dark",
  },
};

//nullish coalescing
function getUserSettings(userProfile) {
  const sum = userProfile?.settings?.theme ?? "Light";

  return `${userProfile.name} prefers the ${sum} theme`;
}
console.log(getUserSettings(userProfile)); // Should print: Eve prefers the dark theme
console.log(getUserSettings({ id: 2, name: "Adam" })); // Should print: Adam prefers the light theme

//Write a function that takes a user object and returns a message indicating if the user is active or not
//Task 5

const user1 = { name: "Jane", active: true };
const user2 = { name: "John", active: false };

console.log(getUserStatus(user1)); // Should print: Jane is currently active
console.log(getUserStatus(user2)); // Should print: John is currently inactive

function getUserStatus(user) {
  if (user?.active) {
    return `${user.name}  is currently active`;
  } else {
    return `${user.name}  is currently inactive`;
  }
}

//Write a function that returns the user's age if available, or a default message if not, using nullish coalescing and optional chaining
//Task 6
const userWithFullProfile = {
  id: 1,
  name: "Alice",
  profile: {
    age: 25,
    address: {
      city: "Wonderland",
      zip: "12345",
    },
  },
};

const userWithPartialProfile = {
  id: 2,
  name: "Bob",
  profile: {
    age: null,
  },
};

function getuserAge(users) {
  return users?.profile?.age ?? "Age not provided";
}
console.log(getUserAge(userWithFullProfile)); // Should print: 25
console.log(getUserAge(userWithPartialProfile)); // Should print: Age not provided
console.log(getUserAge({ id: 3, name: "Charlie" })); // Should print: Age not provided

//Write a function that generates a summary string for the top scorer using template literals and array methods
//Task 7

const scores = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 92 },
];

function getTopScorer(scores) {
  return scores.reduce((top, setop) => {
    return top.score > setop.score ? top : setop;
  });
}

console.log(getTopScorer(scores)); // Should print: Charlie is the top scorer with a score with 92

//Create a function that returns a greeting message based on the time of day
//Task 8

function greet(name) {
  const w = new Date().getHours();
  if (w >= 5 && w < 12) return "Good morning";
  else if (w >= 12 && w < 18) return "Good afternoon";
  else return "Good evening";
}

console.log(greet("Alice")); // Good morning, Alice! (If the time 10am)
console.log(greet("Alice")); // Good afternoon, Alice! (If the time 1pm)
console.log(greet("Alice")); // Good evening, Alice! (If the time 7pm)

//Write a function that returns the name of a user's first friend using nested destructuring
// Task 9

const users = [
  { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
  { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
  { id: 4, name: "Deepak", friends: [] },
];

function getFirstFriendName(users, userId) {
  //to find with a particular constraint we use find
  let read = users.find((sam) => sam.id == userId);
  if (!read) {
    return "User not found";
  }
  const { friends } = read;
  return friends.length ? friends[0].name : `${read.name} has no friends 🥲`;
}

console.log(getFirstFriendName(users, 1)); // Should print: Bob
console.log(getFirstFriendName(users, 2)); // Should print: Eve
console.log(getFirstFriendName(users, 3)); // Should print: User not found
console.log(getFirstFriendName(users, 4)); // Should print: Deepak has no friends 🥲

const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

//Write a function that finds a movie by id and returns its title and genre in a formatted string
//Task 10

function getMovieDetails(id) {
  const y = movies.find((mve) => mve.id == id);
  if (y) {
    return `${y.title} is a ${y.genre} movie`;
  } else {
    return "Movie not found";
  }
}
console.log(getMovieDetails(1)); // Should print: Baahubali is an Action movie
console.log(getMovieDetails(5)); // Should print: Jersey is a Sports movie
console.log(getMovieDetails(6)); // Should print: Movie not found

//Write a function that filters out movies released before a certain year and calculates the average rating of the remaining movies (Rating must be rounded)
//Task 11
function getAverageRatingAfterYear(years) {
  const u = movies.filter((mve) => mve.year > years);
  if (u.length <= 0) {
    return "No movies after the specified year";
  }
  const r =
    u.reduce(
      (acc, curr) =>
        acc + curr.ratings.reduce((a1, a2) => a1 + a2, 0) / curr.ratings.length,
      0
    ) / u.length;
  return r.toFixed(3);
}
console.log(getAverageRatingAfterYear(2016)); // Should print: 8.83 (average rating of Arjun Reddy, Mahanati, and Jersey)
console.log(getAverageRatingAfterYear(2020)); // Should print: No movies after the specified year

// Write a function that checks if all movies of a certain genre have ratings above a certain value
//Task 12

function allRatingsAboveForGenre(value, genre) {
  return movies
    .filter((joke) => joke.genre == genre)
    .every((rating) => rating.ratings.every((rat) => rat > value))
    ? `Yes, all ${genre} movies are above ${value} ratings`
    : `No, all ${genre} movies are above ${value} ratings`;
}
console.log(allRatingsAboveForGenre(7, "Action")); // Should print: Yes, all Action movies are above 7 ratings
console.log(allRatingsAboveForGenre(8, "Biography")); // Should print: No, not all Biography movies are above 8 ratings

//Write a function that returns a string with each movie's title and its ratings joined by commas
//Task 13

//In the map method we will be creating a temparary variable and and accessing through that .
function getTitlesAndRatings() {
  const movierat = movies.map((movie) => {
    return `${movie.title}: ${movie.ratings.join(" , ")}`;
  });
  return movierat.join(" | ");
}

console.log(getTitlesAndRatings());
// Should print: Baahubali: 8, 9, 10 | Arjun Reddy: 9, 8, 9 | Mahanati: 10, 9, 8 | Eega: 7, 8, 9 | Jersey: 9, 9, 8

//Write a function that returns a single array containing all ratings of all movies
//Task 14

//flatMap - used to both map and flatten arrays
//This can be particularly useful when you have an array of arrays/objects.
function getAllRatings() {
  return movies.flatMap((ink) => ink.ratings);
  //return movies.map((ink)=> ink.ratings).flat();
}

console.log(getAllRatings());
// Should print: [8, 9, 10, 9, 8, 9, 10, 9, 8, 7, 8, 9, 9, 9, 8]

//Write a function that returns an array of titles of movies that have ratings above a certain threshold in any rating
//Task 15

function getTitlesWithHighRatings(num) {
  const r = movies.filter((mrt) => {
    return mrt.ratings.some((mat) => mat >= num);
  });

  return r.map((mittu) => mittu.title);
}

console.log(getTitlesWithHighRatings(9)); // Should print: ["Baahubali", "Arjun Reddy", "Mahanati", "Jersey"]
console.log(getTitlesWithHighRatings(10)); // Should print: ["Mahanati"]

//Write a function that returns an array of movie titles sorted by their average ratings in descending order
//Task 16

//The forEach is used as a (for of) loop where it gives values one by one
//The for each returns (value, index ,array)

function getTitlesSortedByAverageRating() {
  movies.forEach((movie) => {
    const we = movie.ratings.reduce((sum, curr) => sum + curr, 0);
    let y = we / movie.ratings.length;
  });
  movies.sort((a, b) => b.n - a.n);
  return movies.map((n) => n.title);
}
console.log(getTitlesSortedByAverageRating()); // Should print: ["Baahubali", "Arjun Reddy", "Jersey", "Mahanati", "Eega"]

//Write a function that finds the movie with the highest average rating and returns its title
//Task 17

function getMovieWithHighestAverageRating(movies) {
  movies.forEach((movie) => {
    const we = movie.ratings.reduce((sum, curr) => sum + curr, 0);
    let y = we / movie.ratings.length;
  });
  movies.sort((a, b) => b.n - a.n);
  return movies.find((n) => n.title);
}
console.log(getMovieWithHighestAverageRating(movies)); // Should print: Baahubali

//Write a function that returns an array of movie titles released after a certain year
//Task 18

function getTitlesAfterYear(relyear) {
  const r = movies.filter((bun) => bun.year > relyear);
  if (r.length == 0) {
    return `No Movie Available`;
  }
  return r.map((u) => u.title);
}

console.log(getTitlesAfterYear(2015)); // Should print: ["Arjun Reddy", "Mahanati", "Jersey"]
console.log(getTitlesAfterYear(2018)); // Should print: ["Jersey"]

//Write a function that finds a movie by its title and returns a formatted string with its director and year
//Task 19
//Whenever we r trying to access on a particular find then we use 'find'
function getMovieInfoByTitle(name) {
  const x = movies.find((m) => m.title == name);
  if (x) {
    return `${x.title} directed by ${x.director} was released in ${x.year}`;
  } else {
    return "Movie not found";
  }
}
console.log(getMovieInfoByTitle("Baahubali")); // Should print: Baahubali directed by S. S. Rajamouli was released in 2015
console.log(getMovieInfoByTitle("Jersey")); // Should print: Jersey directed by Gowtam Tinnanuri was released in 2019
console.log(getMovieInfoByTitle("Avatar")); // Should print: Movie not found

//Write a function that returns an array of titles of movies that have at least one rating below a certain threshold
//Task 20

function getTitlesWithLowRatings(points) {
  const a = movies.filter((o) => {
    let q = o.ratings.some((rat) => rat < points);
    return q;
  });

  return a.map((y) => y.title);
}
console.log(getTitlesWithLowRatings(8)); // Should print: ["Eega"]
console.log(getTitlesWithLowRatings(9)); // Should print: ["Baahubali", "Mahanati", "Eega", "Jersey"]

//Write a function that calculates the total number of ratings for movies of a specific genre
//Task 21
function getTotalRatingsByGenre(gen) {
  return movies
    .filter((r) => r.genre == gen)
    .reduce((a, b) => a + b.ratings.length, 0);
}
console.log(getTotalRatingsByGenre("Action")); // Should print: 3
console.log(getTotalRatingsByGenre("Drama")); // Should print: 3

//Write a function that returns an array of movies where the average rating is above a certain value, including the average rating in the result
//Task 22

//we r returning a new object to r  in the return stmt

function getMoviesWithHighAverageRating(score) {
  let r = movies
    .map((mve) => {
      var q = mve.ratings.reduce((a, b) => a + b, 0) / mve.ratings.length;
      return { title: mve.title, avgrat: q.toFixed(2) };
    })
    .filter((mve) => parseFloat(mve.avgrat) > score)
    .map((movie) => `${movie.title} has an average rating of ${movie.avgrat}`);

  return r;
}
console.log(getMoviesWithHighAverageRating(8.5));
// Should print: ["Baahubali has an average rating of 9.00", "Arjun Reddy has an average rating of 8.67", "Jersey has an average rating of 8.67"]

// Write a function that returns an array of movie titles directed by a specific director, sorted by year in ascending order
//Task 23

function getTitlesByDirectorSortedByYear(string) {
  return movies
    .filter((t) => t.director == string)
    .sort((a, b) => a.year - b.year)
    .map((u) => u.title);
}

console.log(getTitlesByDirectorSortedByYear("S. S. Rajamouli")); // Should print: ["Eega", "Baahubali"]
console.log(getTitlesByDirectorSortedByYear("Nag Ashwin")); // Should print: ["Mahanati"]

//Write a function that returns the average rating of movies released in a specific year
//Task 24
function getAverageRatingByYear(thisyear) {
  let r = movies.filter((e) => e.year == thisyear);
  if (r.length == 0) {
    return `No movies released in the specified year`;
  }
  let u = r.map((p) => {
    let g = p.ratings.reduce((a, b) => a + b, 0) / p.ratings.length;
    return g.toFixed(2);
  });
  return u;
}

console.log(getAverageRatingByYear(2018)); // Should print: 9.00
console.log(getAverageRatingByYear(2025)); // Should print: "No movies released in the specified year"

//Write a function that returns an array of objects with movie titles and their highest ratings
//Task 25

//To get maximum element from an object - :Math.max(...movie.ratings)

function getMoviesWithHighestRatings() {
  return movies.map((movie) => ({
    title: movie.title,
    highestRating: Math.max(...movie.ratings),
  }));
}
console.log(getMoviesWithHighestRatings());
// Should print: [{ title: "Baahubali", highestRating: 10 }, { title: "Arjun Reddy", highestRating: 9 }, { title: "Mahanati", highestRating: 10 }, { title: "Eega", highestRating: 9 }, { title: "Jersey", highestRating: 9 }]

//Write a function that returns the director with the most movies directed
//Task 26
function getDirectorWithMostMovies() {
  const e = movies.reduce((a, b) => {
    a[b.director] = (a[b.director] || 0) + 1;
    return a;
  }, {});

  const maxdir = Object.keys(e).reduce((a, b) => (e[a] > e[b] ? a : b));

  return maxdir;
}
console.log(getDirectorWithMostMovies()); // Should print the director with the most movies

const moreMovies = [
  {
    id: 6,
    title: "RRR",
    director: "S. S. Rajamouli",
    year: 2022,
    ratings: [10, 10, 9],
    genre: "Action",
  },
  {
    id: 7,
    title: "Pushpa",
    director: "Sukumar",
    year: 2021,
    ratings: [8, 9, 8],
    genre: "Action",
  },
];

console.log(moreMovies);

// Write a function that merges two arrays of movies into one using the spread operator
//Task 27
function mergeMovies(movies, moreMovies) {
  return movies.concat(moreMovies);
}
console.log(mergeMovies(movies, moreMovies));
// Should print: array with all 7 movies

//Write a function that accepts any number of movie objects and returns an array of their titles using the rest operator
//Task 28

//...this spread operator accepts any number of objec
function getTitles(...movies) {
  return movies.map((movie) => movie.title);
}
console.log(getTitles(...movies)); // Should print titles of all movies in the array
console.log(getTitles(movies[0], movies[1])); // Should print: ["Baahubali", "Arjun Reddy"]

//Write a function that merges two arrays of movies into one using the spread operator and provides a default value for the second array
//Task 29

function mergeMovies(movies, moreMovies = []) {
  return movies.concat(moreMovies);
}

console.log(mergeMovies(movies, moreMovies)); // Should print the merged array of movies
console.log(mergeMovies(movies)); // Should print the original array of movies

//Write a function that returns the last N movie titles, using slice and spread operator with a default value for N
//Task 30
function getLastNMovieTitles(int) {
  return movies.map((i) => i.title).slice(-int);
}
console.log(movies.map((i) => i.title));
console.log(getLastNMovieTitles(3)); // Should print the last 3 movie titles
console.log(getLastNMovieTitles(2)); // Should print the last 2 movie titles

//Write a function that accepts multiple movie IDs, fetches the titles, and returns a formatted string using the rest operator, nullish coalescing, and template literals Interesting
//Task 31

function getMovieTitlesByIds(...id) {
  const v = id.map((ren) => {
    let mve = movies.find((dull) => dull.id == ren);
    return mve?.title ?? "Unknown Title";
  });
  return `Selected Movies: ${v}`;
}
console.log(getMovieTitlesByIds(1, 3, 5));
// Should print: Selected Movies: Baahubali, Mahanati, Jersey
console.log(getMovieTitlesByIds(1, 6));
// Should print: Selected Movies: Baahubali, Unknown Title
console.log(getMovieTitlesByIds(5, 1));
// Should print: Selected Movies: Jersey, Baahubali,

// Write a function that accepts any number of movies and returns a formatted string listing their titles and genres using the rest operator, nullish coalescing, and template literals
// Task 32

function listMovies(...movies) {
  return movies.map((p) => {
    return `${p.title} (${p.genre})`;
  });
}
console.log(listMovies(...movies));
// Should print: Baahubali (Action), Arjun Reddy (Drama), Mahanati (Biography), Eega (Fantasy), Jersey (Sports)
console.log(listMovies(movies[0], movies[1], movies[111]));
// Should print: Baahubali (Action), Arjun Reddy (Drama), Unknown Title (Unknown Genre)

//Write a function that calculates the total number of ratings for each director
//Task 33

const getTotalRatingsForDirectors = () => {
  return movies.reduce((acc, movie) => {
    acc[movie.director] = (acc[movie.director] || 0) + movie.ratings.length;
    return acc;
  }, {});
};

console.log(getTotalRatingsForDirectors());
// Should print: { "S. S. Rajamouli": 6, "Sandeep Reddy Vanga": 3, "Nag Ashwin": 3, "Gowtam Tinnanuri": 3 }

//Q34: Write a function that returns an array of genres sorted by the total number of ratings received by movies in that genres Challenging
//Write a function that returns an array of genres sorted by the total number of ratings received by movies in that genre
// Task 34

function getGenresSortedByTotalRatings() {}
console.log(getGenresSortedByTotalRatings()); // Should print genres sorted by total ratings

function getGenresSortedByTotalRatings(movies) {
  const ans = movies.reduce((a, c) => {
    a[c.genre] = (a[c.genre] || 0) + c.ratings.length;
    return a;
  }, {});
  return Object.keys(ans).sort((a1, b1) => ans[b1] - ans[a1]); //sorting the genre's.
}
console.log(getGenresSortedByTotalRatings(movies)); // Should print genres sorted by total ratings

//Q35: Write a function that returns an array of movie titles directed by directors who have directed more than one movie Challenging
// const getTitlesByDirectorsWithMultipleMovies = (movies) => {
//   const directorCount = movies.reduce((acc, movie) => {
//     acc[movie.director] = (acc[movie.director] || 0) + 1;
//     return acc;
//   }, {});
//   return movies
//     .filter((movie) => directorCount[movie.director] > 1)
//     .map((movie) => movie.title);
// };

// console.log(getTitlesByDirectorsWithMultipleMovies(movies)); // Should print: ["Baahubali", "Eega"]

function getTitlesByDirectorsWithMultipleMoviess(movies) {
  const ans = movies.reduce((a, c) => {
    a[c.director] = (a[c.director] || 0) + 1;
    return a;
  }, {});
  return movies.filter((m) => ans[m.director] > 1).map((m) => m.title);
}
console.log(getTitlesByDirectorsWithMultipleMoviess(movies)); // Should print: ["Baahubali", "Eega"]

//36 Write a function that calculates the total number of ratings for each genre and returns the genre with the highest total ratings Challenging
// const getGenreWithHighestTotalRatings = (movies) => {
//   const genreRatings = movies.reduce((acc, movie) => {
//     acc[movie.genre] = (acc[movie.genre] || 0) + movie.ratings.length;
//     return acc;
//   }, {});
//   return Object.keys(genreRatings).sort((a,b)=>genreRatings[b]-genreRatings[a])[0]
// };

const getGenreWithHighestTotalRatings = (movies) => {
  const genreRatings = movies.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + movie.ratings.length;
    return acc;
  }, {});
  return Object.keys(genreRatings).reduce((a, b) =>
    genreRatings[a] > genreRatings[b] ? a : b
  );
};
console.log(getGenreWithHighestTotalRatings(movies)); // Should print the genre with the highest total ratings

// //Q37: Write a function that returns an array of directors who have directed movies with an average rating above a certain value
// //Challenging
const getDirectorsWithHighAverageRatings = (movies, threshold) => {
  const directorRatings = movies.reduce((acc, movie) => {
    if (!acc[movie.director]) {
      acc[movie.director] = { total: 0, count: 0 };
    }
    acc[movie.director].total += movie.ratings.reduce(
      (sum, rating) => sum + rating,
      0
    );
    acc[movie.director].count += movie.ratings.length;
    return acc;
  }, {});

  return Object.keys(directorRatings).filter((director) => {
    const avgRating =
      directorRatings[director].total / directorRatings[director].count;
    return avgRating > threshold;
  });
};
console.log(getDirectorsWithHighAverageRatings(8.5)); // Should print directors with high average ratings

//Q38: Write a function that updates a movie's genre and ratings by ID, using object destructuring, spread operator, and default values Challenging
const updateMovieDetails = (movies, id, { genre, ratings }) => {
  const index = movies.findIndex((movie) => movie.id === id);
  if (index === -1) return "Movie not found";
  movies[index] = {
    ...movies[index],
    genre: genre || movies[index].genre,
    ratings: ratings || movies[index].ratings,
  };
  return movies[index];
};
console.log(updateMovieDetails(2, { genre: "Romance", ratings: [10, 9, 8] }));
// Should print updated Arjun Reddy
console.log(updateMovieDetails(6, { genre: "Thriller" }));
// Should print: Movie not found

const updateMovieDetailss = (movies, id, { genre = "", ratings = [] } = {}) => {
  const index = movies.findIndex((movie) => movie.id === id);
  if (index === -1) return "Movie not found";

  movies[index] = {
    ...movies[index],
    genre: genre || movies[index].genre,
    ratings: ratings || movies[index].ratings,
  };

  return movies[index];
};
console.log(updateMovieDetailss(2, { genre: "Romance", ratings: [10, 9, 8] }));
// Should print updated Arjun Reddy
console.log(updateMovieDetailss(6, { genre: "Thriller" }));
// Should print: Movie not found

//Q39: Update or add a movie based on the id Challenging
console.log(
  updateOrAddMovie({
    id: 6,
    title: "Pushpa",
    director: "Sukumar",
    year: 2021,
    ratings: [8, 9, 8],
    genre: "Action",
  })
);
// Should add Pushpa to the list
console.log(
  updateOrAddMovie({
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [10, 10, 9],
    genre: "Sports",
  })
);
// Should update Jersey's ratings in the list

const updateOrAddMovie = (movies, newMovie) => {
  const index = movies.findIndex((movie) => movie.id === newMovie.id);
  if (index === -1) {
    movies.push(newMovie);
  } else {
    movies[index] = {
      ...movies[index],
      ...newMovie,
    };
  }
  return movies;
};
