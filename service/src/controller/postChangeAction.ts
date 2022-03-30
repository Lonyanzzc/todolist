import {Request, Response} from "express";
import { AppDataSource } from '../index'
import { User } from '../entity/User'


export async function postChangeAction(request: Request, response: Response) {

    const userRepository = AppDataSource.getRepository(User)
	const { id, value} = request.body
    const user = await userRepository.findOneBy({id})
	user.value = value
	await userRepository.save(user)
    response.send("change success");
}