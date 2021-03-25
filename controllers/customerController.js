//Get request for customer details
exports.customerDetailGet = function(req,res){
    res.status(200).json({success: "true", message:"customer detail get"})
}

//Post request for customer login
exports.customerLoginPost = function(req,res){
    res.status(200).json({success: "true", message:"login page post"})
}
