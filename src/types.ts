export interface sliderData {
    id: string,
    pic: string,
    link: string
}
export interface albumsData {
    id: string,
    username: string,
    title: string,
    pic: string
}
export interface recommendData {
    sliders?: sliderData[],
    albums?: albumsData[]
}