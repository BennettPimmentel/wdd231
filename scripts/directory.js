document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('directoryContainer');
  const gridBtn = document.getElementById('gridView');
  const listBtn = document.getElementById('listView');

  async function loadMembers() {
    try {
      const res = await fetch('data/members.json');
      if (!res.ok) throw new Error('Members JSON not found');
      const members = await res.json();
      displayMembers(members, 'grid');

      gridBtn.addEventListener('click', () => {
        displayMembers(members, 'grid');
        gridBtn.classList.add('active'); listBtn.classList.remove('active');
      });
      listBtn.addEventListener('click', () => {
        displayMembers(members, 'list');
        listBtn.classList.add('active'); gridBtn.classList.remove('active');
      });

    } catch (err) {
      container.innerHTML = '<p>Unable to load directory data.</p>';
      console.error(err);
    }
  }

  function displayMembers(members, view) {
    container.className = view;
    container.innerHTML = '';
    members.forEach(m => {
      const card = document.createElement('article');
      card.className = 'member-card';
      card.innerHTML = `
        <img src="${m.image}" alt="${m.name} logo" loading="lazy">
        <h3>${m.name}</h3>
        <p>${m.description}</p>
        <p><strong>Address:</strong> ${m.address}</p>
        <p><strong>Phone:</strong> ${m.phone}</p>
        <p><a href="${m.website}" target="_blank" rel="noopener">Visit Website</a></p>
      `;
      container.appendChild(card);
    });
  }

  // footer dates
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

  loadMembers();
});
