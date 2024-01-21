const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
section.innerHTML = `
<h1>My dynamic section</h1>
<p>Extra text added to this section</p>
<ul>
<li>First Item</li>
<li>First Item</li>
<li>First Item</li>
<li>First Item</li>
</ul>
`;
mainContainer.appendChild(section);