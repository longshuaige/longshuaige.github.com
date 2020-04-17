export function getNum(params:Number): String {
    return 'abc';
}
export function setObj(obj:{name:string,age:number}) {
    return 'x';
}

interface interfaceObj{
    name: string;
    age: number;
    [propname: string]: any; // 多个任意类型
}
export function setItfcObj(obj:interfaceObj) {
    
}