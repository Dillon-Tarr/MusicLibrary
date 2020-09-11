"use strict";

$(document).ready(getAndDisplayFilteredData());

let filterForm = document.getElementById("filter-form");
filterForm.onsubmit = function(e){
  e.preventDefault();
  var filterBy = filterForm.filterBy.value;
  var filterText = filterForm.filterText.value;
  return getAndDisplayFilteredData(filterBy, filterText);
}

function getAndDisplayFilteredData(filterBy='all-tracks', filterText=''){
  $.ajax({
    url: `http://www.devcodecampmusiclibrary.com/api/music`,
    dataType: "json",
    type: "get",
    success: function (data, textStatus, jqXHR){
      $('#table-data').html('');
      let filteredData = filterData(data, filterBy, filterText);
      for(let i = 0; i < filteredData.length; i++){
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
            <td>${filteredData[i].id}</td>
            <td>${filteredData[i].title}</td>
            <td>${filteredData[i].album}</td>
            <td>${filteredData[i].artist}</td>
            <td>${filteredData[i].genre}</td>
            <td>${filteredData[i].releaseDate}</td>
          </tr>`
        );
        }
        else if (i % 2 === 0){
          $("#table-data").append(`
          <tr class="odd-row">
            <td>${filteredData[i].id}</td>
            <td>${filteredData[i].title}</td>
            <td>${filteredData[i].album}</td>
            <td>${filteredData[i].artist}</td>
            <td>${filteredData[i].genre}</td>
            <td>${filteredData[i].releaseDate}</td>
          </tr>`
        );
        }
        else {
          $("#table-data").append(`
          <tr class="even-row">
            <td>${filteredData[i].id}</td>
            <td>${filteredData[i].title}</td>
            <td>${filteredData[i].album}</td>
            <td>${filteredData[i].artist}</td>
            <td>${filteredData[i].genre}</td>
            <td>${filteredData[i].releaseDate}</td>
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

function filterData(data, filterBy='all-tracks', filterText=''){
  let dataToFilter = [...data];
  if (filterText === '' || filterBy === 'all-tracks'){
    let filteredData = [...dataToFilter];
    return filteredData;
  }
  else if (filterBy === 'id'){
    let filteredData = []
    filteredData.push(dataToFilter.find(el => el['id'] === parseInt(filterText)));
    return filteredData;
  }
  else {
    let filteredData = myFilter(dataToFilter, filterBy, filterText);
    return filteredData;
  }
}

function myFilter(array, criterion, userInput){
  return array.filter(el => el[criterion].toLowerCase().includes(userInput.toLowerCase()));
}