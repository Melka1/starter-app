import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res){
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
};

