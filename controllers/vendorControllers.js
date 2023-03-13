// Bring in prisma and cookie generator
const prisma = require('../prisma/index')
const generateCookie = require('../utils/cookie')

const createVendor = async (req, res) => {
 const {name, email, phone, password, products} = req.body
 
 try {
    if(!name || !email || ! phone || !password) throw new Error('Fields name, email, phone and password must be provided.')
    const vendor = await prisma.vendor.create({data: {name, email, phone, password, products}})
    console.log({newVendor: vendor})
    generateCookie(vendor, res)
    
 } catch (error) {
    res.status(401).json({success: false, error: error.message})
 }
}

module.exports = createVendor