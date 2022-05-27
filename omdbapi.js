const omdbapi_result_btn = document.getElementById('omdbapi_result_btn');
const omdbapi_result = document.getElementById('omdbapi_result');


omdbapi_result_btn.addEventListener('click', getAPI);
let title = document.getElementById('title');
let endPoint = 'http://www.omdbapi.com/?t=' + title.value + '&apikey=f6d0c6d4';

    function getAPI(){
        fetch(endPoint, {
		method: 'GET'
	})
    .then(res => res.json())
    .then(data=> {
        omdbapi_result.innerHTML=data.Title + ' ' + data.Year + ' ' + data.Director;
    });
}