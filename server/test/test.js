import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../../index';
 chai.should();
 chai.use(chaiHttp);

 describe('users', () => {
   
    describe('update a blog', () => {
       
        it('should update a blog',(done) => {
            chai.request(index)
            .put('/api/blogs/:id')
            .end((err, res) => {
             res.should.have.status(200);
             done();
            })
         
        })

    })


 })