interface Content {
  id:string
  title?:string
  name?:string
  original_name?:string
  poster_path:string
  overview:string
  release_date?:string
  first_air_date?:string
}

interface Video {
  site: string
  key: string
  id: string
}

interface actionPayload {
  results?:string | Object | Object[]
}

export interface dataState {
  data: Content[]
  contentDetails:Content
  videos: Video[]
}  
export interface navbarState {
    currentTab: string
    searchBar: string
}
export interface navbarAction {
  type:string
  payload:string
}
export interface dataAction {
  type:string
  payload:actionPayload
}
export interface rootState {
  navbarReducer:navbarState
  dataReducer:dataState
}