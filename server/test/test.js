import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../../index';
 chai.should();
 chai.use(chaiHttp);

 describe('users', () => {
   
    describe('get comment', () => {
       
        it('should get comment',(done) => {
            chai.request(index)
            .get('/api/comment/:id')
            .end((err, res) => {
             res.should.have.status(200);
             done();
            })
         
        })

    })


 })