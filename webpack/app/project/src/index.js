import './config.json'
import './hotDep.js'
let dom = document.createElement("div");
dom.id = "app"
document.body.appendChild(dom)
import hotCreate from './hotCreate';
hotCreate()
import print from  './echo'
//import router from 'router.js'
//console.log(router)
print("1234567")
import  './css/base.css';
import './beauty.png'

if (module.hot) {
    module.hot.accept('./hotDep.js', function () {
        console.log("ggggg")
        hotCreate()
    })
}