"use strict";

$(document).ready(execute());

function execute(){
  $.ajax({
    url: `http://www.devcodecampmusiclibrary.com/api/music`,
    dataType: "json",
    type: "get",
    success: function (data, textStatus, jqXHR){
      for(let i = 0; i < data.length; i++){
        if (i % 12 === 0 && i !== 0){
          $("#table-data").append(`
          <tr>
            <th>ID</th>
            <th>Track&nbspTitle</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
          <tr class="odd-row">
            <td>${data[i].id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].album}</td>
            <td>${data[i].artist}</td>
            <td>${data[i].genre}</td>
            <td>${data[i].releaseDate}</td>
          </tr>`
        );
        }
        else if (i % 2 === 0){
          $("#table-data").append(`
          <tr class="odd-row">
            <td>${data[i].id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].album}</td>
            <td>${data[i].artist}</td>
            <td>${data[i].genre}</td>
            <td>${data[i].releaseDate}</td>
          </tr>`
        );
        }
        else {
          $("#table-data").append(`
          <tr class="even-row">
            <td>${data[i].id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].album}</td>
            <td>${data[i].artist}</td>
            <td>${data[i].genre}</td>
            <td>${data[i].releaseDate}</td>
          </tr>`
        );
        }
      }
    },
    error: function (jqXHR, textStatus, errorThrown){
      console.log(errorThrown);
    }
  });
}