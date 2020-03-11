function findModule(files,src){
    return files.keys().reduce((prev,current)=>{
        let item = current;
        let [,key] = item.match(/^\.\/(.+)\/index\.tsx$/);
        prev[key] = files(item).default;
        return prev;
    },{})[src];
}

export default function getViews(src){
    const files = require.context('./Home',true,/index\.tsx$/);
    console.log(files,'files');
    files.keys().forEach(item=>{
        console.log(item,'item');
    })
    return findModule(files,src)
}