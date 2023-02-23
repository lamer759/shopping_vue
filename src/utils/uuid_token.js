//存储UUID，游客不变的ID
import {v4 as uuidv4} from 'uuid'
export const getUUID =()=>{
    let uuid_token=localStorage.getItem('UUINTOKEN')
    if(!uuid_token){
        uuid_token=uuidv4()
        localStorage.setItem('UUINTOKEN',uuid_token)
    }
    return uuid_token
}