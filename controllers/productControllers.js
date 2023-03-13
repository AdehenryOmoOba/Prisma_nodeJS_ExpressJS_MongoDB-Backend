// Bring in prisma and cookie generator
const prisma = require('../prisma/index')

const getSingleProduct = async (req, res) => {
    
 try {
    console.log({id})
    const product = await prisma.product.findFirst({where: {id}})
    console.log({product})
    res.status(200).json({success: true, product})
    
 } catch (error) {
    res.status(401).json({success: false, error: error.message})
 }
}

module.exports = getSingleProduct