import * as React from 'react'
import Router from './router/index'
import routerConfig from "./router/router.config"
import * as history from 'history';
export const historyProps = history.createBrowserHistory();

function getTitle(pathname:string):string{
    let res:string="";
    routerConfig.forEach(item=>{
        if(item.path===pathname){
            res = item.title;
            return;
        }
        if(item.children){
            item.children.forEach(i=>{
                if(i.path===pathname){
                    res = i.title;
                    return 
                }
            })
        }
    })
    return res
}
historyProps.listen(({pathname})=>{
    (document as HTMLDocument).title = getTitle(pathname)
})
class App extends React.Component{
    static replace(arg0:string){
        throw new Error('报错')
    }
    public render(){
        return (
          <div>
              <Router routerConfig={routerConfig} history={history}></Router>
              {/* app */}
          </div>
        )      
    }
}
export default App;




// console.log(historyProps,"---historyProps")
// gettitle history
// import getViews from './pages/index'
// import VoteList from './pages/VoteList'
// declare global{//加载程序 declare只是执行一次
//     interface Window{getViews:any}
// }
// window.getViews = getViews
// window.store = store