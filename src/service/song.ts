import { get } from "./base"
import { song } from "@/types"
export function processSongs(songs:song[]) {
    if (!songs.length) {
      return Promise.resolve(songs)
    }
    return get('/api/getSongsUrl', {
      mid: songs.map((song) => {
        return song.mid
      })
    }).then((result) => {
      const map = result.map
      return songs.map((song) => {
        song.url = map[song.mid]
        return song
      }).filter((song) => {
        return  song.url && song.url.indexOf('vkey') > -1
      })
    })
  }