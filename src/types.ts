export interface sliderData {
    id: string,
    pic: string,
    link: string
}

export interface recommendData {
    sliders?:sliderData[],
    albums?:string[]
  }