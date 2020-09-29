import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../../index';
 chai.should();
 chai.use(chaiHttp);

 describe('users', () => {
   
    describe('delete a blog', () => {
       
        it('should delete a blog',(done) => {
            chai.request(index)
            .delete('/api/bglogs/:id')
            .end((err, res) => {
             res.should.have.status(200);
             done();
            })
         
        })

    })


 })