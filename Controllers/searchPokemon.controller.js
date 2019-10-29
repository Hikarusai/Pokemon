const db=require('../data');


module.exports.pokemonSearch=(rq,rs)=>{
	var q=rq.query.q;
	var searchPokemon=db.get('pokemon').value().filter(function(pok){
		return pok.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
	});
	rs.render('pokemon',{danhsach1:db.get('menu').value(),danhsach2:searchPokemon});
};

