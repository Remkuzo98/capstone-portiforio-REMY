import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../../index';
 chai.should();
 chai.use(chaiHttp);

 describe('users', () => {
   

    describe('save a user', () => {
       
        it('should save a user',(done) => {
            chai.request(index)
            .post('/api/users')
            .end((err, res) => {
             res.should.have.status(200);
             res.should.have.lengthOf(3);

             done();
            })
         
        })

    })



 })

