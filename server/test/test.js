import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../../index';
 chai.should();
 chai.use(chaiHttp);

 describe('users', () => {
   
    describe('update a user', () => {
       
        it('should update a user',(done) => {
            chai.request(index)
            .put('/api/users/:id')
            .end((err, res) => {
             res.should.have.status(200);
             done();
            })
         
        })

    })


 })