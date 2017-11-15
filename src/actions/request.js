import 'whatwg-fetch';

export default function getTopEvents(){
    return (dispatch) => {
    dispatch(fetchPostsRequest());
    return fetchPosts().then((response) =>{
        return response.json();
      }).then(function(json) {dispatch(fetchPostsSuccess(json.results))})
      .catch(function(ex){
        dispatch(fetchPostsError())
      })
  }
}

function fetchPosts(){
return fetch('https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/popular/');

}
function fetchPostsRequest(){
  return {
    type: "FETCH_REQUEST"
  }
}

function fetchPostsSuccess(payload) {
  return {
    type: "FETCH_SUCCESS",
    payload
  }
}

function fetchPostsError() {
  return {
    type: "FETCH_ERROR"
  }
}
