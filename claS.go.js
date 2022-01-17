
module.exports = function GoClaS(claSname, props, methods){

const paramsOnly = props.slice().map((prop)=>{ return prop.split(" ")[0] });

// let abstract = `
//     type ${abstractname} interface {

//     }
// `;

let _props = `
type ${claSname} struct {
`;  
props.forEach(element => {
    _props += "  " + element
    _props += "\n"
});
_props += `}`;
let _list = `

var ${claSname}_list = []{}

`;
let _statics = `
func New(${props}) ${claSname} {  
    e := ${claSname} {${paramsOnly}}
    append(${claSname}_list, e)
    return e
}
func Delete(index int) bool {

    /*UNFINISHED*/

    var result bool

    append(${claSname}_list[:index], ${claSname}_list[index+1:]...)

    return result
}
`;
let _methods = `
func (${claSname[0].toLowerCase()} *${claSname}) Get(propname, value) {
    
    /*
            Need to ensure copies are returned, instead of direct access
    */

}
func (${claSname[0].toLowerCase()} *${claSname}) Set(propname, value) {
    /*
        Need to ensure copies are returned, instead of direct access
    */
}
`;
methods.forEach((methodarr)=>{

    let methodname = methodarr[0]
    let methodParams = methodarr[1]
    let methodBlock = methodarr[2]


    _methods += `
func (${claSname[0].toLowerCase()} *${claSname}) ${methodname}(${methodParams}) {


    ${methodBlock}

}   
`
});

console.log(`
${_props}

${_list}

${_statics}

${_methods}
`);

}
