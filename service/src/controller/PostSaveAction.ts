import {Request, Response} from "express";
import { AppDataSource } from '../index'
import { User } from '../entity/User'

export async function postSaveAction(request: Request, response: Response) {
    if(!request.body)
        return

    const newPost = new User()
    Object.keys(request.body).forEach(item => {
        newPost[item] = request.body[item]
    })

    await AppDataSource.manager.save(newPost)
    console.log("Photo has been saved. Photo id is", newPost.id)

    response.send("save success");
}