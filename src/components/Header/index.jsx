// @/app/components/Header.jsx

export default function Header() {
  return (
    <header>
      <div class="navigation inner flex">
        <div>
          <h1><img src="pict/logo.svg" alt="" height="35" /></h1>
        </div>

        <button class="menu-button">
          <span class="material-symbols-outlined">menu</span>
        </button>

        <nav class="menu">
          <ul class="flex">
            <li><a href="#featured">Featured</a></li>
            <li><a href="#dramas">Dramas</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>

        <nav class="pc-menu">
          <ul class="flex">
            <li><a href="#featured">Featured</a></li>
            <li><a href="#dramas">Dramas</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}