import {Request, Response} from "express";
import { AppDataSource } from '../data-source'
import { User } from '../entity/User'

export async function postSaveAction(request: Request, response: Response) {

    const newPost = new User()
    Object.keys(request.body).forEach(item => {
        newPost[item] = request.body[item]
    })

    await AppDataSource.manager.save(newPost)
    console.log("Photo has been saved. Photo id is", newPost.id)

    response.send(newPost);
}