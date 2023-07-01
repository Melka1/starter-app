import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res){
  console.log(req.method)
  if(req.method==='POST'){

    let {data} = req.body;
    let {price, area, bedroomCount, bathroomCount, location} = data;
  
    console.log(data, "56">"90", price.min, typeof(price.max), area.min, typeof area.max)
  
    let query = {
      AND:[
        {state:location||{
          not:''
        }},
        // {
        //   AND:[
        //     {
        //       area:{
        //         gte:area.min||'0'
        //       }
        //     },
        //     {
        //       area:{
        //         lte:area.max||'10000000'
        //       }
        //     }
        //   ]
        // },
        // {
        //   AND:[
        //     {
        //       price:{
        //         gte:price.min
        //       }
        //     },
        //     {
        //       price:{
        //         lte:price.max
        //       }
        //     }
        //   ]
        // },
        {
          bedroomCount:bedroomCount||{
            not:""
          }
        },
        {
          bathroomCount:bathroomCount||{
            not:""
          }
        }
      ]
    }  
  
    console.log(query)
  
    const properties = await prisma.Property.findMany({
      where: query
    }) 
    res.status(200).json(properties)
  }

  if(req.method === 'GET'){
    const { id } = req.query
    console.log(id)
    const property = await prisma.Property.findMany({
      where:{ id }})
    console.log(property)
    res.json(property)
  }

  if(req.method==='PUT'){
    console.log('PUT request triggered')
    const properties = await prisma.Property.findMany({
      where:{
        name:{
          not:""
        }
      }
    })
    const ids = await properties.map(property => property.id)
    res.status(200).json(ids)
  }
};

