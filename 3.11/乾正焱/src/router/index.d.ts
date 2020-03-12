import * as React from "react";

// 定义接口类型
export interface Props{
    routerConfig:any[]
}

export interface RouterProps{
    routerConfig:any[],
    history:any
}

export interface RouterItem{
    path:string,
    title:string,
    component:any,
    children:any[]
}

export interface RouterRedirect{
    path:string,
    redirect:string
}