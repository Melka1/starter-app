import {PrismaClient} from '@prisma/client'
import axios from 'axios';

const prisma = new PrismaClient()

export default async function handler(req, res){
  let {data} = req.body;
  console.log(data)

  let query = {
    state:data.location
  }  

  const properties = await prisma.Property.findMany({
    where: query
  }) 

  res.status(200).json(properties)
};
