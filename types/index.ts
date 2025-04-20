import { IconType } from "react-icons"

export interface ISkillCard{
    icon:IconType
    title:string
    descr:string
    style:string
}

export interface IProjectCard{
    title:string
    descr:string
    tags:string[]
    image:string
}