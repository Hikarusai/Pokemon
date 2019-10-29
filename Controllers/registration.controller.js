const shortid=require('shortid');
const db=require('../data');

module.exports.registration=(rq,rs)=>{
    rs.render('registration');
};

module.exports.postRegistration=(rq,rs)=>{
	
	var errors=[];
	if(!rq.body.name)
	{
		errors.push('Name is required');
	}
	if(!rq.body.email)
	{
		errors.push('Phone is required');
	}
	if(rq.body.password.length<6){
		errors.push('Password must be over 5 characters');
	}
	if(rq.body.password!==rq.body.confirm){
		errors.push('Password incorrect');
	}
	if(errors.length)
	{
		 rs.render('registration',{errors:errors,values:rq.body});
		 return;
	}
	rq.body.id=shortid.generate();
	db.get('users').push(rq.body).write();
	rs.redirect('/login');
};
