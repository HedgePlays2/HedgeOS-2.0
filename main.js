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
        <iframe 
  src="https://www.youtube.com/"
  allow="fullscreen"
  style="width:100%;height:100%;border:none;">
</iframe>
      `);
    } else if (app === 'docs') {
      createWindow('Google Docs', `
        <iframe src="https://docs.google.com" 
                style="width:100%;height:100%;border:none;"></iframe>
      `);
      if (app === 'settings') {
  createWindow('Settings', `
    <div style="padding: 20px; color: white; font-family: sans-serif;">
      <h2>Settings</h2>

      <h3>Wallpaper</h3>
      <button id="wallpaper1">Blue Gradient</button>
      <button id="wallpaper2">Mountains</button>
      <button id="wallpaper3">Solid Black</button>

      <h3>About</h3>
      <p>Your OS: HedgeOS</p>
      <p>Version: 1.0</p>
    </div>
  `);

  // Wallpaper buttons
  document.getElementById('wallpaper1').onclick = () => {
    document.getElementById('desktop').style.background =
      "linear-gradient(135deg, #4285f4, #34a853)";
  };

  document.getElementById('wallpaper2').onclick = () => {
    document.getElementById('desktop').style.background =
      "url('https://images.unsplash.com/photo-1503264116251-35a269479413') center/cover no-repeat";
  };

  document.getElementById('wallpaper3').onclick = () => {
    document.getElementById('desktop').style.background = "#000";
  };
        if (app === 'settings') {
  createWindow('Settings', `
    <div id="settings-container" style="display:flex; height:100%; font-family:sans-serif; color:white;">
      
      <!-- Sidebar -->
      <div id="settings-sidebar" style="width:220px; background:#2d2f31; padding:20px; box-sizing:border-box;">
        <h2 style="margin-top:0;">Settings</h2>
        <div class="settings-item" data-section="appearance">Appearance</div>
        <div class="settings-item" data-section="about">About</div>
      </div>

      <!-- Main content -->
      <div id="settings-main" style="flex:1; padding:20px;">
        <h2>Welcome</h2>
        <p>Select a category from the left.</p>
      </div>

    </div>
  `);

  // Sidebar click logic
  document.querySelectorAll('.settings-item').forEach(item => {
    item.onclick = () => {
      const section = item.dataset.section;
      const main = document.getElementById('settings-main');

      if (section === 'appearance') {
        main.innerHTML = `
          <h2>Appearance</h2>
          <p>Choose a wallpaper:</p>
          <button id="wp1">Blue Gradient</button>
          <button id="wp2">Mountains</button>
          <button id="wp3">Solid Black</button>
        `;

        document.getElementById('wp1').onclick = () => {
          document.getElementById('desktop').style.background =
            "linear-gradient(135deg, #4285f4, #34a853)";
        };
        document.getElementById('wp2').onclick = () => {
          document.getElementById('desktop').style.background =
            "url('https://images.unsplash.com/photo-1503264116251-35a269479413') center/cover no-repeat";
        };
        document.getElementById('wp3').onclick = () => {
          document.getElementById('desktop').style.background = "#000";
        };
      }

      if (section === 'about') {
        main.innerHTML = `
          <h2>About</h2>
          <p>OS Name: HedgeOS</p>
          <p>Version: 1.0</p>
          <p>Made by Hedge</p>
        `;
      }
    };
  });
}

}
    }
  });
});
