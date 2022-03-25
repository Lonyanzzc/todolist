import {Request, Response} from "express";
import { AppDataSource } from '../data-source'
import { User } from '../entity/User'

export async function postRemoveAction(request: Request, response: Response) {

    const userRepository = AppDataSource.getRepository(User)
    
    request.body.ids.array.forEach(async id => {
        const user = await userRepository.findOneBy(id)
        if (!user) {
            response.status(404);
            response.end();
            return;
        }
        await userRepository.remove(user)
        response.send("success");
    });
}
