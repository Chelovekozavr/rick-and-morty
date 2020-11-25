

import '../styles/header.scss';

export const Header = () => {

  return (
    <div>
      <header className="">
        <nav className="header">
          <img src="https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVK-867iNzC3GeSiDQJ7jasFpdN4ySy2Of17S2KxaxbOOtsqax_k_ldd_f5TiDeulU3_lyJmIjtBgPVKLnE1cUK-kRk9yZsO4MXA.png?r=47e"
          alt="Rick and Morty logo"
          className="header__logo"
          />
          <ul className="header__list">
            <li className="header__item">Episodes</li>
            <li className="header__item">Characters</li>
            <li className="header__item">Locations</li>
            <li className="header__item">Watch list</li>
          </ul>
        </nav>
      </header>
    </div>
  );

};
