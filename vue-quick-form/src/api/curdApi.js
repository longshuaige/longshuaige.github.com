import {request} from '@/util'
export default class CurdApi {
    constructor(keyword){
        this.keyword = keyword
    }
    getList(params){
        return request({
            url: `${this.keyword}/list`,
            params
        })
    }
    getItem(id){
        return request({
            url: `${this.keyword}/${id}`
        })
    }
    addItem(data,params){
        return request({
            url: `${this.keyword}`,
            data,
            params,
            method: 'post'
        })
    }
    updateItem(id, data, params) {
        return request({
            url: `${this.keyword}/${id}`,
            data,
            params,
            method: 'put'
        })
    }
    delItem(id){
        return request({
            url: `${this.keyword}/${id}`,
            method: 'delete'
        })
    }
    batchDel(ids){
        let promises = ids.map(id=>{
            return this.delItem(id)
        })
        return Promise.all(promises)
    }
    resetKeyword(word){
        return this.keyword = word
    }
}