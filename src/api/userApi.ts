import {http} from '@/plugins/axios'

interface IUser{
    name:string
    age?: number
    avator?: string
}
interface ILogin{
    token:string
}

class userApi {
    info(){
        return http.request<IUser>({
            url: 'get',
            method:'GET'
        })
    }
    login(){
        return http.request<ILogin>({
            url: 'login',
            method:'POST'
        })
    }
}

export default new userApi()