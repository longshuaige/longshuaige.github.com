
let configs = {
    beautyGirl:{
        name: 'beautyGirl',
        query: [
            {
                key: 'name',
                component: 'elInput'
            }
        ],
        columnList: [
            {key: 'name', label: '名称'},
            {
                key: 'type', 
                label: '类型', 
                renderFunc(v){
                    return ['苗条','高瘦','丰满'][v] || '美腻动人'
                }
            }
        ]
    }
}
export default function(moduleName) {
    return configs[moduleName]
}