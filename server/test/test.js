import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../../index';
 chai.should();
 chai.use(chaiHttp);

 describe('users', () => {
   

    describe('get a comment', () => {
       
        it('should save a comment from users on a blog',(done) => {
            chai.request(index)
            .post('/api/comments')


    
            .end((err, res) => {
             res.should.have.status(200);
             done();
            })
         
        })

    })


 })