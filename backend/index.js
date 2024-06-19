import express from 'express';
import cors from 'cors';
import axios from 'axios';
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    return res.status(200).send({msg: 'HelloWorld'});
})

app.get('/categories/:category/products', async (req, res)=>{
    try{
        const { category } = req.params;
        const {n, minPrice, maxPrice} = req.query;
        axios.get(`http://20.244.56.144/test/companies/AMZ/categories/${category}/products?top=${n}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4NzgyODI1LCJpYXQiOjE3MTg3ODI1MjUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImVkZWNiZjQ4LTBkNTUtNDkzZC1hNjcwLWVkMzc3N2Y4NmRjMCIsInN1YiI6IjIxMDMwMzEyNDA1M0BwYXJ1bHVuaXZlcnNpdHkuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6ImVkZWNiZjQ4LTBkNTUtNDkzZC1hNjcwLWVkMzc3N2Y4NmRjMCIsImNsaWVudFNlY3JldCI6IkJ4bHNsTW9PTEhtWmt5bVgiLCJvd25lck5hbWUiOiJHIEFiaGlsYXNoICIsIm93bmVyRW1haWwiOiIyMTAzMDMxMjQwNTNAcGFydWx1bml2ZXJzaXR5LmFjLmluIiwicm9sbE5vIjoiMTAxIn0.PBjUvVvHyDruCLo-BTmKOhrl6cRrwiTcoBC-OsNhwrM"
            }
        }).then(resp=>{res.status(200).send(resp.data)}).catch(err =>{console.log(err)});
        // setProd(res);
        // console.log(prod);
    }
    catch(err){
        console.log(err);
    }
});
app.get('/categories/:categoryname/products/:productid', async (req, res)=>{
    try{
        const n = req.query.n;
        let page = req.query.page || 1;
        const data = await axios.get("").data;
        let prod = {};
        if(page!=1){
            for(let i=0;i<n;i++){
                prod[1].push(data[i]);
            }
        }
        else{
            for(let p=0;p<page;p++){
                for(let i=0;i<n;i++){
                    prod[p].push(data[i]);
                }
            }
        }
        return res.status(200).send(prod);
    }
    catch(err){
        console.log(err);
    }
});
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})