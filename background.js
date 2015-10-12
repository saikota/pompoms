chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  console.log("clicked");
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
     console.log("sending click to ",activeTab);
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});

  });

  chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {

      for(var i=0,tmp;i<8;i++){
          tmp=request.url[i];
         //  setTimeout(function(){ chrome.tabs.create({"url": tmp}); }, Math.floor(Math.random*2000));  
         chrome.tabs.create({"url": tmp}); 
      }
    
    }
  });
});