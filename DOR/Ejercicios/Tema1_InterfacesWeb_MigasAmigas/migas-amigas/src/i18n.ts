import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    pt: {
      translation: {
        titleApp: 'Projeto "Migas Amigas"',
        titleHeader: 'Cabeçalho e barra de navegação',
        titleContact: 'Esta é a página de contacto',
        titleEmpanada: 'Esta é a página das Empanadas',
        titleInitPage: 'Esta é a página inicial',
        titleBakery: 'Esta é a página da padaria',
        titlePatisserieBoulangerie: 'Esta é a página da Pastelaria-Boulangerie',
        titlePrincipalPage: 'Esta é a página principal',
        titleError404: 'Esta é a página de erro 404',
        titleFooter: 'Rodapé da página',
      },
    },
    es: {
      translation: {
        titleApp: 'Proyecto "Migas Amigas"',
        titleHeader: 'Cabecera y barra de navegación',
        titleContact: 'Esta es la página de contacto',
        titleEmpanada: 'Esta es la página de Empanadas',
        titleInitPage: 'Esta es la página de Inicio',
        titleBakery: 'Esta es la página de panadería',
        titlePatisserieBoulangerie: 'Esta es la página de Pastelería-Bollería',
        titlePrincipalPage: 'Esta es la página principal',
        titleError404: 'Esta es la página de Error 404',
        titleFooter: 'Pié de página',
      },
    },
  },
});

export default i18n;