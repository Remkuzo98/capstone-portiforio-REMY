import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../../index';
 chai.should();
 chai.use(chaiHttp);

 describe('users', () => {
   

    describe('save a message', () => {
       
        it('should save a message',(done) => {
            chai.request(index)
            .post('/api/contacts')

    
            .end((err, res) => {
             res.should.have.status(200);
             done();
            })
         
        })

    })


 })