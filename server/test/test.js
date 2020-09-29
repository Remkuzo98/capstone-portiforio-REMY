import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../../index';
 chai.should();
 chai.use(chaiHttp);

 describe('users', () => {
   
    describe('delete a user', () => {
       
        it('should delete a user',(done) => {
            chai.request(index)
            .get('/api/users/:id')
            .end((err, res) => {
             res.should.have.status(200);
             res.body.should.be.a('object')
             done();
            })
         
        })

    })


 })