export const home = (onNavigate) => {
  const homeDiv = document.createElement('div');

  const contenedorHome = document.createElement('div');
  contenedorHome.className = 'contenedorHome';
  homeDiv.appendChild(contenedorHome);

  const logoPrincipal = document.createElement('img');
  logoPrincipal.className = 'logoPrincipal';
  contenedorHome.appendChild(logoPrincipal);
  logoPrincipal.src = 'logo.png';

  const sinopsis = document.createElement('p');
  sinopsis.className = 'sinopsis';
  sinopsis.textContent = 'Únete a MusiClub y deja que la música te conecte';
  contenedorHome.appendChild(sinopsis);

  const contenedorBotones = document.createElement('div');
  contenedorBotones.className = 'contenedorBotonesHome';
  contenedorHome.appendChild(contenedorBotones);

  const buttonRegister = document.createElement('button');
  buttonRegister.innerText = 'Registrarse';
  buttonRegister.classList = 'button';
  contenedorBotones.appendChild(buttonRegister);

  const buttonLogin = document.createElement('button');
  buttonLogin.innerText = 'Entrar';
  buttonLogin.classList = 'button';
  contenedorBotones.appendChild(buttonLogin);

  const contenedorImagenesH = document.createElement('div');
  contenedorImagenesH.className = 'contenedorImagenesH';
  contenedorHome.appendChild(contenedorImagenesH);

  const imagenAbajoH = document.createElement('img');
  imagenAbajoH.className = 'imagenAbajo';
  contenedorImagenesH.appendChild(imagenAbajoH);
  imagenAbajoH.src = 'imageninicio.png';

  const footer = document.createElement('footer');
  footer.className = 'footer';
  homeDiv.appendChild(footer);

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  homeDiv.appendChild(contenedorHome);

  return homeDiv;
};
