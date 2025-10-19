let header = `
  <a href="index.html">Index</a> | 
  <a href="ag_18.html">18" Dolls</a> | 
  <a href="misc_dolls.html">Misc Dolls</a> | 
  <a href="gallery.html">Gallery</a> |
  <a href="links.html">Links</a>
`;

let aside = `
  <h2>My Dolls</h2>
  <ul>
    <li><a href="ag_18.html">18" Dolls</a></li>
    <li><a href="misc_dolls.html">Other Dolls</a></li>
  </ul>
  <h2>More</h2>
  <ul>
    <li><a href="gallery.html">Gallery</a></li>
    <li><a href="links.html">Links Out</a></li>
  </ul>
`;

document.getElementById("app-header").innerHTML = header;
document.getElementById("app-aside").innerHTML = aside;
