const desktop = document.getElementById('desktop');

function createWindow(title, contentHTML) {
  const win = document.createElement('div');
  win.className = 'window';
  win.innerHTML = `
    <div class="window-titlebar">
      <span>${title}</span>
      <button class="close-btn">✕</button>
    </div>
    <div class="window-content">
      ${contentHTML}
    </div>
  `;
  desktop.appendChild(win);

  // Center window
  win.style.left = '50%';
  win.style.top = '50%';
  win.style.transform = 'translate(-50%, -50%)';

  // Close button
  win.querySelector('.close-btn').onclick = () => win.remove();
}

document.querySelectorAll('.app-icon').forEach(btn => {
  btn.addEventListener('click', () => {
    const app = btn.dataset.app;
    if (app === 'youtube') {
      createWindow('YouTube', `
        <iframe src="https://www.youtube.com" 
                style="width:100%;height:100%;border:none;"></iframe>
      `);
    } else if (app === 'docs') {
      createWindow('Google Docs', `
        <iframe src="https://docs.google.com" 
                style="width:100%;height:100%;border:none;"></iframe>
      `);
    }
  });
});
