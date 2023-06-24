import { NextResponse} from 'next/server'
import {PrismaClient} from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

// export async function GET(req) {
//   const { searchParams } = new URL(req.url)
//   const email = searchParams.get('email')
//   const password = searchParams.get('password')

//   const user = await prisma.User.findUnique({
//     where: {
//       email
//     }
//   })

//   if(!user){
//     return new NextResponse(JSON.stringify({message:"User does not exist", status:400}),{
//       status:400
//     })
//   }

//   let compare = await bcrypt.compare(password, user.password)

//   if(!compare){
//     return new NextResponse(JSON.stringify({message:"Incorrect password", status:400}),{
//       status:400
//     })
//   }

//   console.log(user)

//   return NextResponse.json({name:user.name, email:user.email, role:user.role, id:user.id})
// }

export default async function handler(req, res) {

  console.log(req.query, req.body)

  const { email, password } = req.query
 
  const user = await prisma.User.findUnique({
    where: {
      email
    }
  })

  if(!user){
    return res.status(400).json({message:"User does not exist", status:400})
  }

  let compare = await bcrypt.compare(password, user.password)

  if(!compare){
    return res.status(400).json({message:"Incorrect password", status:400})
  }

  console.log(user)

  res.status(200).json({ name: user.name, email:user.email, id:user.id, role:user.role })
}