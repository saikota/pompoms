

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      var linkArr=[];

  $("#crs_pane li").each(function(){   
  linkArr.push( "https://www.bing.com/"+$(this).children("a").attr("href"));
  });

     // searchArr = $.map(searchArr,function(query){
     //  	return "https://www.bing.com/"+query+"?q=&filters=tnTID%3a%228AFD83DE-54EE-43cf-B990-F8D0007DC01D%22+tnVersion%3a%221109871%22+segment%3a%22popularnow.carousel%22+tnCol%3a%224%22+tnOrder%3a%22cea02649-1eff-4766-98f2-•7a3a20f61a4d%22&FORM=BSPN01&crslsl=0";
     //  });

    console.log(linkArr);
       chrome.runtime.sendMessage({"message": "open_new_tab", "url": linkArr});
    }
  }
);