// function findModule(files,src){
//     return files.keys().reduce((prev,current)=> {
//         let item = current;
//         let [,key] = item.match(/^\.\/(.+)\/index\.tsx$/)
//         prev[key] = files(item).default
//         return prev
//     },{})[src];
// }
//getViews('Home')  class Home
export default function getViews(src){
    const files = require.context('./Home',false,/index\.tsx$/)
    console.log(files.keys())
    files.keys().forEach(element => {
        console.log(element,"element")
    });
    // return findModule(files,src)
}