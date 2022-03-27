import {Request, Response} from "express";
import { AppDataSource } from '../index'
import { User } from '../entity/User'


export async function postGetAllAction(request: Request, response: Response) {

    const savedPhotos = await AppDataSource.manager.find(User)
    console.log("All photos from the db: ", savedPhotos)

    response.send(savedPhotos);
}