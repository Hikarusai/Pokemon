const db=require('../data');

module.exports.pokemonView=(rq,rs)=>{
	var id=rq.params.id;
	var pok=db.get('pokemon').find({id:id}).value();
	rs.render('viewPokemon',{danhsach1:db.get('menu').value(),danhsach2:pok});
};