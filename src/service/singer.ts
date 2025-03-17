import {get} from './base'
import { singer } from '@/types'
export function getSingerList(){
    return get('/api/getSingerList')
}

export function getSingerDetail(singer:singer) {
    return get('/api/getSingerDetail',{
        mid:singer.mid
    })
}