import {Request, Response} from "express";
import { AppDataSource } from '../index'
import { User } from '../entity/User'

export async function postRemoveAction(request: Request, response: Response) {

    const userRepository = AppDataSource.getRepository(User)
    console.log("body:", request.body)
    request.body.forEach(async id => {
        console.log("id: ", id);
        
        const user = await userRepository.findOneBy({id})
        if (!user) {
            response.status(404);
            response.end();
            return;
        }
        await userRepository.remove(user)
    });
}
