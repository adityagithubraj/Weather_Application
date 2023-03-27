const redis=require('redis');
const redisclient = redis.createClient({url:"redis://default:n8EdoxEI2coe7rCsUGzLWvAWIpmN3x3R@redis-17710.c301.ap-south-1-1.ec2.cloud.redislabs.com:17710"});
try{
  redisclient.connect()
}
catch(err){
  console.log(err.message)
}

module.exports={
    redisclient
}
