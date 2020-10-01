import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../../index';
 chai.should();
 chai.use(chaiHttp);

 describe('users', () => {
   

    describe('Get a user by Id', () => {
       
        it('should get a user by Id',(done) => {
            chai.request(index)
            .get('/api/users/:id')
            .end((err, res) => {
             res.should.have.status(200);
             res.body.should.have.property('fullname');
             res.body.should.have.property('username');
             res.body.should.have.property('email');
             res.body.should.have.property('password');

             done();
            })
         
        })

    })



