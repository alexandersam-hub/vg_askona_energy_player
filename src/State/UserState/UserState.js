import getResponse from '../../Services/ResponceService'
import config from "../../config";
import UserClass from "./UserClass";

class UserState{
    users
    isLoad = false

    async getUsers(){
        if (this.isLoad)
            return this.users
        const result = await getResponse(config.URL_GET_USERS)
        if (!result.warning){
            this.users = result.users
            this.isLoad = true
            return result.users
        }
        else
            return []

    }
    async getUsersByGameId(game_id){
        const result = await getResponse(config.URL_GET_USERS_BY_GAME_ID,{game_id})
        if (!result.warning){
            return result.users
        }
        else
            return []

    }
    async addUser(user){
        const result = await getResponse(config.URL_ADD_USER, {user})
        if (result.warning){
            return null
        }else{
            this.users.push(result.user)
            return result.user
        }
    }

    async deleteUser(user_id){
        const result = await getResponse(config.URL_DELETE_USER, {user_id})
        if (!result.warning)
            this.users = this.users.filter(u=>u.id!==user_id)
        return !result.warning;
    }

    async updateUser(user){
        const result = await getResponse(config.URL_UPDATE_USER, {user})
        if (result.warning){
            return null
        }else{
            this.users = [...this.users.filter(u=>u.id!==result.user.id),result.user]
            return result.user
        }
    }

    async updatePassword(user_id, new_password){
        const result = await getResponse(config.URL_UPDATE_USER_PASSWORD, {user_id,new_password})
        return !result.warning
    }

    async login(username, password){
        return await getResponse(config.URL_LOGIN, {username, password})
    }

    getEmptyGame(){
        return new UserClass()
    }

}

export default new UserState()

