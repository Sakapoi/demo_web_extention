export function getActiveTabUrl( callback )
{
  chrome.tabs.query( {}, tabs =>
  {
    let urls = tabs.map( obj => obj.url );
    callback( urls );
  });
}

export function changeContent( content )
{
  const contentDiv = document.getElementById( 'content');
  contentDiv.innerHTML = content;
}

console.log( 'script.js loaded' );
