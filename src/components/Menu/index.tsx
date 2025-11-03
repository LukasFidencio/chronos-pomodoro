import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // Não segue o link

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });

    //document.documentElement.setAttribute('data-theme', theme);
  }

  // useEffect(() => {
  //   console.log('useEffect sem dependencia', Date.now());
  // }); //executado toda vez que o componente renderiza

  // useEffect(() => {
  //   console.log('com array deps vazio', Date.now());
  // }, []); // executado apenas na primeira renderização

  useEffect(() => {
    console.log('Theme mudou para', theme, Date.now());
    document.documentElement.setAttribute('data-theme', theme);

    return () => {
      console.log('Componente sera atualizado');
    };
  }, [theme]); // Executado sempre que a variável theme mudar

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver histórico'
        title='Ver histórico'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
