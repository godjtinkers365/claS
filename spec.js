GoClaS("Person",["age int","name string"],[
    ["talk","msg string","fmt.Println(msg)"]
])

/*
type Person struct {
  age int
  name string

}



var Person_list = []{}




func New(age int,name string) Person {  
    e := Person {age,name}
    append(Person_list, e)
    return e
}
func Delete(index int) bool {

    /*UNFINISHED*/

    var result bool

    append(Person_list[:index], Person_list[index+1:]...)

    return result
}



func (p *Person) Get(propname, value) {
    
    /*
            Need to ensure copies are returned, instead of direct access
    */

}
func (p *Person) Set(propname, value) {
    /*
        Need to ensure copies are returned, instead of direct access
    */
}

func (p *Person) talk(msg string) {


    fmt.Println(msg)

}   

*/
