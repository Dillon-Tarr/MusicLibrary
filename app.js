"use strict";

$(document).ready(execute());

function execute(){
  $.ajax({
    url: `http://www.devcodecampmusiclibrary.com/api/music`,
    dataType: "json",
    type: "get",
    success: function (data, textStatus, jqXHR){
      console.log('Got it.')
    },
    error: function (jqXHR, textStatus, errorThrown){
      // throw("...")
      console.log(errorThrown);
    }
  });
}