document.addEventListener( 'DOMContentLoaded', function()
{
  const tabList = document.getElementById( 'tabList' );
  const copyMdButton = document.getElementById( 'copyMdButton' );
  let tabs = [];

  function renderTabs()
  {
    tabList.innerHTML = '';
    tabs.forEach( function( tab )
    {
      const li = document.createElement( 'li' );
      const a = document.createElement( 'a' );

      a.href = '#';
      a.textContent = tab.title;
      a.classList.add( 'has-text-dark', 'py-2' );
      a.addEventListener( 'click', function( event )
      {
        event.preventDefault();
        chrome.tabs.update( tab.id, { active: true } );
      });

      li.appendChild( a );
      tabList.appendChild( li );
    });
  }

  function copyAsMarkdown()
  {
    const markdownList = tabs.map( tab => `- [${tab.title}](${tab.url})` ).join( '\n' );
    navigator.clipboard.writeText( markdownList ).then( function()
    {
      copyMdButton.querySelector( 'span:not(.icon)' ).textContent = 'Copied!';
      setTimeout( function()
      {
        copyMdButton.querySelector( 'span:not(.icon)' ).textContent = 'Copy as MD';
      }, 2000 );
    }).catch( function( err )
    {
      console.error( 'Failed to copy text: ', err );
    });
  }

  // Query for tabs in the current window
  chrome.tabs.query( { currentWindow: true }, function( queriedTabs )
  {
    tabs = queriedTabs;
    renderTabs();
  });

  copyMdButton.addEventListener( 'click', copyAsMarkdown );
});