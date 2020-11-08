declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        REACT_APP_MY_API_KEY: string
        REACT_APP_MOVIE_DETAILS_URL: string
        REACT_APP_TOP_MOVIES_URL: string
        REACT_APP_SEARCH_MOVIES_URL: string
        REACT_APP__TV_SHOW_DETAILS_URL: string
        REACT_APP_TOP_TV_SHOWS_URL: string
        REACT_APP_SEARCH_TV_SHOWS_URL: string
        REACT_APP_FETCH_MOVIE_DETAILS: string
        REACT_APP_FETCH_TV_SHOW_DETAILS: string
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}
  