const db=require('../data');
module.exports.pokemon=(rq,rs)=>{

	rs.render('pokemon',{danhsach1:db.get('menu').value(),danhsach2:db.get('pokemon').value()});	
};


