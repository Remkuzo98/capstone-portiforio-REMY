import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../../index';

 chai.should();
 chai.use(chaiHttp);

 describe('users', () => {

   // get all users
    describe('get all users', () => {
       
        it('should get all users',(done) => {
            chai.request(index)
            .get('/api/users')
            .end((err, res) => {
             res.should.have.status(200);
             

             done();
            })
         
        })

    })



 })

