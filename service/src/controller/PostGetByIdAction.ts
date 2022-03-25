import {Request, Response} from "express";
import { AppDataSource } from '../data-source'
import { User } from '../entity/User'

export async function postGetByIdAction(request: Request, response: Response) {

    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy(request.body.id)

    if (!user) {
        response.status(404);
        response.end();
        return;
    }

    response.send(user);
}
