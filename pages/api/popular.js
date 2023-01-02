import data from './data';
//api/popular
export default function getpopulars(req,res){
   const {Popular} = data ;
   if(Popular){
    return res.status(200).json(Popular);
   }
    return res.status(404).json({data:"Data not Found"});
}