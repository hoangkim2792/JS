//  lọc ra các môn thể thao được yêu thích nhất ( lớn hơn 5)
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
function getMostFavoriteSport (array) {
    var sportslike = array.filter( function (array,index) {
        return array.like > 5
    })
    return sportslike
}
console.log(getMostFavoriteSport(sports)) 

// điểm số trung bình IMDB của đạo diễn dùng phương thức reduce
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
    function calculateRating(watchList) {
        var getFilm = watchList.filter(function(film) {
            return film.Director == "Christopher Nolan"
        })
        var totalIMDB = getFilm.reduce(function(total, item) {
            return total + Number(item.imdbRating);
        }, 0)
        return (totalIMDB / getFilm.length);
    };
  console.log(calculateRating(watchList)); 
  
  
  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675

//   sử dụng reduce 
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
function arrToObj(arr){
   var inf = arr.reduce(function(object,inp){
         object[inp[0]]=inp[1]
         return object
    }, {})
    return inf
}

console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 1
// tạo ra phương thức my map

Array.prototype.myMap = function (cb) {
  var output = [];
  var arraylength = this.length;
  for (var i = 0; i < arraylength; ++i) {
    var result = cb(this[i],i)
    output.push(result)
  }
  return output
}
const numbers = [1,2,3]
numbers.myMap(function(numbers) {

})
// forEach2 tự làm 

Array.prototype.forEach2 = function(callback) {
  for (var index in this) {
    if (this.hasOwnproperty(index)) {
      callback(this[index], index, this)
    }
  }
}
var courses = new Array(100)
courses.push('java', 'python', 'javascript')
courses.forEach2(function(courses, index, array) {
  console.log(courses, index, array)
})  

// tạo ra phương thức filter ( dùng để lọc và tạo ra mảng với theo điều kiện mà mình đưa ra)

Array.prototype.myFilter = function (cb) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = cb(this[index], index, this)
      if (result) {
        output.push(this[index])
      }
    }
  }
  return output
}
console.log(numbers.myFilter(function (number) {
return number % 2 === 0;})) /*output: [2,4] */

// tự tạo phương thức some (trả về kết quả đúng hoặc sai, trong mảng có phần từ nào đúng sẽ trả về true còn sai hết sẽ là false)

Array.prototype.mySome = function(cb) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = cb(this[index], index, this)
      if (result === true) {
        return true;
      }
    }
  }
  return false
}
/*
const numbers = [1, 3, 3, 5];

console.log(numbers.mySome(function (number) {
    return number % 2 === 0;
})); Output: false

console.log(numbers.mySome(function (number, index) {
    return index % 2 === 0;
})); Output: true

console.log(numbers.mySome(function (number, index, array) {
    return array.length % 2 === 0;
})); Output: true
 */
//  tự tạo phương thức every ( các element phải đúng hết mới trả về true, dùng lại khi gặp false)

Array.prototype.myEvery = function (cb) {
  var output = true;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = cb(this[index], index, this)
      if (!result) {
        output = false;
        break;
      }
    }
  }
  return output
}


// Expected results

// const numbers = [1, 3, 3, 5];

// console.log(numbers.myEvery(function (number) {
//     return number % 2 !== 0;
// })); // Output: true

// console.log(numbers.myEvery(function (number, index) {
//     return index % 2 === 0;
// })); // Output: false

// console.log(numbers.myEvery(function (number, index, array) {
//     return array.length % 2 === 0;
// })); // Output: true


// thêm một class vào hàng loạt thẻ div đã cho sẵn và sử dụng vòng lặp forEach

var addClass = document.querySelectorAll('div');

addClass.forEach(function(div)  {
  div.classList.add('box')
})

// Thêm/sửa/xóa khóa học với Fetch và REST API
function handleUpdateCourse(courseId){
  //fill data in form
  getCourses(function(courses){
      const course = courses.filter(x => x.id == courseId)[0];
      reloadForm(course.name, course.description);
  });
  //get editBtn of form
  var editBtn = document.getElementById('edit');
  editBtn.addEventListener('click', function(){
      var name = document.querySelector('input[name="name"]').value;
      var description = document.querySelector('input[name="description"]').value;
      
      var formData = {
          name: name,
          description: description
      }

      UpdateForm(formData, courseId, function(){
          getCourses(renderCourses);
          reloadForm();
      })
  })
}

//Nếu nhấn "Sửa" thì ẩn nút Create và hiện nút Update của form
function reloadForm(name='', description='') {
  document.querySelector('input[name="name"]').value = name;
  document.querySelector('input[name="description"]').value = description;
  if(name == '' && description == ''){
      document.querySelector('#create').style.display = 'block';
      document.querySelector('#edit').style.display = 'none';
  }
  else{
      document.querySelector('#create').style.display = 'none';
      document.querySelector('#edit').style.display = 'block';
  }
}

function UpdateForm(data, courseId, callback){
var options = {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  };
  fetch(courseApi + '/' + courseId, options)
      .then(response => response.json())
      .then(callback);
}

// sử dụng arrow function để tạo hàm sum a và b

const sum = (a, b) => a + b; 

// Expected results
console.log(sum(1, 2)) // Output: 3
console.log(sum(2, 2)) // Output: 4
