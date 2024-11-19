import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'
import clientRepo from '../logic/clientRepo.js'
import clientModel from '../models/clientModel.js'

const ClientRepo =  new clientRepo()
const secret = process.env.JWT_SECRET
const saltRound = 10

class clientService {
    async addClient(data, file){
        const existClient = await ClientRepo.getClientByUsername(data.username)
        if (existClient){
            throw new Error ('Username already exists')
        }

        const hashedPassword = await bcrypt.hash(data.password, saltRound)

        const newClient = new clientModel(
            null, 
            data.name,
            data.username,
            data.email,
            data.phone,
            data.info,
            hashedPassword,
            data.role,
            null
        )

        const clientId = await ClientRepo.addClient(newClient)

        if (file){
            const image = `${clientId}_image.png`
            const imagePath = path.join('src', 'clientImages', image)
            fs.writeFileSync(imagePath, file.buffer)
            await ClientRepo.updateClient(clientId, {image:image})
        }
    }

    async updateClient(id, data, file){
        const existClient = await ClientRepo.getClientById(id)
        if(!existClient){
            throw new Error('Client not found')
        }

        if(data.password){
            data.password = await bcrypt.hash(data.password, saltRound)
        }
        
         if(file){
            const image = `${id}_image.png`
            const imagePath = path.join('src', 'clientImages', image)
            fs.writeFileSync(imagePath, file.buffer)
            data.image = image
        }

        await ClientRepo.updateClient(id, data)
    }

    async deleteClient(id){
        const existClient = await ClientRepo.getClientById(id)
        if(!existClient){
            throw new Error('Client not found')
        }
         await ClientRepo.deleteClient(id)
    }

    async getAllClients(){
        return await ClientRepo.getAllClients()
    }

    async getClientById(id){
        return await ClientRepo.getClientById(id)
    }

    async getClientByUsername(username){
        return await ClientRepo.getClientByUsername(username)
    }


}

export default clientService
