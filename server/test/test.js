import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../../index';
 chai.should();
 chai.use(chaiHttp);

 describe('users', () => {
   

    describe('get a blog', () => {
       
        it('should get a single blog',(done) => {
            chai.request(index)
            .get('/api/blogs/:id')

            .end((err, res) => {
             res.should.have.status(200);
             done();
            })
         
        })

    })


 })