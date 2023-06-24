import {PrismaClient} from '@prisma/client'
import axios from 'axios';

export const config = {
  api: {
    bodyParser: false
  }
};


const prisma = new PrismaClient()


export default async function handler(req, res){
  let userInfo;
  let urlList = []

  axios.post('/api/image',)

  userInfo = JSON.parse(fields.userInfo)
  console.log(files, userInfo.firstName)
  urlList = files.myImage.map(image=>({url:'http://localhost:3000/public/images/property/'+image.newFilename}))

  console.log(JSON.parse(fields.name), urlList);
  return ({fields, files,"success":"200"});

  const { firstName, lastName, email, phone, ownerType, 
    name, description, bathroom, bedroom, area,
    stateName, city, zipcode, unit,
    duration, downPayment, rentalCost, rentalCostType, lateCharge, lateChargeType,
    rules, additionalFacilities, status, propertyId} = userInfo
  const owner = ({email,phonenNo:phone, ownerType, firstName, lastName})
  
  const property = await prisma.Property.create({
    data:{
      propertyId,
      name,
      owner,
      propertyNo:unit,
      state:stateName,
      city,
      zipcode,
      area,
      images:urlList,
      bedroomCount:bedroom,
      bathroomCount:bathroom,
      rule:rules,
      facility:additionalFacilities,
      description,
      gps:'',
      price:rentalCost,
      paymentType:rentalCostType,
      lateCharge,
      lateChargeType,
      status,
      duration:duration+'',
      downPayment:downPayment+'',
    }
  })
  res.status(200).json(property)
};
