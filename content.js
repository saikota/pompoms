

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  var linkArr=[];

  if( request.message === "clicked_browser_action" ) {    
  $("#crs_pane li").each(function(){   
  linkArr.push( "https://www.bing.com/"+$(this).children("a").attr("href"));
  });  
  chrome.runtime.sendMessage({"message": "open_new_tab", "url": linkArr});
    }
  }
);