function old(obj:{label:string}){
    console.log(obj.label)
}

// old(3)
// old({})
// old({label:"soso",num:3})

/* 
 1.实际场景，这个obj参数可能不会这么简单，存在很多个属性值，使用接口，就可以实现复用。
 2.obj参数只能依照约定的属性，不能额外添加其它属性
*/

interface Optional {
  label: string;
}

interface Optional2 {
  label?: string;
  num?: number;
}

function printLabel(obj: Optional2) {
  console.log(obj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

