import {http} from '@/plugins/axios'

interface User{
    name:string
    age?: number
    avator?: string
}

class userApi {
    info(){
        return http.request<User>({
            url: 'get',
            method:'GET'
        })
    }
}

export default new userApi()