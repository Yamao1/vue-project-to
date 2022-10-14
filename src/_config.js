export const process = {
  dev: false,
};

export const site ={
  home: process.dev ? 'http://localhost:8080/' : 'http://localhost:8080/about',

}
export const app ={
  title: 'Template'

}


export const links = [
  {
    title: 'Home',
    alias: 'home',
    url: '/'
  },
    {
      title: 'About',
      alias: 'about',
      url: '/about'
    }
  ]

