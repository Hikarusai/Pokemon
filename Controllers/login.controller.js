const db=require('../data');


module.exports.login=(rq,rs)=>{
	rs.render('login');
};
module.exports.postLogin=(rq,rs)=>{
	var email=rq.body.email;
	var password=rq.body.password;
	var user=db.get('users').find({email:email}).value();
	if(!user)
	{
		rs.render('login',{errors:['Email is not exist !'],values:rq.body});
		return;
	}
	if(user.password !== password)
	{
		rs.render('login',{errors:['Wrong password !'],values:rq.body});
		return;
	}
	rs.redirect('/');
};