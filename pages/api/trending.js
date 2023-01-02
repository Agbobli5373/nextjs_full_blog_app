import data from './data';
//api/trending
export default function getTrendings(req,res){
   const {Trending} = data;
   if(Trending){
    return res.status(200).json(Trending);
   }  
    return res.status(404).json({data:"Data Not Found"});
}