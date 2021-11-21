const Joi =require('joi')
const express =require('express');
const e = require('express');
const app= express();



app.use(express.json());


const courses =[
    {id:1,name:`course 1`},
    {id:2,name:`course 2`},
    {id:3,name:`course 3`}
]

app.get("/",(req,res)=>{

    res.send('Hello world')
});


app.get("/api/courses",(req,res)=>{

    res.send(courses);
});


app.get(`/api/courses/:id`,(req,res)=>{

    const course=courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("the id not found");
    else res.send(course)
    
})

app.post(`/api/courses`,(req,res)=>{


    const schema=Joi.object({
        name:Joi.string().min(3).required()
    })

    const result=schema.validate(req.body);
   

    if(result.error){
        res.status(400).send(result.error.details[0].message)
    }
    const course ={
        id: courses.length+1,
        name:req.body.name
    };

    courses.push(course);
    res.send(course);

});

app.put(`/api/courses/:id`,(req,res)=>{



    const { error }= validateCourse(req.body);
    let error_message = "";
    
    
    

    if(error){
        
        error.details.forEach(element => {
            console.log(element);
            error_message= error_message+"\n"+(element.message);
        });
        res.status(400).send(error_message);
    }

    const course=courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("the id not found");
    else res.send(course);

    course.name=req.body.name;


    res.send(course);

});


function validateCourse(course){
    const schema=Joi.object({
        id:Joi.number().required(),
        name:Joi.string().min(3).required()
    });

    const results=  schema.validate(course,{abortEarly:false});
    console.log(results)
    return results;

}

app.get(`/api/dob/:month/:year`,(req,res)=>{
    res.send(req.query)
})



app.delete(`/api/courses/:id`,(req,res)=>{



    const { error }= validateCourse(req.body);
    let error_message = "";
    
    
    

    if(error){
        
        error.details.forEach(element => {
            console.log(element);
            error_message= error_message+"\n"+(element.message);
        });
        res.status(400).send(error_message);
    }

    const course=courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("the id not found");
  
    const index=courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);



});


//

const port =process.env.PORT || 3000;
app.listen(port,()=>{
   
    console.log(`listening on port ${port}`)
});