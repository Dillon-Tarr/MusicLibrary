"use strict";

$(document).ready(execute());

function execute(){
  $.ajax({
    url: `http://www.devcodecampmusiclibrary.com/api/music`,
    dataType: "json",
    type: "get",
    success: function (data, textStatus, jqXHR){
      for(let i = 0; i < data.length; i++){
        $("#table-data").append(`
          <tr>
            <td>${data[i].id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].album}</td>
            <td>${data[i].artist}</td>
            <td>${data[i].genre}</td>
            <td>${data[i].releaseDate}</td>
          </tr>`
        );
      }
    },
    error: function (jqXHR, textStatus, errorThrown){
      // throw("...")
      console.log(errorThrown);
    }
  });
}