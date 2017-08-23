import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });

  it('buscar heroes', () => {
    page.navigateTo();
    expect(page.buscarPorNombre('Narco')).toContain('Narco details!');
  });

  it('eliminar heroe', () => {
    page.navigateToHeroes();
    page.eliminarHeroe();
    expect(page.getAllHeroes().count()).toBe(10);
  });

  it('editar heroe', () => {
    page.navigateTo();
    expect(page.editarHeroe('Mr. Juan')).toContain('Mr. Juan');
  });

  it('navegar heroe desde dashboard', () => {
    page.navegarHeroeDashboard();
  });

  it('navegar heroe desde lista de heroes', () => {
    page.navegarDesdeListaHeroes();
  });

  it('navegar heroe desde la busqueda', () => {
    page.navegarDesdeBusqueda();
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

});
