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

