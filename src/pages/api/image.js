import formidable from "formidable";
import path from 'path'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const config = {
  api: {
    bodyParser: false
  }
};


export default async function handler(req, res){
  let userInfo = {};
  let urlList = []
  const options = {}

  if(true){
    options.uploadDir = path.join(process.cwd(), "/public/images/property")
    options.filename = (name, ext, path, form)=>{
      return Date.now().toString() + '_' + path.originalFilename;
    }
  }

  const form = formidable(options);

  const [fields, files] = await form.parse(req);

  userInfo = JSON.parse(fields.userInfo)
  // console.log("files", files, "username ",userInfo.firstName)
  urlList = files.myImage?.map(image=>({url:'http://localhost:3000/public/images/property/'+image.newFilename}))

  if(!files.myImage) {
    return res.status(404).json({messsage:'Image upload has not been performed!'})
  }

  // console.log(urlList);

  const { firstName, lastName, email, phone, ownerType, 
    name, description, bathroom, bedroom, area,
    stateName, city, zipcode, unit, gps,
    duration, downPayment, rentalCost, rentalCostType, lateCharge, lateChargeType,
    rules, additionalFacilities, status, propertyId } = userInfo
  const owner = ({email,phonenNo:phone, ownerType, firstName, lastName})

  console.log(gps)

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
      gps:{lat:gps.lat.toString(), lng:gps.lng.toString()},
      price:rentalCost,
      paymentType:rentalCostType,
      lateCharge,
      lateChargeType,
      status,
      duration:duration.toString(),
      downPayment:downPayment.toString(),
    }
  })

  res.status(200).json(property)
};
